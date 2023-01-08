import * as THREE from 'three';
import { VideoTexture } from 'three';
import React, { useState, useEffect, useRef } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  useIntersect,
  Image,
  ScrollControls,
  Scroll,
  useGLTF,
} from '@react-three/drei';

import './App.css';

function SchwepeHead(props) {
  const portalUrl = () => {
    console.log('DO NOT TOUCH THE PINK ONE❗');
    window.open('https://schwepe.co.za');
  };
  const { nodes, materials } = useGLTF('/schwepehead.glb');
  return (
    <group {...props} dispose={null} onClick={portalUrl} >
      <group scale={1}>
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

function Item({ url, scale, ...props }) {
  const visible = useRef(false);
  const ref = useIntersect(isVisible => (visible.current = isVisible));
  const { height } = useThree(state => state.viewport);
  useFrame((state, delta) => {
    ref.current.position.y = THREE.MathUtils.damp(
      ref.current.position.y,
      visible.current ? 0 : -height / 2 + 1,
      4,
      delta
    );
    ref.current.material.zoom = THREE.MathUtils.damp(
      ref.current.material.zoom,
      visible.current ? 1 : 1.5,
      4,
      delta
    );
  });

  return (
    <group {...props}>
      <Image ref={ref} scale={scale} url={url} />
    </group>
  );
}

function Items() {
  const { width: w, height: h } = useThree(state => state.viewport);
  return (
    <Scroll>
      <SchwepeHead
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2}
      />
      <Item
        url='/schwepe2.png'
        scale={[w / 7, w / 11, 1]}
        position={[-w / 5, -h * 0.45, 0]}
      />
      <Item
        url='/tinfoil-schwepe.png'
        scale={[w / 4, w / 6, 1]}
        position={[-w / 3, -h * 0.15, 0]}
      />
      <Item
        url='/schwepe9.png'
        scale={[w / 3, w / 5, 1]}
        position={[-w / 4, -h * 0.8, 0]}
      />
      <Item
        url='/swagtagDONE.png'
        scale={[w / 3, w / 3, 1]}
        position={[w / 5, -h * 1, 0]}
      />
      <Item
        url='/alx-christ.png'
        scale={[w / 2.5, w / 6, 1]}
        position={[w / 6, -h * 1.65, 0]}
      />
      <Item
        url='/schwepe.png'
        scale={[w / 3, w / 3, 1]}
        position={[-w / 4, -h * 2, 0]}
      />
      <Item
        url='/pinkpepe8.png'
        scale={[w / 3, w / 5, 1]}
        position={[-w / 6, -h * 2.6, 0]}
      />
      <Item
        url='/pinkpepe4.png'
        scale={[w / 3, w / 10, 1]}
        position={[-w / 4, -h * 3, 0]}
      />
      <Item
        url='/rich.png'
        scale={[w / 5, w / 5, 1]}
        position={[-w / 3, -h * 3.6, 0]}
      />
      <Item
        url='/negajeeeves.png'
        scale={[w / 4, w / 6, 1]}
        position={[w / 5, -h * 3.3, 0]}
      />
      <SchwepeHead
        position={[0, -30, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={5}
      />
    </Scroll>
  );
}

export default function App() {
  const [hovered, hover] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered
      ? 'pointer'
      : "url('https://raw.githubusercontent.com/chenglou/react-motion/master/demos/demo8-draggable-list/cursor.png') 39 39, auto";
  }, [hovered]);

  return (
    <>
      <Canvas
        // orthographic
        // camera={{ zoom: 80 }}
        gl={{ alpha: false, antialias: false, stencil: false, depth: false }}
        dpr={[1, 1.5]}>
        {/* <color attach="background" args={['#f0f0f0']} /> */}
        <ScrollControls damping={6} pages={5}>
          <Items />
          <Scroll html style={{ width: '100%' }}>
            <div>
              <ReactTypingEffect
                className='text-white'
                style={{
                  position: 'absolute',
                  top: `80vh`,
                  right: '20vw',
                  fontSize: '4em',
                  transform: `translate3d(0,-100%,0)`,
                }}
                text={[
                  '247',
                  '420',
                  '247420',
                  'schwepe',
                  'swagtag',
                  'hyper~bolic',
                  'muta~gen',
                  'hyper~nat',
                  'hyper~ipc~secure',
                  'h~shell',
                ]}
              />
              <h1
                className='text-white text-right text-2xl'
                style={{ position: 'absolute', top: '80vh', right: '10vw' }}>
                <a href=''>an [entrypoint]</a> dApp ecosystem. <br /> check it
                out 👇
              </h1>
            </div>

            <div
              className='text-red-300'
              style={{ position: 'absolute', top: '180vh', left: '10vw' }}>
              <h1 className='text-5xl'>wait⏳less😮‍💨</h1>
              <p className='text-2xl'>
                in <a href='https://dsc.gg/entrypoint'>an entrypoint</a>, we
                focus on keeping things as light possible.
                <br />
                lighter the better, if it ain't <code>hyper~lite</code> why are
                you running it ❔
              </p>
            </div>

            <div
              className='text-green-300'
              style={{ position: 'absolute', top: '248vh', right: '13vw' }}>
              <h1 className='text-5xl'>dApp💻ecosystem🏡</h1>
              <br />
              <p className='text-2xl'>
                our community has been developing since late 2017
              </p>
              <br />
              <div className='mx-auto overflow-x-auto'>
                <table className='table table-zebra w-full'>
                  {/* <!-- head --> */}
                  <thead className='text-center'>
                    <tr>
                      <th></th>
                      <th>Project Name</th>
                      <th>Project Type</th>
                      <th>Repo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <!-- row 1 --> */}
                    <tr>
                      <th>1</th>
                      <td>school of minnows</td>
                      <td>a steemit/hive discord upvote bot</td>
                      <td>
                        <button className='btn glass'>see repo</button>
                      </td>
                    </tr>
                    {/* <!-- row 2 --> */}
                    <tr>
                      <th>2</th>
                      <td>freedom first</td>
                      <td>an [entrypoint] genesis on eos</td>
                      <td>
                        <button className='btn glass'>no repo</button>
                      </td>
                    </tr>
                    {/* <!-- row 3 --> */}
                    <tr>
                      <th>3</th>
                      <td>dConnect</td>
                      <td>discord replacement experiments</td>
                      <td>
                        <button className='btn glass'>no repo</button>
                      </td>
                    </tr>
                    {/* <!-- row 4 --> */}
                    <tr>
                      <th>4</th>
                      <td>chakra chain</td>
                      <td>hyper~powered</td>
                      <td>
                        <button className='btn glass'>see repo</button>
                      </td>
                    </tr>
                    {/* <!-- row 5 --> */}
                    <tr>
                      <th>5</th>
                      <td>monaverse</td>
                      <td>placed 🥉 in a build-a-thon</td>
                      <td>
                        <button className='btn glass'>no repo</button>
                      </td>
                    </tr>
                    {/* <!-- row 6 --> */}
                    <tr>
                      <th>6</th>
                      <td>moralis</td>
                      <td>schwepe and swagtag is born</td>
                      <td>
                        <button className='btn glass'>see repo</button>
                      </td>
                    </tr>
                    {/* <!-- row 7 --> */}
                    <tr>
                      <th>7</th>
                      <td>hyper~tunnel</td>
                      <td>a hyper~light app</td>
                      <td>
                        <button className='btn glass'>see repo</button>
                      </td>
                    </tr>
                    {/* <!-- row 8 --> */}
                    <tr>
                      <th>8</th>
                      <td>hyper~dns</td>
                      <td>dns powered by hyper~core</td>
                      <td>
                        <button className='btn glass'>see repo</button>
                      </td>
                    </tr>
                    {/* <!-- row 9 --> */}
                    <tr>
                      <th>9</th>
                      <td>hyper~nat</td>
                      <td>we pwned udp && tcp</td>
                      <td>
                        <button className='btn glass'>see repo</button>
                      </td>
                    </tr>
                    {/* <!-- row 10 --> */}
                    <tr>
                      <th>10</th>
                      <td>muta~gen</td>
                      <td>mutagenic NFT metadata</td>
                      <td>
                        <button className='btn glass'>see repo</button>
                      </td>
                    </tr>
                    {/* <!-- row 11 --> */}
                    <tr>
                      <th>11</th>
                      <td>schwepe</td>
                      <td>the pink one</td>
                      <td>
                        <button className='btn glass'>see repo</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div
              className='text-blue-300'
              style={{ position: 'absolute', top: '370vh', left: '5vw' }}>
              <h1 className='text-5xl'>schwepe🐸labs🧪</h1>
              <p className='text-2xl'>
                no one in an entrypoint would have guessed <br />
                this lovable pink frog would mascot our community into
                adventures <br />
                like the{' '}
                <a href='https://www.youtube.com/watch?v=tb6bUYpM1_0'>
                  𝓶𝓬𝓪𝓯𝓮𝓮𝓳𝓸𝓫
                </a>
              </p>
            </div>

            <div style={{ position: 'absolute', top: '390vh', right: '11vw' }}>
              <h1 className='text-white text-2xl'>
                <code>praise jeeves.</code>
              </h1>
            </div>

            <div
              className='text-white'
              style={{ position: 'absolute', top: '490vh', left: '4vw' }}>
              <p className='text-center'>
                Copyright © 20XX ~ built with love in{' '}
                <code>an [entrypoint]</code>
              </p>
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}
