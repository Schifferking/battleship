import "./style.css";
import DOM from "./scripts/dom";
import Game from "./scripts/game";

const myDOM = DOM();
const myGame = Game();
const gameObjects = myGame.createObjects();
myDOM.loadPage(Object.assign(gameObjects, { isGameOver: myGame.isGameOver }));
