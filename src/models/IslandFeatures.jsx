import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// 1. Cozy Chimney Smoke Emitter for the original cottage chimney
export function ChimneySmoke(props) {
  const smokeRefs = useRef([]);
  const smokeParticles = useRef(
    Array.from({ length: 8 }, () => ({
      position: new THREE.Vector3(),
      velocity: new THREE.Vector3(),
      opacity: 0,
      scale: 0.1,
      age: 0,
      maxAge: 2.2
    }))
  );

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const particles = smokeParticles.current;
    
    // Original cottage chimney local position on the island
    const chimneyBase = new THREE.Vector3(-5.35, 12.8, -0.15);

    particles.forEach((p, idx) => {
      const mesh = smokeRefs.current[idx];
      if (!mesh) return;

      p.age += 0.016;
      if (p.age >= p.maxAge || p.opacity <= 0) {
        // Recycle and emit
        p.age = 0;
        p.maxAge = 1.4 + Math.random() * 0.8;
        p.position.copy(chimneyBase);
        p.position.x += (Math.random() - 0.5) * 0.08;
        p.position.z += (Math.random() - 0.5) * 0.08;

        // Slow, elegant diagonal drift up and away in the breeze
        p.velocity.set(
          0.012 + Math.sin(time * 1.5 + idx) * 0.003,
          0.038 + Math.random() * 0.012,
          0.008 + Math.cos(time * 1.2 + idx) * 0.003
        );
        p.scale = 0.2 + Math.random() * 0.25;
        p.opacity = 0.6;
      } else {
        // Update physics
        p.position.add(p.velocity);
        p.scale += 0.006; // Grow as it rises
        p.opacity = (1 - (p.age / p.maxAge)) * 0.6;
      }

      mesh.position.copy(p.position);
      mesh.scale.setScalar(p.scale);
      mesh.material.opacity = p.opacity;
      mesh.visible = p.opacity > 0.02;
    });
  });

  return (
    <group {...props}>
      {Array.from({ length: 8 }).map((_, idx) => (
        <mesh key={idx} ref={(el) => (smokeRefs.current[idx] = el)} visible={false}>
          <sphereGeometry args={[0.5, 4, 4]} />
          <meshBasicMaterial color="#e0dbd5" transparent opacity={0} depthWrite={false} />
        </mesh>
      ))}
    </group>
  );
}

// 2. Magical Drifting Fairy Dust Sparkles floating around the entire island
export function FairyDust(props) {
  const dustRefs = useRef([]);
  const dustCount = 24;
  
  const dustParticles = useRef(
    Array.from({ length: dustCount }, () => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 45, // Span across the island width
        Math.random() * 15 - 2,     // Vertically from bottom to above trees
        (Math.random() - 0.5) * 45  // Depth span
      ),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.02 + 0.01,  // Slow drift right
        (Math.random() - 0.5) * 0.01 + 0.005, // Slow drift up
        (Math.random() - 0.5) * 0.02
      ),
      color: ["#ffd700", "#ffccd5", "#e0f2fe"][Math.floor(Math.random() * 3)],
      scale: 0.15 + Math.random() * 0.2,
      phase: Math.random() * Math.PI * 2,
      speed: 0.8 + Math.random() * 1.2
    }))
  );

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const particles = dustParticles.current;

    particles.forEach((p, idx) => {
      const mesh = dustRefs.current[idx];
      if (!mesh) return;

      // Update positions with organic sine wave wobbles
      p.position.x += p.velocity.x + Math.sin(time * p.speed + p.phase) * 0.008;
      p.position.y += p.velocity.y + Math.cos(time * p.speed + p.phase) * 0.005;
      p.position.z += p.velocity.z;

      // Pulse the scale to create a glowing twinkle effect
      const twinkle = p.scale * (0.6 + Math.sin(time * 4 + p.phase) * 0.4);

      // Boundary checking to wrap particles around the island volume
      if (p.position.x > 25) p.position.x = -25;
      if (p.position.x < -25) p.position.x = 25;
      if (p.position.y > 18) p.position.y = -4;
      if (p.position.y < -4) p.position.y = 18;
      if (p.position.z > 25) p.position.z = -25;
      if (p.position.z < -25) p.position.z = 25;

      mesh.position.copy(p.position);
      mesh.scale.setScalar(twinkle);
      
      // Make them glow with emissive intensity
      mesh.material.opacity = 0.4 + Math.sin(time * 3 + p.phase) * 0.25;
    });
  });

  return (
    <group {...props}>
      {Array.from({ length: dustCount }).map((_, idx) => {
        const p = dustParticles.current[idx];
        return (
          <mesh key={idx} ref={(el) => (dustRefs.current[idx] = el)}>
            <sphereGeometry args={[0.3, 4, 4]} />
            <meshStandardMaterial 
              color={p.color}
              emissive={p.color}
              emissiveIntensity={3.0}
              transparent
              opacity={0.8}
              depthWrite={false}
            />
          </mesh>
        );
      })}
    </group>
  );
}
