'use strict';

import Entity from '../entity';
import SimpleShader from '../shaders/simple_shader';

const vec2 = require('gl-matrix').vec2;

class Paddle extends Entity {
  constructor(game, x = 0.0, normalX = 1.0) {
    const vertices = [
      -10.0, -50.0, 0.0, 1.0, 1.0, 1.0, 1.0,
      -10.0,  50.0, 0.0, 1.0, 1.0, 1.0, 1.0,
       10.0,  50.0, 0.0, 1.0, 1.0, 1.0, 1.0,
       10.0, -50.0, 0.0, 1.0, 1.0, 1.0, 1.0
    ];

    const indices = [
      0, 1, 3,
      3, 1, 2
    ];

    super(game, new SimpleShader(game.renderer), vertices, indices);

    this.x = x;

    this.position = vec2.fromValues(this.x, 150.0);

    this.normal = vec2.fromValues(normalX, 0.0);
  }

  update(deltaTime) {
    let y = this.game.mouseInput.position[1];

    if (y < 60.0) {
      y = 60.0;
    } else if (y > 540.0) {
      y = 540.0;
    }

    this.position = vec2.fromValues(this.x, y);

    super.update(deltaTime);
  }

  checkBallCollision(ball) {
    if (Math.abs(ball.position[0] - this.position[0]) <= ball.scaling[0]) {
      if (Math.abs(ball.position[1] - this.position[1]) <= ball.scaling[0] + 50.0) {
        return true;
      }
    }
  }
}

export default Paddle;
