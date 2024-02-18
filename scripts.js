const result = document.querySelector(".result");
const eu = document.querySelector("#player");
const robo = document.querySelector("#com");

let myScore = 0
let roboScore = 0

function selectPlayer(humano) {
    const com = selectCom();
    start(humano, com);
}

function selectCom() {
    const ia = ["Pedra", "Papel", "Tesoura"];
    const numeroAleatorio = Math.floor(Math.random() * 3);
    return ia[numeroAleatorio];
}

function start(humano, com) {
    console.log("Player: " + humano + " COM: " + com);
    if (humano === com) {
        result.innerHTML = "EMPATE!";
    } else if ((humano === "Pedra" && com === "Tesoura") ||
        (humano === "Papel" && com === "Pedra") ||
        (humano === "Tesoura" && com === "Papel")) {
        myScore++
        eu.innerHTML = myScore
        result.innerHTML = "VOCÊ GANHOU!";
    } else {
        roboScore++
        robo.innerHTML = roboScore
        result.innerHTML = "A MAQUINA GANHOU!";
    }
}

