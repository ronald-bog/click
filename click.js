const robot = require('robotjs');

// monitores
const monitor1 = {
    x: 0,
    y: 0,
    width: 1440,
    height: 900,
};

// Coordenadas
const clickX = monitor1.x + 3269;
const clickY = monitor1.y + 860;

function autoClick() {
    robot.moveMouse(clickX, clickY);
    robot.mouseClick("left");
    console.log(`Clic derecho realizado en (${clickX}, ${clickY}) en el monitor 1`);
}

setInterval(autoClick, 9000);

// (3269, 853)