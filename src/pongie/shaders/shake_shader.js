'use strict';

import VertexAttribute from '../vertex_attribute';
import Shader from '../shader';

const vec2 = require('gl-matrix').vec2;

const vertexShaderSource = require('../../../shaders/shake.vert');
const fragmentShaderSource = require('../../../shaders/shake.frag');

const vertexAttributes = [
  new VertexAttribute('vertexTextureCoordinate', 2)
];

const uniforms = [
  new VertexAttribute('sampler', 1, 'UNSIGNED_BYTE'),
  new VertexAttribute('redDisplacement', 2),
  new VertexAttribute('greenDisplacement', 2),
  new VertexAttribute('blueDisplacement', 2)
];

class ShakeShader extends Shader {
  constructor(renderer) {
    super(renderer, vertexShaderSource, fragmentShaderSource, vertexAttributes, uniforms);

    this.samplerValue = 0;
    this.redDisplacementValue = vec2.create();
    this.greenDisplacementValue = vec2.create();
    this.blueDisplacementValue = vec2.create();
  }
}

export default ShakeShader;
