// src/components/Game.js
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';

const Cube = () => {
  const cubeRef = useRef();

  // State to store cube position
  const [position, setPosition] = useState([0, 0, 0]);

  // Set up arrow key controls
  const moveSpeed = 0.1;

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setPosition([position[0], position[1] + moveSpeed, position[2]]);
          break;
        case 'ArrowDown':
          setPosition([position[0], position[1] - moveSpeed, position[2]]);
          break;
        case 'ArrowLeft':
          setPosition([position[0] - moveSpeed, position[1], position[2]]);
          break;
        case 'ArrowRight':
          setPosition([position[0] + moveSpeed, position[1], position[2]]);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [position]);

  // Handle cube movement on each frame
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.position.set(...position);
    }
  });

  return (
    <Box ref={cubeRef} args={[1, 1, 1]} position={position}>
      <meshBasicMaterial attach="material" color="green" />
    </Box>
  );
};

const Game = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Cube />
    </Canvas>
  );
};

export default Game;
