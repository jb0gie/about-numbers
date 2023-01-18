import * as THREE from "three";
import { VideoTexture } from "three";
import React, { useState, useEffect, useRef } from "react";
import ReactTypingEffect from "react-typing-effect";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useIntersect,
  Image,
  ScrollControls,
  Scroll,
  useGLTF,
} from "@react-three/drei";

import "./App.css";

//
//

function SchwepeHead(props) {
  const portalUrl = () => {
    console.log("DO NOT TOUCH THE PINK ONE❗");
    window.open("https://schwepe.co.za");
  };
  const { nodes, materials } = useGLTF("/schwepehead.glb");
  return (
    <group {...props} dispose={null} onClick={portalUrl}>
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
useGLTF.preload("/schwepehead.glb");

function Item({ url, scale, ...props }) {
  const visible = useRef(false);
  const ref = useIntersect((isVisible) => (visible.current = isVisible));
  const { height } = useThree((state) => state.viewport);
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
  const { width: w, height: h } = useThree((state) => state.viewport);
  return (
    <Scroll>
      <SchwepeHead
        position={[-4.5, 1.5, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2}
      />
      <SchwepeHead
        position={[4.5, 1.5, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2}
      />
      <Item
        url="/schwepe2.png"
        scale={[w / 7, w / 11, 1]}
        position={[-w / 5, -h * 0.43, 0]}
      />
      <Item
        url="/tinfoil-schwepe.png"
        scale={[w / 4, w / 6, 1]}
        position={[-w / 3.1, -h * 0.15, 0]}
      />
      <Item
        url="/schwepe9.png"
        scale={[w / 3, w / 5, 1]}
        position={[-w / 4, -h * 1, 0]}
      />
      <Item
        url="/swagtagDONE.png"
        scale={[w / 3, w / 3, 1]}
        position={[w / 5, -h * 1, 0]}
      />
      <Item
        url="/alx-christ.png"
        scale={[w / 2.5, w / 6, 1]}
        position={[w / 6, -h * 1.65, 0]}
      />
      <Item
        url="/schwepe.png"
        scale={[w / 3, w / 3, 1]}
        position={[-w / 4, -h * 2, 0]}
      />
      <Item
        url="/pinkpepe8.png"
        scale={[w / 3, w / 5, 1]}
        position={[-w / 6, -h * 2.6, 0]}
      />
      <Item
        url="/pinkpepe4.png"
        scale={[w / 3, w / 10, 1]}
        position={[-w / 4, -h * 3, 0]}
      />
      <Item
        url="/rich.png"
        scale={[w / 5, w / 5, 1]}
        position={[-w / 3, -h * 3.6, 0]}
      />
      <Item
        url="/negajeeeves.png"
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
      ? "pointer"
      : "url('https://raw.githubusercontent.com/chenglou/react-motion/master/demos/demo8-draggable-list/cursor.png') 39 39, auto";
  }, [hovered]);

  return (
    <>
      <Canvas
        // orthographic
        // camera={{ zoom: 80 }}
        gl={{ alpha: false, antialias: false, stencil: false, depth: false }}
        dpr={[1, 1.5]}
      >
        {/* <color attach="background" args={['#f0f0f0']} /> */}
        <ScrollControls damping={6} pages={7}>
          <Items />
          <Scroll html style={{ width: "100%" }}>
            <div>
              <div
                className="text-white"
                style={{
                  position: "absolute",
                  top: `1vh`,
                  left: "50vw",
                  fontSize: "4em",
                  transform: `translate3d(0,-120%,0)`,
                }}
              >
                {/* <!-- NFT minter --> */}
                <iframe
                  style={{
                    position: "absolute",
                    top: "75px",
                    right: "-400px",
                    color: "transparent",
                  }}
                  width={800}
                  height={540}
                  src="https://gateway.ipfscdn.io/ipfs/Qmcine1gpZUbQ73nk7ZGCcjKBVFYXrEtqrhujXk3HDQ6Nn/erc721.html?contract=0xB96635E821Ef53790628705e1B68fca7958b42a3&chainId=137&theme=dark&primaryColor=cyan"
                />
              </div>
              <ReactTypingEffect
                className="text-white"
                style={{
                  position: "absolute",
                  top: `80vh`,
                  right: "20vw",
                  fontSize: "4em",
                  transform: `translate3d(0,-100%,0)`,
                }}
                text={[
                  "hey you",
                  "an~entrypoint",
                  "genesis~babies",
                  "MINT MEOW",
                  "247",
                  "420",
                  "247420",
                  "schwepe",
                  "swag~tag",
                  "hyper~bolic",
                  "muta~gen",
                  "hyper~nat",
                  "hyper~ipc~secure",
                  "h~shell",
                  "schwe~fi",
                  "schwepe~nomics",
                  "an",
                  "entry",
                  "point",
                ]}
              />
              <h1
                className="text-white text-right text-2xl"
                style={{ position: "absolute", top: "85vh", right: "10vw" }}
              >
                <a href="https://247420.xyz">
                  <code>an [entrypoint]</code>
                </a>{" "}
                <br /> check it out 👇 - always available <code>(24/7)</code>{" "}
                <br /> and has a relaxed and approachable vibe (420).
              </h1>

              <h2
                className="text-white text-left text-2xl"
                style={{ position: "absolute", top: "110vh", right: "10vw" }}
              >
                <em>"Media Mavericks"</em> - bold and innovative.
              </h2>
              <h2
                className="text-white text-center text-2xl"
                style={{ position: "absolute", top: "105vh", right: "35vw" }}
              >
                <em>"The Creative Collective"</em> - a group of creative
                professionals <br />
                working together to deliver high-quality media services.
              </h2>

              <h2
                className="text-white text-right text-2xl"
                style={{ position: "absolute", top: "195vh", left: "10vw" }}
              >
                <em>"The Media Mixologists"</em> - as experts in creating the
                perfect <br />
                blend of media elements to achieve the desired results.
              </h2>
              <h2
                className="text-white text-right text-2xl"
                style={{ position: "absolute", top: "235vh", right: "10vw" }}
              >
                <em>"The Media Masters"</em> - highly skilled and experienced in
                the media industry.
              </h2>
            </div>

            <div
              className="text-red-300"
              style={{ position: "absolute", top: "180vh", left: "10vw" }}
            >
              <h1 className="text-5xl">wait⏳less😮‍💨</h1>
              <p className="text-2xl">
                in{" "}
                <a style={{ color: "white" }} href="https://dsc.gg/entrypoint">
                  an entrypoint
                </a>
                , we focus on keeping things as light possible.
                <br />
                lighter the better, if it ain't <code>hyper~lite</code> why are
                you running it ❔
              </p>
            </div>

            <div
              className="text-green-300"
              style={{ position: "absolute", top: "248vh", right: "13vw" }}
            >
              <h1 className="text-5xl">dApp💻ecosystem🏡</h1>
              <br />
              <p className="text-2xl">
                our community has been developing since late 2017
              </p>
              <br />
              <div className="mx-auto overflow-x-auto">
                <table className="table table-zebra w-full">
                  {/* <!-- head --> */}
                  <thead className="text-center">
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
                        <a
                          href="https://github.com/AnEntrypoint/school-of-minnows"
                          target="_blank"
                        >
                          <button className="btn glass">see the repo</button>
                        </a>
                      </td>
                    </tr>
                    {/* <!-- row 2 --> */}
                    <tr>
                      <th>2</th>
                      <td>monaverse</td>
                      <td>placed 🥉 in a build-a-thon</td>
                      <td>
                        <a
                          href="https://opensea.io/assets/matic/0x78cfa53ac1de634d9268c317269867f20c04ea76/12"
                          target="_blank"
                        >
                          <button className="btn glass">see the nft</button>
                        </a>
                      </td>
                    </tr>
                    {/* <!-- row 3 --> */}
                    <tr>
                      <th>3</th>
                      <td>moralis hackathon</td>
                      <td>schwepe and swagtag is born</td>
                      <td>
                        <a
                          href="https://github.com/AnEntrypoint/swagtag-avax/tree/main"
                          target="_blank"
                        >
                          <button className="btn glass">see repo</button>
                        </a>
                      </td>
                    </tr>
                    {/* <!-- row 4 --> */}
                    <tr>
                      <th>4</th>
                      <td>hyperbolic~relay</td>
                      <td>hyper~powered relay</td>
                      <td>
                        <a href="" target="_blank">
                          <button className="btn glass">see repo</button>
                        </a>
                      </td>
                    </tr>
                    {/* <!-- row 5 --> */}
                    <tr>
                      <th>4</th>
                      <td>hyperbolic~dns</td>
                      <td>dns powered by hyper~core</td>
                      <td>
                        <a href="https://github.com/AnEntrypoint/hyperbolic-relay" target="_blank">
                          <button className="btn glass">see repo</button>
                        </a>
                      </td>
                    </tr>
                    {/* <!-- row 6 --> */}
                    <tr>
                      <th>6</th>
                      <td>hyper~tunnel</td>
                      <td>a hyper~light app</td>
                      <td>
                        <a href="https://github.com/AnEntrypoint/hyperbolic-tunnel" target="_blank">
                          <button className="btn glass">see repo</button>
                        </a>
                      </td>
                    </tr>
                    {/* <!-- row 7 --> */}
                    <tr>
                      <th>7</th>
                      <td>hyper~nat</td>
                      <td>we pwned udp && tcp</td>
                      <td>
                        <a href="https://github.com/AnEntrypoint/hyper-nat" target="_blank">
                          <button className="btn glass">see repo</button>
                        </a>
                      </td>
                    </tr>
                    {/* <!-- row 8 --> */}
                    <tr>
                      <th>8</th>
                      <td>muta~gen</td>
                      <td>mutagenic NFT metadata</td>
                      <td>
                        <a href="https://github.com/AnEntrypoint/mutagen" target="_blank">
                          <button className="btn glass">see repo</button>
                        </a>
                      </td>
                    </tr>
                    {/* <!-- row 9 --> */}
                    <tr>
                      <th>9</th>
                      <td>schwepe</td>
                      <td>the pink one</td>
                      <td>
                        <a href="https://github.com/steph5nus/schwepe" target="_blank">

                        <button className="btn glass">see repo</button>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div
              className="text-blue-300"
              style={{ position: "absolute", top: "370vh", left: "5vw" }}
            >
              <h1 className="text-5xl">schwepe🐸labs🧪</h1>
              <p className="text-2xl">
                no one in an entrypoint would have guessed <br />
                this lovable pink frog would mascot our community into
                adventures <br />
                like the{" "}
                <a href="https://www.youtube.com/watch?v=tb6bUYpM1_0">
                  𝓶𝓬𝓪𝓯𝓮𝓮𝓳𝓸𝓫
                </a>
              </p>
            </div>

            <section
              style={{ position: "absolute", top: "480vh", right: "10vw" }}
              id="services"
              class="py-20 xl:py-24 bg-trasnparent max-w-5xl mx-auto"
            >
              <div class="container px-4 mx-auto">
                <div class="text-center">
                  <h3 class="mb-6 text-3xl md:text-5xl lg:text-7xl text-white font-bold tracking-tight leading-snug md:leading-snug lg:leading-snug">
                    What <em>is</em>{" "}
                    <code>
                      <a href="https://247420.xyz">247420.xyz</a>
                    </code>{" "}
                    ❓
                  </h3>
                </div>
                <div class="flex flex-wrap justify-center items-center -mx-4">
                  <div class="w-full p-4">
                    <div class="px-8 pb-8">
                      <p class="mb-6 text-right text-white font-bold">
                        We are is a discord community of creative professionals,
                        dedicated to producing the world's most innovative and
                        original media. Individuals work around the clock, using
                        their skills and talents to craft unique and engaging
                        content that resonates with audiences of all ages.
                      </p>
                      <p class="mb-6 text-right text-white font-bold">
                        At the heart of this community is a shared passion for
                        creativity and a love of cannibis culture. Members of
                        this community enjoy smoking marijuana as they work,
                        using it as a tool to unlock their full creative
                        potential and push the boundaries of what is possible.
                        Whether they are working on music, art, film, or
                        something else entirely, these creative professionals
                        are always looking for ways to bring something new and
                        exciting to the table. They are a tight-knit group,
                        always willing to collaborate and support one another as
                        they strive to achieve their goals. As a result of their
                        tireless efforts and dedication, this community has
                        become a hub for some of the most impressive and
                        original media being produced today.
                      </p>
                      <p class="mb-6 text-right text-white font-bold">
                        From cutting-edge music and art to groundbreaking films
                        and more, this community is filled with creative
                        individuals who are pushing the limits and constantly
                        finding new ways to express themselves. Overall, this
                        Discord community of creative professionals working
                        around the clock and smoking weed is a place where the
                        most talented and innovative minds come together to
                        create truly memorable and impactful media. So, if
                        you're a creative professional looking to join a
                        supportive and inspiring community, this could be the
                        perfect place for you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              style={{ position: "absolute", top: "545vh", left: "10vw" }}
              id="services"
              class="py-20 xl:py-24 bg-trasnparent max-w-5xl mx-auto"
            >
              <div class="container px-4 mx-auto">
                <div class="text-center">
                  <h3 class="mb-6 text-3xl md:text-5xl lg:text-7xl text-white font-bold tracking-tight leading-snug md:leading-snug lg:leading-snug">
                    Our Services
                  </h3>
                </div>
                <div class="flex flex-wrap justify-center items-center -mx-4">
                  <div class="w-full md:w-1/3 p-4">
                    <div class="flex flex-col pt-8 pb-8 hover:scale-105 transition duration-500">
                      <div class="px-8 pb-8">
                        <h3 class="mb-6 text-center text-lg md:text-xl text-white font-medium">
                          Video production
                        </h3>
                        <p class="mb-6 text-center text-gray-400 font-medium">
                          creating high-quality promotional, corporate, and
                          training videos.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/3 p-4">
                    <div class="flex flex-col pt-8 pb-8  hover:scale-105 transition duration-500">
                      <div class="px-8 pb-8">
                        <h3 class="mb-6 text-center text-lg md:text-xl text-white font-medium">
                          Graphic design
                        </h3>
                        <p class="mb-6 text-center text-gray-400 font-medium">
                          professional logo design, marketing materials, and
                          website graphics.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/3 p-4">
                    <div class="flex flex-col pt-8 pb-8  hover:scale-105 transition duration-500">
                      <div class="px-8 pb-8">
                        <h3 class="mb-6 text-center text-lg md:text-xl text-white font-medium">
                          Photography{" "}
                        </h3>
                        <p class="mb-6 text-center text-gray-400 font-medium">
                          professional photography services for use in marketing
                          materials and on websites.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/3 p-4">
                    <div class="flex flex-col pt-8 pb-8  hover:scale-105 transition duration-500">
                      <div class="px-8 pb-8">
                        <h3 class="mb-6 text-center text-lg md:text-xl text-white font-medium">
                          Audio production{" "}
                        </h3>
                        <p class="mb-6 text-center text-gray-400 font-medium">
                          recording and editing audio for podcasts, video
                          content, and more.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/3 p-4">
                    <div class="flex flex-col pt-8 pb-8  hover:scale-105 transition duration-500">
                      <div class="px-8 pb-8">
                        <h3 class="mb-6 text-center text-lg md:text-xl text-white font-medium">
                          Content creation{" "}
                        </h3>
                        <p class="mb-6 text-center text-gray-400 font-medium">
                          writes and edits articles, blog posts, social media
                          posts, and other types of content.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/3 p-4">
                    <div class="flex flex-col pt-8 pb-8  hover:scale-105 transition duration-500">
                      <div class="px-8 pb-8">
                        <h3 class="mb-6 text-center text-lg md:text-xl text-white font-medium">
                          Web design and development{" "}
                        </h3>
                        <p class="mb-6 text-center text-gray-400 font-medium">
                          creates and maintains websites, as well as developing
                          custom web-based applications.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/3 p-4">
                    <div class="flex flex-col pt-8 pb-8  hover:scale-105 transition duration-500">
                      <div class="px-8 pb-8">
                        <h3 class="mb-6 text-center text-lg md:text-xl text-white font-medium">
                          Marketing and advertising{" "}
                        </h3>
                        <p class="mb-6 text-center text-gray-400 font-medium">
                          offers a full range of marketing and advertising
                          services, including social media marketing and email
                          marketing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/3 p-4">
                    <div class="flex flex-col pt-8 pb-8  hover:scale-105 transition duration-500">
                      <div class="px-8 pb-8">
                        <h3 class="mb-6 text-center text-lg md:text-xl text-white font-medium">
                          Event planning and management{" "}
                        </h3>
                        <p class="mb-6 text-center text-gray-400 font-medium">
                          experienced in organizing and managing events such as
                          conferences, trade shows, and other gatherings.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/3 p-4">
                    <div class="flex flex-col pt-8 pb-8  hover:scale-105 transition duration-500">
                      <div class="px-8 pb-8">
                        <h3 class="mb-6 text-center text-lg md:text-xl text-white font-medium">
                          Public relations
                        </h3>
                        <p class="mb-6 text-center text-gray-400 font-medium">
                          develops and implements PR strategies, writes press
                          releases, and manages media relations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div style={{ position: "absolute", top: "400vh", right: "11vw" }}>
              <h1 className="text-white text-2xl">
                <code>praise jeeves.</code>
              </h1>
            </div>

            <div
              className="text-white"
              style={{ position: "absolute", top: "690vh", left: "4vw" }}
            >
              <p className="text-center">
                Copyright © 20XX ~ built with love in{" "}
                <code>an [entrypoint]</code>
              </p>
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}
