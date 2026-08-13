# Deployment Guide - Trust Line Interiors

## Current Status
- ✅ Project is built and ready to deploy
- ⚠️ Not yet live on the internet
- 🔒 Credentials are now secured (not hardcoded)

## Prerequisites
1. **Cloudflare Account** - Get one at https://dash.cloudflare.com
2. **API Token** - Create in Cloudflare Dashboard
3. **Account ID** - Found in Cloudflare Dashboard

## Deployment Steps

### Step 1: Create `.env` File
Create a `.env` file in the root directory with your Cloudflare credentials:

```bash
CLOUDFLARE_API_TOKEN=your_api_token_here
CLOUDFLARE_ACCOUNT_ID=your_account_id_here
CLOUDFLARE_SUBDOMAIN=trustline-interiors-20260812-999
```

**Where to get these:**
- **API Token**: https://dash.cloudflare.com/profile/api-tokens
  - Click "Create Token"
  - Use "Cloudflare Workers Subdomain" template
  - Grant: Account Resources > Workers Scripts > Edit
- **Account ID**: https://dash.cloudflare.com/
  - Visible in the right sidebar under "Account ID"

### Step 2: Deploy to Cloudflare Workers

**Option A: Using Wrangler (Recommended)**
```bash
npx wrangler deploy --cwd ./.output/server
```

**Option B: Using npm script** (after setting up environment variables)
```bash
node scripts/register-subdomain.js
```

### Step 3: Verify Deployment
Once deployed, your project should be accessible at:
```
https://trustline-interiors-20260812-999.workers.dev
```

## Project Structure
- **Build Output**: `.output/` - Contains compiled Cloudflare Worker
- **Server Config**: `.output/server/wrangler.json` - Cloudflare configuration
- **Public Assets**: `.output/public/` - Static files (images, CSS, etc.)

## Troubleshooting

### Domain not resolving
- Check that deployment completed successfully
- Verify subdomain name in `.env` matches `wrangler.json`
- Try clearing browser cache

### 502 Bad Gateway
- Check server logs in Cloudflare Dashboard
- Verify environment variables are set correctly
- Ensure all dependencies were installed during build

### API Token Issues
- Ensure token has Worker Scripts > Edit permissions
- Verify token hasn't expired
- Check Account ID matches your Cloudflare account

## Environment Variables (Optional)
The project also supports these optional environment variables:
- `CLOUDFLARE_SUBDOMAIN` - Custom subdomain (default: `trustline-interiors-20260812-999`)

## Security Notes
- **Never commit `.env` file** - It's already in `.gitignore`
- **Rotate API tokens regularly** - For production use
- **Keep credentials private** - Don't share in chats, emails, or repos

## Additional Resources
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Wrangler CLI Guide](https://developers.cloudflare.com/workers/wrangler/install-and-update/)
- [TanStack Start Docs](https://tanstack.com/start/latest)
