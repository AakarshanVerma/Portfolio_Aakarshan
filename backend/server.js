const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { name, email, subject, phone, message } = req.body;

  // Print message in terminal log
  console.log('\n=============================================');
  console.log('📬 NEW MESSAGE RECEIVED IN CONTACT FORM:');
  console.log(`👤 Name:    ${name}`);
  console.log(`✉️ Email:   ${email}`);
  console.log(`📞 Phone:   ${phone}`);
  console.log(`🏷️ Subject: ${subject}`);
  console.log(`💬 Message: ${message}`);
  console.log('=============================================\n');

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  // Fallback mode if credentials are empty or contain default placeholders
  if (
    !emailUser || 
    !emailPass || 
    emailUser === 'your-email@gmail.com' || 
    emailPass === 'your-gmail-app-password'
  ) {
    console.log('ℹ️ [CONSOLE FALLBACK] No credentials found. Message successfully logged to terminal console.');
    return res.status(200).json({ 
      success: true, 
      message: 'Dev fallback: Message logged to terminal console!' 
    });
  }

  // If credentials exist, proceed to send real email
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass
      }
    });

    const mailOptions = {
      from: email,
      to: emailUser,
      subject: `Contact Form: ${subject}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully using credentials.');
    res.status(200).json({ success: true, message: 'Email sent!' });
  } catch (error) {
    console.error('❌ Failed to send email via credentials:', error);
    res.status(500).json({ success: false, message: 'Email failed to send.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
