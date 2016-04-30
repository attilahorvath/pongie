'use strict';

import Renderer from './renderer';
import Border from './entities/border';
import Paddle from './entities/paddle';
import Ball from './entities/ball';

class Game {
  constructor() {
    this.renderer = new Renderer();

    this.topBorder = new Border(this);
    this.bottomBorder = new Border(this, 590.0);

    this.leftPaddle = new Paddle(this, 10.0);
    this.rightPaddle = new Paddle(this, 790.0);

    this.ball = new Ball(this);
  }

  run() {
    this.lastTime = Date.now();

    requestAnimationFrame(() => this.loop());
  }

  loop(currentTime = Date.now()) {
    requestAnimationFrame(() => this.loop());

    //let deltaTime = currentTime - this.lastTime;

    this.renderer.clear();

    this.topBorder.draw();
    this.bottomBorder.draw();

    this.leftPaddle.draw();
    this.rightPaddle.draw();

    this.ball.draw();

    this.lastTime = currentTime;
  }
}

export default Game;
