'use client'

import { useAuth } from '@/app/context/AuthContext'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Bell, Settings } from 'lucide-react'

export default function DisplayUser() {
  const { userID, username, windowHeight } = useAuth()
  const [userData, setUserData] = useState({
    name: 'Loading...',
    status: 'Please wait',
    avatar: '/placeholder.svg?height=100&width=100'
  })

  useEffect(() => {
    // Update userData when auth context changes
    setUserData({
      name: username || 'Anonymous User',
      status: `ID: ${userID || 'Not available'}`,
      avatar: '/placeholder.svg?height=100&width=100'
    })
  }, [userID, username])

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center p-6 bg-black bg-opacity-50 rounded-lg shadow-lg backdrop-blur-md"
      style={{ minHeight: `${windowHeight}px` }}
    >
      <motion.h1 
        className="mb-6 text-4xl font-bold text-cyan-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Welcome to the Telegram Web App!
      </motion.h1>
      <motion.img
        src={userData.avatar}
        alt={userData.name}
        className="w-24 h-24 rounded-full border-4 border-cyan-400 shadow-lg shadow-cyan-400/50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 260, damping: 20 }}
      />
      <motion.h2 
        className="mt-4 text-2xl font-bold text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {userData.name}
      </motion.h2>
      <motion.p 
        className="mt-2 text-cyan-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {userData.status}
      </motion.p>
      <motion.p 
        className="mt-2 text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Window Height: {windowHeight}px
      </motion.p>
      <motion.div 
        className="mt-6 flex space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <IconButton icon={<MessageSquare size={20} />} label="Message" />
        <IconButton icon={<Bell size={20} />} label="Notifications" />
        <IconButton icon={<Settings size={20} />} label="Settings" />
      </motion.div>
    </motion.div>
  )
}

function IconButton({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
    >
      {icon}
      <span className="mt-1 text-xs text-gray-300">{label}</span>
    </motion.button>
  )
}

