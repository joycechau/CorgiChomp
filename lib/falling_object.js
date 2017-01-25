class FallingObject {
  constructor(options) {
    this.x = (Math.floor(370 * Math.random()));
    this.y = 0;
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

}

module.exports = FallingObject;
