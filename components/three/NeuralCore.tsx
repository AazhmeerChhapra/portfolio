'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function fibonacciSphere(count: number, radius: number): Float32Array {
  const positions = new Float32Array(count * 3);
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    positions[i * 3] = Math.cos(theta) * r * radius;
    positions[i * 3 + 1] = y * radius;
    positions[i * 3 + 2] = Math.sin(theta) * r * radius;
  }
  return positions;
}

export default function NeuralCore({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const nodesRef = useRef<THREE.Points>(null);

  const NODE_COUNT = 320;
  const RADIUS = 2.2;

  const nodePositions = useMemo(() => fibonacciSphere(NODE_COUNT, RADIUS), []);

  const linePositions = useMemo(() => {
    const verts: number[] = [];
    const maxDist = 0.85;
    for (let i = 0; i < NODE_COUNT; i++) {
      const ax = nodePositions[i * 3];
      const ay = nodePositions[i * 3 + 1];
      const az = nodePositions[i * 3 + 2];
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const bx = nodePositions[j * 3];
        const by = nodePositions[j * 3 + 1];
        const bz = nodePositions[j * 3 + 2];
        const d = Math.hypot(ax - bx, ay - by, az - bz);
        if (d < maxDist) {
          verts.push(ax, ay, az, bx, by, bz);
        }
      }
    }
    return new Float32Array(verts);
  }, [nodePositions]);

  const nodeColors = useMemo(() => {
    const colors = new Float32Array(NODE_COUNT * 3);
    const blue = new THREE.Color('#4d8dff');
    const violet = new THREE.Color('#8b5cf6');
    const magenta = new THREE.Color('#c26bff');
    for (let i = 0; i < NODE_COUNT; i++) {
      const t = i / NODE_COUNT;
      const c =
        t < 0.5
          ? blue.clone().lerp(violet, t * 2)
          : violet.clone().lerp(magenta, (t - 0.5) * 2);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return colors;
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      // slow autonomous rotation + eased mouse parallax
      group.current.rotation.y += 0.0016;
      const targetX = mouse.current.y * 0.35;
      const targetY = mouse.current.x * 0.5;
      group.current.rotation.x += (targetX - group.current.rotation.x) * 0.04;
      group.current.position.x += (targetY * 0.3 - group.current.position.x) * 0.04;
    }
    if (core.current) {
      core.current.rotation.x = t * 0.18;
      core.current.rotation.z = t * 0.12;
      const s = 1 + Math.sin(t * 1.4) * 0.04;
      core.current.scale.setScalar(s);
    }
    if (nodesRef.current) {
      const mat = nodesRef.current.material as THREE.PointsMaterial;
      mat.size = 0.045 + Math.sin(t * 2) * 0.008;
    }
  });

  return (
    <group ref={group}>
      {/* synapse lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#4d8dff"
          transparent
          opacity={0.14}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>

      {/* neuron nodes */}
      <points ref={nodesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[nodePositions, 3]}
          />
          <bufferAttribute attach="attributes-color" args={[nodeColors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.045}
          vertexColors
          transparent
          opacity={0.95}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* glowing wireframe core */}
      <mesh ref={core}>
        <icosahedronGeometry args={[0.9, 1]} />
        <meshBasicMaterial
          color="#8b5cf6"
          wireframe
          transparent
          opacity={0.55}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.55, 2]} />
        <meshBasicMaterial
          color="#4d8dff"
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* orbital rings */}
      <mesh rotation={[Math.PI / 2.3, 0.4, 0]}>
        <torusGeometry args={[3, 0.006, 8, 128]} />
        <meshBasicMaterial color="#4d8dff" transparent opacity={0.35} blending={THREE.AdditiveBlending} />
      </mesh>
      <mesh rotation={[Math.PI / 1.7, -0.6, 0.5]}>
        <torusGeometry args={[3.4, 0.004, 8, 128]} />
        <meshBasicMaterial color="#c26bff" transparent opacity={0.22} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  );
}
