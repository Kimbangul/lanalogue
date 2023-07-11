import * as THREE from 'three';
import { Canvas, Vector3, useFrame, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF, Clone } from '@react-three/drei';

const ThreeObj = () => {
  const {scene} = useGLTF('/scene.gltf');
  return <Clone object={scene} castShadow />
}

const ThreeView = () => {
  const pos : Vector3 = [3,3,3];
  return (
    <Canvas dpr={window.devicePixelRatio} shadows={true}>
      <group>
        <OrbitControls 
          autoRotate={true} 
          enableZoom={true}
          autoRotateSpeed={0.4}
        />
        <spotLight
          color={[0, 0.5, 1]}
          intensity={2}
          angle={0.1}
          penumbra={0.5}
          position={[0, 0, 0]}
          castShadow
        />
        <mesh >
          <ambientLight intensity={0.7} color='#ffdfa5' position={[-10,0,10]}/>
          <ambientLight intensity={0.7} color='#a6ffe9' position={[10,0,10]}/>
          <pointLight intensity={0.5} color='#fff' position={[0,0,0]}/>
          <directionalLight intensity={1} position={[0,0,100]}/>
          <ThreeObj />
          <meshStandardMaterial emissive={[0.5, 0.5, 0.5]} color={[255, 255, 255]} />
        </mesh>
      </group>
    </Canvas>
  )
}

export default ThreeView;