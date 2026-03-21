import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Html, RoundedBox } from "@react-three/drei";

function TechIcon({ position, color, icon, name, speed = 1, rotDir = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * 0.3 * speed;
    meshRef.current.rotation.y = t * rotDir;
    meshRef.current.rotation.x = Math.sin(t * 0.5) * 0.15;
  });

  return (
    <Float speed={1.5 * speed} rotationIntensity={0.3} floatIntensity={0.6}>
      <group position={position}>
        <mesh ref={meshRef}>
          <RoundedBox args={[1.2, 1.2, 0.15]} radius={0.12} smoothness={4}>
            <meshPhysicalMaterial
              color={color}
              transparent
              opacity={0.15}
              roughness={0.1}
              metalness={0.9}
              clearcoat={1}
              clearcoatRoughness={0.1}
              envMapIntensity={1}
            />
          </RoundedBox>
          <RoundedBox args={[1.25, 1.25, 0.12]} radius={0.12} smoothness={4}>
            <meshBasicMaterial
              color={color}
              transparent
              opacity={0.08}
              wireframe
            />
          </RoundedBox>
        </mesh>
        <Html
          center
          distanceFactor={5}
          zIndexRange={[1, 0]}
          wrapperClass="tech-html-wrapper"
          style={{
            pointerEvents: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            background: "transparent",
          }}
        >
          <img
            src={icon}
            alt={name}
            style={{
              width: 40,
              height: 40,
              filter: "drop-shadow(0 0 8px " + color + ")",
              background: "transparent",
            }}
          />
          <span
            style={{
              color: "#fff",
              fontSize: 10,
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              textShadow: "0 0 10px rgba(0,0,0,0.8)",
              whiteSpace: "nowrap",
              background: "transparent",
            }}
          >
            {name}
          </span>
        </Html>
      </group>
    </Float>
  );
}

export default function TechStack3D({ techs }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-3, 2, 4]} color="#ff8660" intensity={1.5} />
      <pointLight position={[3, -2, 4]} color="#9a33ff" intensity={1.5} />

      {techs.map((tech, i) => (
        <TechIcon
          key={tech.name}
          position={tech.position}
          color={tech.color}
          icon={tech.icon}
          name={tech.name}
          speed={0.8 + i * 0.1}
          rotDir={i % 2 === 0 ? 1 : -1}
        />
      ))}
    </>
  );
}
