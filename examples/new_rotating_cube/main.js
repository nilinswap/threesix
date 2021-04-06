import * as THREE from '../../node_modules/three/src/Three.js';

const fov_element = document.getElementById("fov")
const cam_near_element = document.getElementById("cam-near")
const cam_far_element = document.getElementById("cam-far")
const cam_z_element = document.getElementById("cam-z")
const box_x_element = document.getElementById("box-x")
const box_y_element = document.getElementById("box-y")
const box_z_element = document.getElementById("box-z")
const light_x_element = document.getElementById("light-x")
const light_y_element = document.getElementById("light-y")
const light_z_element = document.getElementById("light-z")

const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({canvas});

var fov = 75;
fov_element.value = fov.toString();

const aspect = window.innerWidth/window.innerHeight;  // the canvas default

var near = 0.1;
cam_near_element.value = near.toString();

var far = 5;
cam_far_element.value = far.toString();

var camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

camera.position.z = 2;

cam_z_element.value = camera.position.z.toString();

// fov_element.onchange = cam_near_element.onchange = cam_far_element.onchange = cam_z_element.onchange = function(){
//     fov = parseInt(fov_element.value);
//     near = parseInt(cam_near_element.value);
//     far = parseInt(cam_far_element.value);
//     camera.position.z = parseInt(cam_z_element.value);
//
//     console.log("cam change", fov, near, far, camera.position.z)
//     camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//
// }

const scene = new THREE.Scene();

let boxWidth = 1; //change
let boxHeight = 1;//change
let boxDepth = 1;//change

let geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
const material = new THREE.MeshPhongMaterial({color: 0x44aa88});
var cube = new THREE.Mesh(geometry, material);

scene.add(cube);
// box_x_element.onchange = box_y_element.onchange = box_z_element.onchange = function (){
//     boxWidth = box_x_element.value;
//     boxHeight = box_y_element.value;
//     boxDepth = box_z_element.value;
//     geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
//     cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);
// }




const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.DirectionalLight(color, intensity);
let lightx = 0;
let lighty = 0;
let lightz = 4;
light.position.set(lightx, lighty, lightz); //change //change //change
scene.add(light);

var axesHelper = new THREE.AxesHelper( 55 );
scene.add( axesHelper );

// light_x_element.onchange = light_y_element.onchange = light_z_element.onchange = function (){
//     lightx = light_x_element.value;
//     lighty = light_y_element.value;
//     lightz = light_z_element.value;
//     light.position.set(lightx, lighty, lightz);
//     scene.add(light);
// }

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

function render(time) {
    time *= 0.001;  // convert time to seconds

    // cube.rotation.x = time;
    // cube.rotation.y = time;

    renderer.render(scene, camera);

    requestAnimationFrame(render);
}
requestAnimationFrame(render);


