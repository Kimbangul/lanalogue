'use client';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const ThreeView = () => {
  return (
    <Canvas>
      <OrbitControls 
        autoRotate={true} 
        enableZoom={false}
      />
      <mesh>
      <ambientLight intensity={0.2} color='#dd913a' />
      <directionalLight intensity={1}/>
      <pointLight color="indianred" intensity={0.3}/>
      <pointLight position={[10, 10, -10]} color="orange" intensity={0.3}/>
      <pointLight position={[-10, -10, 10]} color="lightblue" intensity={0.3}/>

      <dodecahedronGeometry/>
      <meshStandardMaterial roughness={0.4} emissive="#404057" />
       {/* <ambientLight intensity={0.5}/>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial attach="material" color="#fff"/> */}
      </mesh>
    </Canvas>
  )
}

export default ThreeView;