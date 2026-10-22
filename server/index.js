import 'dotenv/config'
import express from 'express'
import { rateLimit } from 'express-rate-limit'
import nodemailer from 'nodemailer'

const app = express()
const port = Number(process.env.PORT) || 3001

app.use(express.json({ limit: '10kb' }))

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: { error: 'Too many messages sent. Please try again later.' },
})

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' })
})

app.post('/api/contact', contactLimiter, async (request, response) => {
  const { name, email, subject, message } = request.body ?? {}
  const fields = { name, email, subject, message }

  if (Object.values(fields).some((value) => typeof value !== 'string')) {
    return response.status(400).json({ error: 'All fields are required.' })
  }

  const trimmed = Object.fromEntries(
    Object.entries(fields).map(([key, value]) => [key, value.trim()]),
  )

  if (
    !trimmed.name ||
    trimmed.name.length > 100 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed.email) ||
    trimmed.email.length > 254 ||
    !trimmed.subject ||
    trimmed.subject.length > 150 ||
    trimmed.message.length < 15 ||
    trimmed.message.length > 5000
  ) {
    return response.status(400).json({ error: 'Please check the contact form fields and try again.' })
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL, MAIL_FROM } =
    process.env
  const missingSettings = [
    ['SMTP_HOST', SMTP_HOST],
    ['SMTP_USER', SMTP_USER],
    ['SMTP_PASS', SMTP_PASS],
    ['MAIL_FROM', MAIL_FROM],
    ['CONTACT_EMAIL', CONTACT_EMAIL],
  ]
    .filter(([, value]) => !value?.trim())
    .map(([key]) => key)

  if (missingSettings.length > 0) {
    return response.status(503).json({
      error: `Email sending is not configured. Add ${missingSettings.join(', ')} to the .env file and restart the backend.`,
    })
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  try {
    await transporter.sendMail({
      from: MAIL_FROM,
      to: CONTACT_EMAIL,
      replyTo: trimmed.email,
      subject: `Portfolio contact: ${trimmed.subject}`,
      text: `Name: ${trimmed.name}\nEmail: ${trimmed.email}\n\n${trimmed.message}`,
    })
    return response.json({ message: 'Message sent successfully.' })
  } catch (error) {
    const errorCode = error instanceof Error ? error.code : undefined
    const errorMessage = error instanceof Error ? error.message : ''
    console.error('Failed to send portfolio contact email:', {
      code: errorCode,
      command: error instanceof Error ? error.command : undefined,
      responseCode: error instanceof Error ? error.responseCode : undefined,
    })

    if (errorCode === 'ESOCKET') {
      const certificateError =
        /self-signed certificate|unable to verify|certificate/i.test(errorMessage)

      return response.status(502).json({
        error: certificateError
          ? 'The email server TLS certificate is not trusted on this network. Try a trusted network or configure Node.js to trust your organization’s CA certificate. Do not disable TLS verification.'
          : 'The secure connection to Gmail SMTP failed. Check your internet connection and network certificate settings, then try again. Do not disable TLS verification.',
      })
    }

    if (errorCode === 'EAUTH') {
      return response.status(502).json({
        error:
          'Gmail rejected the SMTP login. Use a Google App Password (not your regular Gmail password), then restart the backend.',
      })
    }

    if (errorCode === 'ETIMEDOUT' || errorCode === 'ECONNECTION') {
      return response.status(502).json({
        error:
          'Could not connect to Gmail SMTP. Check your internet connection and SMTP settings, then try again.',
      })
    }

    return response.status(502).json({
      error: 'Your message could not be delivered. Please try again later.',
    })
  }
})

app.listen(port, () => {
  console.log(`Portfolio API listening at http://localhost:${port}`)
})
