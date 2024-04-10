import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Box from "./Box";

const WeatherCube = () => {
  return (
    <div className="cube">
      <Canvas camera={{ position: [2, 1, 5], fov: 25 }}>
        <ambientLight intensity={4} />
        <pointLight position={[10, 10, 5]} />
        <pointLight position={[-10, -10, -10]} />
        <Box />
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
};

export default WeatherCube;
