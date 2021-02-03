import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import s from "./Settings.module.css";
const Settings = () => {
    function Box(props) {
        // This reference will give us direct access to the mesh
        const mesh = useRef()

        // Set up state for the hovered and active state
        const [hovered, setHover] = useState(false)
        const [active, setActive] = useState(false)

        // Rotate mesh every frame, this is outside of React without overhead
        useFrame(() => {
            mesh.current.rotation.x = mesh.current.rotation.y += 0.01
        })

        return (
            <mesh
                {...props}
                ref={mesh}
                scale={active ? [2, 2, 2 ] : [1, 1, 1]}
                onClick={(event) => setActive(!active)}
                onPointerOver={(event) => setHover(true)}
                onPointerOut={(event) => setHover(false)}>
                <boxBufferGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={hovered ? 'hotpink' : 'blue'} />
            </mesh>
        )
    }
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[0, 0, 0]} />
        </Canvas>
    );
};
export default Settings;
