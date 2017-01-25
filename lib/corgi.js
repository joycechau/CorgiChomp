class Corgi {
  constructor() {
    this.x = 200;
    this.y = 440;
    this.color = "#75ACE5";
    this.width = 100;
    this.height = 50;
    this.image = new Image();
    this.image.src = "https://res.cloudinary.com/joycechau/image/upload/c_scale,w_50/v1485325246/corgi.gif";
  }

  draw(ctx) {
    console.log(this.image);
    ctx.drawImage(this.image, this.x, this.y);
  }

}

module.exports = Corgi;
