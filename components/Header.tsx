'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90 backdrop-blur-sm transition-colors duration-300"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="text-2xl font-bold text-primary dark:text-primary-dark">
            ekiliFlow
          </Link>
        </motion.div>
        <nav className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-6">
            {['Features', 'Pricing', 'About', 'Contact'].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }}>
                <Link href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-dark">
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
          <Link href="/auth/login">
            <Button variant="outline">Login</Button>
          </Link>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </nav>
      </div>
    </motion.header>
  )
}

