'use strict';

import VertexBuffer from './vertex_buffer';
import IndexBuffer from './index_buffer';

const mat4 = require('gl-matrix').mat4;

class Entity {
  constructor(game, shader, vertices = [], indices = null, type = 'TRIANGLES', transformation = mat4.create()) {
    this.game = game;
    this.renderer = this.game.renderer;

    this.shader = shader;
    this.transformation = mat4.clone(transformation);
    this.vertexBuffer = new VertexBuffer(this.renderer, vertices);
    this.indexBuffer = indices ? new IndexBuffer(this.renderer, indices) : null;
    this.type = type;
  }

  draw() {
    this.renderer.draw(this.shader, this.vertexBuffer, this.indexBuffer, this.renderer.gl[this.type], (this.indexBuffer ? this.indexBuffer.elementCount : this.vertexBuffer.elementCount / this.shader.elementCount), this.transformation);
  }
}

export default Entity;
