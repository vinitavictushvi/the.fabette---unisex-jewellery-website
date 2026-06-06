// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// ================= NODEMAILER CONFIGURATION =================
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ================= ENDPOINT 1: SEND ORDER CONFIRMATION EMAIL =================
app.post("/api/send-order-email", (req, res) => {
  const { customerDetails, cartItems, totalAmount } = req.body;

  if (!customerDetails || !cartItems) {
    return res.status(400).json({ success: false, message: "Missing required order fields" });
  }

  const cartRows = cartItems
    .map(
      (item) => `
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.name} (Qty: ${item.quantity})</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">₹${(item.price * item.quantity).toLocaleString()}</td>
    </tr>
  `
    )
    .join("");

  const emailHTML = `
    <div style="font-family: serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 40px; color: #000;">
      <div style="text-align: center; border-bottom: 1px solid #eee; padding-bottom: 20px;">
        <p style="letter-spacing: 4px; color: #777; font-size: 11px; margin: 0; text-transform: uppercase;">Fabette Luxury Maison</p>
        <h2 style="font-weight: 300; letter-spacing: 2px; margin: 10px 0 0 0;">ORDER CONFIRMATION</h2>
      </div>
      
      <p style="margin-top: 30px; font-size: 15px;">Dear ${customerDetails.fullName},</p>
      <p style="color: #444; line-height: 1.6;">Thank you for your purchase from Fabette. Your order has been securely placed and is being prepared with luxury packaging.</p>
      
      <h4 style="font-weight: 400; letter-spacing: 1px; margin-top: 30px; border-bottom: 1px solid #000; padding-bottom: 5px;">ORDER SUMMARY</h4>
      <table style="width: 100%; border-collapse: collapse;">
        ${cartRows}
        <tr>
          <td style="padding: 15px 10px; font-weight: bold;">TOTAL PAID</td>
          <td style="padding: 15px 10px; font-weight: bold; text-align: right;">₹${totalAmount.toLocaleString()}</td>
        </tr>
      </table>

      <h4 style="font-weight: 400; letter-spacing: 1px; margin-top: 30px; border-bottom: 1px solid #000; padding-bottom: 5px;">SHIPPING ADDRESS</h4>
      <p style="color: #555; line-height: 1.5; font-size: 14px;">
        ${customerDetails.address},<br>
        ${customerDetails.city}, ${customerDetails.state} - ${customerDetails.pincode}<br>
        Phone: ${customerDetails.phone}
      </p>

      <hr style="border: 0; border-top: 1px solid #eee; margin-top: 40px;">
      <p style="text-align: center; color: #999; font-size: 12px; margin-top: 20px;">
        © 2026 Fabette Luxury Maison. All rights reserved.
      </p>
    </div>
  `;

  const mailOptions = {
    from: `"Fabette Luxury" <${process.env.EMAIL_USER}>`,
    to: customerDetails.email, 
    subject: `✨ Your Fabette Order has been placed successfully!`,
    html: emailHTML,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Order Mail Error:", error);
      return res.status(500).json({ success: false, message: "Email sending failed" });
    }
    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  });
});

// ================= ENDPOINT 2: SUBSCRIBE TO NEWSLETTER =================
app.post("/api/subscribe-newsletter", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: "Email is required" });
  }

  // 1. Email Template for the Customer (User)
  const userMailOptions = {
    from: `"Fabette Luxury" <${process.env.EMAIL_USER}>`,
    to: email, 
    subject: "✨ Welcome to the World of Fabette Luxury Maison",
    html: `
      <div style="font-family: serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 40px; color: #000; text-align: center;">
        <p style="letter-spacing: 4px; color: #777; font-size: 11px; text-transform: uppercase; margin: 0;">Fabette Luxury Maison</p>
        <h2 style="font-weight: 300; letter-spacing: 2px; margin: 20px 0;">THANK YOU FOR SUBSCRIBING</h2>
        <p style="color: #444; line-height: 1.8; font-size: 14px;">
          You have successfully joined our inner circle. From now on, you will be the first to receive exclusive access to our private collections, fine craftsmanship journals, and bespoke luxury updates.
        </p>
        <div style="margin: 30px 0;">
          <span style="border: 1px solid #000; padding: 12px 30px; font-size: 12px; letter-spacing: 2px; display: inline-block;">EXPLORE MAISON</span>
        </div>
        <hr style="border: 0; border-top: 1px solid #eee; margin-top: 40px;">
        <p style="color: #999; font-size: 11px;">© 2026 Fabette. All rights reserved.</p>
      </div>
    `,
  };

  // 2. Email Template for the Owner (Maison Admin)
  // FIXED: Double JSX brackets {{ }} ko standard HTML string syntax style="" me convert kiya hai
  const ownerMailOptions = {
    from: `"Fabette System" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, 
    subject: "🚨 New Newsletter Subscriber Joined!",
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 30px; color: #333;">
        <h3 style="color: #111; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Subscriber Alert</h3>
        <p>A new customer has just subscribed to your brand newsletter on the website.</p>
        <table style="width: 100%; margin-top: 20px;">
          <tr>
            <td style="font-weight: bold; width: 120px; padding: 5px 0;">Customer Email:</td>
            <td style="color: #4285F4; font-weight: bold;">${email}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 5px 0;">Subscribed At:</td>
            <td>${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td>
          </tr>
        </table>
        <p style="margin-top: 30px; font-size: 12px; color: #777;">This is an automated system notification.</p>
      </div>
    `,
  };

  // Dono emails ko sequence me fire krna
  transporter.sendMail(userMailOptions, (err1) => {
    if (err1) {
      console.error("User Newsletter Mail Error:", err1);
      return res.status(500).json({ success: false, message: "Failed to send email to subscriber" });
    }

    transporter.sendMail(ownerMailOptions, (err2) => {
      if (err2) {
        console.error("Owner Newsletter Mail Notification Error:", err2);
      }
      return res.status(200).json({ success: true, message: "Subscribed successfully!" });
    });
  });
});

// ================= RUN SERVER PORT BINDING (File ke end me) =================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running securely on port ${PORT}`));