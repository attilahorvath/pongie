'use strict';

import Entity from '../entity';
import SimpleShader from '../shaders/simple_shader';

const vec2 = require('gl-matrix').vec2;

class Border extends Entity {
  constructor(game, y = 0.0, normalY = 1.0) {
    const vertices = [
        0.0,  5.0, 0.0, 1.0, 1.0, 1.0, 1.0,
        0.0, -5.0, 0.0, 1.0, 1.0, 1.0, 1.0,
      800.0, -5.0, 0.0, 1.0, 1.0, 1.0, 1.0,
      800.0,  5.0, 0.0, 1.0, 1.0, 1.0, 1.0
    ];

    const indices = [
      0, 1, 3,
      3, 1, 2
    ];

    super(game, new SimpleShader(game.renderer), vertices, indices);

    this.position = vec2.fromValues(0.0, y);

    this.normal = vec2.fromValues(0.0, normalY);
  }

  checkBallCollision(ball) {
    if (Math.abs(ball.position[1] - this.position[1]) <= ball.scaling[1]) {
      return true;
    }
  }
}

export default Border;
