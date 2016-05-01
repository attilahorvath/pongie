'use strict';

import VertexBuffer from './vertex_buffer';
import IndexBuffer from './index_buffer';

const mat4 = require('gl-matrix').mat4;
const vec2 = require('gl-matrix').vec2;
const vec3 = require('gl-matrix').vec3;

class Entity {
  constructor(game, shader, vertices = [], indices = null, type = 'TRIANGLES') {
    this.game = game;
    this.renderer = this.game.renderer;

    this.shader = shader;
    this.vertexBuffer = new VertexBuffer(this.renderer, vertices);
    this.indexBuffer = indices ? new IndexBuffer(this.renderer, indices) : null;
    this.type = type;

    this.position = vec2.create();
    this.scaling = vec2.fromValues(1.0, 1.0);
    this.angle = 0.0;

    this.velocity = vec2.create();
    this.normal = vec2.create();

    this.calculateTransformation();
  }

  update(deltaTime) {
    this.integrateValues(deltaTime);
    this.calculateTransformation();
  }

  draw() {
    this.renderer.draw(this.shader, this.vertexBuffer, this.indexBuffer, this.transformation, true, this.type);
  }

  integrateValues(deltaTime) {
    vec2.add(this.position, this.position, vec2.scale(vec2.create(), this.velocity, deltaTime));
  }

  calculateTransformation() {
    this.transformation = mat4.translate(mat4.create(), mat4.create(), vec3.fromValues(this.position[0], this.position[1], 0.0));
    mat4.rotateZ(this.transformation, this.transformation, this.angle);
    mat4.scale(this.transformation, this.transformation, vec3.fromValues(this.scaling[0], this.scaling[1], 1.0));
  }

  checkBallCollision() {
    return false;
  }
}

export default Entity;
