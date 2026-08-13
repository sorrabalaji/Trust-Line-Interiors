# 🚀 Trust Line Interiors - Complete Deployment Guide

Your project is **ready to deploy**! Follow this step-by-step guide to get it live.

---

## Step 1: Create a Free Cloudflare Account (if you don't have one)

### 1.1 Go to Cloudflare Sign-Up
- Visit: https://dash.cloudflare.com/sign-up
- Fill in your **email** and **password**
- Click **"Sign up"**

### 1.2 Verify Your Email
- Check your email inbox
- Click the verification link from Cloudflare
- Your account is now active! ✅

---

## Step 2: Get Your Cloudflare Credentials

### 2.1 Get Your Account ID

1. Go to: https://dash.cloudflare.com/
2. Look at the **right sidebar** under your profile
3. You'll see **"Account ID"** displayed there
4. **Copy it** (it looks like: `68f0f59ffb58e08302b727b926bfea15`)

### 2.2 Get Your API Token

1. Go to: https://dash.cloudflare.com/profile/api-tokens
2. Look for the section **"API Tokens"** 
3. Click the **"Create Token"** button
4. Find and select **"Cloudflare Workers Subdomain"** template
5. Click **"Create Token"**
6. You'll see your new token (it looks like: `cfoat_xxxxx...`)
7. **Copy it immediately** (you can only see it once!)

---

## Step 3: Update Your Project's `.env` File

### 3.1 Open `.env` File

The file is in your project root:
```
c:\Users\Dell\Downloads\trust-line-interiors-source\.env
```

### 3.2 Replace the Credentials

Replace the file content with:

```env
CLOUDFLARE_API_TOKEN=<YOUR_API_TOKEN_HERE>
CLOUDFLARE_ACCOUNT_ID=<YOUR_ACCOUNT_ID_HERE>
CLOUDFLARE_SUBDOMAIN=trustline-interiors-20260812-999
```

**Example** (with real values):
```env
CLOUDFLARE_API_TOKEN=cfoat_o3qqDouhTt5M3aSAo-sl_a28WrA0UWydv4O5Vvy7H80.6nuPC6gHDiXprL6TYSfDq3wiEBFpi3L-Qz74-RWl4WA
CLOUDFLARE_ACCOUNT_ID=68f0f59ffb58e08302b727b926bfea15
CLOUDFLARE_SUBDOMAIN=trustline-interiors-20260812-999
```

### 3.3 Save the File
- **Important:** Don't share this file - it contains your secret API token!
- It's already in `.gitignore` so it won't be committed to Git

---

## Step 4: Deploy Your Project

### 4.1 Open Terminal

Go to your project directory:
```bash
cd c:\Users\Dell\Downloads\trust-line-interiors-source
```

### 4.2 Run Deployment

```bash
node deploy.mjs
```

You should see:
```
🚀 Deploying to Cloudflare Workers...

Subdomain: trustline-interiors-20260812-999
Account ID: 68f0f59ffb58e08302b727b926bfea15

✅ Deployment successful!

🌐 Your site is live at:
   https://trustline-interiors-20260812-999.workers.dev
```

---

## Step 5: Verify Your Site Is Live

### 5.1 Visit Your Site
Go to: `https://trustline-interiors-20260812-999.workers.dev`

You should see your Trust Line Interiors website! 🎉

### 5.2 What You'll See
- Home page with your content
- Navigation menu (About, Services, Projects, etc.)
- Full functionality - it's a live, working website!

---

## Troubleshooting

### Problem: "Invalid access token"
**Solution:** 
- Double-check your API token is copied correctly
- Make sure you used the "Cloudflare Workers Subdomain" template
- Regenerate a new token if needed

### Problem: "Account ID not found"
**Solution:**
- Verify the Account ID is correct from your Cloudflare Dashboard
- Copy it again carefully (it's a 32-character string)

### Problem: Deployment still failing
**Solution:**
- Check that `.env` file exists and has all three values
- Make sure there are no extra spaces or line breaks
- Try running `node deploy.mjs` again

### Problem: Site shows error after deployment
**Solution:**
- Wait 30 seconds for DNS to propagate
- Refresh the page (Ctrl+Shift+R for hard refresh)
- Check Cloudflare Dashboard under "Workers" for any error messages

---

## ✨ Success Checklist

- [ ] Created Cloudflare account
- [ ] Got Account ID from dashboard
- [ ] Created API token with Workers Subdomain permissions
- [ ] Updated `.env` file with credentials
- [ ] Ran `node deploy.mjs`
- [ ] Visited your site and it's working!

---

## 🔒 Security Reminders

**DO:**
- ✅ Keep your `.env` file safe and private
- ✅ Never share your API token
- ✅ Use environment variables for secrets (like we do)
- ✅ Rotate API tokens regularly for production

**DON'T:**
- ❌ Commit `.env` to Git (it's in `.gitignore` already)
- ❌ Share token in emails, chats, or docs
- ❌ Use the same token for multiple projects
- ❌ Leave old tokens active

---

## Next Steps

### Custom Domain (Optional)
Want your own domain instead of `trustline-interiors-20260812-999.workers.dev`?
1. Register a domain (e.g., trustlineinteriors.com)
2. Point it to Cloudflare
3. Configure it in your Cloudflare dashboard
4. Update `wrangler.json` with your custom route

### Environment Variables (Optional)
Add more environment variables for:
- Database connections
- API keys
- Custom configurations
- Analytics tokens

Just add them to `.env` and they'll be available to your app!

---

## Need Help?

### Cloudflare Docs
- API Tokens: https://developers.cloudflare.com/fundamentals/api/get-started/create-token/
- Workers: https://developers.cloudflare.com/workers/

### Project Docs
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for more technical details
- See [README.md](./README.md) for project info

---

**You're all set! Let's get this live! 🚀**
