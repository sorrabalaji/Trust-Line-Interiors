#!/usr/bin/env node
/**
 * Deploy script for Trust Line Interiors
 * Deploys the built project to Cloudflare Workers
 */

import { execFile } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load environment variables from .env file
function loadEnv() {
  const envPath = path.join(__dirname, '.env');
  if (!fs.existsSync(envPath)) {
    console.error('Error: .env file not found');
    console.error('Please create a .env file with your Cloudflare credentials');
    console.error('See .env.example for the required format');
    process.exit(1);
  }

  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...valueParts] = trimmed.split('=');
      const value = valueParts.join('=');
      if (key && value) {
        process.env[key.trim()] = value.trim();
      }
    }
  });
}

// Deploy using wrangler
function deploy() {
  loadEnv();

  console.log('🚀 Deploying to Cloudflare Workers...\n');
  console.log(`Subdomain: ${process.env.CLOUDFLARE_SUBDOMAIN}`);
  console.log(`Account ID: ${process.env.CLOUDFLARE_ACCOUNT_ID}\n`);

  const serverDir = path.join(__dirname, '.output', 'server');
  const wranglerJsonPath = path.join(serverDir, 'wrangler.json');
  if (fs.existsSync(wranglerJsonPath)) {
    try {
      const config = JSON.parse(fs.readFileSync(wranglerJsonPath, 'utf-8'));
      config.name = 'tanstack-start-ts';
      fs.writeFileSync(wranglerJsonPath, JSON.stringify(config, null, 2));
      console.log('Set Cloudflare Worker name to: tanstack-start-ts');
    } catch (err) {
      console.warn('Could not update wrangler.json worker name:', err);
    }
  }
  
  // Use node to run wrangler on Windows
  execFile('npx', ['wrangler', 'deploy', '--config', 'wrangler.json'], {
    cwd: serverDir,
    stdio: 'inherit',
    env: process.env,
    shell: true
  }, (error, stdout, stderr) => {
    if (error) {
      console.error('\n❌ Deployment failed');
      console.error('Error:', error.message);
      if (stderr) console.error(stderr);
      process.exit(1);
    } else {
      console.log('\n✅ Deployment successful!');
      console.log(`\n🌐 Your site is live at:`);
      console.log(`   https://${process.env.CLOUDFLARE_SUBDOMAIN}.workers.dev\n`);
    }
  });
}

deploy();
