'use strict';

import Entity from '../entity';
import SimpleShader from '../shaders/simple_shader';

const mat4 = require('gl-matrix').mat4;
const vec3 = require('gl-matrix').vec3;

class Ball extends Entity {
  constructor(game) {
    let vertices = [
      0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0
    ];

    for (let angle = 0.0; angle < 2.0 * Math.PI + Math.PI / 16.0; angle += Math.PI / 16.0) {
      vertices.push(Math.cos(angle), Math.sin(angle), 0.0, 1.0, 1.0, 1.0, 1.0);
    }

    let transformation = mat4.translate(mat4.create(), mat4.create(), vec3.fromValues(100.0, 100.0, 0.0));
    mat4.scale(transformation, transformation, vec3.fromValues(10.0, 10.0, 1.0));

    super(game, new SimpleShader(game.renderer), vertices, null, 'TRIANGLE_FAN', transformation);
  }
}

export default Ball;
