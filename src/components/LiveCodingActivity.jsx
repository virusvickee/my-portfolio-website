import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Code, Coffee, Clock, GitCommit } from 'lucide-react'

const LiveCodingActivity = () => {
  const [currentActivity, setCurrentActivity] = useState('')
  const [isActive, setIsActive] = useState(false)
  const [lastCommit, setLastCommit] = useState('')
  const [codingStreak, setCodingStreak] = useState(0)
  const [hours, setHours] = useState(0)
  const [coffeeCount, setCoffeeCount] = useState(0)

  const activities = [
    "Building React components...",
    "Optimizing database queries...",
    "Writing unit tests...",
    "Refactoring legacy code...",
    "Implementing new features...",
    "Debugging API endpoints...",
    "Updating documentation...",
    "Code review in progress..."
  ]

  const commits = [
    "feat: Add user authentication system",
    "fix: Resolve mobile responsive issues",
    "refactor: Optimize component structure",
    "docs: Update API documentation",
    "style: Improve UI animations",
    "perf: Enhance loading performance"
  ]

  useEffect(() => {
    // Initialize stable values
    setHours(Math.floor(Math.random() * 8) + 2)
    setCoffeeCount(Math.floor(Math.random() * 5) + 2)
  }, [])

  useEffect(() => {
    // Simulate live coding activity
    const activityInterval = setInterval(() => {
      const isCurrentlyActive = Math.random() > 0.3 // 70% chance of being active
      setIsActive(isCurrentlyActive)
      
      if (isCurrentlyActive) {
        const randomActivity = activities[Math.floor(Math.random() * activities.length)]
        setCurrentActivity(randomActivity)
        setCodingStreak(prev => prev + 1)
      } else {
        setCurrentActivity("Taking a coffee break ☕")
        setCodingStreak(0)
      }
    }, 8000)

    // Simulate commits
    const commitInterval = setInterval(() => {
      if (Math.random() > 0.6) { // 40% chance of new commit
        const randomCommit = commits[Math.floor(Math.random() * commits.length)]
        setLastCommit(randomCommit)
      }
    }, 15000)

    return () => {
      clearInterval(activityInterval)
      clearInterval(commitInterval)
    }
  }, [])

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('en-US', { 
      hour12: true,
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Code className="text-blue-400" size={20} />
          <h3 className="text-white font-semibold">Live Coding Activity</h3>
        </div>
        <div className="flex items-center space-x-2">
          <motion.div
            className={`w-3 h-3 rounded-full ${isActive ? 'bg-green-400' : 'bg-gray-400'}`}
            animate={isActive ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <span className={`text-sm ${isActive ? 'text-green-400' : 'text-gray-400'}`}>
            {isActive ? 'Active' : 'Offline'}
          </span>
        </div>
      </div>

      {/* Current Activity */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-2">
          <Clock size={16} className="text-gray-400" />
          <span className="text-gray-400 text-sm">{getCurrentTime()}</span>
        </div>
        <motion.p
          key={currentActivity}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-lg ${isActive ? 'text-white' : 'text-gray-400'}`}
        >
          {currentActivity}
        </motion.p>
      </div>

      {/* Coding Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white/5 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-blue-400">{codingStreak}</div>
          <div className="text-xs text-gray-400">Active Minutes</div>
        </div>
        <div className="bg-white/5 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-green-400">
            {hours}
          </div>
          <div className="text-xs text-gray-400">Hours Today</div>
        </div>
      </div>

      {/* Last Commit */}
      {lastCommit && (
        <div className="border-t border-white/10 pt-4">
          <div className="flex items-center space-x-2 mb-2">
            <GitCommit size={16} className="text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">Latest Commit</span>
          </div>
          <motion.p
            key={lastCommit}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-300 text-sm bg-gray-800/50 rounded p-2 font-mono"
          >
            {lastCommit}
          </motion.p>
        </div>
      )}

      {/* Coffee Counter */}
      <div className="flex items-center justify-center space-x-2 mt-4 pt-4 border-t border-white/10">
        <Coffee size={16} className="text-yellow-600" />
        <span className="text-gray-400 text-sm">
          {coffeeCount} cups today
        </span>
      </div>
    </motion.div>
  )
}

export default LiveCodingActivity
