import { useFrame, Vector3 } from '@react-three/fiber'
import React, { useRef } from 'react'
import { Mesh } from 'three'

export const Sphere = ({
  position,
  args,
  color
}: {
  position: Vector3
  args: [
    width?: number | undefined,
    height?: number | undefined,
    depth?: number | undefined,
    widthSegments?: number | undefined,
    heightSegments?: number | undefined,
    depthSegments?: number | undefined
  ]
  color: string
}) => {
  const ref = useRef<Mesh>(null!)

  useFrame((state, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += delta
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
  })
  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={args} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  )
}
