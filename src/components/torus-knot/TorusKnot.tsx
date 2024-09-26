import { MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei'
import { useFrame, Vector3 } from '@react-three/fiber'
import { useControls } from 'leva'
import React, { useRef } from 'react'
import { Mesh } from 'three'

export const TorusKnot = ({
  position,
  args
}: // color
{
  position: Vector3
  args: [
    tube?: number | undefined,
    radialSegments?: number | undefined,
    tubularSegments?: number | undefined,
    arc?: number | undefined
  ]
  // color: string
}) => {
  const ref = useRef<Mesh>(null!)

  const { color, radius } = useControls({
    color: 'lightblue',
    radius: {
      value: 5,
      min: 1,
      max: 10,
      step: 0.5
    }
  })

  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={[radius, ...args]} />
      {/* <meshStandardMaterial color={color} /> */}
      <MeshWobbleMaterial color={color} factor={5} speed={2} />
      {/* <MeshDistortMaterial color={color} /> */}
    </mesh>
  )
}
