const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    // smtp transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'mishratraders006@gmail.com',
      subject: 'New Contact Message from Website',
      html: `<p>You have a new message from the contact form.</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
             <p><strong>Message:</strong><br/>${message}</p>`
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true });
  } catch (err) {
    console.error('Contact email error:', err);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});

module.exports = router;
