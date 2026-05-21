import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

import { HomeInfo, Loader, MusicPlayer } from "../components";
import { Island, Plane } from "../models";

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className='w-full h-screen relative bg-gradient-to-b from-[#4fa5fc] via-[#a3d7fc] to-[#e0f2fe] overflow-hidden'>
      {/* Background Animated Clouds */}
      <div className='absolute inset-0 pointer-events-none overflow-hidden z-0'>
        {/* Cloud 1 */}
        <svg className='absolute opacity-60 animate-drift-slow' style={{ top: "8%", width: "240px", height: "120px", animationDelay: "-20s" }} viewBox="0 0 100 60" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
          <path d="M 20 35 A 15 15 0 0 1 50 32 A 20 20 0 0 1 82 35 A 12 12 0 0 1 80 50 L 20 50 A 10 10 0 0 1 20 35 Z" />
        </svg>
        {/* Cloud 2 */}
        <svg className='absolute opacity-75 animate-drift-medium' style={{ top: "22%", width: "380px", height: "190px", animationDelay: "-50s" }} viewBox="0 0 100 60" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
          <path d="M 20 35 A 15 15 0 0 1 50 32 A 20 20 0 0 1 82 35 A 12 12 0 0 1 80 50 L 20 50 A 10 10 0 0 1 20 35 Z" />
        </svg>
        {/* Cloud 3 */}
        <svg className='absolute opacity-40 animate-drift-fast' style={{ top: "42%", width: "180px", height: "90px", animationDelay: "-10s" }} viewBox="0 0 100 60" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
          <path d="M 20 35 A 15 15 0 0 1 50 32 A 20 20 0 0 1 82 35 A 12 12 0 0 1 80 50 L 20 50 A 10 10 0 0 1 20 35 Z" />
        </svg>
        {/* Cloud 4 */}
        <svg className='absolute opacity-70 animate-drift-slow' style={{ top: "58%", width: "320px", height: "160px", animationDelay: "-80s" }} viewBox="0 0 100 60" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
          <path d="M 20 35 A 15 15 0 0 1 50 32 A 20 20 0 0 1 82 35 A 12 12 0 0 1 80 50 L 20 50 A 10 10 0 0 1 20 35 Z" />
        </svg>
        {/* Cloud 5 */}
        <svg className='absolute opacity-55 animate-drift-medium' style={{ top: "12%", width: "440px", height: "220px", animationDelay: "-110s" }} viewBox="0 0 100 60" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
          <path d="M 20 35 A 15 15 0 0 1 50 32 A 20 20 0 0 1 82 35 A 12 12 0 0 1 80 50 L 20 50 A 10 10 0 0 1 20 35 Z" />
        </svg>
        {/* Cloud 6 */}
        <svg className='absolute opacity-60 animate-drift-fast' style={{ top: "72%", width: "200px", height: "100px", animationDelay: "-35s" }} viewBox="0 0 100 60" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
          <path d="M 20 35 A 15 15 0 0 1 50 32 A 20 20 0 0 1 82 35 A 12 12 0 0 1 80 50 L 20 50 A 10 10 0 0 1 20 35 Z" />
        </svg>
      </div>

      <div className='absolute top-28 left-0 right-0 z-20 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent relative z-10 ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[2, 3, 1]} intensity={2.2} color="#ffffff" />
          <ambientLight intensity={0.85} color="#e0f4ff" />
          <pointLight position={[12, 6, 12]} intensity={1.5} color="#ffa857" />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1.5}
            color="#ffd9b3"
          />
          <hemisphereLight
            skyColor='#e2daff'
            groundColor='#2f1f3b'
            intensity={1.2}
          />

          {/* Sky dome is replaced by gorgeous 2D dynamic CSS/SVG cloud layers for sharpness, speed, and responsive aesthetics */}
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>

      <MusicPlayer />
    </section>
  );
};

export default Home;
