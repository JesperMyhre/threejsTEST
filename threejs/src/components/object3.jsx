import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useEffect } from "react";

export default function Object3() {
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      // resource URL
      "../models/old_building/scene.gltf",
      // called when the resource is loaded
      function (gltf) {
        scene.add(gltf.scene);

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Group
        gltf.scenes; // Array<THREE.Group>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object
      },
      // called while loading is progressing
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // called when loading has errors
      function (error) {
        console.log("An error happened");
      }
    );
  }, []);
  return <div></div>;
}
