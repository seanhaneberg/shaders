import GlslCanvas from 'glslCanvas';
import test from './glsl/test.glsl';
import sine from './glsl/sine.glsl';
import colormix from './glsl/color-mix.glsl';
import austrian from './glsl/austrian-flag.glsl';

let shaderList = [
    { name: 'Austrian Flag', program: austrian },
    { name: 'Color Mix', program: colormix },
    { name: 'Dev Pink',  program: test },
    { name: 'Sine Wave', program: sine }
];

let curShaderIndex = 0;

let frameSize = 24;
let canvas = document.getElementById('glsl-canvas');
canvas.width = window.innerWidth - frameSize;
canvas.height = window.innerHeight - frameSize;
let sandbox = new GlslCanvas(canvas);
sandbox.load(shaderList[0].program);

let rotateShader = () => {
    curShaderIndex = (curShaderIndex + 1) % shaderList.length;
    sandbox.load(shaderList[curShaderIndex].program);
};

document.addEventListener('touchend', rotateShader);
document.addEventListener('click', rotateShader);
