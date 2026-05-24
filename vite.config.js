import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { Resend } from 'resend'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables from process.cwd() (where .env.local lives)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'api-server',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url === '/api/send-email' && req.method === 'POST') {
              let body = '';
              req.on('data', chunk => {
                body += chunk;
              });
              req.on('end', async () => {
                try {
                  const { name, organization, email, message } = JSON.parse(body);

                  if (!name || !email) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Name and Email are required.' }));
                    return;
                  }

                  const apiKey = env.RESEND_API_KEY || process.env.RESEND_API_KEY;
                  if (!apiKey) {
                    console.error('RESEND_API_KEY is not defined in local environment.');
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'RESEND_API_KEY is not defined in local .env' }));
                    return;
                  }

                  const resend = new Resend(apiKey);
                  
                  const { data, error } = await resend.emails.send({
                    from: 'Dopa-X Contact <info@dopa-x.org>',
                    to: ['hello@dopa-x.org'],
                    replyTo: email,
                    subject: `[Dev] New Contact: ${name} (${organization || 'No Organization'})`,
                    html: `
                      <!DOCTYPE html>
                      <html>
                      <head>
                        <style>
                          body { font-family: sans-serif; line-height: 1.6; color: #1e1e38; }
                          .container { padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; max-width: 600px; }
                          .header { border-bottom: 2px solid #2828c6; padding-bottom: 10px; margin-bottom: 20px; }
                          .field { margin-bottom: 15px; }
                          .label { font-weight: bold; color: #2828c6; text-transform: uppercase; font-size: 12px; }
                          .value { font-size: 16px; margin-top: 4px; }
                          .message-box { background-color: #f7fafc; padding: 15px; border-radius: 6px; border-left: 4px solid #2828c6; white-space: pre-wrap; }
                        </style>
                      </head>
                      <body>
                        <div class="container">
                          <div class="header">
                            <h2 style="margin: 0; color: #2828c6;">New Website Inquiry (Local Development)</h2>
                          </div>
                          
                          <div class="field">
                            <div class="label">Name</div>
                            <div class="value">${name}</div>
                          </div>
                          
                          <div class="field">
                            <div class="label">Organization</div>
                            <div class="value">${organization || 'N/A'}</div>
                          </div>
                          
                          <div class="field">
                            <div class="label">Email</div>
                            <div class="value"><a href="mailto:${email}">${email}</a></div>
                          </div>
                          
                          <div class="field">
                            <div class="label">Message</div>
                            <div class="value message-box">${message || 'No message provided.'}</div>
                          </div>
                        </div>
                      </body>
                      </html>
                    `,
                  });

                  if (error) {
                    console.error('Local Resend Error:', error);
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: error.message }));
                    return;
                  }

                  res.writeHead(200, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ message: 'Email sent successfully (dev)', data }));
                } catch (err) {
                  console.error('Local API handler error:', err);
                  res.writeHead(500, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ error: err.message || 'An unexpected error occurred.' }));
                }
              });
            } else {
              next();
            }
          });
        }
      }
    ]
  };
});
