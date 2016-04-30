'use strict';

import Entity from '../entity';
import SimpleShader from '../shaders/simple_shader';

const vec2 = require('gl-matrix').vec2;

class Ball extends Entity {
  constructor(game) {
    let vertices = [
      0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0
    ];

    for (let angle = 0.0; angle < 2.0 * Math.PI + Math.PI / 16.0; angle += Math.PI / 16.0) {
      vertices.push(Math.cos(angle), Math.sin(angle), 0.0, 1.0, 1.0, 1.0, 1.0);
    }

    super(game, new SimpleShader(game.renderer), vertices, null, 'TRIANGLE_FAN');

    this.position = vec2.fromValues(100.0, 100.0);
    this.scaling = vec2.fromValues(10.0, 10.0);

    this.velocity = vec2.fromValues(0.2, 0.1);
  }

  update(deltaTime) {
    this.game.entities.forEach(entity => {
      if (entity !== this && entity.checkBallCollision(this)) {
        let dot = vec2.dot(entity.normal, this.velocity);
        vec2.add(this.velocity, this.velocity, vec2.scale(vec2.create(), entity.normal, -2.0 * dot));
      }
    });

    super.update(deltaTime);
  }
}

export default Ball;
