const https = require('https');

const token = process.env.CLOUDFLARE_API_TOKEN || '';
const accountId = process.env.CLOUDFLARE_ACCOUNT_ID || '';
const subdomain = process.env.CLOUDFLARE_SUBDOMAIN || 'trustline-interiors-20260812-999';

if (!token || !accountId) {
  console.error('Error: Missing CLOUDFLARE_API_TOKEN or CLOUDFLARE_ACCOUNT_ID environment variables');
  process.exit(1);
}

const data = JSON.stringify({ subdomain });

const options = {
  hostname: 'api.cloudflare.com',
  path: `/client/v4/accounts/${accountId}/workers/subdomain`,
  method: 'PATCH',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data),
  },
};

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(body);
      console.log(JSON.stringify(json, null, 2));
    } catch (err) {
      console.log('Non-JSON response:', body);
    }
  });
});

req.on('error', (e) => console.error(e));
req.write(data);
req.end();
