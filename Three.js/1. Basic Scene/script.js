/**
 * Most basic way to add three.js in your web project
 *
 * Downloaded: Three.js from official website: https://threejs.org/
 * and then copy the file "three.min.js" and add it to your project folder
 *
 * we get access to "THREE" variable, through "three.min.js ""
 */

// 1. Scene
const scene = new THREE.Scene();

// 2. Object (Let's create a "Red Cube")
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 3. Camera
const sizes = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// 4. Renderer
const canvas = document.querySelector(".webgl");
console.log(canvas);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
