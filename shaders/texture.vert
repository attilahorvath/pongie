uniform mat4 modelView;
uniform mat4 projection;

attribute vec3 vertexPosition;
attribute vec2 vertexTextureCoordinate;

varying vec2 textureCoordinate;

void main() {
  textureCoordinate = vertexTextureCoordinate;

  gl_Position = projection * modelView * vec4(vertexPosition, 1.0);
}
