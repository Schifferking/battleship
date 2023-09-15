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

  const createInput = (args) => {
    const input = document.createElement("input");
    Object.assign(input, args);
    return input;
  };

  const createLabel = (text) => {
    const label = document.createElement("label");
    label.textContent = text;
    return label;
  };

  const createSubmitButton = () => {
    const submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.textContent = "Place ship";
    return submit;
  };

  const createShipFormElement = (textLabel, args) => {
    const label = createLabel(textLabel);
    const input = createInput(args);
    label.appendChild(input);
    return label;
  };

  const createShipForm = () => {
    const formContainer = createDiv({ className: "form-container" });
    const form = document.createElement("form");
    const xCoordinate = createShipFormElement("* x coordinate: ", {
      type: "number",
      min: "0",
      max: "9",
      placeholder: "0",
      name: "x-coordinate",
    });
    const yCoordinate = createShipFormElement("* y coordinate: ", {
      type: "number",
      min: "0",
      max: "9",
      placeholder: "0",
      name: "y-coordinate",
    });
    const lengthLabel = createShipFormElement("* Ship length: ", {
      type: "number",
      min: "2",
      max: "5",
      placeholder: "2",
      name: "ship-length",
    });
    const radioButtonsContainer = createDiv({
      className: "radio-buttons-container",
      textContent: "* Direction: ",
    });
    const horizontal = createShipFormElement("horizontal", {
      type: "radio",
      name: "direction",
      value: "horizontal",
      checked: true,
    });
    const vertical = createShipFormElement("vertical", {
      type: "radio",
      name: "direction",
      value: "vertical",
    });

    const errorMessage = createDiv({ className: "error-message" });
    radioButtonsContainer.append(horizontal, vertical);
    form.append(
      xCoordinate,
      yCoordinate,
      lengthLabel,
      radioButtonsContainer,
      errorMessage,
      createSubmitButton(),
    );
    formContainer.appendChild(form);
    return formContainer;
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

    return undefined;
  };

  const createCell = (args) => {
    const cell = createDiv();
    const { row } = args;
    const { column } = args;

    if (row >= 2 && column >= 2) {
      cell.classList = "cell-container";
      cell.setAttribute("data-x-coordinate", row - 2);
      cell.setAttribute("data-y-coordinate", column - 2);
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
    const gameboards = createDiv({ className: "gameboards" });
    const mainPlayerGameboard = loadGameboard({
      ...args,
      text: "Your grid",
    });
    const trackingPlayerGameboard = loadGameboard({
      ...args,
      text: "Your enemy grid",
    });
    gameboards.append(mainPlayerGameboard, trackingPlayerGameboard);
    main.append(createShipForm(), gameboards);
    body.insertBefore(main, script);
  };

  const loadFooter = () => {
    const footer = document.createElement("footer");
    footer.textContent =
      "© 2023 Copyright: Generic Battleship app name is not an actual brand.";
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

  const addEnemyGameboardListener = (args) => {
    const enemyGameboard = document.querySelector(
      ".gameboards > div:nth-child(2) > div:first-child",
    );
    const myGameboard = document.querySelector(
      ".gameboards > div:first-child > div:first-child",
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

  const getShipCell = (x, y) =>
    document.querySelector(
      `div[data-x-coordinate="${x}"][data-y-coordinate="${y}"]`,
    );

  const getShipCells = (args) => {
    const range = [...Array(Number(args.shipLength)).keys()];
    const shipCells = [];
    let index = args.newIndex;
    let cell;
    range.forEach(() => {
      if (args.direction === "vertical") {
        cell = getShipCell(index, args.coordinates.y);
      } else {
        cell = getShipCell(args.coordinates.x, index);
      }
      shipCells.push(cell);
      index += 1;
    });
    return shipCells;
  };

  const renderShip = (shipCells) => {
    shipCells.forEach((shipCell) => {
      shipCell.classList.add("ship");
    });
  };

  const addFormListener = (args) => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const xCoordinate = form.elements["x-coordinate"].value;
      const yCoordinate = form.elements["y-coordinate"].value;
      const shipLength = form.elements["ship-length"].value;
      const direction = form.elements.direction.value;
      const formData = [xCoordinate, yCoordinate, shipLength, direction];
      const errorMessage = document.querySelector(".error-message");
      if (formData.some((element) => element === "")) {
        errorMessage.textContent = "Missing at least a value";
        return false;
      }
      if (args.humanGameboard.isMaxShipCountReached()) {
        form.remove();
        const enemyGameboard = document.querySelectorAll(
          ".gameboards > div:nth-child(2) > div > .cell-container",
        );
        enemyGameboard.forEach((cell) => {
          cell.appendChild(createButton("button"));
          cell.classList.add("enemy-cell");
        });
        addEnemyGameboardListener({
          humanPlayer: args.humanPlayer,
          humanGameboard: args.humanGameboard,
          computerPlayer: args.computerPlayer,
          computerGameboard: args.computerGameboard,
          isGameOver: args.isGameOver,
        });
        return true;
      }
      const coordinates = { x: Number(xCoordinate), y: Number(yCoordinate) };
      const newIndex = direction === "vertical" ? coordinates.x : coordinates.y;
      if (newIndex + Number(shipLength) > 10) {
        errorMessage.textContent =
          "Ship can't be placed there. Try to lower at least one coordinate or ship length.";
        return false;
      }
      const canShipBePlaced = args.humanGameboard.canShipBePlaced(
        coordinates,
        Number(shipLength),
        direction,
      );
      if (!canShipBePlaced) {
        errorMessage.textContent =
          "Ship can't be placed there. Ensure that all ships have one empty space between each other.";
        return false;
      }
      args.humanGameboard.placeShip(coordinates, Number(shipLength), direction);
      const shipCells = getShipCells({
        shipLength: Number(shipLength),
        direction,
        newIndex,
        coordinates,
      });
      renderShip(shipCells);
      errorMessage.textContent = "";
      return true;
    });
  };

  const loadPage = (args) => {
    loadHeader();
    loadMain(args);
    loadFooter();
    addFormListener(args);
  };

  return { loadPage };
}
