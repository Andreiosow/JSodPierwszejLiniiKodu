alert("projekt3.2");
//nie chce mi się robić zadania z projekt bo to to samo co cp5  
let products = [];
let friend1 = {
    name: "Tomasz",
    lastName: "Panuś",
    id: "1"
};
let friend2 = {
    name: "Daniel",
    lastName: "Rupek",
    id: "2"
};
let friend3 = {
    name: "Radosław",
    lastName: "Kiersztyn",
    id: "3"
};
products.splice(3, 0, friend1, friend2, friend3);
console.log(products);
console.log(products[1]);