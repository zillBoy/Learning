// React Depenedencies
import React from "react";

// External Dependencies
import { Canvas } from "@react-three/fiber";

const BasicScene = () => {
  return (
    <div style={{ backgroundColor: "black", width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [1, 1, 3] }}>
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color="pink" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default BasicScene;
