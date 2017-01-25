class Corgi {
  constructor() {
    this.x = 170;
    this.y = 450;
    this.image = new Image();
    this.image.src = "https://res.cloudinary.com/joycechau/image/upload/v1485366189/corgi_2.gif";
  }

  updatePos(left) {
    console.log(left);
    console.log(this.x);
    if (left && this.x > 0) {
      this.x -= 10 ;
    } else if (!left && this.x < 340){
      this.x += 10;
    }
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y);
  }

}

module.exports = Corgi;
