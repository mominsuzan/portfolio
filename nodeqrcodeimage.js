const QRCode = require('qrcode');

const generateQR = async text =>{
    try{
        await QRCode.toFile('./resume-qr-code.png', text)
    }
    catch (err){
        console.log(err);
    }
}
generateQR("http://resume.com/");