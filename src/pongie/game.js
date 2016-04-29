'use strict';

import Renderer from './renderer';
import Paddle from './entities/paddle';

class Game {
  constructor() {
    this.renderer = new Renderer();

    this.paddle = new Paddle(this);
  }

  run() {
    this.lastTime = Date.now();

    requestAnimationFrame(() => this.loop());
  }

  loop(currentTime = Date.now()) {
    requestAnimationFrame(() => this.loop());

    //let deltaTime = currentTime - this.lastTime;

    this.renderer.clear();

    this.paddle.draw();

    this.lastTime = currentTime;
  }
}

export default Game;
