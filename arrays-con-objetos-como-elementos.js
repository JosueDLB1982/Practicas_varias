const autos = [
    { marca: "Ferrari", modelo: "SF1000", piloto: "Sebastian Vettel"},
    { marca: "Ferrari", modelo: "SF1000", piloto: "Charles Lecrec"},
    { marca: "Mercedes", modelo: "W10", piloto: "Lewis Hamilton"},
    { marca: "Red Bull", modelo: "RB15", piloto: "Max Verstappen"},
];

autos.push({marca: "Ferrari", modelo: "F14", piloto: "Kimi Raikkonen"})
autos[3].modelo = "RB13"


console.log(autos)