import { Resend } from 'resend';

export default async function handler(req, res) {
  // Allow only POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { name, organization, email, message } = req.body;

    // Validate inputs
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and Email are required.' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not defined in backend environment.');
      return res.status(500).json({ error: 'Mail server configuration error. Please try again later.' });
    }

    const resend = new Resend(apiKey);

    // Send the email using the Resend SDK
    // Since dopa-x.org is verified, we can send from info@dopa-x.org or similar
    const { data, error } = await resend.emails.send({
      from: 'Dopa-X Contact <info@dopa-x.org>',
      to: ['hello@dopa-x.org'],
      replyTo: email,
      subject: `New Contact: ${name} (${organization || 'No Organization'})`,
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
              <h2 style="margin: 0; color: #2828c6;">New Website Inquiry</h2>
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
      console.error('Resend error:', error);
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ message: 'Email sent successfully', data });
  } catch (err) {
    console.error('Serverless function error:', err);
    return res.status(500).json({ error: err.message || 'An unexpected error occurred.' });
  }
}
