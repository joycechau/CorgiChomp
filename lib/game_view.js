class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.corgi = this.game.corgi;
  }

  bindKeyHandlers() {
    const corgi = this.corgi;
    Object.keys(GameView.MOVES).forEach((k) => {
      console.log(GameView.MOVES[k]);
      let move = GameView.MOVES[k] === -10;
      key(k, () => corgi.updatePos(move));
    });
  }

  start() {
    this.bindKeyHandlers();
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
  "left": -10,
  "right": 10
};

module.exports = GameView;
