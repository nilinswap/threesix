import * as THREE from '../../node_modules/three/src/Three.js';


const scene = new THREE.Scene();
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(200, 500, 300);
scene.add(directionalLight);

const aspectRatio = window.innerWidth / window.innerHeight;
const cameraWidth = 150;
const cameraHeight = cameraWidth / aspectRatio;

const camForm = document.getElementById('control-form')
const camdist = document.getElementById('camdist')
camdist.max = cameraWidth;
camdist.value = cameraWidth / 2;


var camera = new THREE.OrthographicCamera(
    cameraWidth / -2, // left
    cameraWidth / 2, // right
    cameraHeight / 2, // top
    cameraHeight / -2, // bottom
    0, // near plane
    1000 // far plane
);
camera.position.set(100, 100, 100);
camera.lookAt(0, 0, 0);

camdist.onchange = function(){
    var cameraVal = camdist.value
    console.log("cameraVal", cameraVal)
    camera = new THREE.OrthographicCamera(-1*cameraVal, 1*cameraVal, 1*cameraVal, -1*cameraVal,
        0,
        1000)
    camera.position.set(100, 100, 100);
    camera.lookAt(0, 10, 0);

}


const camposx = document.getElementById('camposx')
const camposy = document.getElementById('camposy')
const camposz = document.getElementById('camposz')
camposx.onchange = camposy.onchange = camposz   .onchange =function(){
    var camposvalx = camposx.value;
    var camposvaly = camposy.value;
    var camposvalz = camposz.value;
    camera.position.set(camposvalx, camposvaly, camposvalz);
    camera.lookAt(0, 10, 0);

}



const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);
var axesHelper = new THREE.AxesHelper( 55 );
scene.add( axesHelper );

function createWheels() {
    const geometry = new THREE.BoxBufferGeometry(12, 12, 33);
    const material = new THREE.MeshLambertMaterial({ color: 0x333333 });
    const wheel = new THREE.Mesh(geometry, material);
    return wheel;
}


function createCar() {
    const car = new THREE.Group();

    const backWheel = createWheels();
    backWheel.position.y = 6;
    backWheel.position.x = -18;
    car.add(backWheel);

    const frontWheel = createWheels();
    frontWheel.position.y = 6;
    frontWheel.position.x = 18;
    car.add(frontWheel);

    const main = new THREE.Mesh(
        new THREE.BoxBufferGeometry(60, 15, 30),
        new THREE.MeshLambertMaterial({ color: 0x78b14b })
    );
    main.position.y = 12;
    car.add(main);

    const cabin = new THREE.Mesh(
        new THREE.BoxBufferGeometry(33, 12, 24),
        new THREE.MeshLambertMaterial({ color: 0xffffff })
    );
    cabin.position.x = -6;
    cabin.position.y = 25.5;
    car.add(cabin);

    return car;
}

const car = createCar();
scene.add(car);

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();
