import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useTheme } from '@/contexts/ThemeContext';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const wavesRef = useRef<THREE.Mesh[]>([]);
  const { theme } = useTheme();

  const createWaveShape = (offsetY: number, amplitude: number, width: number, detail: number) => {
    const shape = new THREE.Shape();
    const segments = 10;
    const step = width / segments;

    shape.moveTo(-width / 2, -20);
    for (let i = 0; i <= segments; i++) {
      const x = -width / 2 + i * step;
      const noise = Math.sin(i * 0.5) * amplitude;
      const y = offsetY + noise;

      if (i === 0) {
        shape.lineTo(x, y);
      } else {
        const prevX = -width / 2 + (i - 1) * step;
        const prevY = offsetY + Math.sin((i - 1) * 0.5) * amplitude;

        const cpX1 = prevX + step * 0.5;
        const cpY1 = prevY + noise * 0.2;
        const cpX2 = x - step * 0.3;
        const cpY2 = y - noise * 0.1;

        shape.bezierCurveTo(cpX1, cpY1, cpX2, cpY2, x, y);
      }
    }

    shape.lineTo(width / 2, -20);
    shape.lineTo(-width / 2, -20);

    return shape;
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    const isDarkMode = theme === 'dark';
    let colors;

    if (isDarkMode) {
      colors = {
        background: 'hsl(342, 16%, 20%)',
        waveColors: [
          new THREE.Color('hsl(347, 24%, 71%)'),
          new THREE.Color('hsl(345, 29%, 70%)'),
          new THREE.Color('hsl(345, 29%, 50%)'),
          new THREE.Color('hsl(342, 16%, 30%)'),
          new THREE.Color('hsl(342, 16%, 20%)'),
        ],
        shadowColor: new THREE.Color('hsl(342, 16%, 15%)'),
      };
    } else {
      colors = {
        background: 'hsl(345, 29%, 95%)',
        waveColors: [
          new THREE.Color('hsl(345, 29%, 70%)'),
          new THREE.Color('hsl(345, 29%, 75%)'),
          new THREE.Color('hsl(345, 29%, 80%)'),
          new THREE.Color('hsl(345, 29%, 85%)'),
          new THREE.Color('hsl(345, 29%, 90%)'),
        ],
        shadowColor: new THREE.Color('hsl(345, 29%, 65%)'),
      };
    }

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 16;

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(new THREE.Color(colors.background));
    rendererRef.current = renderer;

    // Create a group to move all waves together
    const waveGroup = new THREE.Group();
    scene.add(waveGroup);

    const waves: THREE.Mesh[] = [];
    const totalWaves = 5;

    // Increase size of waves
    const waveWidth = (window.innerWidth / window.innerHeight) * 60; // Increased from 40
    const baseOffsetY = -5; // Moved waves up to show more in the middle

    for (let i = 0; i < totalWaves; i++) {
      const offsetY = baseOffsetY + i * 3;
      const amplitude = 3 + i * 0.7;

      const shape = createWaveShape(offsetY, amplitude, waveWidth, 20);
      const geometry = new THREE.ShapeGeometry(shape, 30);
      const material = new THREE.MeshBasicMaterial({
        color: colors.waveColors[i],
        transparent: true,
        opacity: 0.9,
        side: THREE.DoubleSide,
      });

      const wave = new THREE.Mesh(geometry, material);
      wave.position.x = -5;
      wave.position.z = (totalWaves - i) * -0.5;
      wave.userData = {
        speed: 0.5 + Math.random() * 0.5,
        amplitude: amplitude,
        offsetY: offsetY,
        originalY: offsetY,
      };

      waveGroup.add(wave);
      waves.push(wave);
    }

    for (let i = 0; i < totalWaves; i++) {
      const offsetY = baseOffsetY + i * 3 - 0.3;
      const amplitude = 3 + i * 0.7;

      const shape = createWaveShape(offsetY, amplitude, waveWidth, 20);
      const geometry = new THREE.ShapeGeometry(shape, 30);
      const material = new THREE.MeshBasicMaterial({
        color: colors.shadowColor,
        transparent: true,
        opacity: 0.5,
        side: THREE.DoubleSide,
      });

      const shadow = new THREE.Mesh(geometry, material);
      shadow.position.x = -4.7;
      shadow.position.z = (totalWaves - i) * -0.5 + 0.1;
      shadow.userData = {
        speed: 0.5 + Math.random() * 0.5,
        amplitude: amplitude,
        offsetY: offsetY,
        originalY: offsetY,
        parentIndex: i,
      };

      waveGroup.add(shadow);
      waves.push(shadow);
    }

    waveGroup.position.y = -5; // Move all waves down together
    wavesRef.current = waves;

    const handleResize = () => {
      if (!renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();

    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      waves.forEach((wave, index) => {
        if (index < totalWaves) {
          const newY = wave.userData.originalY + Math.sin(time * 0.5 * wave.userData.speed) * 0.5;
          wave.userData.offsetY = newY;

          const newShape = createWaveShape(
            newY,
            wave.userData.amplitude + Math.sin(time * 0.3) * 0.3,
            waveWidth,
            20
          );

          wave.geometry.dispose();
          wave.geometry = new THREE.ShapeGeometry(newShape, 30);
        } else {
          const parentIndex = wave.userData.parentIndex;
          const parentWave = waves[parentIndex];
          const newY = parentWave.userData.offsetY - 0.3;
          wave.userData.offsetY = newY;

          const newShape = createWaveShape(
            newY,
            parentWave.userData.amplitude + Math.sin(time * 0.3) * 0.3,
            waveWidth,
            20
          );

          wave.geometry.dispose();
          wave.geometry = new THREE.ShapeGeometry(newShape, 30);
        }
      });

      renderer.render(scene, camera);

      return () => cancelAnimationFrame(animationId);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (renderer) renderer.dispose();
      waves.forEach(wave => {
        waveGroup.remove(wave);
        wave.geometry.dispose();
        (wave.material as THREE.Material).dispose();
      });
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      aria-hidden="true"
    />
  );
};

export default AnimatedBackground;
