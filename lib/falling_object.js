class FallingObject {
  constructor(options) {
    this.x = (Math.floor(370 * Math.random()));
    this.y = 0;
    this.width = 30;
    this.height = 30;
    this.dy = 2;
    this.good = options.good;
    this.image = new Image();
    this.image.src = options.src;
  }

  update(ctx) {
    this.y += this.dy;
    this.draw(ctx);
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y);
  }

  collidesWith(otherObject) {
    return (((this.x + this.width/2) > otherObject.x && (this.x < (otherObject.x + otherObject.width))) && ((this.y + this.height) > otherObject.y && (this.y < (otherObject.y + otherObject.height))));
  }
}

module.exports = FallingObject;
