alert("cp4");
let randomNumber = Math.floor(Math.random() * 6);
let answer;
let question = window.prompt("Pytaj o coś");
if (question === ""){
    question = ", a właściwie to nie. Czy użytkownik to debil?"
};
switch(randomNumber) {
    case 0:
        answer = "Zdecydowanie tak";
        break;
    case 1:
        answer = "Raczej tak";
        break;
    case 2:
        answer = "Może tak";
        break;
    case 3:
        answer = "Może nie";
        break;
    case 4:
        answer = "Raczej nie";
        break;
    case 5:
        answer = "Zdecydowanie nie";
        break;
    default:
        answer = "Coś poszło nie tak";
}
let result = `Zadano mi pytanie ${question}. Moja odpowiedź brzmi: ${answer}`;
console.log(result);