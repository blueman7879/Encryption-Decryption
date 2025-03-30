function encrypt(text, shift) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            let shiftAmount = shift % 26;
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shiftAmount) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shiftAmount) % 26) + 97);
            }
        }
        result += char;
    }
    return result;
}

function decrypt(text, shift) {
    return encrypt(text, -shift);
}

function handleEncrypt() {
    let text = document.getElementById("userText").value;
    let shift = parseInt(document.getElementById("userShift").value, 10);
    if (isNaN(shift)) {
        document.getElementById("output").innerText = "Invalid shift value! Please enter a number.";
        return;
    }
    document.getElementById("output").innerText = "Encrypted Text: " + encrypt(text, shift);
}

function handleDecrypt() {
    let text = document.getElementById("userText").value;
    let shift = parseInt(document.getElementById("userShift").value, 10);
    if (isNaN(shift)) {
        document.getElementById("output").innerText = "Invalid shift value! Please enter a number.";
        return;
    }
    document.getElementById("output").innerText = "Decrypted Text: " + decrypt(text, shift);
}

function showTab(tabId) {
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
    document.getElementById(tabId).classList.add("active");
}
