"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

export const SmoothScrolling = ({ children }: { children: any }) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
};
