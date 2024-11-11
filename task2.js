let num1 = Number(prompt("Бірінші санды енгізіңіз:"));
let num2 = Number(prompt("Екінші санды енгізіңіз:"));
let num3 = Number(prompt("Үшінші санды енгізіңіз:"));;


if (num1 > num2 > num3) {
    alert( num1 - num3);
} else if (num1 > num3 > num2) {
    alert("Ең үлкен және ең кіші санның айырмасы:" + num1 - num2);
} else if (num2 > num1 > num3) {
    alert("Ең үлкен және ең кіші санның айырмасы:" + num1 - num3);
} else if (num2 > num3 > num1) {
    alert("Ең үлкен және ең кіші санның айырмасы:" + num1 - num1);
} else if (num3 > num1> num2) {
    alert("Ең үлкен және ең кіші санның айырмасы:" + num3 - num2);
} else if (num3 > num2 > num1) {
    alert("Ең үлкен және ең кіші санның айырмасы:" + num3 - num3);
}



