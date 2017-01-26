const Game = require("./game");
const GameView = require("./game_view");

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  canvas.width = Game.DIM_X;
  canvas.height = Game.DIM_Y;

  const ctx = canvas.getContext("2d");
  new GameView(ctx).welcome();
});
