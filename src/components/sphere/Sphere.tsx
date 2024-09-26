import { useFrame, Vector3 } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
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

  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  useFrame((state, delta) => {
    const speed = isHovered ? 1 : 0.2
    // ref.current.rotation.x += delta
    ref.current.rotation.y += delta * speed
    // ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
  })
  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(event) => (event.stopPropagation, setIsHovered(true))}
      onPointerLeave={(event) => setIsHovered(false)}
      onClick={(event) => (event.stopPropagation, setIsClicked(!isClicked))}
      scale={isClicked ? 1.5 : 1}
    >
      <sphereGeometry args={args} />
      <meshStandardMaterial color={isHovered ? 'lightblue' : color} wireframe />
    </mesh>
  )
}
