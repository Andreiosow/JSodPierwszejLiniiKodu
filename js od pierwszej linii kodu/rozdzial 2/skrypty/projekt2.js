alert("projekt2");
let cokolwiek = "Wpisz liczbę mil do konwertera!";
let defaultValue = 1;
let miles = window.prompt(cokolwiek, defaultValue);
let kilometers = miles * 1.60934;
let message = `Odległość ${miles} mil odpowiada ${kilometers} kilometra.`;
console.log(message);