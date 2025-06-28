
import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus, Text3D, Environment, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ position, color, type = 'sphere' }: { position: [number, number, number], color: string, type?: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.2;
    }
  });

  const ShapeComponent = type === 'box' ? Box : type === 'torus' ? Torus : Sphere;

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <ShapeComponent
        ref={meshRef}
        position={position}
        args={type === 'torus' ? [0.6, 0.2, 16, 32] : [0.8, 0.8, 0.8]}
      >
        <meshStandardMaterial
          color={color}
          metalness={0.7}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </ShapeComponent>
    </Float>
  );
};

const AnimatedText = () => {
  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.1}
        position={[0, 0, 0]}
      >
        DEV
        <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.2} />
      </Text3D>
    </Float>
  );
};

export const Scene3D = () => {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Environment preset="night" />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
        
        <Sparkles count={100} scale={10} size={2} speed={0.4} color="#8b5cf6" />
        
        <FloatingShape position={[-3, 2, -2]} color="#8b5cf6" type="sphere" />
        <FloatingShape position={[3, -1, -1]} color="#06b6d4" type="box" />
        <FloatingShape position={[2, 3, -3]} color="#10b981" type="torus" />
        <FloatingShape position={[-2, -2, -2]} color="#f59e0b" type="sphere" />
        <FloatingShape position={[0, 1, -4]} color="#ef4444" type="box" />
        
        <AnimatedText />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};
