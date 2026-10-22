# Sosna Adugna Portfolio

## Run locally

Install the dependencies once:

```powershell
npm install
```

The contact form sends email through the backend. Copy the example file to `.env` and edit `.env` (do not put real credentials in `.env.example`):

```powershell
Copy-Item .env.example .env
```

For Gmail, enable 2-Step Verification and create a new App Password. Put that App Password in `SMTP_PASS` (not your regular Gmail password). `SMTP_HOST` should be `smtp.gmail.com`; set `SMTP_USER` and `MAIL_FROM` to the sending Gmail address, and set `CONTACT_EMAIL` to the address that should receive messages. Keep `.env` private; it is excluded from Git.

Start the backend in one terminal:

```powershell
npm run server
```

Start the frontend in a second terminal:

```powershell
npm run dev
```

Open the local URL printed by Vite, usually <http://localhost:5173>. The frontend proxies `/api` requests to the backend at <http://localhost:3001>. Check that the backend is running at <http://localhost:3001/api/health>.

To create a production frontend build, run `npm run build`. The development proxy is not a production API host; deploy the backend separately and configure the frontend/API routing for your hosting provider.

### Contact form troubleshooting

- If the server reports an untrusted SMTP TLS certificate, try a trusted network or ask your network administrator for the trusted CA certificate and configure Node.js to use it. Never disable TLS certificate validation.
- If Gmail rejects authentication, use a Google App Password with 2-Step Verification enabled, not the regular account password. Restart the backend after changing `.env`.
