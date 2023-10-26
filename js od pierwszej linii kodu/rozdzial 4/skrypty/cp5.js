alert("cp5");
let prize = window.prompt("Wybierz liczbę z przedziału od 0 do 10.");
prize = Number(prize);
let answer = "Wybrana opcja to: ";
switch (prize){
    case 0:
        answer += "shit ";
    case 1:
        answer += "bucket";
        break;
    case 2:
        answer += "silver ";
    case 3:
        answer += "gold ";
    case 4:
        answer += "coin";
        break;
    default:
        answer += "try again";
}
console.log(answer);