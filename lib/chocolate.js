class Bone {
  constructor() {
    this.x = (400 * Math.random());
    this.y = 0;
    this.dy = 1;
    this.image = new Image();
    this.image.src = "https://res.cloudinary.com/joycechau/image/upload/c_scale,w_30/v1485286020/chocolate.png";
  }

  update() {
    this.y += this.dy;
  }

  draw(ctx) {
    this.update();
    if (this.y > 0 && this.y < 450) {
      ctx.drawImage(this.image, this.x, this.y);
    }
  }

}

module.exports = Bone;
