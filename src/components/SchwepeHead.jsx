import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function SchwepeHead(props) {
  const { nodes, materials } = useGLTF('/schwepehead.glb');
  return (
    <group {...props} dispose={null}>
      <group position={[0,0,0]} rotation={[Math.PI / 2, 0, 0]} scale={1.12}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pepe_frog004.geometry}
          material={materials.SKIN}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pepe_frog004_1.geometry}
          material={materials.Eye2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pepe_frog004_2.geometry}
          material={materials.Eye1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIPS001.geometry}
          material={materials.Lips}
          position={[0, 0.19, 0.17]}
          scale={0.14}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/schwepehead.glb');

