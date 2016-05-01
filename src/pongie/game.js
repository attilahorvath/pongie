'use strict';

import Renderer from './renderer';
import PostProcessor from './post_processor';

import MouseInput from './mouse_input';

import Border from './entities/border';
import Paddle from './entities/paddle';
import Ball from './entities/ball';

import TextureShader from './shaders/texture_shader';
import ShakeShader from './shaders/shake_shader';

const vec2 = require('gl-matrix').vec2;

class Game {
  constructor() {
    this.renderer = new Renderer();
    this.postProcessor = new PostProcessor(this.renderer);

    this.mouseInput = new MouseInput(this.renderer.canvas);

    this.entities = [];

    this.entities.push(new Border(this, 5.0, 1.0));
    this.entities.push(new Border(this, 595.0, -1.0));
    this.entities.push(new Paddle(this, 10.0, 1.0));
    this.entities.push(new Paddle(this, 790.0, -1.0));
    this.entities.push(new Ball(this));

    this.textureShader = new TextureShader(this.renderer);
    this.shakeShader = new ShakeShader(this.renderer);
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

    this.postProcessor.begin();

    this.entities.forEach(entity => entity.draw());

    this.postProcessor.end();

    this.shakeShader.redDisplacementValue = vec2.fromValues(-0.005 + Math.random() * 0.01, -0.005 + Math.random() * 0.01);
    this.shakeShader.greenDisplacementValue = vec2.fromValues(-0.005 + Math.random() * 0.01, -0.005 + Math.random() * 0.01);
    this.shakeShader.blueDisplacementValue = vec2.fromValues(-0.005 + Math.random() * 0.01, -0.005 + Math.random() * 0.01);

    this.postProcessor.draw(this.shakeShader);

    this.lastTime = currentTime;
  }
}

export default Game;
