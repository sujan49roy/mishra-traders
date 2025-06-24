const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// POST /api/quote – send quote request email
router.post('/', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      serviceType,
      dimensions,
      message,
    } = req.body;

    if (!name || !phone || !serviceType) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    // Create transporter using env credentials
      const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'mishratraders006@gmail.com',
      subject: 'New Quote Request from Website',
      html: `<p>You have a new quote request.</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email || 'N/A'}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Service:</strong> ${serviceType}</p>
            <p><strong>Dimensions/Qty:</strong> ${dimensions || 'N/A'}</p>
            <p><strong>Message:</strong><br/>${message || 'N/A'}</p>`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

module.exports = router;
