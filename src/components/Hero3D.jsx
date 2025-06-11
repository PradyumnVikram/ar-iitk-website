import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

// 3D Model Component
function CADModel({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef();

  // Auto-rotation
  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.3; // Adjust rotation speed
    }
  });

  return (
    <primitive 
      ref={modelRef} 
      object={scene} 
      scale={1.5} 
      position={[0, -1, 0]} 
    />
  );
}

// Loading component
function Loader() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#003153" />
    </mesh>
  );
}

// 3D Hero Component
const Hero3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />
      
      <Suspense fallback={<Loader />}>
        <CADModel modelPath="/drone3d.glb" />
        <Environment preset="sunset" />
      </Suspense>
      
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={1}
      />
    </Canvas>
  );
};

export default Hero3D;
