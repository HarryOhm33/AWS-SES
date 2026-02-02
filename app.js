// app.js

require("dotenv").config();
const sendMail = require("./sendMail");

(async () => {
  try {
    await sendMail(
      "hari333333om@gmail.com", // change this
      "SES Test Email 🚀",
      "Plain text working",
      "<h2>SES HTML working ✅</h2>",
    );

    console.log("✅ Email sent successfully");
  } catch (err) {
    console.error("❌ Email failed:", err);
  }

  process.exit(); // exit after sending
})();
