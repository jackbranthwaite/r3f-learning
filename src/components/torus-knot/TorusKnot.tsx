import { MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei'
import { useFrame, Vector3 } from '@react-three/fiber'
import React, { useRef } from 'react'
import { Mesh } from 'three'

export const TorusKnot = ({
  position,
  args,
  color
}: {
  position: Vector3
  args: [
    radius?: number | undefined,
    tube?: number | undefined,
    radialSegments?: number | undefined,
    tubularSegments?: number | undefined,
    arc?: number | undefined
  ]
  color: string
}) => {
  const ref = useRef<Mesh>(null!)

  // useFrame((state, delta) => {
  //   ref.current.rotation.x += delta
  //   ref.current.rotation.y += delta
  // })

  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={args} />
      {/* <meshStandardMaterial color={color} /> */}
      <MeshWobbleMaterial color={color} factor={5} speed={2} />
      {/* <MeshDistortMaterial color={color} /> */}
    </mesh>
  )
}
