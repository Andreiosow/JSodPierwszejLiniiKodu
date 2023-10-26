alert("cp4");
let myCar = {
    carName: "Zrinyi",
    origin: "hungarian",
    color: "zielony",
    yearOfProduction: 1944,
    isKillingRussians: true,
    forSale: false,
};
let variable = "color";
myCar[variable] = "żółty";
variable = "forSale";
myCar[variable] = true;
console.log(myCar.carName, myCar.yearOfProduction);
console.log(myCar);