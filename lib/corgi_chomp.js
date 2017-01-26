const Game = require("./game");
const GameView = require("./game_view");

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  canvas.width = Game.DIM_X;
  canvas.height = Game.DIM_Y;

  const ctx = canvas.getContext("2d");
<<<<<<< HEAD

  const game = new Game();
  new GameView(game, ctx).start();
  // new GameView(ctx).welcome();
=======
  new GameView(ctx).welcome();
>>>>>>> master
});


// ## want to create new game view, render welcome message on game view first
// ## welcome message, wait for user to press space to start game
// ## on start, gameview.start (to create new game)
// ## on gameover, render gameover message and on reset, replace with new game
//     and invoke GameView.start();
