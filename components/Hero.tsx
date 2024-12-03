'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import { useCallback } from 'react'
import type { Engine } from 'tsparticles-engine'

export default function Hero() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-neutral-50 dark:bg-neutral-900">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#FF8C00",
            },
            links: {
              color: "#FF8C00",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-neutral-900 dark:text-white">
            Welcome to <span className="text-neutral-700 dark:text-neutral-300">ekiliFlow</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-neutral-700 dark:text-neutral-400">
            Streamline Your Business with Our Powerful ERP Solution
          </p>
          <Button
            size="lg"
            className="bg-neutral-800 dark:bg-neutral-700 text-white hover:bg-neutral-700 dark:hover:bg-neutral-600"
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
