const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/threeStage.3UrWRbSF.js","_astro/params.mlqW072v.js","_astro/preload-helper.BKYioxU4.js"])))=>i.map(i=>d[i]);
import{i as rt}from"./preact.module.QczHZ0vU.js";import{a as ve,i as Z,t as Et}from"./hooks.module.C-2hfT73.js";import{n as gt,r as Je,t as f}from"./jsxRuntime.module.DHpPeyhv.js";import{_ as Be,a as de,c as Fe,d as wt,f as ot,g as bt,h as Ue,i as De,l as yt,m as at,n as St,o as At,p as it,r as Rt,s as Mt,t as fe,u as Lt,v as Xe}from"./params.mlqW072v.js";import{n as Pt,t as kt}from"./theme.BhmkOqYk.js";import{t as Ft}from"./preload-helper.BKYioxU4.js";function Ge(t){return t>=8}function he(t,n){return n.map(([r,o,i])=>[r,o,i/t])}var Dt={8:he(16,[[1,0,7],[-1,1,3],[0,1,5],[1,1,1]]),9:he(48,[[1,0,7],[2,0,5],[-2,1,3],[-1,1,5],[0,1,7],[1,1,5],[2,1,3],[-2,2,1],[-1,2,3],[0,2,5],[1,2,3],[2,2,1]]),10:he(42,[[1,0,8],[2,0,4],[-2,1,2],[-1,1,4],[0,1,8],[1,1,4],[2,1,2],[-2,2,1],[-1,2,2],[0,2,4],[1,2,2],[2,2,1]]),11:he(8,[[1,0,1],[2,0,1],[-1,1,1],[0,1,1],[1,1,1],[0,2,1]]),12:he(32,[[1,0,8],[2,0,4],[-2,1,2],[-1,1,4],[0,1,8],[1,1,4],[2,1,2]]),13:he(32,[[1,0,5],[2,0,3],[-2,1,2],[-1,1,4],[0,1,5],[1,1,4],[2,1,2],[-1,2,2],[0,2,3],[1,2,2]])},Ct=2e5;function Nt(t,n,r,o,i){if(!t)return n.pixelSize;const e=r*i*o*i,d=Math.sqrt(e/(Ct*n.pixelAspect));return Math.max(n.pixelSize,Math.ceil(d))}var oe=new Float32Array(0);function Ut(t,n,r,o,i,e){const d=Dt[o];if(!d)return;const s=n*r;oe.length<s&&(oe=new Float32Array(s));for(let l=0;l<s;l++)oe[l]=t[l*4]/255;const m=Math.max(2,Math.round(i))-1,u=Math.max(0,e);for(let l=0;l<r;l++){const w=(l&1)===0;for(let T=0;T<n;T++){const R=w?T:n-1-T,b=l*n+R,I=oe[b],U=Math.min(1,Math.max(0,Math.round(I*m)/m)),L=(I-U)*u;if(oe[b]=U,L!==0)for(const[M,c,x]of d){const E=R+(w?M:-M),S=l+c;if(E<0||E>=n||S>=r)continue;const k=S*n+E;oe[k]=oe[k]+L*x}}}for(let l=0;l<s;l++){const w=Math.min(255,Math.max(0,Math.round(oe[l]*255))),T=l*4;t[T]=w,t[T+1]=w,t[T+2]=w,t[T+3]=255}}var It={ditherStrength:[.65,1.3],ditherOffset:[-.12,.12],matrixRotation:[0,360],pixelSize:[2,8],pixelAspect:[.9,1.3],levels:[3,6],brightness:[-.12,.14],contrast:[1.1,1.9],gamma:[.85,1.35],markFloor:[.5,.78],letterFloat:[.004,.045],letterSway:[0,.014],letterSpeed:[.15,.7],letterStagger:[.2,1.4],speed:[.1,.9],warpAmount:[.2,1.5],warpFrequency:[.6,3.2],noiseDrift:[0,1.2],scanIntensity:[0,.45],scanPitch:[2,6],scanRoll:[0,.6],scanRollWidth:[.05,.35],bloom:[0,.8],grain:[0,.25],vignette:[.1,.7],lightAzimuth:[62,118],lightElevation:[45,78]},_t=new Set(["dprCap","customHueA","customHueB","customSpread"]),Bt={ditherMode:new Set([0])},Xt={invert:.15,temporalDither:.25,surfaceStable:.4};function Oe(t,n){return t+Math.random()*(n-t)}function Gt(t,n){const r=Math.round((n-t.min)/t.step)*t.step+t.min,o=Math.min(t.max,Math.max(t.min,r));return Number(o.toFixed(4))}function lt(){const t=Math.floor(Math.random()*360),n=Oe(40,200)*(Math.random()<.5?-1:1);return{palette:ot,customHueA:t,customHueB:Math.round(((t+n)%360+360)%360),customSpread:Number(Oe(.2,.9).toFixed(2))}}function Ot(){return Math.random()<.5?{palette:Math.floor(Math.random()*it.length)}:lt()}var zt=10,Wt=4;function Qe(t,n,r,o){const i=Math.min(1,Math.max(0,(t-.5)*n+.5+r));return Math.pow(i,1/Math.max(o,.001))}function st(t){const n=t.pixelAspect,r=Math.max(2,Math.floor(zt/n));t.pixelSize>r&&(t.pixelSize=r);const o=t.pixelSize*n,i=Math.min(1,Math.max(0,(o-Wt)/6)),e=t.contrast,d=t.gamma,s=.38;if(Qe(.42,e,t.brightness,d)>s){const u=Math.pow(s,d)-.5- -.08000000000000002*e;t.brightness=Math.max(-.5,Math.floor(u*100)/100)}const m=.62+i*.23;if(Qe(t.markFloor,e,t.brightness,d)<m){const u=(Math.pow(m,d)-.5-t.brightness)/e+.5;t.markFloor=Math.min(.9,Math.max(0,Math.ceil(u*100)/100))}if(o>8&&(t.surfaceStable=!1),o>6&&(t.scanIntensity=Math.min(t.scanIntensity,.25),t.scanPitch=Math.max(t.scanPitch,3)),o>7&&t.wordmarkText===2&&(t.wordmarkText=0),t.letterMode===2){const u=Math.max(2,Math.floor(6/n));t.pixelSize>u&&(t.pixelSize=u),t.extrudeDepth=Math.min(t.extrudeDepth,.07),t.swayMax=Math.min(t.swayMax,26),t.perspective=Math.min(t.perspective,.45),t.faceLight=Math.max(t.faceLight,.45)}}function ct(){const t={};for(const n of De){const r=n.key;if(!(_t.has(r)||r==="palette"))if(n.kind==="toggle")t[r]=Math.random()<(Xt[r]??.5);else if(n.kind==="select"){const o=Bt[r],i=o?n.options.filter(e=>!o.has(e.value)):n.options;t[r]=i[Math.floor(Math.random()*i.length)].value}else{const[o,i]=It[r]??[n.min,n.max];t[r]=Gt(n,Oe(o,i))}}return st(t),{...t,...Ot()}}var Kt=.25;function Ze(){const t={...ct(),letterMode:Math.random()<Kt?2:0,ditherMode:1+Math.floor(Math.random()*7),sortMode:0,wordmarkText:0};return st(t),t}var qt="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";function Yt(){const t=atob(qt),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}var jt=`#version 300 es
precision highp float;

// One program, three roles selected by uOutputMode:
//
//   0 DIRECT  field -> letters -> tone -> scan -> ordered dither -> palette
//   1 LUMA    same, but stops at luminance and writes it to a framebuffer for
//             the CPU pass (errorDiffusion.ts, pixelSort.ts)
//   2 PALETTE the CPU already quantised (error diffusion) — just ramp it
//   3 SORTED  the CPU returned continuous luminance (pixel sort only), so the
//             ordered dither still has to run here
//
// Letters arrive one of two ways (uLetterMode): a flat coverage lookup in the
// atlas, or a texture handed over by three.js. Both resolve to a luminance that
// then goes through the identical dither pipeline, which is what keeps the look
// consistent across modes.
//
// The pixellation is NOT done here. The canvas backing store is sized down by
// \`pixelSize\` on the CPU and upscaled by the browser with image-rendering:
// pixelated, so gl_FragCoord.xy is already the dither cell coordinate.

in vec2 vUv;
out vec4 fragColor;

// Must match MAX_LETTERS in wordmark.ts.
const int MAX_LETTERS = 12;
const float TAU = 6.28318530718;
const float PI = 3.14159265359;

// 1 was the in-shader SDF raymarch. It was removed once three.js gave real
// geometry: two implementations of the same idea, and the raymarch was the one
// costing a second of driver compile time on every first visit. The value is
// left unused rather than reassigned so old shared links stay valid — an
// unknown select value coerces back to the default. See LANDING.md.
const int LETTER_FLAT = 0;
const int LETTER_THREE = 2;

uniform int uOutputMode;
// Atlas: g = coverage, a = 255, r and b unused. Coverage lives in green rather
// than alpha because the source canvas is premultiplied and discards RGB
// wherever alpha is 0 — which is exactly outside the glyph, where this has to
// read. See wordmark.ts.
uniform sampler2D uWordmark;
uniform sampler2D uDiffused;
uniform sampler2D uBlueNoise;
uniform sampler2D uThree;
uniform vec2 uResolution;  // backing-store size, device px
uniform float uTime;
uniform float uFrame;
uniform float uBlueNoiseSize;
uniform vec2 uPointer;  // uv space; x < 0.0 means "no pointer"

uniform int uLetterCount;
uniform vec4 uLetterCell[MAX_LETTERS];
uniform vec4 uLetterRect[MAX_LETTERS];
// Explicit sampling LOD. The atlas lookups sit in non-uniform control flow,
// where implicit derivatives — and therefore texture() — are undefined.
uniform float uMarkLod;

// The scroll cue: atlas cell, destination rect, and 0/1 to switch it off. It is
// sampled outside the letter-mode branch so it survives every mode, including
// three.js, where the letters come from a different texture entirely.
uniform vec4 uArrowCell;
uniform vec4 uArrowRect;
uniform float uArrowAlpha;

// How present the wordmark is, 0..1. The home page fades it out as the visitor
// scrolls into the project menu: the canvas is fixed, so the letters do not
// leave the screen on their own, and the menu below is deliberately not on a
// card. Fading beats moving — switching to the compact layout mid-scroll
// rebuilds the glyph atlas, and this is one uniform.
uniform float uMarkAlpha;

uniform vec3 uPaletteLo;
uniform vec3 uPaletteMid;
uniform vec3 uPaletteHi;

// Uniform names are \`u\` + the PARAMS key, capitalised. See params.ts.
uniform int uLetterMode;
uniform float uLetterFloat;
uniform float uLetterSway;
uniform float uLetterSpeed;
uniform float uLetterStagger;
uniform float uExtrudeDepth;
uniform float uBevel;
uniform int uSwayMode;
uniform float uSwayMax;
uniform float uSwaySpeed;
uniform float uSwayYaw;
uniform float uSwayPitch;
uniform float uSwayRoll;
uniform float uLightAzimuth;
uniform float uLightElevation;
uniform float uFaceLight;
uniform float uRimLight;
uniform float uPerspective;
uniform float uMarkFloor;
uniform int uDitherMode;
uniform float uDitherStrength;
uniform float uDitherOffset;
uniform float uMatrixRotation;
uniform bool uSurfaceStable;
uniform float uLevels;
uniform bool uInvert;
uniform float uBrightness;
uniform float uContrast;
uniform float uGamma;
uniform float uSpeed;
uniform float uWarpAmount;
uniform float uWarpFrequency;
uniform float uNoiseDrift;
uniform bool uTemporalDither;
uniform int uScanMode;
uniform float uScanIntensity;
uniform float uScanPitch;
uniform float uScanRoll;
uniform float uScanRollWidth;
uniform float uPointerWarp;
uniform float uPointerRadius;
uniform float uPointerLift;
uniform float uBloom;
uniform float uGrain;
uniform float uVignette;

// ── noise ──────────────────────────────────────────────────────────────────

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float sum = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 5; i++) {
    sum += amp * vnoise(p);
    p *= 2.03;
    amp *= 0.5;
  }
  return sum;
}

// ── dither matrices ────────────────────────────────────────────────────────

// Recursive Bayer construction: each level is the previous one at half scale,
// quarter weight, plus a fresh 2×2. Every level returns [0,1).
// 32×32 quantises to 1/1024, which is why this shader is highp.
float bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2.0 + a.y * a.y * 0.75);
}
float bayer4(vec2 a) { return bayer2(0.5 * a) * 0.25 + bayer2(a); }
float bayer8(vec2 a) { return bayer4(0.5 * a) * 0.25 + bayer2(a); }
float bayer16(vec2 a) { return bayer8(0.5 * a) * 0.25 + bayer2(a); }
float bayer32(vec2 a) { return bayer16(0.5 * a) * 0.25 + bayer2(a); }

// A real void-and-cluster LUT (blueNoise.ts), wrapped by REPEAT.
float blueNoise(vec2 p) {
  return textureLod(uBlueNoise, (floor(p) + 0.5) / uBlueNoiseSize, 0.0).r;
}

// Free rotation rather than four right angles: off-axis angles break the
// matrix's exact tiling and produce moiré, which is the interesting part.
vec2 rotateCell(vec2 p, float degrees) {
  if (degrees == 0.0) return p;
  float a = radians(degrees);
  float s = sin(a);
  float c = cos(a);
  return vec2(c * p.x - s * p.y, s * p.x + c * p.y);
}

float ditherValue(vec2 cell) {
  if (uDitherMode == 0) return 0.5;  // neutral: pure quantisation, no dither

  vec2 p = rotateCell(cell, uMatrixRotation);

  if (uDitherMode == 6) {
    // Temporal blue noise offsets the *value* by the golden ratio, not the
    // coordinate: that is what preserves the blue-noise spectrum frame to
    // frame instead of just jittering the pattern around.
    float v = blueNoise(p);
    return uTemporalDither ? fract(v + uFrame * 0.6180339887498949) : v;
  }

  if (uTemporalDither) {
    p += vec2(mod(uFrame, 8.0), mod(uFrame * 3.0, 8.0));
  }

  if (uDitherMode == 1) return bayer2(p);
  if (uDitherMode == 2) return bayer4(p);
  if (uDitherMode == 3) return bayer8(p);
  if (uDitherMode == 4) return bayer16(p);
  if (uDitherMode == 5) return bayer32(p);
  return hash21(p);
}

// ── letter placement ───────────────────────────────────────────────────────

// Slow, staggered drift — the character-select bob. Phase is per letter, so the
// word breathes rather than bouncing as one block.
vec2 letterDrift(int i) {
  float phase = float(i) * uLetterStagger;
  float t = uTime * uLetterSpeed;
  return vec2(
    sin(t * 0.63 + phase * 1.7) * uLetterSway,
    sin(t + phase) * uLetterFloat
  );
}

// The letter nearest the cursor rises — the actual character-select gesture.
// Horizontal proximity only; vertical would fight the float.
float letterLift(vec4 dst) {
  if (uPointerLift <= 0.0 || uPointer.x < 0.0) return 0.0;
  float centre = dst.x + dst.z * 0.5;
  float d = (uPointer.x - centre) / max(dst.z * 0.5, 1e-4);
  return uPointerLift * exp(-d * d * 1.5);
}

vec2 letterOffset(int i, vec4 dst) {
  return letterDrift(i) + vec2(0.0, letterLift(dst));
}

// Bobs on the same drift as the letters, at a phase of its own so it never
// beats against them.
float sampleArrow(vec2 uv) {
  if (uArrowAlpha <= 0.0) return 0.0;

  float bob = sin(uTime * uLetterSpeed * 1.7 + 2.1) * uLetterFloat * 0.6;
  vec2 local = (uv - vec2(0.0, bob) - uArrowRect.xy) / uArrowRect.zw;
  if (any(lessThan(local, vec2(0.0))) || any(greaterThan(local, vec2(1.0)))) {
    return 0.0;
  }

  // LOD 0, unlike the letters. The cue's cell occupies only the top slice of
  // the atlas row, so at the mip level the glyphs use it averages mostly with
  // the empty space underneath and fades to nothing. It is hard-edged pixel art
  // anyway — there is no detail below the block grid for a mip to preserve.
  return textureLod(uWordmark, uArrowCell.xy + local * uArrowCell.zw, 0.0).g * uArrowAlpha;
}

// ── flat letters ───────────────────────────────────────────────────────────

// \`anchor\` returns the winning letter's offset in whole device pixels. Feeding
// \`cell - anchor\` to the dither matrix locks the pattern to the glyph, so the
// letters carry their texture instead of swimming through a screen-fixed grid.
// Rounding to whole pixels is what makes it stable rather than merely moving.
float sampleMark(vec2 uv, float lod, out vec2 anchor) {
  float a = 0.0;
  anchor = vec2(0.0);

  for (int i = 0; i < MAX_LETTERS; i++) {
    if (i >= uLetterCount) break;

    vec4 dst = uLetterRect[i];
    vec2 offset = letterOffset(i, dst);
    vec2 local = (uv - offset - dst.xy) / dst.zw;
    if (any(lessThan(local, vec2(0.0))) || any(greaterThan(local, vec2(1.0)))) {
      continue;
    }

    vec4 src = uLetterCell[i];
    float s = textureLod(uWordmark, src.xy + local * src.zw, lod).g;
    if (s > a) {
      a = s;
      anchor = floor(offset * uResolution + 0.5);
    }
  }
  return a;
}

// ── scan filters ───────────────────────────────────────────────────────────

// All of these modulate luminance rather than colour: at this point in the
// pipeline the image is still monochrome, and colour only arrives with the
// palette ramp. So "aperture grille" here means the grille's stripe pattern,
// not an RGB triad.
float scanMask(vec2 cell) {
  if (uScanMode == 0) return 1.0;

  float pitch = max(uScanPitch, 1.0);

  if (uScanMode == 1) return 0.5 + 0.5 * cos(TAU * cell.y / pitch);
  if (uScanMode == 2) return 0.5 + 0.5 * cos(TAU * cell.x / pitch);

  if (uScanMode == 3) {
    return mod(floor(cell.x / pitch), 3.0) < 2.0 ? 1.0 : 0.3;
  }

  if (uScanMode == 4) {
    float row = mod(floor(cell.y / pitch), 2.0);
    return mod(floor(cell.x / pitch) + row * 1.5, 3.0) < 2.0 ? 1.0 : 0.3;
  }

  if (uScanMode == 5) {
    float row = mod(floor(cell.y / (pitch * 2.0)), 2.0);
    float phase = mod(floor(cell.x / pitch) + row * 1.5, 3.0);
    float slot = mod(floor(cell.y / pitch), 4.0) < 3.0 ? 1.0 : 0.55;
    return (phase < 2.0 ? 1.0 : 0.3) * slot;
  }

  // Interlace: alternate rows drop out, flipping every frame.
  return mod(floor(cell.y) + floor(uFrame), 2.0) < 1.0 ? 1.0 : 0.25;
}

// A bright band sweeping down the screen, like a camera out of sync with a CRT.
float scanRoll(vec2 uv) {
  if (uScanRoll <= 0.0) return 1.0;
  float pos = fract(uTime * uScanRoll * 0.25);
  float d = abs(fract(uv.y - pos + 0.5) - 0.5);
  return 1.0 + smoothstep(uScanRollWidth, 0.0, d) * 0.4;
}

// ── palette ────────────────────────────────────────────────────────────────

vec3 rampColor(float t) {
  return t < 0.5
    ? mix(uPaletteLo, uPaletteMid, t * 2.0)
    : mix(uPaletteMid, uPaletteHi, (t - 0.5) * 2.0);
}

float quantise(float lum, vec2 ditherCell) {
  float steps = max(uLevels, 2.0) - 1.0;
  float d = ditherValue(ditherCell) - 0.5 + uDitherOffset;
  return clamp(floor(lum * steps + 0.5 + d * uDitherStrength) / steps, 0.0, 1.0);
}

// ── main ───────────────────────────────────────────────────────────────────

void main() {
  // The CPU has already quantised — just colour it.
  if (uOutputMode == 2) {
    fragColor = vec4(rampColor(texture(uDiffused, vUv).r), 1.0);
    return;
  }

  // Pixel-sorted luminance came back continuous, so it still needs dithering.
  // Surface-stable anchoring is unavailable here — the per-letter offsets do
  // not survive the round trip through the CPU.
  if (uOutputMode == 3) {
    float sorted = texture(uDiffused, vUv).r;
    fragColor = vec4(rampColor(quantise(sorted, gl_FragCoord.xy)), 1.0);
    return;
  }

  vec2 uv = vUv;
  vec2 cell = gl_FragCoord.xy;
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0);

  float t = uTime * uSpeed;

  vec2 sp = p * uWarpFrequency + vec2(0.0, t * 0.15 * uNoiseDrift);

  // The field bends toward the cursor. Displacing the *sample* coordinate
  // rather than the output keeps it continuous and costs one extra add.
  if (uPointerWarp > 0.0 && uPointer.x >= 0.0) {
    vec2 toPointer = p - (uPointer - 0.5) * vec2(aspect, 1.0);
    float falloff = exp(-dot(toPointer, toPointer) / max(uPointerRadius * uPointerRadius, 1e-4));
    sp += normalize(toPointer + 1e-6) * falloff * uPointerWarp;
  }

  // Animated field: two rounds of domain warp over fbm.
  vec2 q = vec2(fbm(sp), fbm(sp + vec2(5.2, 1.3)));
  vec2 r = vec2(
    fbm(sp + uWarpAmount * q + vec2(1.7, 9.2) + t * 0.15),
    fbm(sp + uWarpAmount * q + vec2(8.3, 2.8) - t * 0.13)
  );
  float field = fbm(sp + uWarpAmount * r);

  float mark = 0.0;
  float shaded = 0.0;
  vec2 anchor = vec2(0.0);

  if (uLetterMode == LETTER_THREE) {
    // three.js has already lit and rasterised the glyphs at grid resolution;
    // r carries luminance, a carries coverage.
    vec4 three = texture(uThree, uv);
    mark = three.a;
    shaded = three.r;
    // Surface-stable anchoring needs per-letter offsets the GPU does not have
    // in this mode, so it degrades to screen-locked.
  } else {
    mark = sampleMark(uv, uMarkLod, anchor);
  }

  // Applied to coverage rather than to the final colour, so the letters recede
  // *into* the field instead of dissolving over the top of it.
  mark *= uMarkAlpha;

  // Bloom reuses the flat coverage at a coarser mip rather than ring taps: one
  // fetch per letter instead of eight, and the glow spreads into the
  // transparent padding baked into every atlas cell.
  float glow = 0.0;
  if (uBloom > 0.0 && uLetterMode != LETTER_THREE) {
    vec2 ignored;
    glow = sampleMark(uv, uMarkLod + 1.5 + uBloom * 2.5, ignored) * uMarkAlpha;
  }

  // Figure/ground is a range contract, not a lighting accident: the background
  // is confined to [0, 0.42] and the letters to [uMarkFloor, 1]. At the default
  // floor of 0.62 that leaves a 0.20 guard band, so no letter pixel can ever be
  // darker than a background pixel and the wordmark cannot locally invert.
  //
  // Flat mode always worked because it hardcoded exactly this. The 3D mode used
  // its raw shading, whose floor is the ambient term — well inside the
  // background's range, which is why a shallow extrusion or a low face light
  // read as a hole rather than a letter.
  //
  // The remap is a compression, not a clamp: the shading keeps its full
  // relative range, it just lands in the legible band. Dropping the floor below
  // 0.42 deliberately re-opens the overlap, which is a look, not a bug.
  float relief = uLetterMode == LETTER_FLAT ? field : shaded;
  float inside = uMarkFloor + relief * (1.0 - uMarkFloor);
  float lum = mix(field * 0.42, inside, mark);

  // The cue joins the picture as a flat mark, under the same range contract as
  // everything else — so it is dithered, palette-mapped and toned with the
  // letters instead of sitting on top of them as a different medium.
  float arrow = sampleArrow(uv);
  lum = mix(lum, uMarkFloor + field * (1.0 - uMarkFloor), arrow);

  lum += uBloom * glow * (1.0 - max(mark, arrow)) * 0.6;

  // Tone.
  lum = (lum - 0.5) * uContrast + 0.5 + uBrightness;
  lum = clamp(lum, 0.0, 1.0);
  lum = pow(lum, 1.0 / max(uGamma, 0.001));

  if (uScanIntensity > 0.0 || uScanRoll > 0.0) {
    lum *= mix(1.0, scanMask(cell), uScanIntensity) * scanRoll(uv);
  }
  if (uGrain > 0.0) {
    lum += (hash21(cell + fract(uTime) * 137.0) - 0.5) * uGrain * 0.35;
  }
  if (uVignette > 0.0) {
    lum *= mix(1.0, clamp(1.0 - dot(p, p) * 0.55, 0.0, 1.0), uVignette);
  }

  if (uInvert) lum = 1.0 - lum;
  lum = clamp(lum, 0.0, 1.0);

  // Hand off to the CPU for the sequential kernels.
  if (uOutputMode == 1) {
    fragColor = vec4(lum, lum, lum, 1.0);
    return;
  }

  // The dither value is centred on zero, so strength 0 collapses to plain
  // posterisation.
  fragColor = vec4(rampColor(quantise(lum, uSurfaceStable ? cell - anchor : cell)), 1.0);
}
`,Ht=`#version 300 es

// Full-screen triangle generated from gl_VertexID — no vertex buffers, no VAO
// attributes to bind. Three verts covering clip space with the excess clipped.

out vec2 vUv;

void main() {
  vec2 p = vec2(
    (gl_VertexID == 1) ? 3.0 : -1.0,
    (gl_VertexID == 2) ? 3.0 : -1.0
  );
  vUv = p * 0.5 + 0.5;
  gl_Position = vec4(p, 0.0, 1.0);
}
`;function ut(t){return t!==0}var pe=new Uint32Array(256);function Vt(t,n,r,o,i){if(o<2)return;let e=255,d=0;for(let u=0;u<o;u++){const l=t[n+u*r];pe[l]=pe[l]+1,l<e&&(e=l),l>d&&(d=l)}let s=0;const m=(u,l)=>{for(let w=0;w<l;w++){const T=n+s++*r;t[T]=u,t[T+1]=u,t[T+2]=u}};if(i)for(let u=d;u>=e;u--){const l=pe[u];pe[u]=0,m(u,l)}else for(let u=e;u<=d;u++){const l=pe[u];pe[u]=0,m(u,l)}}function Jt(t,n,r,o,i,e,d,s){if(!ut(o))return;const m=o===1,u=m?r:n,l=m?n:r,w=m?n*4:4,T=m?4:n*4,R=Math.min(i,e)*255,b=Math.max(i,e)*255,I=Math.max(2,Math.round(d));for(let U=0;U<u;U++){const L=U*w;let M=-1;for(let c=0;c<=l;c++){const x=c<l?t[L+c*T]:-1,E=x>=R&&x<=b;if(E&&M<0&&(M=c),M<0)continue;const S=c-M;(!E||S>=I)&&(Vt(t,L+M*T,T,S,s),M=E?c:-1)}}}var Qt=4096,Zt=.35,$t=6,en=[[2,0,2,1],[2,1,2,1],[2,2,2,1],[0,3,6,1],[1,4,4,1],[2,5,2,1]],tn=.45,nn=.75;function rn(t,n){const r=n*tn,o=n*nn;if(o<=r)return t>=o?0:1;const i=(t-r)/(o-r);return 1-Math.min(1,Math.max(0,i))}function on(t,n,r,o,i,e,d="hero"){const s=t.getContext("2d",{willReadFrequently:!0});if(!s)return null;const m=[...i].slice(0,12);if(m.length===0)return null;const u=200;s.font=Ue(e,u);const l=s.measureText(i),w=l.actualBoundingBoxAscent+l.actualBoundingBoxDescent;if(l.width<=0||w<=0)return null;const T=d==="compact",R=T?.3:n<640?.94:.84,b=T?.1:.58,I=n*R/l.width*u,U=r*b/w*u,L=Math.max(1,Math.min(I,U));s.font=Ue(e,L);const M=s.measureText(i),c=M.width,x=M.actualBoundingBoxAscent,E=M.actualBoundingBoxDescent,S=[];for(let y=0;y<=m.length;y++)S.push(s.measureText(m.slice(0,y).join("")).width);const k=L*Zt,q=x+E+k*2,F=m.map((y,A)=>S[A+1]-S[A]),ie=F.reduce((y,A)=>y+A+k*2,0),W=n<640,D=Math.round(r*(W?.095:.075)),H=r*(W?.7:.87),P=Math.max(.1,Math.min(o,Qt/(ie+D))),C=Math.ceil(D*P);t.width=Math.max(1,Math.ceil(ie*P)+C),t.height=Math.max(1,Math.ceil(q*P)),s.clearRect(0,0,t.width,t.height),s.font=Ue(e,L*P),s.textAlign="left",s.textBaseline="alphabetic",s.fillStyle="#ffffff";const X=(n-c)/2,G=(T?Math.max(L*.75,r*.085):r*(n<640?.36:.5))+(x-E)/2-x-k,$=[];let K=0;for(let y=0;y<m.length;y++){const A=F[y]+k*2,Y=A*P;s.fillText(m[y],K+k*P,(k+x)*P),$.push({cell:[K/t.width,0,Y/t.width,1],rect:[(X+S[y]-k)/n,1-(G+q)/r,A/n,q/r]}),K+=Y}const O=D*P/$t;for(const[y,A,Y,le]of en)s.fillRect(Math.round(K+y*O),Math.round(A*O),Math.ceil(Y*O),Math.ceil(le*O));const ee=D*P/t.height,te={cell:[K/t.width,1-ee,D*P/t.width,ee],rect:[(n-D)/2/n,1-(H+D/2)/r,D/n,D/r]},_=s.getImageData(0,0,t.width,t.height),z=t.width*t.height;for(let y=0;y<z;y++){const A=y*4;_.data[A+1]=_.data[A+3],_.data[A]=0,_.data[A+2]=0,_.data[A+3]=255}return s.putImageData(_,0,0),{letters:$,scale:P,arrow:te}}var an=0,ln=1,sn=2,cn=3;function Ie(t){return Ge(t.ditherMode)||ut(t.sortMode)}function un(t){return t.split(`
`).map((n,r)=>`${String(r+1).padStart(4)} | ${n}`).join(`
`)}function $e(t,n,r){const o=n===t.VERTEX_SHADER?"vertex":"fragment";if(typeof r!="string"||r.trim().length===0)throw new Error(`${o} shader source is empty (got ${typeof r}) — the .glsl?raw import resolved to nothing`);const i=t.createShader(n);if(!i)throw new Error(`could not create ${o} shader (context lost: ${t.isContextLost()})`);if(t.shaderSource(i,r),t.compileShader(i),!t.getShaderParameter(i,t.COMPILE_STATUS)){const e=t.getShaderInfoLog(i),d=t.isContextLost();throw t.deleteShader(i),d||e===null?new Error(`${o} shader could not be compiled — WebGL context is ${d?"lost":"unresponsive"} (info log: ${e===null?"null":"empty"}). This is a context failure, not a GLSL error. Source was ${r.length} bytes starting "${r.slice(0,20).replace(/\n/g,"\\n")}".`):(console.error(`[dither] ${o} shader source:
${un(r)}`),new Error(`${o} shader compile failed:
${e}`))}return i}function dn(t,n,r){const o=t.createProgram();if(!o)throw new Error("could not create program");const i=$e(t,t.VERTEX_SHADER,n),e=$e(t,t.FRAGMENT_SHADER,r);if(t.attachShader(o,i),t.attachShader(o,e),t.linkProgram(o),t.deleteShader(i),t.deleteShader(e),!t.getProgramParameter(o,t.LINK_STATUS)){const d=t.getProgramInfoLog(o);throw t.deleteProgram(o),new Error(`program link failed: ${d}`)}return o}function fn(t){let n="hero",r=!1,o=1;const i=t.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,powerPreference:"low-power"});if(!i)throw new Error("WebGL2 unavailable");const e=i;if(e.isContextLost())throw new Error("WebGL2 context was lost immediately after creation — the browser is likely out of contexts. A full page reload usually clears it.");const d=a=>{a.preventDefault(),console.error("[dither] WebGL context lost")};t.addEventListener("webglcontextlost",d);const s=dn(e,Ht,jt);e.useProgram(s);const m=e.createVertexArray();e.bindVertexArray(m);const u=Mt.map(a=>({key:a.key,kind:a.kind,loc:e.getUniformLocation(s,wt(a.key))})),l=a=>e.getUniformLocation(s,a),w=l("uOutputMode"),T=l("uResolution"),R=l("uTime"),b=l("uFrame"),I=l("uPointer"),U=l("uLetterCount"),L=l("uLetterCell"),M=l("uLetterRect"),c=l("uMarkLod"),x=l("uArrowCell"),E=l("uArrowRect"),S=l("uArrowAlpha"),k=l("uMarkAlpha"),q=l("uPaletteLo"),F=l("uPaletteMid"),ie=l("uPaletteHi");e.uniform1i(l("uWordmark"),0),e.uniform1i(l("uDiffused"),1),e.uniform1i(l("uBlueNoise"),2),e.uniform1i(l("uThree"),3),e.uniform1f(l("uBlueNoiseSize"),64);const W=e.createTexture();e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,W),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0);const D=document.createElement("canvas"),H=new Float32Array(48),P=new Float32Array(48);let C="",X=1,G=[];function $(a,p,v,g,Q){const N=Xe(a.wordmarkText),Ye=Be(a.fontFace),je=`${p}x${v}@${g}|${N}|${Ye.name}|${n}`;if(je!==C){const ce=on(D,p,v,g,N,Ye,n);if(!ce)return;C=je,X=ce.scale,G=ce.letters,e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,W),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,D),e.generateMipmap(e.TEXTURE_2D),H.fill(0),P.fill(0),ce.letters.forEach((He,Ve)=>{H.set(He.cell,Ve*4),P.set(He.rect,Ve*4)}),e.useProgram(s),e.uniform1i(U,ce.letters.length),e.uniform4fv(L,H),e.uniform4fv(M,P),e.uniform4fv(x,ce.arrow.cell),e.uniform4fv(E,ce.arrow.rect)}const Tt=X*Q/g;e.useProgram(s),e.uniform1f(c,Math.max(0,Math.log2(Math.max(Tt,1))))}const K=e.createTexture();e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,K),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texImage2D(e.TEXTURE_2D,0,e.R8,64,64,0,e.RED,e.UNSIGNED_BYTE,Yt()),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0);const O=e.createTexture();e.activeTexture(e.TEXTURE3),e.bindTexture(e.TEXTURE_2D,O),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);const ee=e.createFramebuffer(),te=e.createTexture(),_=e.createTexture(),z=2,y=Array.from({length:z},()=>e.createBuffer());for(const a of[te,_])e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,a),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let A=new Uint8Array(0),Y=0,le=0;const j=Array(z).fill(null);let V=0,J=0;function ne(){for(let a=0;a<z;a++){const p=j[a];p&&e.deleteSync(p),j[a]=null}V=0,J=0}function Te(a,p){if(!(a===Y&&p===le)){Y=a,le=p,A=new Uint8Array(a*p*4),ne(),e.activeTexture(e.TEXTURE1),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1);for(const v of[te,_])e.bindTexture(e.TEXTURE_2D,v),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,a,p,0,e.RGBA,e.UNSIGNED_BYTE,null);e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.bindTexture(e.TEXTURE_2D,_);for(const v of y)e.bindBuffer(e.PIXEL_PACK_BUFFER,v),e.bufferData(e.PIXEL_PACK_BUFFER,a*p*4,e.STREAM_READ);e.bindBuffer(e.PIXEL_PACK_BUFFER,null),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,W),e.bindFramebuffer(e.FRAMEBUFFER,ee),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,te,0),e.bindFramebuffer(e.FRAMEBUFFER,null)}}let Ee="";function Ae(a){const p=`${a.palette}|${a.customHueA}|${a.customHueB}|${a.customSpread}`;if(p===Ee)return;Ee=p;const v=at(a.palette,a.customHueA,a.customHueB,a.customSpread);e.uniform3fv(q,v.lo),e.uniform3fv(F,v.mid),e.uniform3fv(ie,v.hi)}let re=1;function Ce(a){const p=t.clientWidth||window.innerWidth,v=t.clientHeight||window.innerHeight,g=Math.min(window.devicePixelRatio||1,a.dprCap);re=Nt(Ie(a),a,p,v,g);const Q=Math.max(1,Math.floor(p*g/re)),N=Math.max(1,Math.floor(v*g/(re*a.pixelAspect)));(t.width!==Q||t.height!==N)&&(t.width=Q,t.height=N),e.viewport(0,0,Q,N),$(a,p,v,g,re),Ie(a)&&Te(Q,N)}function se(){C=""}function me(a){const{values:p}=a;for(const v of u){if(!v.loc)continue;const g=p[v.key];v.kind==="toggle"?e.uniform1i(v.loc,g?1:0):v.kind==="select"?e.uniform1i(v.loc,g):e.uniform1f(v.loc,g)}e.uniform2f(T,t.width,t.height),e.uniform1f(R,a.time),e.uniform1f(b,a.frame),e.uniform2f(I,a.pointer[0],a.pointer[1]),e.uniform1f(S,r?1:0),e.uniform1f(k,o),Ae(p)}function Re(a,p){p.letterMode!==2||!a||a.width===0||(e.activeTexture(e.TEXTURE3),e.bindTexture(e.TEXTURE_2D,O),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,a))}function Ne(a,p,v){const g=j[J];if(!g)return;const Q=e.clientWaitSync(g,e.SYNC_FLUSH_COMMANDS_BIT,0);if(Q!==e.ALREADY_SIGNALED&&Q!==e.CONDITION_SATISFIED)return;e.deleteSync(g),j[J]=null,e.bindBuffer(e.PIXEL_PACK_BUFFER,y[J]),e.getBufferSubData(e.PIXEL_PACK_BUFFER,0,A),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),J=(J+1)%z;const{values:N}=a;Jt(A,p,v,N.sortMode,N.sortLow,N.sortHigh,N.sortLength,N.sortReverse),Ge(N.ditherMode)&&Ut(A,p,v,N.ditherMode,N.levels,N.ditherStrength),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,_),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.texSubImage2D(e.TEXTURE_2D,0,0,0,p,v,e.RGBA,e.UNSIGNED_BYTE,A),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0)}function Me(a){const{values:p}=a;if(e.useProgram(s),e.bindVertexArray(m),Re(a.three,p),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,W),me(a),!Ie(p)){ne(),e.bindFramebuffer(e.FRAMEBUFFER,null),e.uniform1i(w,an),e.drawArrays(e.TRIANGLES,0,3);return}const v=t.width,g=t.height;Te(v,g),e.bindFramebuffer(e.FRAMEBUFFER,ee),e.uniform1i(w,ln),e.drawArrays(e.TRIANGLES,0,3),Ne(a,v,g),j[V]||(e.bindBuffer(e.PIXEL_PACK_BUFFER,y[V]),e.readPixels(0,0,v,g,e.RGBA,e.UNSIGNED_BYTE,0),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),j[V]=e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0),V=(V+1)%z),e.bindFramebuffer(e.FRAMEBUFFER,null),e.uniform1i(w,Ge(p.ditherMode)?sn:cn),e.drawArrays(e.TRIANGLES,0,3)}function ge(){return re}function Le(){t.removeEventListener("webglcontextlost",d),ne(),e.deleteTexture(W),e.deleteTexture(te),e.deleteTexture(_),e.deleteTexture(K),e.deleteTexture(O);for(const a of y)e.deleteBuffer(a);e.deleteFramebuffer(ee),e.deleteVertexArray(m),e.deleteProgram(s),e.getExtension("WEBGL_lose_context")?.loseContext()}function Pe(){return G}function h(){return j.some(a=>a!==null)}function B(a,p,v){r=p,o=v,a!==n&&(n=a,se())}return{render:Me,resize:Ce,invalidateWordmark:se,effectivePixelSize:ge,letterLayout:Pe,readbackPending:h,setStage:B,dispose:Le}}var mn={fps:0,gridWidth:0,gridHeight:0,pixelSize:0,clamped:!1},ue=mn,ze=new Set;function hn(t){return ze.add(t),()=>ze.delete(t)}function pn(){return ue}function vn(t){if(!(t.fps===ue.fps&&t.gridWidth===ue.gridWidth&&t.gridHeight===ue.gridHeight&&t.pixelSize===ue.pixelSize&&t.clamped===ue.clamped)){ue=t;for(const n of ze)n()}}var Se={...fe},dt={...fe},We=new Set;function ft(){dt={...Se};for(const t of We)t()}function ke(t){return We.add(t),()=>We.delete(t)}function ye(){return dt}function _e(t,n){const r=de[t];if(!r)return;const o=Fe(r,n);Se[t]!==o&&(Se[t]=o,ft())}function ae(t){let n=!1;for(const[r,o]of Object.entries(t)){const i=de[r];if(!i)continue;const e=Fe(i,o);Se[r]!==e&&(Se[r]=e,n=!0)}n&&ft()}function xn(){ae(fe)}var mt="aerens:theme";function Tn(t,n){if(!(typeof sessionStorage>"u"))try{sessionStorage.setItem(mt,JSON.stringify({params:t,css:n}))}catch{}}var et=.5,En=["letterFloat","letterSway","pointerLift","pointerRadius"];function gn(){return{...fe,...bn()}}function wn(t){const n={};for(const r of En){const o=de[r];if(o.kind!=="range")continue;const i=t[r]*et;n[r]=Math.min(o.max,Math.max(o.min,i))}return{...t,...n,letterMode:0,wordmarkText:0,pixelSize:Math.max(1,Math.round(t.pixelSize*et)),brightness:Math.max(-.5,t.brightness-.08),speed:t.speed*.45,noiseDrift:t.noiseDrift*.45,scanRoll:t.scanRoll*.4,letterSpeed:t.letterSpeed*.6,bloom:t.bloom*.6}}function bn(){if(typeof sessionStorage>"u")return{};try{const t=sessionStorage.getItem(mt);if(!t)return{};const n=JSON.parse(t);if(typeof n!="object"||n===null)return{};const r=n.params;if(typeof r!="object"||r===null)return{};const o={};for(const i of De){const e=i.key,d=r[e];d!==void 0&&(o[e]=Fe(de[e],d))}return o}catch{return{}}}function yn(t){return String(Number(t.toFixed(3)))}function ht(t){const n=[];for(const r of De){const o=t[r.key];o!==r.default&&n.push(`${r.key}=${r.kind==="toggle"?o?"1":"0":yn(o)}`)}return n.join("&")}function Sn(t){const n={},r=t.replace(/^#/,"");if(!r)return n;for(const o of r.split("&")){const i=o.indexOf("=");if(i<0)continue;const e=decodeURIComponent(o.slice(0,i)),d=de[e];if(!d)continue;const s=decodeURIComponent(o.slice(i+1));n[e]=d.kind==="toggle"?s==="1"||s==="true":Number(s)}return n}function An(t){const n=ht(t),r=`${window.location.pathname}${window.location.search}${n?`#${n}`:""}`;window.history.replaceState(null,"",r)}function Rn(){return Sn(window.location.hash)}var tt=[{name:"Default",values:fe},{name:"Newsprint",values:{ditherMode:3,pixelSize:3,levels:3,palette:0,invert:!0,contrast:1.45,gamma:1.2,speed:.18,warpAmount:.5,warpFrequency:2.4,letterFloat:.01,letterSway:.003,letterSpeed:.22,bloom:0,grain:.04,scanMode:0,vignette:.15}},{name:"Amber terminal",values:{ditherMode:2,pixelSize:6,pixelAspect:1.35,levels:3,palette:2,contrast:1.45,markFloor:.72,speed:.22,warpAmount:.45,warpFrequency:1.1,letterFloat:.012,letterSpeed:.25,bloom:.55,grain:.12,scanMode:1,scanIntensity:.6,scanPitch:2,scanRoll:.18,vignette:.55}},{name:"Phosphor burn",values:{ditherMode:6,pixelSize:5,levels:4,palette:3,contrast:1.5,gamma:.85,speed:.6,warpAmount:.9,warpFrequency:2.2,noiseDrift:.9,temporalDither:!0,letterFloat:.03,letterSway:.01,letterSpeed:.5,bloom:.7,grain:.12,scanMode:5,scanIntensity:.45,scanPitch:3,vignette:.5}},{name:"Chromatic",values:{ditherMode:4,matrixRotation:27,pixelSize:8,levels:4,palette:4,contrast:1.5,markFloor:.7,speed:.5,warpAmount:1.4,warpFrequency:.9,noiseDrift:.7,letterFloat:.04,letterSway:.012,letterSpeed:.4,letterStagger:1.1,surfaceStable:!0,bloom:.4,grain:.05,scanMode:3,scanIntensity:.3,scanPitch:2,vignette:.3}},{name:"Coarse block",values:{ditherMode:1,pixelSize:8,levels:3,palette:1,contrast:1.6,speed:.28,warpAmount:.8,warpFrequency:.7,letterFloat:.045,letterSpeed:.3,surfaceStable:!0,bloom:.15,grain:0,scanMode:0,vignette:.4}},{name:"Etching",values:{ditherMode:11,pixelSize:4,levels:3,palette:5,contrast:1.45,gamma:1.1,speed:.15,warpAmount:.5,warpFrequency:1.9,letterFloat:.014,letterSpeed:.2,bloom:.1,grain:.03,scanMode:0,vignette:.35}},{name:"Halftone press",values:{ditherMode:8,pixelSize:5,levels:3,palette:12,contrast:1.3,speed:.2,warpAmount:.7,warpFrequency:1.4,letterFloat:.02,letterSway:.005,letterSpeed:.28,bloom:.2,grain:.06,scanMode:0,vignette:.4}}],pt="aerens.presets.v1",Mn=32;function vt(){try{return typeof window>"u"?null:window.localStorage}catch{return null}}function xe(){const t=vt();if(!t)return[];try{const n=JSON.parse(t.getItem(pt)??"[]");return Array.isArray(n)?n.flatMap(r=>{if(typeof r!="object"||r===null)return[];const{name:o,values:i}=r;if(typeof o!="string"||typeof i!="object"||i===null)return[];const e={};for(const[d,s]of Object.entries(i)){const m=de[d];m&&(e[d]=Fe(m,s))}return[{name:o.slice(0,32),values:e}]}):[]}catch{return[]}}function qe(t){const n=vt();if(!n)return t;try{n.setItem(pt,JSON.stringify(t))}catch{}return t}function Ln(t){const n=t.palette===ot?"Custom":it[t.palette]?.name??"Palette",r=de.ditherMode;return`${n} · ${r.kind==="select"?r.options.find(o=>o.value===t.ditherMode)?.label??"Dither":"Dither"}`}function Pn(t,n){if(!n.includes(t))return t;for(let r=2;;r++){const o=`${t} ${r}`.slice(0,32);if(!n.includes(o))return o}}function kn(t,n){const r=n.trim().slice(0,32);return!r||r===t?xe():qe(xe().filter(o=>o.name===t||o.name!==r).map(o=>o.name===t?{...o,name:r}:o))}function Fn(t,n){const r=t.trim().slice(0,32);if(!r)return xe();const o={};for(const d of De){const s=d.key;n[s]!==fe[s]&&(o[s]=n[s])}const i=xe(),e=i.findIndex(d=>d.name===r);return e>=0?i[e]={name:r,values:o}:i.unshift({name:r,values:o}),qe(i.slice(0,Mn))}function Dn(t){return qe(xe().filter(n=>n.name!==t))}var we="rounded-sm border border-bone/15 px-2 py-1 text-[10px] tracking-[0.14em] text-bone/75 uppercase transition-colors hover:border-bone/45 hover:text-bone",Ke="w-full rounded-sm border border-bone/15 bg-ink px-2 py-1 text-[11px] text-bone outline-none focus:border-bone/45";function Cn({def:t,values:n,extra:r}){const o=`p-${t.key}`,i=n[t.key];return t.kind==="toggle"?f("label",{htmlFor:o,className:"flex cursor-pointer items-center justify-between py-1.5",children:[f("span",{className:"text-[11px] tracking-wide text-bone/80",children:t.label}),f("input",{id:o,type:"checkbox",checked:i,onChange:e=>_e(t.key,e.currentTarget.checked),className:"h-3.5 w-3.5 accent-bone"})]}):t.kind==="select"?f("div",{className:"py-1.5",children:[f("label",{htmlFor:o,className:"mb-1 block text-[11px] tracking-wide text-bone/80",children:t.label}),f("div",{className:"flex gap-1.5",children:[f("select",{id:o,value:i,onChange:e=>_e(t.key,Number(e.currentTarget.value)),className:Ke,children:t.options.map(e=>f("option",{value:e.value,children:e.label},e.value))}),r]})]}):f("div",{className:"py-1.5",children:[f("div",{className:"mb-1 flex items-baseline justify-between",children:[f("label",{htmlFor:o,className:"text-[11px] tracking-wide text-bone/80",children:t.label}),f("span",{className:"font-mono text-[10px] tabular-nums text-ash",children:Number(i).toFixed(yt(t))})]}),f("input",{id:o,type:"range",min:t.min,max:t.max,step:t.step,value:i,onChange:e=>_e(t.key,Number(e.currentTarget.value)),className:"w-full accent-bone"})]})}function Nn(){const t=Je(ke,ye),n=Je(hn,pn),[r,o]=Z(!1),[i,e]=Z(!1),[d,s]=Z([]),[m,u]=Z(null),[l,w]=Z(""),[T,R]=Z(()=>new Set(["letters","dither"]));function b(c){R(x=>{const E=new Set(x);return E.delete(c)||E.add(c),E})}ve(()=>s(xe()),[]);function I(c){ae({...fe,...c})}function U(){const c=Pn(Ln(t),d.map(x=>x.name));s(Fn(c,t)),w(c),u(c)}function L(c){l.trim()&&l.trim()!==c&&s(kn(c,l)),u(null)}async function M(){const c=ht(t),x=`${window.location.origin}${window.location.pathname}${c?`#${c}`:""}`;try{await navigator.clipboard.writeText(x),e(!0),window.setTimeout(()=>e(!1),1600)}catch{}}return f(rt,{children:[f("button",{type:"button",onClick:()=>o(c=>!c),"aria-expanded":r,"aria-controls":"dither-controls",className:"fixed top-4 right-4 z-20 rounded-sm border border-bone/20 bg-ink/70 px-3 py-1.5 text-[11px] tracking-[0.18em] text-bone/85 uppercase backdrop-blur transition-colors hover:border-bone/50 hover:text-bone",children:r?"Close":"Dither"}),f("aside",{id:"dither-controls","aria-label":"Dither controls","data-open":r,className:"fixed inset-x-0 bottom-0 z-10 max-h-[55vh] translate-y-full overflow-y-auto rounded-t-xl border-t border-bone/12 bg-ink/95 px-4 pt-3 pb-8 backdrop-blur-md transition-transform duration-300 ease-out data-[open=true]:translate-y-0 sm:inset-x-auto sm:top-0 sm:right-0 sm:h-full sm:max-h-none sm:w-[19rem] sm:max-w-[85vw] sm:translate-x-full sm:translate-y-0 sm:rounded-none sm:border-t-0 sm:border-l sm:pt-16 sm:data-[open=true]:translate-x-0",children:[f("div",{"aria-hidden":"true",className:"mx-auto mb-3 h-1 w-10 rounded-full bg-bone/20 sm:hidden"}),f("div",{className:"mb-4 border-b border-bone/12 pb-4",children:[f("label",{htmlFor:"preset",className:"mb-1 block text-[10px] tracking-[0.18em] text-ash uppercase",children:"Preset"}),f("select",{id:"preset",value:"",onChange:c=>{const[x,E]=c.currentTarget.value.split(":"),S=(x==="saved"?d:tt).find(k=>k.name===E);S&&I(S.values)},className:Ke,children:[f("option",{value:"",disabled:!0,children:"Choose…"}),f("optgroup",{label:"Built-in",children:tt.map(c=>f("option",{value:`built:${c.name}`,children:c.name},c.name))}),d.length>0&&f("optgroup",{label:"Saved",children:d.map(c=>f("option",{value:`saved:${c.name}`,children:c.name},c.name))})]}),f("div",{className:"mt-3 grid grid-cols-2 gap-2",children:[f("button",{type:"button",onClick:()=>ae(ct()),className:we,children:"Randomise"}),f("button",{type:"button",onClick:xn,className:we,children:"Reset"}),f("button",{type:"button",onClick:M,className:we,children:i?"Copied":"Copy link"}),f("button",{type:"button",onClick:U,className:we,children:"Save"})]}),d.length>0&&f("ul",{className:"mt-3 space-y-1",children:d.map(c=>m===c.name?f("li",{children:f("input",{type:"text",value:l,autoFocus:!0,maxLength:32,"aria-label":`Rename preset ${c.name}`,onChange:x=>w(x.currentTarget.value),onFocus:x=>x.currentTarget.select(),onBlur:()=>L(c.name),onKeyDown:x=>{x.key==="Enter"&&L(c.name),x.key==="Escape"&&u(null)},className:Ke})},c.name):f("li",{className:"flex items-center justify-between gap-1",children:[f("button",{type:"button",onClick:()=>I(c.values),className:"min-w-0 flex-1 truncate text-left text-[11px] text-bone/70 transition-colors hover:text-bone",children:c.name}),f("button",{type:"button","aria-label":`Rename preset ${c.name}`,title:"Rename",onClick:()=>{w(c.name),u(c.name)},className:"shrink-0 px-1 text-[10px] text-ash transition-colors hover:text-bone",children:"✎"}),f("button",{type:"button","aria-label":`Delete preset ${c.name}`,title:"Delete",onClick:()=>s(Dn(c.name)),className:"shrink-0 px-1 text-[11px] text-ash transition-colors hover:text-bone",children:"×"})]},c.name))})]}),St.map(c=>{const x=Lt(c).filter(S=>!S.showWhen||S.showWhen(t));if(x.length===0)return null;const E=T.has(c);return f("section",{className:"border-b border-bone/8",children:[f("button",{type:"button","aria-expanded":E,onClick:()=>b(c),className:"flex w-full items-center justify-between py-2.5 text-[10px] tracking-[0.18em] text-ash uppercase transition-colors hover:text-bone",children:[Rt[c],f("span",{"aria-hidden":"true",className:`text-bone/40 transition-transform duration-200 ${E?"rotate-90":""}`,children:"›"})]}),E&&f("div",{className:"pb-3",children:[c==="resolution"&&n.clamped&&f("p",{className:"mb-1 text-[10px] leading-snug text-ash",children:["Pixel size raised to ",n.pixelSize," — error diffusion runs on the CPU and is capped by grid area."]}),x.map(S=>f(Cn,{def:S,values:t,extra:S.key==="palette"?f("button",{type:"button","aria-label":"Generate a random palette",title:"Generate a random palette",onClick:()=>ae(lt()),className:`${we} shrink-0 px-2`,children:"⚄"}):void 0},S.key))]})]},c)}),f("p",{className:"border-t border-bone/12 pt-3 font-mono text-[10px] tabular-nums text-ash",children:[n.fps," fps · ",n.gridWidth,"×",n.gridHeight," grid ·"," ",(n.gridWidth*n.gridHeight).toLocaleString()," px"]})]})]})}var Un=500,In=420,xt=0;function nt(){const t=Math.max(0,In-(performance.now()-xt));window.setTimeout(()=>{const n=document.documentElement;n.classList.remove("crt-hold"),n.classList.add("crt-go")},t)}function _n(){const t=document.querySelector(".crt");if(!t)return!1;const n=document.documentElement;return n.classList.remove("crt-go"),t.style.display="none",t.offsetWidth,t.style.display="",n.classList.add("crt-hold"),xt=performance.now(),!0}function be(){const t=document.body.dataset.stage;return t==="hero"||t==="toy"?t:"compact"}function Kn(){const t=Et(null),[n,r]=Z(!0),[o,i]=Z("compact"),[e,d]=Z(!1);return ve(()=>d(!0),[]),ve(()=>{if(be()==="compact")ae(gn());else{const u=Rn();ae(Object.keys(u).length>0?u:Ze())}let s=0;const m=ke(()=>{be()!=="compact"&&(window.clearTimeout(s),s=window.setTimeout(()=>An(ye()),250))});return()=>{window.clearTimeout(s),m()}},[]),ve(()=>{const s=()=>i(be());return s(),document.addEventListener("astro:page-load",s),()=>document.removeEventListener("astro:page-load",s)},[]),ve(()=>{const s=()=>{const m=ye(),u=Pt(at(m.palette,m.customHueA,m.customHueB,m.customSpread),m.invert);kt(u),Tn(m,u)};return s(),ke(s)},[]),ve(()=>{const s=t.current;if(!s)return;const m=s;let u;try{u=fn(m)}catch(h){console.warn("[dither] WebGL2 unavailable — keeping the static wordmark",h),r(!1),nt();return}const l=document.documentElement;l.classList.add("dither-active");const w=()=>l.classList.add("dither-active");document.addEventListener("astro:after-swap",w);const T=window.matchMedia("(prefers-reduced-motion: reduce)");let R=be(),b=ye();const I=()=>R==="hero"&&window.scrollY<40,U=()=>R==="compact"?"compact":"hero",L=()=>R==="hero"?rn(window.scrollY,window.innerHeight):1;let M=null;const c=(h,B,a)=>{u.setStage(h,B,a),document.body.dataset.wordmark=h,h!==M&&(M=h,z())},x=()=>{const h=ye();b=R==="compact"?wn(h):h,c(U(),I(),L()),F=!0};let E=0,S=0,k=0,q=0,F=!0,ie=!document.hidden,W=!0,D=!1,H=!1;const P=new Map,C=[-1,-1],X=[-1,-1];let G=null,$=!1,K=!1,O=!1;function ee(){G||$||K||D||($=!0,Ft(async()=>{const{createThreeStage:h}=await import("./threeStage.3UrWRbSF.js");return{createThreeStage:h}},__vite__mapDeps([0,1,2])).then(({createThreeStage:h})=>h()).then(h=>{if(D){h.dispose();return}G=h,O=!1,F=!0}).catch(h=>{K=!0,console.warn("[dither] three.js failed to load — falling back to flat letters",h),ae({letterMode:0})}).finally(()=>{$=!1}))}function te(){!G||O||(G.layout(u.letterLayout(),Xe(b.wordmarkText),Be(b.fontFace),m.width,m.height),O=!0)}const _=()=>{F=!0},z=()=>{P.clear(),O=!1,F=!0};x();const y=ke(x);window.addEventListener("resize",z),T.addEventListener("change",_);const A=()=>{F=!0;const h=be();h!==R&&(R=h,x(),z())};document.addEventListener("astro:page-load",A);let Y=I(),le=U(),j=L();const V=()=>{const h=I(),B=U(),a=L();h===Y&&B===le&&a===j||(Y=h,le=B,j=a,c(B,h,a),F=!0)};window.addEventListener("scroll",V,{passive:!0});const J=h=>{X[0]=h.clientX/window.innerWidth,X[1]=1-h.clientY/window.innerHeight,F=!0},ne=()=>{X[0]=-1,X[1]=-1,F=!0};window.addEventListener("pointermove",J,{passive:!0}),window.addEventListener("pointerleave",ne),window.addEventListener("pointercancel",ne);const Te=()=>{ae(Ze()),_n()&&(H=!1),F=!0},Ee=h=>{if(R==="compact"||h.target instanceof Element&&h.target.closest("a, button, input, select, textarea, #dither-controls, .card"))return;const B=m.getBoundingClientRect();if(R==="hero"&&h.clientY>B.top+B.height*(2/3)){document.getElementById("below")?.scrollIntoView({behavior:"smooth"});return}Te()};document.addEventListener("click",Ee);const Ae=()=>{R!=="compact"&&Te()};window.addEventListener("dither:reroll",Ae);let re="";function Ce(){const h=Be(b.fontFace),B=Xe(b.wordmarkText),a=`${h.name}|${B}`;a!==re&&(re=a,bt(h,B).then(()=>{D||(u.invalidateWordmark(),z())}))}let se=0,me=0;const Re=h=>{E=requestAnimationFrame(Re);const B=q===0?0:Math.min(.1,(h-q)/1e3);q=h,Ce();let a=!1;for(const g of At)P.get(g)!==b[g]&&(P.set(g,b[g]),a=!0);a&&(u.resize(b),O=!1,F=!0),b.letterMode===2&&(ee(),te()),X[0]<0?(C[0]=-1,C[1]=-1):C[0]<0?(C[0]=X[0],C[1]=X[1]):(C[0]+=(X[0]-C[0])*.14,C[1]+=(X[1]-C[1])*.14);const p=T.matches;if(!p)k+=B;else if(!F)return;const v=p?0:k;if(b.letterMode===2&&G&&G.render(b,v,C),u.render({values:b,time:v,frame:p?0:S++,pointer:C,three:b.letterMode===2&&G?G.canvas:null}),F=u.readbackPending(),H||(H=!0,performance.mark("dither-first-frame"),nt()),me++,h-se>=Un){const g=u.effectivePixelSize();vn({fps:Math.round(me*1e3/(h-se)),gridWidth:m.width,gridHeight:m.height,pixelSize:g,clamped:g!==b.pixelSize}),se=h,me=0}},Ne=()=>{E||(q=0,se=0,me=0,E=requestAnimationFrame(Re))},Me=()=>{E&&(cancelAnimationFrame(E),E=0)},ge=()=>ie&&W?Ne():Me(),Le=()=>{ie=!document.hidden,ge()};document.addEventListener("visibilitychange",Le);const Pe=new IntersectionObserver(h=>{W=h[0]?.isIntersecting??!0,ge()});return Pe.observe(m),ge(),()=>{D=!0,Me(),Pe.disconnect(),y(),document.removeEventListener("visibilitychange",Le),window.removeEventListener("resize",z),document.removeEventListener("astro:page-load",A),document.removeEventListener("astro:after-swap",w),window.removeEventListener("scroll",V),window.removeEventListener("pointermove",J),window.removeEventListener("pointerleave",ne),window.removeEventListener("pointercancel",ne),document.removeEventListener("click",Ee),window.removeEventListener("dither:reroll",Ae),T.removeEventListener("change",_),G?.dispose(),u.dispose(),l.classList.remove("dither-active")}},[]),f(rt,{children:[f("canvas",{ref:t,className:"dither-canvas","aria-hidden":"true",style:n?void 0:{display:"none"}}),n&&e&&o!=="compact"&&gt(f(Nn,{}),document.body)]})}export{Kn as default};
