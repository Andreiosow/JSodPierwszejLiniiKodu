alert("cp5");
let people = {
    friends:[]
};
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
people.friends.splice(3, 0, friend1, friend2, friend3);
console.log(people);