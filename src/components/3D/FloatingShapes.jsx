import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

const TECH_SYMBOLS = [
  // Code - grandes
  { text: "</>", pos: [-4, 2.5, -2], color: "#ff8660", size: 38 },
  { text: "{ }", pos: [4, 1.5, -3], color: "#9a33ff", size: 34 },
  { text: "=>", pos: [-3, -2.5, -2], color: "#61dafb", size: 32 },
  { text: "[ ]", pos: [3, -2, -3], color: "#ff8660", size: 30 },
  { text: "( )", pos: [0, 3.5, -4], color: "#9a33ff", size: 28 },

  // Cybersecurity - grandes
  { text: "\uD83D\uDD12", pos: [5, 2, -3], color: "#00ff41", size: 40 },
  { text: "\uD83D\uDEE1\uFE0F", pos: [-5, -1, -2], color: "#4db33d", size: 42 },
  { text: "\uD83D\uDD11", pos: [-1, -3.5, -3], color: "#ffe600", size: 36 },
  { text: "\uD83D\uDC7E", pos: [2, 3.5, -4], color: "#ff003c", size: 34 },
  { text: "\u26A0\uFE0F", pos: [-4, 3.5, -4], color: "#ffe600", size: 32 },

  // Terminal / Commands
  { text: "$ _", pos: [-2, 1.5, -2], color: "#00ff41", size: 30 },
  { text: "sudo", pos: [3.5, 0, -4], color: "#00cc33", size: 22 },
  { text: "chmod", pos: [-3.5, -3.5, -5], color: "#68a063", size: 18 },
  { text: "SSH://", pos: [1.5, -3, -3], color: "#00cc33", size: 20 },
  { text: "HTTPS", pos: [-5, 1.5, -4], color: "#e34f26", size: 20 },

  // Data / Binary - grandes
  { text: "01001101", pos: [5, -1.5, -3], color: "#264de4", size: 22 },
  { text: "10110010", pos: [-3.5, 0, -5], color: "#3776ab", size: 20 },
  { text: "0xDEAD", pos: [0, -2, -2], color: "#9a33ff", size: 24 },
  { text: "0xFF", pos: [-1.5, 3, -3], color: "#ff8660", size: 26 },

  // Database / API
  { text: "SELECT *", pos: [2, 2, -5], color: "#ff8660", size: 18 },
  { text: "API/v2", pos: [-2.5, -1, -4], color: "#61dafb", size: 20 },
  { text: "{ data }", pos: [4.5, -3, -5], color: "#4db33d", size: 18 },
  { text: "JSON", pos: [-4.5, 2, -5], color: "#ffe600", size: 20 },

  // Git / DevOps
  { text: "git push", pos: [1, 0.5, -4], color: "#e34f26", size: 18 },
  { text: "npm run", pos: [-1, -4, -4], color: "#68a063", size: 16 },
  { text: "deploy", pos: [4, 3.5, -5], color: "#61dafb", size: 16 },

  // Tech icons (emoji)
  { text: "\uD83D\uDCBB", pos: [-5.5, -2.5, -3], color: "#fff", size: 36 },
  { text: "\u2699\uFE0F", pos: [5.5, 0.5, -4], color: "#fff", size: 34 },
  { text: "\uD83D\uDD25", pos: [0, 4, -3], color: "#ff8660", size: 32 },
  { text: "\uD83D\uDCC1", pos: [-2, 4, -5], color: "#ffe600", size: 28 },
  { text: "\uD83D\uDEA8", pos: [3, -4, -4], color: "#ff003c", size: 30 },

  // Symbols grandes
  { text: "#", pos: [5.5, -3.5, -2], color: "#9a33ff", size: 44 },
  { text: ";", pos: [-5.5, 3.5, -2], color: "#ff8660", size: 48 },
  { text: "//", pos: [0.5, -4.5, -3], color: "#61dafb", size: 36 },
  { text: "&&", pos: [-4.5, -4, -3], color: "#00ff41", size: 30 },
  { text: "!=", pos: [4.5, 4, -4], color: "#e34f26", size: 28 },
];

function FloatingSymbol({ text, pos, color, size }) {
  const ref = useRef();
  const phase = useMemo(() => Math.random() * Math.PI * 2, []);
  const speed = useMemo(() => 0.1 + Math.random() * 0.15, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.y = pos[1] + Math.sin(t * speed + phase) * 0.6;
    ref.current.position.x = pos[0] + Math.cos(t * speed * 0.7 + phase) * 0.4;
    ref.current.rotation.y = Math.sin(t * speed * 0.5 + phase) * 0.3;
  });

  return (
    <group ref={ref} position={pos}>
      <Html center distanceFactor={8}>
        <span
          style={{
            color: color,
            fontSize: size,
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            opacity: 0.45,
            textShadow: `0 0 20px ${color}, 0 0 40px ${color}40`,
            whiteSpace: "nowrap",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          {text}
        </span>
      </Html>
    </group>
  );
}

export default function FloatingShapes() {
  return (
    <>
      <ambientLight intensity={0.3} />
      {TECH_SYMBOLS.map((s, i) => (
        <FloatingSymbol key={i} {...s} />
      ))}
    </>
  );
}
