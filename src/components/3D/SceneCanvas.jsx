import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function SceneCanvas({
  children,
  className,
  style,
  camera = { position: [0, 0, 5], fov: 75 },
  dpr = [1, 2],
  flat = false,
}) {
  const wrapperStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none",
    zIndex: 0,
    ...style,
  };

  return (
    <div className={className} style={wrapperStyle}>
      <Canvas
        camera={camera}
        dpr={dpr}
        flat={flat}
        gl={{ antialias: true, alpha: true }}
        style={{ width: "100%", height: "100%" }}
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}
