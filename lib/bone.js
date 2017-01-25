const FallingObject = require("./falling_object");

class Bone extends FallingObject {
  constructor(options = {}) {
    options.good = true;
    options.src = "https://res.cloudinary.com/joycechau/image/upload/c_scale,w_30/v1485284632/bone.png";
    super(options);
  }
}

module.exports = Bone;
