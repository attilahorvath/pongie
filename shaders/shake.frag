precision mediump float;

uniform sampler2D sampler;
uniform vec2 redDisplacement;
uniform vec2 greenDisplacement;
uniform vec2 blueDisplacement;

varying vec2 textureCoordinate;

void main() {
  float r = texture2D(sampler, textureCoordinate - redDisplacement).r;
  float g = texture2D(sampler, textureCoordinate - greenDisplacement).g;
  float b = texture2D(sampler, textureCoordinate - blueDisplacement).b;
  float a = texture2D(sampler, textureCoordinate).a;

  gl_FragColor = vec4(r, g, b, a);
}
