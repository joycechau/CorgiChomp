const Corgi = require("./corgi");
const Bone = require("./bone");
const Chocolate = require("./chocolate");

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.score = 0;
    this.lives = 3;
    this.bones = [];
    this.chocolates = [];
    this.corgi = new Corgi();
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.corgi.draw(ctx);
    this.checkCollisions();
    this.drawScore(this.ctx);
    this.drawLives(this.ctx);
    this.checkGameOver(this.ctx);
  }

  drawScore(ctx) {
    ctx.font='20px Raleway';
    ctx.fillStyle = "white";
    ctx.fillText("SCORE: " + this.score, 10,30);
  }

  drawLives(ctx) {
    ctx.font='20px Raleway';
    ctx.fillStyle = "white";
    ctx.fillText("LIVES: " + this.lives, 315,30);
  }

  drawGameOver(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.font='25px Raleway';
    ctx.fillStyle = "black";
    ctx.fillText("GAME OVER", 125, 160);
    ctx.fillText("YOUR SCORE: " + this.score, 110, 200);
    ctx.fillText("Press SPACE to restart!", 70, 240);
    this.clearAllIntervals();
  }

  checkGameOver(ctx) {
    if (this.lives == 0) {
      this.drawGameOver(ctx);
    }
  }

  checkCollisions() {
    this.bones.forEach((bone) => {
      if (bone.collidesWith(this.corgi)) {
        this.score++;
        this.remove(bone);
      }
      this.increaseDifficulty(bone);
      bone.update(this.ctx);
    });
    this.chocolates.forEach(chocolate => {
      if (chocolate.collidesWith(this.corgi)) {
        this.lives--;
        this.remove(chocolate);
      }
      this.increaseDifficulty(chocolate);
      chocolate.update(this.ctx);
    });
  }

  startInterval() {
    setInterval(() => this.bones.push(new Bone()), 2000);
    setInterval(() => this.chocolates.push(new Chocolate()), 5000);
  }

  clearAllIntervals() {
    for (var i = 1; i < 99999; i++) {
      window.clearInterval(i);
    }
  }

  remove(object) {
    if (object instanceof Bone) {
      this.bones.splice(this.bones.indexOf(object), 1);
    } else if (object instanceof Chocolate) {
      this.chocolates.splice(this.chocolates.indexOf(object), 1);
    }
  }

  increaseDifficulty(object) {
    if (this.score >= 5 && this.score < 10) {
      object.dy = 3;
    } else if (this.score >= 10 && this.score < 20) {
      object.dy = 4;
    } else if (this.score >= 20) {
      object.dy = 5;
    }
  }
}

Game.DIM_X = 400;
Game.DIM_Y = 500;

module.exports = Game;
