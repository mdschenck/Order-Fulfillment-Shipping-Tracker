let transporter = nodemailer.createTransport(options[, defaults]);


nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "username",
      pass: "password",
    },
});
  

  export default transporter;
