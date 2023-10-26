alert("cp2");
let age = window.prompt("Proszę podać swó wiek.");
age = Number(age);
let message;
if (age >= 21) {
    message = "Możesz wejść i zakupić alkolololo";
} else if (age >= 19 && age < 21) {
    message = "Możesz wejść ale nie możesz kupić alkohololololo";
} else {
    message = "Uprzejmie proszę wypierdalać";
}
console.log(message);