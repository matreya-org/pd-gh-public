'use strict';
// Test app for checking PocketDeploy deploys from GitHub. No dependencies.
const http = require('node:http');
const REPO = 'pd-gh-public';
const VERSION = 'v2';
const host = process.env.HOST || '127.0.0.1';
const port = Number(process.env.PORT) || 8080;
http.createServer((req, res) => {
  if (req.url === '/health') { res.writeHead(200, { 'content-type': 'text/plain' }); return res.end('ok\n'); }
  res.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' });
  res.end('PD-GH-TEST ' + REPO + ' ' + VERSION + '\n');
}).listen(port, host, () => console.log('listening on ' + host + ':' + port));
