import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment } from '@react-three/drei'
import { motion } from 'framer-motion'
import { ArrowDown, MessageCircle, Phone } from 'lucide-react'
import * as THREE from 'three'

function Paper({ position, rotationBase, scale, colorHex, floatSpeed, floatIntensity }) {
  return (
    <Float speed={floatSpeed} rotationIntensity={floatIntensity * 0.5} floatIntensity={floatIntensity}>
      <mesh position={position} rotation={rotationBase} scale={scale} castShadow>
        <boxGeometry args={[1, 1.414, 0.005]} />
        <meshStandardMaterial
          color={colorHex}
          roughness={0.88}
          metalness={0.02}
          transparent
          opacity={0.92}
        />
      </mesh>
    </Float>
  )
}

function Particles({ count = 40 }) {
  const ref = useRef()

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const sz = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] = (Math.random() - 0.5) * 12
      pos[i * 3 + 1] = (Math.random() - 0.5) * 7
      pos[i * 3 + 2] = Math.random() * -6 - 1
      sz[i] = Math.random() * 0.025 + 0.008
    }
    return [pos, sz]
  }, [count])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.018
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.05
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#F97316"
        transparent
        opacity={0.45}
        sizeAttenuation
      />
    </points>
  )
}

function GridFloor() {
  return (
    <gridHelper
      args={[22, 22, 'transparent', '#1F1F25']}
      position={[0, -2.4, -3]}
      rotation={[0.15, 0, 0]}
    />
  )
}

const PAPERS = [
  { position: [-2.3, 0.2, -1.5],  rotationBase: [0.08, 0.4,  0.12],  scale: 1.05, colorHex: '#F8F5EE', floatSpeed: 1.4, floatIntensity: 0.5 },
  { position: [1.9,  -0.3, -0.8], rotationBase: [-0.05, -0.3, -0.09], scale: 0.82, colorHex: '#FFFCF8', floatSpeed: 1.8, floatIntensity: 0.4 },
  { position: [-0.5, 0.7, -2.8],  rotationBase: [0.12, 0.22, 0.18],   scale: 1.28, colorHex: '#FFF5EC', floatSpeed: 1.2, floatIntensity: 0.6 },
  { position: [0.9,  -0.9, -2.2], rotationBase: [-0.18, 0.5, -0.12],  scale: 0.88, colorHex: '#F8F5EE', floatSpeed: 1.6, floatIntensity: 0.45 },
  { position: [-3.4, 0.15, -3.5], rotationBase: [0.2, -0.28, 0.22],   scale: 0.94, colorHex: '#FFFCF8', floatSpeed: 1.0, floatIntensity: 0.55 },
  { position: [3.2,  0.8, -4.0],  rotationBase: [-0.08, 0.55, 0.07],  scale: 1.15, colorHex: '#FFF0E4', floatSpeed: 2.0, floatIntensity: 0.35 },
  { position: [0.1,  -1.4, -1.8], rotationBase: [0.28, 0.04, -0.18],  scale: 0.72, colorHex: '#F8F5EE', floatSpeed: 1.5, floatIntensity: 0.5 },
  { position: [-1.5, -0.6, -2.0], rotationBase: [0.05, -0.2, 0.08],   scale: 1.02, colorHex: '#FFFCF8', floatSpeed: 1.3, floatIntensity: 0.48 },
]

function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.12} />
      <pointLight position={[1.5, 2.5, 3]} intensity={2.2} color="#F97316" decay={2} />
      <pointLight position={[-4, -1, 2]} intensity={0.9} color="#3B82F6" decay={2} />
      <pointLight position={[0, 5, 0]} intensity={0.35} color="#FFFFFF" decay={2} />
      <GridFloor />
      <Particles count={45} />
      {PAPERS.map((p, i) => <Paper key={i} {...p} />)}
    </>
  )
}

export default function HeroSection() {
  return (
    <section style={{ position: 'relative', height: '100dvh', minHeight: 600, overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(249,115,22,0.06) 0%, transparent 70%)',
        zIndex: 0,
      }} />

      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 52 }}
          style={{ width: '100%', height: '100%' }}
          gl={{ alpha: true, antialias: true }}
          dpr={[1, 1.5]}
        >
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </Canvas>
      </div>

      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, transparent 60%, var(--bg) 100%)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />

      <div className="container" style={{
        position: 'relative',
        zIndex: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '5rem',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: 680 }}
        >
          <span className="section-label" style={{ marginBottom: '1.2rem' }}>
            Типография · Комрат, Молдова
          </span>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            marginBottom: '1.25rem',
          }}>
            Печатаем быстро.{' '}
            <span style={{ color: 'var(--accent)' }}>Делаем</span>{' '}
            качественно.
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.75,
            marginBottom: '2rem',
            maxWidth: 560,
          }}>
            A&V Poligraf — полный цикл полиграфии в Комрате. Срочная печать,
            широкий формат, ламинирование и дизайн. Одна типография для всех задач.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-primary">
              <Phone size={15} strokeWidth={2.5} />
              Заказать печать
            </a>
            <a href="#services" className="btn-ghost">
              Смотреть услуги
              <ArrowDown size={15} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem',
            color: 'var(--text-muted)',
            fontSize: '0.72rem',
            letterSpacing: '0.08em',
          }}
        >
          <span>ПРОКРУТИТЕ</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
