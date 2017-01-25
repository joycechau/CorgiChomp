class Corgi {
  constructor() {
    this.x = 170;
    this.y = 450;
    this.image = new Image();
    this.image.src = "https://res.cloudinary.com/joycechau/image/upload/v1485366189/corgi_2.gif";
  }

  draw(ctx) {
    if (this.x < 0) {
      ctx.drawImage(this.image, 0, this.y);
    } else if (this.x > 340) {
      ctx.drawImage(this.image, 340, this.y);
    } else {
      ctx.drawImage(this.image, this.x, this.y);
    }
  }

}

module.exports = Corgi;
