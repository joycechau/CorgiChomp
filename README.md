# Corgi Chomp

[Corgi Chomp](https://joycechau.github.io/CorgiChomp/) is an adorable spin on a classic item catcher browser game.  The player moves the corgi left and right to catch the falling bones, earning 1 point for every bone caught.  The player must avoid the falling chocolate (chocolate makes dogs sick! :mask:).  The player loses 1 life for every chocolate caught, and the game ends when all 3 lives are gone.  The object of the game is to score has many points as possible before losing all the lives.  

Corgi Chomp is a classic item catcher game. The game has the following rules:

1) Player has three lives to catch as many falling food items as possible, avoiding the chocolate items.  
2) Each level progresses with more food items falling and at quicker rates. Chocolate items also increase.

### Functionality & MVP

With this Item Catcher simulator, the player will be able to:

- [ ] Start, pause, and reset the game board
- [ ] Move the main character left and right
- [ ] Catch falling food items

In addition, this project will include:
- [ ] An About modal describing the background and rules of the game
- [ ] A production Readme


### Wireframes

This app will consist of a single screen with a game board, game controls, game play instructions, and nav links to my GitHub and LinkedIn accounts.  Game controls will include Start, Pause, and Reset buttons/options.  

![alt text](https://res.cloudinary.com/joycechau/image/upload/v1485165797/corgichomp.png "Corgi Chomp Wireframe")

### Architecture and Technologies

This project will be implemented with the following technologies:

* Vanilla JavaScript and ``` jquery ``` for overall structure, game logic, and DOM manipulation  
* HTML5 Canvas for rendering
* Webpack to bundle and serve up the various scripts

### Implementation Timeline

#### Day 1: Research and learn HTML5 Canvas, setup project.
* View tutorials on how to use HTML5 Canvas. Setup and style screen.
* Setup and configure Node modules, ```webpack.config.js```, and ```package.json```

#### Day 2: Create all necessary components
* Create character, falling food, score, and lives components.  
* Test and render all components onto the canvas.

#### Day 3: Create gameplay logic
* Allow player to move the character left and right
* Make food items fall randomly and at different rates
* Keep track of score and lives

#### Day 4: Additional controls, levels, and final styling
* Create controls for starting, pausing, and resetting the game.
* Increase level difficulty as game play progresses
* Style and polish site

### Bonus Features
- [ ] Allow users to set difficulty of game.  
- [ ] Add sound
