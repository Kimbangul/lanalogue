import * as THREE from 'three';
import { Canvas, Vector3, useFrame, useThree, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls, useGLTF, Clone } from '@react-three/drei';

const ThreeObj = () => {
  const {scene} = useGLTF('/scene.gltf');
  return <Clone object={scene} castShadow/>
}

const ThreeView = () => {
  const pos : Vector3 = [3,3,3];
  return (
    <Canvas dpr={window.devicePixelRatio} shadows={true}>
      <OrbitControls 
        autoRotate={true} 
        enableZoom={true}
        autoRotateSpeed={0.4}
      />
      <mesh >
      <ambientLight intensity={0.4} color='#dd913a' />
      <directionalLight intensity={1} position={[0,0, -20]}/>
      
      <pointLight color="indianred" intensity={0.1}/>
      <pointLight position={[10, 10, -10]} color="orange" intensity={0.3}/>
      <pointLight position={[-10, -10, 10]} color="pink" intensity={0.2}/>
      <ThreeObj />
      {/* <dodecahedronGeometry/>
      <meshStandardMaterial roughness={0.4} emissive="#404057" /> */}
      </mesh>
    </Canvas>
  )
}

export default ThreeView;