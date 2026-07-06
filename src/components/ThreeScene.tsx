"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    );
    cam.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // particle field
    const N = reduceMotion ? 300 : 900;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(N * 3);
    const col = new Float32Array(N * 3);
    const cA = new THREE.Color("#4C7DFF");
    const cB = new THREE.Color("#8B78FF");
    const cC = new THREE.Color("#F062C0");
    for (let i = 0; i < N; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 44;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
      const c = [cA, cB, cC][i % 3];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    const pts = new THREE.Points(
      geo,
      new THREE.PointsMaterial({
        size: 0.14,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    scene.add(pts);

    // central wireframe icosahedrons
    const ico = new THREE.Mesh(
      new THREE.IcosahedronGeometry(6.4, 1),
      new THREE.MeshBasicMaterial({
        color: "#8B78FF",
        wireframe: true,
        transparent: true,
        opacity: 0.14,
      }),
    );
    scene.add(ico);

    const ico2 = new THREE.Mesh(
      new THREE.IcosahedronGeometry(4.2, 0),
      new THREE.MeshBasicMaterial({
        color: "#3DE0E8",
        wireframe: true,
        transparent: true,
        opacity: 0.12,
      }),
    );
    scene.add(ico2);

    let mx = 0;
    let my = 0;
    let sy = 0;
    let rafId = 0;

    const onPointerMove = (e: PointerEvent) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    };
    const onScroll = () => {
      sy = window.scrollY;
    };
    const onResize = () => {
      cam.aspect = window.innerWidth / window.innerHeight;
      cam.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    const loop = (t: number) => {
      pts.rotation.y = t * 0.00003;
      pts.rotation.x = t * 0.00002;
      ico.rotation.x = t * 0.0001;
      ico.rotation.y = t * 0.00014;
      ico2.rotation.y = -t * 0.0002;
      ico2.rotation.z = t * 0.0001;

      cam.position.x += (mx * 4 - cam.position.x) * 0.04;
      cam.position.y += (-my * 3 - cam.position.y) * 0.04;
      ico.position.y = -sy * 0.006;
      ico2.position.y = -sy * 0.004;
      cam.lookAt(0, ico.position.y * 0.3, 0);

      renderer.render(scene, cam);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      geo.dispose();
      (pts.material as THREE.Material).dispose();
      ico.geometry.dispose();
      (ico.material as THREE.Material).dispose();
      ico2.geometry.dispose();
      (ico2.material as THREE.Material).dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas id="three" ref={canvasRef} />;
}
