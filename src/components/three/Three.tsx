import * as THREE from 'three';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF, Clone, PerspectiveCamera } from '@react-three/drei';
import { useRef } from 'react';
import { Vector3 } from 'three';

const ThreeObj = () => {
  const {scene} = useGLTF('/scene.gltf');
  return <primitive object={scene} castShadow emissive={new THREE.Color('lime')} emissiveIntensity={2}/>
}

function Rig() {
  const { camera, mouse } = useThree()
  const vec = new Vector3()

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.05)
    camera.lookAt(0, 0, 0)
  })
}

const ThreeView = () => {
  const ref = useRef<THREE.Mesh>(null);

  return (
    <Canvas dpr={window.devicePixelRatio} shadows={true}>
      <group>
        <OrbitControls 
          autoRotate={true} 
          enableZoom={true}
          autoRotateSpeed={0.2}
          rotateSpeed={0.4}
          // rotation={[0,0,0]}
        />
        <ambientLight intensity={0.3} color='#ffdfa5' position={[-10,0,10]}/>
        <ambientLight intensity={0.2} color='#a6ffe9' position={[10,0,10]}/>
        <pointLight intensity={0.2} color='#ffdfa5' position={[0,0,0]}/>
        <directionalLight intensity={1} position={[0,0,100]}/>
        <PerspectiveCamera />
        <mesh ref={ref}>
          <ThreeObj />
          <meshStandardMaterial  />
        </mesh>
        <Rig />
      </group>
    </Canvas>
  )
}

export default ThreeView;