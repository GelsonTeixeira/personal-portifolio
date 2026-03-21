import { useMemo } from "react";

export function useSupports3D() {
  return useMemo(() => {
    if (typeof window === "undefined") return false;
    const isMobile = window.innerWidth < 768;

    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      return !!gl && !isMobile;
    } catch {
      return false;
    }
  }, []);
}
