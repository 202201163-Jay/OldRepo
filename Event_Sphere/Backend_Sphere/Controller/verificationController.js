const crypto = require('crypto');
const nodemailer = require('nodemailer');
const Verification = require('../Models/verification');

// Generate OTP
const generateOtp = async (req, res) => {
  const { email } = req.body;

  // Generate a 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Set OTP expiration time to 5 minutes from now
  const otpExpires = new Date(Date.now() + 5 * 60000);

  // Save the OTP and expiration in the database
  let verification = await Verification.findOne({ email });
  if (verification) {
    verification.otp = otp;
    verification.otpExpires = otpExpires;
    verification.verified = false;
  } else {
    verification = new Verification({
      email,
      otp,
      otpExpires,
    });
  }

  try {
    await verification.save();
  } catch (error) {
    return res.status(500).json({ message: 'Error saving OTP to database' });
  }

  // Send OTP to user's email using Nodemailer
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // set to true if using port 465
    auth: {
      user: process.env.GMAIL_USER, // use environment variable
      pass: process.env.GMAIL_PASS,  // use environment variable (App Password)
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: 'Your OTP for Verification',
    text: `Your OTP for verification is ${otp}. This OTP will expire in 5 minutes.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'OTP sent to email' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send OTP' });
  }
};

// Verify OTP
const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  // Find the OTP for the given email
  const verification = await Verification.findOne({ email });

  if (!verification) {
    return res.status(400).json({ message: 'No OTP request found for this email' });
  }

  // Check if the OTP has expired
  if (verification.otpExpires < new Date()) {
    return res.status(400).json({ message: 'OTP has expired' });
  }

  // Check if the OTP is correct
  if (verification.otp !== otp) {
    return res.status(400).json({ message: 'Invalid OTP' });
  }

  // Mark as verified
  verification.verified = true;
  await verification.save();

  return res.status(200).json({ message: 'OTP verified successfully' });
};

module.exports = {
  generateOtp,
  verifyOtp,
};
