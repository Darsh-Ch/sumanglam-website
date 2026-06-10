"use client";

import { useEffect, useRef } from "react";

/**
 * Subtle Three.js ambient layer for the homepage hero: warm dust-light
 * particles drifting slowly over the hero image, like late-afternoon light in
 * a showroom. Loaded lazily, skipped for reduced motion, small screens, or
 * WebGL failures — the hero is complete without it (vault: User Approved
 * Stack Extension — prefer no effect over a premium-breaking effect).
 */
export function HeroAmbient() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 768) return; // keep mobile light and fast

    let disposed = false;
    let cleanup: (() => void) | undefined;

    void import("three").then((THREE) => {
      if (disposed || !mount) return;
      try {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          55,
          mount.clientWidth / mount.clientHeight,
          0.1,
          60,
        );
        camera.position.z = 12;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        mount.appendChild(renderer.domElement);

        // Soft round sprite so particles read as bokeh, not squares.
        const spriteCanvas = document.createElement("canvas");
        spriteCanvas.width = 64;
        spriteCanvas.height = 64;
        const ctx = spriteCanvas.getContext("2d");
        if (ctx) {
          const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
          gradient.addColorStop(0, "rgba(255, 240, 214, 1)");
          gradient.addColorStop(0.4, "rgba(231, 200, 151, 0.55)");
          gradient.addColorStop(1, "rgba(231, 200, 151, 0)");
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, 64, 64);
        }
        const texture = new THREE.CanvasTexture(spriteCanvas);

        const count = 140;
        const positions = new Float32Array(count * 3);
        const drift = new Float32Array(count); // per-particle phase
        for (let i = 0; i < count; i += 1) {
          positions[i * 3] = (Math.random() - 0.5) * 30;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 16;
          positions[i * 3 + 2] = (Math.random() - 0.8) * 10; // bias toward depth
          drift[i] = Math.random() * Math.PI * 2;
        }
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
          map: texture,
          color: 0xe7c897,
          size: 0.38,
          sizeAttenuation: true, // near particles larger → depth
          transparent: true,
          opacity: 0.4,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        });
        const points = new THREE.Points(geometry, material);
        scene.add(points);

        let rafId = 0;
        const clock = new THREE.Clock();
        const positionAttr = geometry.getAttribute("position") as InstanceType<
          typeof THREE.BufferAttribute
        >;

        const animate = () => {
          const elapsed = clock.getElapsedTime();
          // Slow individual rise-and-sway, like dust in still air.
          for (let i = 0; i < count; i += 1) {
            const phase = drift[i];
            positionAttr.array[i * 3] += Math.sin(elapsed * 0.12 + phase) * 0.0015;
            positionAttr.array[i * 3 + 1] += 0.0022 + Math.cos(elapsed * 0.1 + phase) * 0.0008;
            // Recycle particles that drift above the frame.
            if (positionAttr.array[i * 3 + 1] > 9) {
              positionAttr.array[i * 3 + 1] = -9;
              positionAttr.array[i * 3] = (Math.random() - 0.5) * 30;
            }
          }
          positionAttr.needsUpdate = true;
          points.rotation.y = Math.sin(elapsed * 0.02) * 0.04;
          renderer.render(scene, camera);
          rafId = requestAnimationFrame(animate);
        };

        // Pause rendering when the hero is offscreen.
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            clock.start();
            animate();
          } else {
            cancelAnimationFrame(rafId);
          }
        });
        observer.observe(mount);

        const onResize = () => {
          if (!mount) return;
          camera.aspect = mount.clientWidth / mount.clientHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(mount.clientWidth, mount.clientHeight);
        };
        window.addEventListener("resize", onResize);

        cleanup = () => {
          observer.disconnect();
          cancelAnimationFrame(rafId);
          window.removeEventListener("resize", onResize);
          geometry.dispose();
          material.dispose();
          texture.dispose();
          renderer.dispose();
          if (renderer.domElement.parentElement === mount) {
            mount.removeChild(renderer.domElement);
          }
        };
      } catch {
        // WebGL unavailable — silently skip the ambient layer.
      }
    });

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[5]"
    />
  );
}
