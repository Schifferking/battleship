export default function DOM() {
  const body = document.querySelector("body");
  const script = document.querySelector("script");
  const createH1 = () => {
    const h1 = document.createElement("h1");
    h1.textContent = "Generic Battleship app name";
    return h1;
  };

  const loadHeader = () => {
    const header = document.createElement("header");
    const h1 = createH1();
    header.appendChild(h1);
    body.insertBefore(header, script);
  };

  const createDiv = (args = {}) => {
    const div = document.createElement("div");
    if (args.className) {
      div.className = args.className;
    }
    if (args.textContent) {
      div.textContent = args.textContent;
    }
    return div;
  };

  const createButton = (className) => {
    const button = document.createElement("button");
    button.classList = className;
    return button;
  };

  const getLetter = (column) => {
    switch (column) {
      case 2:
        return "A";
      case 3:
        return "B";
      case 4:
        return "C";
      case 5:
        return "D";
      case 6:
        return "E";
      case 7:
        return "F";
      case 8:
        return "G";
      case 9:
        return "H";
      case 10:
        return "I";
      case 11:
        return "J";
      // no default
    }
  };

  const addButton = (args) => {
    const elementCopy = args.element.cloneNode();
    const button = createButton("cell");
    elementCopy.classList.add("enemy-cell");
    elementCopy.appendChild(button);
    return elementCopy;
  };

  const loadShip = (args) => {
    const cellCopy = args.element.cloneNode();
    const cellValue =
      args.gameboardGridObject[args.coordinates.x][args.coordinates.y];
    if (JSON.stringify(cellValue) !== JSON.stringify({})) {
      cellCopy.classList.add("ship");
    }
    return cellCopy;
  };

  const createCell = (args) => {
    let cell = createDiv();
    const { row } = args;
    const { column } = args;
    const { humanGameboardGrid } = args;

    if (row >= 2 && column >= 2) {
      cell.classList = "cell-container";
      cell.setAttribute("data-x-coordinate", row - 2);
      cell.setAttribute("data-y-coordinate", column - 2);
      cell = args.cb({
        element: cell,
        gameboardGridObject: humanGameboardGrid,
        coordinates: { x: row - 2, y: column - 2 },
      });
    } else if (row >= 2 && column === 1) {
      cell.classList.add("number");
      cell.textContent = `${row - 1}`;
    } else if (row === 1 && column >= 2) {
      cell.classList.add("letter");
      cell.textContent = getLetter(column);
    }
    return cell;
  };

  const loadCells = (args) => {
    const gameboard = createDiv({ className: "gameboard" });
    const humanGameboardGrid = args.humanGameboard.getGrid();
    const lineLength = 11;
    for (let row = 1; row <= lineLength; row += 1) {
      for (let column = 1; column <= lineLength; column += 1) {
        const cell = createCell({ ...args, row, column, humanGameboardGrid });
        gameboard.appendChild(cell);
      }
    }
    return gameboard;
  };

  const loadGameboard = (args) => {
    const gameboardContainer = createDiv({ className: "gameboard-container" });
    const gridLegend = createDiv({
      className: "grid-legend",
      textContent: args.text,
    });
    const gameboard = loadCells(args);
    gameboardContainer.append(gameboard, gridLegend);
    return gameboardContainer;
  };

  const loadMain = (args) => {
    const main = document.createElement("main");
    const mainPlayerGameboard = loadGameboard({
      ...args,
      text: "Your grid",
      cb: loadShip,
    });
    const trackingPlayerGameboard = loadGameboard({
      ...args,
      text: "Your enemy grid",
      cb: addButton,
    });
    main.append(mainPlayerGameboard, trackingPlayerGameboard);
    body.insertBefore(main, script);
  };

  const loadFooter = () => {
    const footer = document.createElement("footer");
    body.insertBefore(footer, script);
  };

  const getCoordinates = (element) => {
    const x = Number(element.dataset.xCoordinate);
    const y = Number(element.dataset.yCoordinate);
    return { x, y };
  };

  const updateGameboard = (attackResult, cellDiv) => {
    if (attackResult) {
      cellDiv.classList.add("ship-attacked");
    } else {
      cellDiv.classList.add("missed-attack");
    }
  };

  const humanTurn = (args) => {
    const { button } = args;
    const coordinates = getCoordinates(button.parentNode);
    const humanResult = args.humanPlayer.sendAttack(
      coordinates,
      args.computerGameboard,
    );
    updateGameboard(humanResult, button.parentNode);
    button.remove();
  };

  const computerTurn = (args) => {
    const { humanGameboard } = args;
    const { computerPlayer } = args;
    const computerCoordinates = computerPlayer.calculateAttack(humanGameboard);
    const computerResult = computerPlayer.sendAttack(
      computerCoordinates,
      humanGameboard,
    );
    computerPlayer.registerAttack({
      coordinates: computerCoordinates,
      result: computerResult,
    });
    const cell = args.myGameboard.querySelector(
      `div[data-x-coordinate="${computerCoordinates.x}"][data-y-coordinate="${computerCoordinates.y}"]`,
    );
    updateGameboard(computerResult, cell);
  };

  const deleteButtons = (enemyGameboard) => {
    const buttons = enemyGameboard.querySelectorAll("div > button");
    const buttonsArray = Array.from(buttons);
    buttonsArray.forEach((button) => {
      if (!button.parentNode.classList.contains("ship-attacked")) {
        button.parentNode.classList.add("missed-attack");
      }
      button.remove();
    });
  };

  const getVictoryMessage = (gameBoard) => {
    if (gameBoard.areAllShipsSunk()) {
      return "You win";
    }
    return "Computer Wins";
  };

  const loadVictoryMessage = (message) => {
    const p = document.createElement("p");
    const main = document.querySelector("main");
    p.textContent = message;
    main.appendChild(p);
  };

  const addEnemeyGameboardListener = (args) => {
    const enemyGameboard = document.querySelector(
      "main > div:nth-child(2) > div:first-child",
    );
    const myGameboard = document.querySelector(
      "main > div:first-child > div:first-child",
    );
    enemyGameboard.addEventListener("click", (event) => {
      if (event.target.matches("button")) {
        humanTurn({ ...args, button: event.target });
        computerTurn({ ...args, myGameboard });
        if (args.isGameOver(args.humanGameboard, args.computerGameboard)) {
          deleteButtons(enemyGameboard);
          const victoryMessage = getVictoryMessage(args.computerGameboard);
          loadVictoryMessage(victoryMessage);
        }
      }
    });
  };

  const loadPage = (args) => {
    loadHeader();
    loadMain(args);
    loadFooter();
    addEnemeyGameboardListener({
      humanPlayer: args.humanPlayer,
      humanGameboard: args.humanGameboard,
      computerPlayer: args.computerPlayer,
      computerGameboard: args.computerGameboard,
      isGameOver: args.isGameOver,
    });
  };

  return { loadPage };
}
