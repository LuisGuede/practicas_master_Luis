
const personajes = {
    p0: {
        name: 'goku',
        force: 1
    },
    p1: {
        name: 'vejeta',
        force: 2
    }, 
    p2: {
        name: 'picollo',
        force: 3
    } ,
};

// Images
const characterUrls = ["./img/goku.webp", "./img/picollo.webp", "./img/vejeta.webp"];

// Captura
function getRandomCharacter() {
    return characterUrls[Math.floor(Math.random() * characterUrls.length)];
}

document.getElementById("fightButton").addEventListener("click", fight);

function fight() {

    // Random Character
    const characterOne = document.getElementById("characterOne");
    const characterTwo = document.getElementById("characterTwo");

    const randomCharacterOne = getRandomCharacter();
    const randomCharacterTwo = getRandomCharacter();

    characterOne.style.backgroundImage = `url('${randomCharacterOne}')`;
    characterTwo.style.backgroundImage = `url('${randomCharacterTwo}')`;

    // Overlay Text Captura
    const textOverlayOne = document.getElementById("textOverlayOne");
    const textOverlayTwo = document.getElementById("textOverlayTwo");
    const winnerDisplay = document.getElementById("winner");

    // Overlay Text 
    textOverlayOne.innerHTML = "";
    textOverlayTwo.innerHTML = "";

    const forceOne = personajes['p' + characterUrls.indexOf(randomCharacterOne)].force;
}

