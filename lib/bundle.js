/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Game = __webpack_require__(1);
	const GameView = __webpack_require__(2);
	
	document.addEventListener("DOMContentLoaded", () => {
	  const canvas = document.getElementById("canvas");
	  canvas.width = Game.DIM_X;
	  canvas.height = Game.DIM_Y;
	
	  const ctx = canvas.getContext("2d");
	  const game = new Game(ctx);
	  new GameView(game, ctx).start();
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const Corgi = __webpack_require__(3);
	const Bone = __webpack_require__(4);
	const Chocolate = __webpack_require__(6);
	
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
	    this.bones.forEach((bone) => {
	      if (bone.collidesWith(this.corgi)) {
	        this.score++;
	        this.remove(bone);
	      }
	      bone.update(ctx);
	    });
	    this.chocolates.forEach(chocolate => {
	      if (chocolate.collidesWith(this.corgi)) {
	        this.lives--;
	        this.remove(chocolate);
	      }
	      chocolate.update(ctx);
	    });
	    this.drawScore(this.ctx);
	    this.drawLives(this.ctx);
	    this.drawGameOver(this.ctx);
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
	    if (this.lives == 0) {
	      ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
	      ctx.font='25px Raleway';
	      ctx.fillStyle = "black";
	      ctx.fillText("GAME OVER", 125, 200);
	      ctx.fillText("YOUR SCORE: " + this.score, 110, 240);
	      debugger
	    }
	  }
	
	  startInterval() {
	    setInterval(() => this.bones.push(new Bone()), 3000);
	    setInterval(() => this.chocolates.push(new Chocolate()), 1000);
	  }
	
	  remove(object) {
	    if (object instanceof Bone) {
	      this.bones.splice(this.bones.indexOf(object), 1);
	    } else if (object instanceof Chocolate) {
	      this.chocolates.splice(this.chocolates.indexOf(object), 1);
	    }
	  }
	
	}
	
	Game.DIM_X = 400;
	Game.DIM_Y = 500;
	
	module.exports = Game;


/***/ },
/* 2 */
/***/ function(module, exports) {

	class GameView {
	  constructor(game, ctx) {
	    this.ctx = ctx;
	    this.game = game;
	    this.corgi = this.game.corgi;
	  }
	
	  bindKeyHandlers() {
	    const corgi = this.corgi;
	    Object.keys(GameView.MOVES).forEach((k) => {
	      let move = GameView.MOVES[k] === -20;
	      key(k, () => corgi.updatePos(move));
	    });
	  }
	
	  start() {
	    this.bindKeyHandlers();
	    this.game.startInterval();
	    this.lastTime = 0;
	    requestAnimationFrame(this.animate.bind(this));
	  }
	
	  animate(time) {
	    const timeDelta = time - this.lastTime;
	    this.game.draw(this.ctx);
	    this.lastTime = time;
	    requestAnimationFrame(this.animate.bind(this));
	  }
	}
	
	GameView.MOVES = {
	  "left": -20,
	  "right": 20
	};
	
	module.exports = GameView;


/***/ },
/* 3 */
/***/ function(module, exports) {

	class Corgi {
	  constructor() {
	    this.x = 170;
	    this.y = 450;
	    this.width = 60;
	    this.height = 45;
	    this.image = new Image();
	    this.image.src = "https://res.cloudinary.com/joycechau/image/upload/v1485366189/corgi_2.gif";
	  }
	
	  updatePos(left) {
	    if (left && this.x > 0) {
	      this.x -= 20;
	    } else if (!left && this.x < 340){
	      this.x += 20;
	    }
	  }
	
	  draw(ctx) {
	    ctx.drawImage(this.image, this.x, this.y);
	  }
	
	}
	
	module.exports = Corgi;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	const FallingObject = __webpack_require__(5);
	
	class Bone extends FallingObject {
	  constructor(options = {}) {
	    options.good = true;
	    options.src = "https://res.cloudinary.com/joycechau/image/upload/c_scale,w_30/v1485284632/bone.png";
	    super(options);
	  }
	}
	
	module.exports = Bone;


/***/ },
/* 5 */
/***/ function(module, exports) {

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
	
	  collidesWith(otherObject) {
	    return ((this.x > otherObject.x && (this.x < (otherObject.x + otherObject.width))) && (this.y > otherObject.y && (this.y < (otherObject.y + otherObject.height))));
	  }
	}
	
	module.exports = FallingObject;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	const FallingObject = __webpack_require__(5);
	
	class Chocolate extends FallingObject {
	  constructor(options = {}) {
	    options.good = false;
	    options.src = "https://res.cloudinary.com/joycechau/image/upload/c_scale,w_30/v1485286020/chocolate.png";
	    super(options);
	  }
	}
	
	module.exports = Chocolate;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map