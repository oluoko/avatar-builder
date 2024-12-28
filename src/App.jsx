import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <>
      <Canvas camera={{ position: [3, 3, 3] }}>
        <color attach="background" args={["#111111"]} />
        <OrbitControls />
        <mesh>
          <boxGeometry args={[2.5, 2.5, 2.5]} />
          <meshNormalMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;