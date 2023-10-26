alert("projekt 4.2");
/* gra w sprawdzanie imienia przyjaciela. Program ma poprosić użytkownika
o podanie imienia, a następnie za pomocą konstrukcji switch sprawdzić,
czy znajduje się ono na liście przyjaciół, i poinformować o wyniku tej operacji.
Można dodać odpowiedź domyślną że imię nie jest znane. */
let userName = window.prompt("Podaj swoje imię.");
let message = "Po dokładnej weryfikacji uznaję że: ";
switch (userName){
    case "Tomasz":
    case "Czarny":
    case "Daniel":
    case "Radosław":
    case "Sroka":
    case "Jakub":
        message = `${message} ${userName} znajduje się na liście przyjaciół i może wejść.`;
        break;
    default:
        message = `${message} ${userName} nie znajduje się na liście przyjaciół i nie może wejść.`;
}
console.log(message);