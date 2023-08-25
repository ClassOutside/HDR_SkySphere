import * as THREE from 'three';
import { setSkySphere } from '../helpers/SkysphereHelper.js'
import { setupRenderer } from '../helpers/RendererHelper.js'
import { updateCameraAspect } from '../helpers/CameraHelper.js'
import { SetAmbientLighting } from '../helpers/LightingHelper.js'

const imagePath = './src/textures/kloofendal_48d_partly_cloudy_puresky_2k.hdr'

export async function setupScene(canvas) {

	const scene = new THREE.Scene();
	const renderer = setupRenderer();
	let camera = new THREE.PerspectiveCamera(70, 16, 9, 1000);

	updateCameraAspect(camera);
	scene.add(camera);

	SetAmbientLighting(scene);
	setSkySphere(scene, imagePath);

	function animate() {
		requestAnimationFrame(animate);
				
		renderer.render(scene, camera);
	}
	animate();
};