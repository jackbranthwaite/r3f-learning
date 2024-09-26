'use client'
import { Cube } from '@/components/cube/Cube'
import { Sphere } from '@/components/sphere/Sphere'
import { TorusKnot } from '@/components/torus-knot/TorusKnot'
import { Torus } from '@/components/torus/Torus'
import { Canvas } from '@react-three/fiber'

const Home = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} intensity={0.5} />
      <ambientLight intensity={0.1} />
      {/* All code for start section involving cubes */}
      {/* <group position={[0, -1, 0]}>
        <Cube position={[1, 0, 0]} color="green" size={[1, 1, 1]} />
        <Cube position={[-1, 0, 0]} color="red" size={[1, 1, 1]} />
        <Cube position={[-1, 2, 0]} color="pink" size={[1, 1, 1]} />
        <Cube position={[1, 2, 0]} color="orange" size={[1, 1, 1]} />
      </group>
      <Cube position={[0, 0, 0]} color="orange" size={[1, 1, 1]} /> */}
      {/* All code for sphere section */}
      <Sphere position={[0, 0, 0]} args={[1, 30, 30]} color="orange" />
      <Torus position={[2, 0, 0]} args={[0.8, 0.1, 30, 30]} color="blue" />
      <TorusKnot
        position={[-2, 0, 0]}
        args={[0.5, 0.1, 1000, 50]}
        color="hotpink"
      />
    </Canvas>
  )
}

export default Home
