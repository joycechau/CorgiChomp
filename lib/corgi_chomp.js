// import Game from "./game";
// import GameView from "./game_view";

// import Bone from "./bone";
const Corgi = require("./corgi");

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const corgi = new Corgi();
  corgi.draw(ctx);
});
