'use strict';

import Renderer from './renderer';
import MouseInput from './mouse_input';

import Border from './entities/border';
import Paddle from './entities/paddle';
import Ball from './entities/ball';

class Game {
  constructor() {
    this.renderer = new Renderer();
    this.mouseInput = new MouseInput(this.renderer.canvas);

    this.entities = [];

    this.entities.push(new Border(this, 5.0, 1.0));
    this.entities.push(new Border(this, 595.0, -1.0));
    this.entities.push(new Paddle(this, 10.0, 1.0));
    this.entities.push(new Paddle(this, 790.0, -1.0));
    this.entities.push(new Ball(this));
  }

  run() {
    this.lastTime = Date.now();

    requestAnimationFrame(() => this.loop());
  }

  loop(currentTime = Date.now()) {
    requestAnimationFrame(() => this.loop());

    let deltaTime = currentTime - this.lastTime;

    this.mouseInput.update();

    this.entities.forEach(entity => entity.update(deltaTime));

    this.renderer.clear();

    this.entities.forEach(entity => entity.draw());

    this.lastTime = currentTime;
  }
}

export default Game;
