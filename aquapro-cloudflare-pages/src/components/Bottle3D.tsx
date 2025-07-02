import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import { Suspense } from 'react';
interface Bottle3DProps {
  selectedColor: string;
  selectedSize: string;
}
const colors = {
  dark: '#393b46',
  orange: '#ff8c00',
  teal: '#99d2d6',
  purple: '#9798e2',
  pink: '#e0949b',
  brown: '#8a5153',
  mint: '#a8dda7'
};
const BottleGeometry = ({
  color,
  size
}: {
  color: string;
  size: string;
}) => {
  const config = {
    radius: 0.75,
    height: 3.5,
    scale: 1.0,
    position: [0, 0, 0] as [number, number, number]
  };
  return <Float speed={1.4} rotationIntensity={0.1} floatIntensity={0.2}>
      <group scale={config.scale} position={config.position}>
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[config.radius, config.radius, config.height, 32]} />
          <meshPhysicalMaterial color={color} metalness={0.0} roughness={1.0} clearcoat={0.0} envMapIntensity={0.1} />
        </mesh>
        
        <mesh position={[0, config.height * 0.55, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[config.radius * 0.4, config.radius * 0.45, config.height * 0.2, 16]} />
          <meshPhysicalMaterial color={color} metalness={0.0} roughness={1.0} clearcoat={0.0} />
        </mesh>
        
        <mesh position={[0, config.height * 0.7, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[config.radius * 0.45, config.radius * 0.45, config.height * 0.15, 16]} />
          <meshPhysicalMaterial color="#1a1a1a" metalness={0.0} roughness={1.0} />
        </mesh>
      </group>
    </Float>;
};
const Bottle3D = ({
  selectedColor,
  selectedSize
}: Bottle3DProps) => {
  const bottleColor = colors[selectedColor as keyof typeof colors] || '#393b46';
  return <div className="w-full h-80 md:h-96 lg:h-[500px]">
      <Canvas camera={{
      position: [0, 0, 8],
      fov: 50
    }} shadows dpr={[1, 2]} gl={{
      antialias: true
    }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={0.8} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
          <pointLight position={[-10, -10, -10]} intensity={0.3} />
          
          <BottleGeometry color={bottleColor} size={selectedSize} />
          
          <Environment preset="studio" />
          
          <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
      
      <div className="text-center mt-4">
        
      </div>
    </div>;
};
export default Bottle3D;