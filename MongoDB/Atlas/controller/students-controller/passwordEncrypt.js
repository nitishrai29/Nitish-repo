var CryptoJS = require('crypto-js')

const Encrypt=(cipher)=>{

    var ciphertext = CryptoJS.AES.encrypt(cipher, 'secret key 123').toString();
    console.log('Encrypted Code is:',ciphertext)
    // Decrypt
    var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    
    console.log('Decrypted text is:',originalText);
    
    
//     var encryptedText = CryptoJS.AES.encrypt(cipher,'iamawebdeveloper')
//     encryptedText= encryptedText.toString()
//     console.log('our encrypted text is:', encryptedText )
}

var text = Encrypt('Happy Diwali to you')

// const Dcrypt=(abc)=>{
//     var decryptedText= CryptoJS.AES.decrypt(abc,'iamawebdeveloper')
//     decryptedText=decryptedText.toString(CryptoJS.enc.Utf8)
//     // console.log('our decrypted text is:', decryptedText)
//     return decryptedText
// }

// var text=Encrypt('hello khadoos manxoor')
// var dcrpt=Dcrypt(text)

