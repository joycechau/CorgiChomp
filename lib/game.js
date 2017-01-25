const Corgi = require("./corgi");
const Bone = require("./bone");
const Chocolate = require("./chocolate");

class Game {
  constructor() {
    this.score = 0
    this.lives = 3;
    this.bones = [];
    this.chocolates = [];
    this.corgi = new Corgi();
  }

  draw(ctx) {
    // debugger
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.corgi.draw(ctx);
    this.bones.forEach(bone => bone.update(ctx)); // check for colllisions, if so increase score)
    this.chocolates.forEach(chocolate => chocolate.update(ctx));

  }

  startInterval() {
    setInterval(() => this.bones.push(new Bone()), 3000);
    setInterval(() => this.chocolates.push(new Chocolate()), 5000);
  }


}

Game.DIM_X = 400;
Game.DIM_Y = 500;

module.exports = Game;
