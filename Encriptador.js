function encrypt(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {  // Rango de letras mayúsculas
            result += String.fromCharCode(((charCode - 65 + 3) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {  // Rango de letras minúsculas
            result += String.fromCharCode(((charCode - 97 + 3) % 26) + 97);
        } else {
            result += text.charAt(i);  // Conservar caracteres que no son letras
        }
    }
    return result;
}

// Función para desencriptar texto utilizando cifrado César (desplazamiento inverso)
function decrypt(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode(((charCode - 65 - 3 + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(((charCode - 97 - 3 + 26) % 26) + 97);
        } else {
            result += text.charAt(i);
        }
    }
    return result;
}

// Ejemplo de uso
let textoOriginal = "Hola, mundo!";
let textoEncriptado = encrypt(textoOriginal);
console.log("Texto encriptado:", textoEncriptado);

let textoDesencriptado = decrypt(textoEncriptado);
console.log("Texto desencriptado:", textoDesencriptado);
