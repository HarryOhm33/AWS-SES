// sendMail.js

const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

const ses = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

async function sendMail(to, subject, text, html) {
  const params = {
    Source: `${process.env.SES_FROM_NAME} <${process.env.SES_FROM_EMAIL}>`,

    Destination: {
      ToAddresses: [to],
    },

    Message: {
      Subject: { Data: subject },
      Body: {
        Text: { Data: text || "" },
        Html: { Data: html || "" },
      },
    },
  };

  await ses.send(new SendEmailCommand(params));
}

module.exports = sendMail;
