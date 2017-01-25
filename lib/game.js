const Corgi = require("./corgi");
const Bone = require("./bone");
const Chocolate = require("./chocolate");

class Game {
  constructor() {
    this.bones = new Bone();
    this.chocolates = new Chocolate();
    this.corgi = new Corgi();
    // this.addBones();
    // this.addChocolates();
  }

  // add(object) {
  //   if (object instanceof Bone) {
  //     this.bones.push(object);
  //   } else if (object instanceof Chocolate) {
  //     this.chocolates.push(object);
  //   } else if (object instanceof Corgi) {
  //     this.corgi.push(object);
  //   } else {
  //     throw "Invalid object!";
  //   }
  // }
  //
  // addCorgi() {
  //   const corgi = new Corgi();
  //   this.add(corgi);
  //   return corgi;
  // }
  //
  // allObjects() {
  //   return [].concat(this.corgi, this.bones, this.chocolates);
  // }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    // if (this.corgi.x > 0 || this.corgi.x < 340) {
      this.corgi.draw(ctx);
    // }
    // this.bone.draw(ctx);
    // this.chocolate.draw(ctx);
  }
}

Game.DIM_X = 400;
Game.DIM_Y = 500;

module.exports = Game;
