const robot = require('robotjs');

setInterval(() => {
    const mousePos = robot.getMousePos();
    console.log(`Mouse en: (${mousePos.x}, ${mousePos.y})`);
}, 1000);