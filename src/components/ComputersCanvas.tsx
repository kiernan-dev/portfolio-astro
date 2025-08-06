import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import CanvasLoader from "./CanvasLoader";

const ComputerModel = ({ isMobile }: { isMobile: boolean }) => {
  const { scene } = useGLTF(
    "./desktop_pc/scene.gltf",
    true,
    undefined,
    (loader: any) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath('/draco/');
      loader.setDRACOLoader(dracoLoader);
    }
  );

  return (
    <mesh>
      <hemisphereLight intensity={2.5} groundColor='black' />
      <spotLight
        position={[-25, 60, 15]}
        angle={0.3}
        penumbra={1}
        intensity={8}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={5} position={[10, 10, 10]} />
      <pointLight intensity={4} position={[-10, -20, -5]} color="#6366f1" />
      <pointLight intensity={4} position={[0, 5, -20]} />
      <primitive
        object={scene}
        scale={isMobile ? 0.8 : 1.3}
        position={isMobile ? [0, -2.0, -2.2] : [0, -1.5, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const MemoizedComputerModel = React.memo(ComputerModel);

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [30, 5, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
        />
        <MemoizedComputerModel isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;