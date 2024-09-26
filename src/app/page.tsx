'use client'
import { Cube } from '@/components/cube/Cube'
import { Canvas } from '@react-three/fiber'

const Home = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} intensity={0.5} />
      <ambientLight intensity={0.1} />
      {/* <group position={[0, -1, 0]}>
        <Cube position={[1, 0, 0]} color="green" size={[1, 1, 1]} />
        <Cube position={[-1, 0, 0]} color="red" size={[1, 1, 1]} />
        <Cube position={[-1, 2, 0]} color="pink" size={[1, 1, 1]} />
        <Cube position={[1, 2, 0]} color="orange" size={[1, 1, 1]} />
      </group> */}
      <Cube position={[0, 0, 0]} color="orange" size={[1, 1, 1]} />
    </Canvas>
  )
}

export default Home
