const Game = require("./game");


class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.corgi = this.game.corgi;
  }

  bindKeyHandlers() {
    const corgi = this.corgi;
    Object.keys(GameView.MOVES).forEach((k) => {
      let move = GameView.MOVES[k] === -20;
      key(k, () => corgi.updatePos(move));
    });
  }

  welcome() {
    //add handlers to actually start game
  }

  start() {
    this.bindKeyHandlers();
    this.game.startInterval();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    const timeDelta = time - this.lastTime;
    this.game.draw(this.ctx);
    this.lastTime = time;
    requestAnimationFrame(this.animate.bind(this));
  }
}

GameView.MOVES = {
  "left": -20,
  "right": 20
};

module.exports = GameView;
