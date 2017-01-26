const Game = require("./game");

class GameView {
  constructor(ctx) {
    this.ctx = ctx;
  }

  bindKeyHandlers() {
    const corgi = this.corgi;
    Object.keys(GameView.MOVES).forEach((k) => {
      let move = GameView.MOVES[k] === -20;
      key(k, () => corgi.updatePos(move));
    });
  }

  welcome() {
    this.drawWelcome(this.ctx);
    const that = this;
    $(window).keypress(function(e) {
      if (e.keyCode == 32) {
        that.start();
      }
    });
  }

  drawWelcome(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.font='20px Arial';
    ctx.fillStyle = "black";
    ctx.fillText("Press SPACE to start!", 100, 200);
  }

  start() {
    this.game = new Game(this.ctx);
    this.corgi = this.game.corgi;
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
