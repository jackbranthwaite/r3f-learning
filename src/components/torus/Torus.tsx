import { Vector3 } from '@react-three/fiber'
import React from 'react'

export const Torus = ({
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
  return (
    <mesh position={position}>
      <torusGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}
