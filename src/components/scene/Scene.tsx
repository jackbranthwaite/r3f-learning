import { OrbitControls, useHelper } from '@react-three/drei'
import React, { Ref, useRef } from 'react'
import { TorusKnot } from '../torus-knot/TorusKnot'
import { DirectionalLight, DirectionalLightHelper } from 'three'

export const Scene = () => {
  const directionalLightRef = useRef<DirectionalLight>(null!)

  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, 'white')

  return (
    <>
      <directionalLight
        ref={directionalLightRef}
        position={[0, 0, 2]}
        intensity={0.5}
      />
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
      {/* <Sphere position={[0, 0, 0]} args={[1, 30, 30]} color="orange" /> */}
      {/* All torus shapes */}
      {/* <Torus position={[2, 0, 0]} args={[0.8, 0.1, 30, 30]} color="blue" />*/}
      <TorusKnot
        position={[0, 0, 0]}
        args={[1, 0.3, 1000, 50]}
        color="hotpink"
      />
      <OrbitControls enableDamping enableZoom={false} />
    </>
  )
}
