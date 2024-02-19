const result = document.querySelector(".result");
const eu = document.querySelector("#player");
const robo = document.querySelector("#com");
const resultadoNaTela01 = document.querySelector(".resultNaTela1")
const resultadoNaTela02 = document.querySelector(".resultNaTela2")

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

    const icons = {
        'Pedra': '&#x270A;',
        'Papel': '&#x1F590;',
        'Tesoura': '&#x270C;'
    };

    resultadoNaTela01.innerHTML = icons[humano];
    resultadoNaTela02.innerHTML = icons[com];

    if (humano === com) {
        result.innerHTML = "EMPATE!";
    }

    else if ((humano === "Pedra" && com === "Tesoura") ||
        (humano === "Papel" && com === "Pedra") ||
        (humano === "Tesoura" && com === "Papel")) {
        myScore++
        eu.innerHTML = myScore
        result.innerHTML = "GANHOU!";
    }

    else {
        roboScore++
        robo.innerHTML = roboScore
        result.innerHTML = "PERDEU!";
    }
}

const zerarBtn = document.querySelector("#zerar");

zerarBtn.addEventListener("click", function () {

    myScore = 0;
    roboScore = 0;

    eu.innerHTML = myScore;
    robo.innerHTML = roboScore;

    result.innerHTML = "";
    resultadoNaTela01.innerHTML = "";
    resultadoNaTela02.innerHTML = "";
});


