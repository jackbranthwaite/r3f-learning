'use client'
import { Cube } from '@/components/cube/Cube'
import { Scene } from '@/components/scene/Scene'
import { Sphere } from '@/components/sphere/Sphere'
import { TorusKnot } from '@/components/torus-knot/TorusKnot'
import { Torus } from '@/components/torus/Torus'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const Home = () => {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  )
}

export default Home
