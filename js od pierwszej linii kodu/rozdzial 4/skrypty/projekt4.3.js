alert("projekt 4.3");
let choose = window.prompt("Wybierz papier, kamień lub nożyce");
let game = ["kamień", "papier", "nożyce"];
let randomNumber = Math.floor(Math.random() * 3);
let message = ["wygrałeś", "remis", "przegrałeś"];
if (choose === game[randomNumber]){
    message = message[1];
} else if (choose === game[0] && game[randomNumber] === "nożyce"){
    message = message[0];
} else if (choose === game[1] && game[randomNumber] === "kamień"){
    message = message[0];
} else if (choose === game[2] && game[randomNumber] === "papier"){
    message = message[0];
} else {
    message = message[2];
}
console.log(message);
console.log(game[randomNumber]);