import "./App.scss";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import Earth from "./components/Earth";

function App() {
  useEffect(()=>{
    const container = document.querySelector(".container");
    const colors = ["#fff", "#FC6400", "#0949F0"];
    for (let i = 0; i < 250; i++) {
        const particle = document.createElement("div");
        const bgColor = colors[Math.floor(Math.random() * colors.length)];
        particle.classList.add("particle");
        container.appendChild(particle);
        particle.style.top = `${Math.random() * container.offsetHeight - 5}px`;
        particle.style.left = `${Math.random() * container.offsetWidth - 10}px`;
        particle.style.backgroundColor = bgColor;
        particle.style.boxShadow = `0 0 10px ${bgColor},0 0 20px ${bgColor},0 0 40px ${bgColor}`;
        particle.style.animationDelay = `${i / 100}s`;
      }
  },[])
  return (
    <>
      <div className="container">
        <Canvas colorManagement camera={{ position: [-5, 2, 10], fav: 60 }}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[0, 10, 0]} intensity={0.5} />
          <pointLight position={[-10, 0, 20]} intensity={0.5} />
          <pointLight position={[0, -10, 0]} intensity={1.5} />
          <Earth />
          <OrbitControls />
        </Canvas>
        <h2>Earth</h2>
      </div>
    </>
  );
}
export default App;
