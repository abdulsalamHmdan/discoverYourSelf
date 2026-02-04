const { google } = require('googleapis');
require('dotenv').config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

// 2. إعداد عميل OAuth2
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

// تعيين التوكن ليعمل العميل تلقائياً بتحديث Access Token
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// 3. دالة لترميز الرسالة بصيغة Base64Url (مطلوب من Gmail API)
function makeBody(to, from, subject, message) {
  const str = [
    `To: ${to}`,
    `From: ${from}`,
    `Subject: ${subject}`,
    `Content-Type: text/plain; charset=utf-8`, // يمكنك تغييرها لـ text/html
    `MIME-Version: 1.0`,
    ``,
    message
  ].join('\n');

  return Buffer.from(str)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

// 4. دالة الإرسال الرئيسية
async function sendEmail(TO_EMAIL, MESSAGE) {
  try {
    const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

    // تكوين محتوى الرسالة
    const rawMessage = makeBody(
      TO_EMAIL, // الإيميل المستلم
      'abdulsalam.hmdan@gmail.com', // الإيميل المرسل (يجب أن يطابق الحساب المربوط)
      'from baserah', // العنوان
      MESSAGE // نص الرسالة
    );

    // عملية الإرسال
    const res = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: rawMessage,
      },
    });

    console.log('✅ تم إرسال الرسالة بنجاح!');
    console.log('Message ID:', res.data.id);
    
  } catch (error) {
    console.error('❌ حدث خطأ أثناء الإرسال:', error.message);
  }
}

module.exports = (TO_EMAIL, MESSAGE) => {
    sendEmail(TO_EMAIL, MESSAGE);
};