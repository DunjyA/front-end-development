let brojA = prompt("Unesi prvi broj: ");
let brojB = prompt("Unesi drugi broj: ");
let nekiZnak = prompt("Unesi neki aritmeticki operator: ");

let rezultat = res(brojA, brojB, nekiZnak);

function res(a, b, znak) {
    if(znak == '+'){
     return parseInt(a) + parseInt(b);
}else if(znak == '-'){
     return parseInt(a) - parseInt(b);
}else if(znak == '*'){
     return parseInt(a) * parseInt(b);
}else if(znak == '/'){
     return parseInt(a) / parseInt(b);
}
}

alert("Rezultat je: " + rezultat);