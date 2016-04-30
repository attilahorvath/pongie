'use strict';

import Entity from '../entity';
import SimpleShader from '../shaders/simple_shader';

const mat4 = require('gl-matrix').mat4;
const vec3 = require('gl-matrix').vec3;

class Paddle extends Entity {
  constructor(game, x = 0.0) {
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

    let transformation = mat4.translate(mat4.create(), mat4.create(), vec3.fromValues(x, 150.0, 0.0));

    super(game, new SimpleShader(game.renderer), vertices, indices, 'TRIANGLES', transformation);
  }
}

export default Paddle;
