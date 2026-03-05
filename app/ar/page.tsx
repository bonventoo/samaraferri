"use client";
import { useEffect } from "react";

export default function ARPage() {
  useEffect(() => {
    const start = async () => {
      const THREE = await import("three");
      const { MindARThree } = await import("mind-ar/dist/mindar-image-three.prod.js");

      const mindarThree = new MindARThree({
        container: document.querySelector("#ar-container"),
        imageTargetSrc: "/targets/card.mind",
      });

      const { renderer, scene, camera } = mindarThree;

      const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
      scene.add(light);

      const anchor = mindarThree.addAnchor(0);

      const loader = new THREE.GLTFLoader();
      loader.load("/models/seuModelo.glb", (gltf) => {
        gltf.scene.scale.set(0.5, 0.5, 0.5);
        anchor.group.add(gltf.scene);
      });

      await mindarThree.start();
      renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
      });
    };

    start();
  }, []);

  return <div id="ar-container" style={{ width: "100vw", height: "100vh" }} />;
}