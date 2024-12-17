let raqam1 = prompt("Birinchi raqamni kiriting:");
document.getElementById('num1').value = raqam1;

let amal = prompt("Tanlang\n1)+\n2)/\n3)*\n4)-");

// Amalni belgilarga o'zgartirish 
if (amal === "1") amal = "+";
else if (amal === "2") amal = "/";
else if (amal === "3") amal = "*";
else if (amal === "4") amal = "-";

document.getElementById('operator').textContent = amal;

let raqam2 = prompt("Ikkinchi raqamni kiriting:");
document.getElementById('num2').value = raqam2;

// Barcha ma'lumotlar kiritilgandan so'ng kalkulyatorni ko'rsatish
document.getElementById('calculator-container').style.display = 'block';

function tekshirish() {
    const num1 = Number(raqam1);
    const num2 = Number(raqam2);
    let natija;
    
    if (amal === '+') {
        natija = num1 + num2;
    } else if (amal === '-') {
        natija = num1 - num2;
    } else if (amal === '*') {
        natija = num1 * num2;
    } else if (amal === '/') {
        if (num2 === 0) {
            document.getElementById('natija').textContent = "Nolga bo'lib bo'lmaydi!";
            return;
        }
        natija = num1 / num2;
    }
    
    document.getElementById('natija').textContent = "Natija: " + natija;
}
