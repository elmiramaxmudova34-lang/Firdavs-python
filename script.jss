// --- Typewriter effect ---
const lines = [
  "print('Hello, Python!')",
  "for i in range(5): print(i)",
  "def greet(name): return f'Hello {name}'"
];
let index = 0;
let charIndex = 0;
const typewriterDiv = document.getElementById('typewriter');

function type() {
  if(index < lines.length){
    if(charIndex < lines[index].length){
      typewriterDiv.textContent += lines[index][charIndex];
      charIndex++;
      setTimeout(type, 100);
    } else {
      typewriterDiv.textContent += "\n";
      charIndex = 0;
      index++;
      setTimeout(type, 500);
    }
  }
}
type();

// --- 3D Python Logo ---
const canvas = document.getElementById('python3D');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvas.width/canvas.height, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas, alpha:true});
renderer.setSize(600,400);

const geometry = new THREE.BoxGeometry(0.5,0.5,0.5);
const material = new THREE.MeshBasicMaterial({color:0x306998});
const cubes = [];

for(let i=0; i<30; i++){
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(Math.random()*6-3, Math.random()*6-3, Math.random()*6-3);
  scene.add(cube);
  cubes.push(cube);
}

camera.position.z = 7;

function animate(){
  requestAnimationFrame(animate);
  cubes.forEach(c => {
    c.rotation.x += 0.01;
    c.rotation.y += 0.01;
    c.position.y += Math.sin(Date.now()*0.001)/50;
  });
  renderer.render(scene, camera);
}
animate();
