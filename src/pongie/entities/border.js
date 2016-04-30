'use strict';

import Entity from '../entity';
import SimpleShader from '../shaders/simple_shader';

const mat4 = require('gl-matrix').mat4;
const vec3 = require('gl-matrix').vec3;

class Border extends Entity {
  constructor(game, y = 0.0) {
    const vertices = [
        0.0,  0.0, 0.0, 1.0, 1.0, 1.0, 1.0,
        0.0, 10.0, 0.0, 1.0, 1.0, 1.0, 1.0,
      800.0, 10.0, 0.0, 1.0, 1.0, 1.0, 1.0,
      800.0,  0.0, 0.0, 1.0, 1.0, 1.0, 1.0
    ];

    const indices = [
      0, 1, 3,
      3, 1, 2
    ];

    let transformation = mat4.translate(mat4.create(), mat4.create(), vec3.fromValues(0.0, y, 0.0));

    super(game, new SimpleShader(game.renderer), vertices, indices, 'TRIANGLES', transformation);
  }
}

export default Border;
