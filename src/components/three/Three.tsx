'use client';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const ThreeView = () => {
  return (
    <Canvas>
      <OrbitControls />
      <mesh>
       <ambientLight intensity={0.8}/>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color="#fff"/>
      </mesh>
    </Canvas>
  )
}

export default ThreeView;