import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ParticleWaves() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.z = 1000;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const particlesCount = 5000;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const sizes = new Float32Array(particlesCount);
    const initialY = new Float32Array(particlesCount);
    const phase = new Float32Array(particlesCount);

    const palette = [
      new THREE.Color('#2563eb'), // Electric blue
      new THREE.Color('#22d3ee'), // Cyan
      new THREE.Color('#7c3aed'), // Purple
      new THREE.Color('#60a5fa'), // Soft light blue
    ];

    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 3000; // X
      positions[i3 + 1] = (Math.random() - 0.5) * 1000; // Y
      positions[i3 + 2] = (Math.random() - 0.5) * 1000; // Z
      
      initialY[i] = positions[i3 + 1];
      phase[i] = Math.random() * Math.PI * 2;

      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      sizes[i] = Math.random() * 4 + 1;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: 3,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse interaction
    const mouse = new THREE.Vector2(0, 0);
    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.001;
      const positionsArr = geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        
        // Horizontal flow
        positionsArr[i3] += 1.5;
        if (positionsArr[i3] > 1500) positionsArr[i3] = -1500;

        // Wave motion
        const waveX = positionsArr[i3] * 0.002;
        positionsArr[i3 + 1] = initialY[i] + Math.sin(waveX + time + phase[i]) * 50;

        // Mouse reaction
        const dx = positionsArr[i3] - mouse.x * 1000;
        const dy = positionsArr[i3 + 1] - mouse.y * 500;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          positionsArr[i3] += dx * 0.02;
          positionsArr[i3 + 1] += dy * 0.02;
        }
      }

      geometry.attributes.position.needsUpdate = true;
      particles.rotation.y = mouse.x * 0.05;
      particles.rotation.x = mouse.y * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none" style={{ background: '#050510' }} />;
}
