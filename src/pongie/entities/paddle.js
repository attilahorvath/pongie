'use strict';

import Entity from '../entity';
import SimpleShader from '../shaders/simple_shader';

class Paddle extends Entity {
  constructor(game) {
    const vertices = [
      100.0, 100.0, 0.0, 1.0, 0.0, 0.0, 1.0,
      100.0, 500.0, 0.0, 0.0, 1.0, 0.0, 1.0,
      500.0, 500.0, 0.0, 0.0, 0.0, 1.0, 1.0,
      500.0, 100.0, 0.0, 0.0, 1.0, 1.0, 1.0
    ];

    const indices = [
      0, 1, 3,
      3, 1, 2
    ];

    super(game, new SimpleShader(game.renderer), vertices, indices);
  }
}

export default Paddle;
