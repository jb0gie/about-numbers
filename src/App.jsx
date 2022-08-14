import * as THREE from 'three'
import React, { useState, useEffect, useRef } from 'react'
import ReactTypingEffect from 'react-typing-effect'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useIntersect, Image, ScrollControls, Scroll } from '@react-three/drei'

import './App.css'


function Item({ url, scale, ...props }) {
  const visible = useRef(false)
  const ref = useIntersect((isVisible) => (visible.current = isVisible))
  const { height } = useThree((state) => state.viewport)
  useFrame((state, delta) => {
    ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, visible.current ? 0 : -height / 2 + 1, 4, delta)
    ref.current.material.zoom = THREE.MathUtils.damp(ref.current.material.zoom, visible.current ? 1 : 1.5, 4, delta)
  })
  return (
    <group {...props}>
      <Image ref={ref} scale={scale} url={url} />
    </group>
  )
}

function Items() {
  const { width: w, height: h } = useThree((state) => state.viewport)
  return (
    <Scroll>
      <Item url="" scale={[w / 3, w / 3, 1]} position={[-w / 6, 0, 0]} />
      <Item url="" scale={[2, w / 3, 1]} position={[w / 30, -h, 0]} />
      <Item url="" scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 1, 0]} />
      <Item url="" scale={[w / 5, w / 5, 1]} position={[w / 4, -h * 1.2, 0]} />
      <Item url="" scale={[w / 5, w / 5, 1]} position={[w / 10, -h * 1.75, 0]} />
      <Item url="" scale={[w / 3, w / 3, 1]} position={[-w / 4, -h * 2, 0]} />
      <Item url="" scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 2.6, 0]} />
      <Item url="" scale={[w / 2, w / 2, 1]} position={[w / 4, -h * 3.1, 0]} />
      <Item url="" scale={[w / 2.5, w / 2, 1]} position={[-w / 6, -h * 4.1, 0]} />
    </Scroll>
  )
}

function App() {
  const [hovered, hover] = useState(false)
  const mouse = useRef([0, 0])
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  
  useEffect(() => {
    document.body.style.cursor = hovered
      ? 'pointer'
      : "url('https://raw.githubusercontent.com/chenglou/react-motion/master/demos/demo8-draggable-list/cursor.png') 39 39, auto"
  }, [hovered])


  return (
    <Canvas camera={{ zoom: 80 }} gl={{ alpha: false, antialias: false, stencil: false, depth: false }} dpr={[1, 1.5]}>
      {/* <color attach="background" args={['#f0f0f0']} /> */}
      <ScrollControls damping={6} pages={5}>
        {/* <Items /> */}
        <Scroll html style={{ width: '100%' }}>
          <div >
            <ReactTypingEffect
              style={{ position: 'absolute', top: `80vh`, right: '20vw', fontSize: '12em', transform: `translate3d(0,-100%,0)` }}
              text={["247", "420", "247420", "hyper~bolic", "muta~gen",]} />
            <p style={{ position: 'absolute', top: '95vh', right: '10vw' }}>
              <a href=''>an entrypoint</a> dApp ecosystem. check it out
            </p>
          </div>
          <div style={{ position: 'absolute', top: '180vh', left: '10vw' }}>
            <h1>wait⏳less😮‍💨</h1>
            <p>in <a href='https://dsc.gg/entrypoint'>an entrypoint</a>, we focus on keeping things as light possible.</p>
            <p>lighter ther better, if it ain't <code>hyper~lite</code> why are you running it ❔</p>
          </div>
          <div style={{ position: 'absolute', top: '260vh', right: '10vw' }}>
            <h1>dApp ecosystem</h1>
            <p></p>
            <p></p>
          </div>
          <div style={{ position: 'absolute', top: '350vh', left: '10vw' }}>
            <h1>schwepe  labs</h1>
            <p>no one in an entrypoint would have guessed this lovable pink frog</p>
            <p></p>
          </div>
          <div style={{ position: 'absolute', top: '450vh', right: '10vw' }}>
            <h1>praise<br />jeeves.</h1>
          </div>
          <div style={{ position: 'absolute', top: '490vh', left: '45vw' }}>
            <p>built in an entrypoint</p>
          </div>
        </Scroll>
      </ScrollControls>
    </Canvas>
  )
}

export default App
