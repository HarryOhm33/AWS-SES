# 📧 Email Service using Amazon SES (Node.js)

Simple Node.js setup to send emails using **Amazon SES API (NOT SMTP)**.

✅ Works on:

- EC2
- Render
- Railway
- Vercel
- Any cloud

❌ No SMTP
❌ No blocked ports
❌ No Gmail limits

Uses **HTTPS (443)** → always reliable.

---

# 🚀 Quick Start

## 1️⃣ Clone project

```bash
git clone <your-repo-url>
cd server
```

---

## 2️⃣ Install dependencies

```bash
npm install
```

Installs:

- dotenv
- @aws-sdk/client-ses

---

# 🔐 Amazon SES Setup (AWS)

Follow these steps **once only**.

---

## Step A — Open SES

AWS Console → **SES (Simple Email Service)**

⚠️ Choose **same region as your server**
Example:

```
ap-south-1 (Mumbai)
```

---

## Step B — Verify email or domain

### Option 1 (quick test)

Verify single email:

```
SES → Verified identities → Create identity → Email
```

### Option 2 (recommended)

Verify domain:

```
pratibha-kosh.com
```

Add TXT + DKIM records in DNS.

---

## Step C — Exit Sandbox (IMPORTANT)

```
SES → Account dashboard → Request production access
```

Choose:

- Transactional
- OTP / Auth emails

Without this:

- Only verified emails allowed
- Very low limits

---

# 🔑 IAM Setup (API access)

We use **SES API**, not SMTP.

---

## Step D — Create IAM user

Go to:

```
IAM → Users → Create user
```

Attach policy:

```
AmazonSESFullAccess
```

Create:

```
Access key + Secret key
```

Save them.

---

# ⚙️ Environment Setup

---

## Step 1 — Copy env file

```bash
cp .env.example .env
```

---

## Step 2 — Fill values in `.env`

Example:

```env
AWS_ACCESS_KEY_ID=xxxxxxxx
AWS_SECRET_ACCESS_KEY=xxxxxxxx
AWS_REGION=ap-south-1

SES_FROM_EMAIL=noreply@pratibha-kosh.com
SES_FROM_NAME=Pratibha Kosh Team
```

---

# ▶️ Run the app

```bash
node app.js
```

Expected output:

```
✅ Email sent successfully
```

Check your inbox 📬

---

# 📂 Project Structure

```
server/
 ├─ app.js
 ├─ sendMail.js
 ├─ .env.example
 ├─ .env
 ├─ package.json
 └─ README.md
```

---

# 📧 sendMail.js

Uses Amazon SES API:

```
Node → HTTPS → Amazon SES → Inbox
```

No SMTP, no ports.

---

# 🧪 Testing

Edit `app.js`:

```js
await sendMail("your@email.com", ...);
```

Then run:

```bash
node app.js
```

---

# 🔥 Why SES API (not SMTP)?

| Feature           | SMTP   | SES API |
| ----------------- | ------ | ------- |
| Blocked on Render | ❌ Yes | ✅ No   |
| Speed             | Medium | Fast    |
| Reliability       | Medium | High    |
| Production ready  | ❌     | ✅      |

👉 Always prefer SES API.

---

# 🚀 Deploy Tips

## For Render / Cloud

Add env vars in dashboard:

```
Environment → Variables
```

Do NOT commit `.env`.

---

# ❓ Common Errors

### "User not verified"

→ Verify email/domain in SES

### "Access denied"

→ Check IAM policy

### "Timeout"

→ Using SMTP (switch to API)

---

# ✅ Done

You now have:
✔ SES configured
✔ Node connected
✔ Email working
✔ Cloud safe

---

Made with ❤️ using Amazon SES

```

---

If you want, next I can generate for you:
✅ `.env.example` file
✅ production-ready package.json
✅ OTP email template
✅ bulk email script
✅ queue + retry logic

Just tell me 👍
```
