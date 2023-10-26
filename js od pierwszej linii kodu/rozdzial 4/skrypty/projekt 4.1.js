alert("projekt 4.1");
/* gra w liczby, program ma poprosić użytkownika o podanie liczby, a następnie
sprawdzić, czy jest ona większa niż, równa czy mniejsza niż losowo wybrana liczba
w kodzie. Wynik powinien zostać wyświetlony użytkownikowi */
let chosenNumber = window.prompt("Podaj dowolną liczbę.");
let randomNumber = Math.floor(Math.random() * 1000);
let answer = "Twoja liczba jest: "
if (chosenNumber > randomNumber){
    answer += "większa niż wylosowana!";
} else if (chosenNumber === randomNumber){
    answer += "taka sama jak ta wylosowana! Co za traf!";
} else if (chosenNumber < randomNumber){
    answer += "mniejsza niż wylosowana.";
} else {
    answer += "Coś poszło nie tak. Spróbuj ponownie wpisać liczbę.";
}
console.log(answer);
console.log(randomNumber);