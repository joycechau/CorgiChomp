const FallingObject = require("./falling_object");

class Chocolate extends FallingObject {
  constructor(options = {}) {
    options.good = false;
    options.src = "https://res.cloudinary.com/joycechau/image/upload/c_scale,w_30/v1485286020/chocolate.png";
    super(options);
  }
}

module.exports = Chocolate;
