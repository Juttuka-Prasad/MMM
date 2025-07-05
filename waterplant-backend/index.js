// ✅ waterplant-backend/index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const twilio = require("twilio");

const app = express();
app.use(cors());
app.use(express.json());

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

app.post("/send-order", (req, res) => {
  const { message } = req.body;
  console.log("Sending WhatsApp Message:", message);

  client.messages
    .create({
      body: message,
      from: process.env.TWILIO_WHATSAPP_NUMBER,
      to: process.env.ADMIN_WHATSAPP_NUMBER,
    })
    .then((msg) => {
      console.log("Message SID:", msg.sid);
      res.json({ success: true });
    })
    .catch((err) => {
      console.error("Twilio Error:", err);
      res.status(500).json({ success: false, error: err.message });
    });
});

app.listen(5000, () => {
  console.log("🚀 WhatsApp server running at http://localhost:5000");
});
