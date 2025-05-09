const bg_vertex = `
uniform float time;
varying vec2 vUv;
varying vec3 vPosition;
uniform vec2 pixels;
float pi = 3.14;

void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const bg_fragment = `
uniform float time;
uniform float progress;
uniform sampler2D texture1;
uniform vec4 resolution;
uniform vec2 vUv;
varying vec3 vPosition;
float pi = 3.14;

// noise function
float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}

float noise(vec3 p){
    vec3 a = floor(p);
    vec3 d = p - a;
    d = d * d * (3.0 - 2.0 * d);

    vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
    vec4 k1 = perm(b.xyxy);
    vec4 k2 = perm(k1.xyxy + b.zzww);

    vec4 c = k2 + a.zzzz;
    vec4 k3 = perm(c);
    vec4 k4 = perm(c + 1.0);

    vec4 o1 = fract(k3 * (1.0 / 41.0));
    vec4 o2 = fract(k4 * (1.0 / 41.0));

    vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

    return o4.y * d.y + o4.x * (1.0 - d.y);
}

float line(vec2 uv, float offset) {
    return smoothstep(
        0.0, 0.5 + offset*0.5,
        0.5*abs((sin(uv.x*30.0) + offset*2.0))
    );
}

mat2 rotate2D(float angle) {
    return mat2(
        cos(angle),-sin(angle),
        sin(angle),cos(angle)
    );
}

void main() {
    float n = noise(vPosition+time);
    vec3 baseFirst = vec3(255./255., 255./255., 255./255.);
    vec3 accent = vec3(0., 0., 0.);
    vec3 baseSecond = vec3(110./255., 68./255., 255./255.);

    vec2 baseUV = rotate2D(n)*vPosition.xy*0.1;
    float basePattern = line(baseUV,0.5);
    float secondPattern = line(baseUV, 0.1);

    vec3 baseColor = mix(baseSecond, baseFirst, basePattern);
    vec3 secondBaseColor = mix(baseColor, accent, secondPattern);

    gl_FragColor = vec4(vec3(secondBaseColor), 1.);
}
`;

const main_vertex = `
uniform float time;
varying vec2 vUv;
varying vec3 vPosition;
uniform vec2 pixels;
float pi = 3.14;

void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const main_fragment = `
uniform float time;
uniform float progress;
uniform sampler2D texture1;
uniform vec4 resolution;
uniform vec2 vUv;
varying vec3 vPosition;
float pi = 3.14;

void main() {
    gl_FragColor = vec4(vec3(0., 0., 0.), 0.3);
}
`;

export default { bg_vertex, bg_fragment, main_vertex, main_fragment };
