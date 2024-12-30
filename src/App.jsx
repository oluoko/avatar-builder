import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { UI } from "./components/UI";

function App() {
  return (
    <>
      <UI />
      <Canvas camera={{ position: [3, 3, 3] }}>
        <color attach="background" args={["#111111"]} />
        <OrbitControls />
        <mesh>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshNormalMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
