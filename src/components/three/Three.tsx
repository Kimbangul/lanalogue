import * as THREE from 'three';
import { Canvas, Vector3, useFrame, useThree, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from '@react-three/drei';

const ThreeView = () => {
  const pos : Vector3 = [3,3,3];

  return (
    <Canvas dpr={window.devicePixelRatio} shadows={true}>
      <OrbitControls 
        autoRotate={true} 
        enableZoom={true}
      />
      <mesh >
      <ambientLight intensity={0.2} color='#dd913a' />
      <directionalLight intensity={0.3} position={[0,0, -20]}/>
      <pointLight color="indianred" intensity={0.3}/>
      <pointLight position={[10, 10, -10]} color="orange" intensity={0.3}/>
      <pointLight position={[-10, -10, 10]} color="lightblue" intensity={0.3}/>
      <dodecahedronGeometry/>
      <meshStandardMaterial roughness={0.4} emissive="#404057" />
      </mesh>
    </Canvas>
  )
}

export default ThreeView;