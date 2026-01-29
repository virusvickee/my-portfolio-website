import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Zap, Award, Target, Code, Settings, Wrench } from 'lucide-react'

const SkillTree = () => {
  const [unlockedSkills, setUnlockedSkills] = useState(new Set(['html', 'css', 'javascript']))

  const skillTree = {
    frontend: {
      title: "Frontend Mastery",
      icon: Code,
      skills: [
        { id: 'html', name: 'HTML5', level: 95, prerequisite: null, x: 50, y: 80 },
        { id: 'css', name: 'CSS3', level: 90, prerequisite: 'html', x: 20, y: 60 },
        { id: 'javascript', name: 'JavaScript', level: 88, prerequisite: 'html', x: 80, y: 60 },
        { id: 'react', name: 'React', level: 85, prerequisite: 'javascript', x: 80, y: 40 },
        { id: 'tailwind', name: 'Tailwind CSS', level: 90, prerequisite: 'css', x: 20, y: 40 },
        { id: 'framer', name: 'Framer Motion', level: 80, prerequisite: 'react', x: 80, y: 20 }
      ]
    },
    backend: {
      title: "Backend Engineering",
      icon: Settings,
      skills: [
        { id: 'php', name: 'PHP', level: 85, prerequisite: null, x: 50, y: 80 },
        { id: 'mysql', name: 'MySQL', level: 82, prerequisite: 'php', x: 30, y: 60 },
        { id: 'api', name: 'REST APIs', level: 88, prerequisite: 'php', x: 70, y: 60 },
        { id: 'laravel', name: 'Laravel', level: 75, prerequisite: 'php', x: 50, y: 40 },
        { id: 'nodejs', name: 'Node.js', level: 70, prerequisite: 'javascript', x: 20, y: 20 },
        { id: 'mongodb', name: 'MongoDB', level: 65, prerequisite: 'nodejs', x: 80, y: 20 }
      ]
    },
    tools: {
      title: "Development Tools",
      icon: Wrench,
      skills: [
        { id: 'git', name: 'Git', level: 90, prerequisite: null, x: 50, y: 80 },
        { id: 'vscode', name: 'VS Code', level: 95, prerequisite: null, x: 30, y: 60 },
        { id: 'figma', name: 'Figma', level: 75, prerequisite: null, x: 70, y: 60 },
        { id: 'docker', name: 'Docker', level: 60, prerequisite: 'git', x: 50, y: 40 },
        { id: 'aws', name: 'AWS', level: 55, prerequisite: 'docker', x: 30, y: 20 },
        { id: 'ci-cd', name: 'CI/CD', level: 65, prerequisite: 'git', x: 70, y: 20 }
      ]
    }
  }

  const [activeCategory, setActiveCategory] = useState('frontend')

  useEffect(() => {
    const interval = setInterval(() => {
      const currentSkills = skillTree[activeCategory].skills
      const availableSkills = currentSkills.filter(skill => 
        !unlockedSkills.has(skill.id) && 
        (!skill.prerequisite || unlockedSkills.has(skill.prerequisite))
      )
      
      if (availableSkills.length > 0) {
        const randomSkill = availableSkills[Math.floor(Math.random() * availableSkills.length)]
        setUnlockedSkills(prev => new Set([...prev, randomSkill.id]))
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [activeCategory, unlockedSkills])

  const getSkillColor = (level) => {
    if (level >= 90) return 'from-yellow-400 to-orange-500'
    if (level >= 80) return 'from-purple-400 to-pink-500'
    if (level >= 70) return 'from-blue-400 to-indigo-500'
    return 'from-green-400 to-teal-500'
  }

  const getSkillIcon = (level) => {
    if (level >= 90) return <Award className="text-yellow-400" size={16} />
    if (level >= 80) return <Zap className="text-purple-400" size={16} />
    return <Target className="text-blue-400" size={16} />
  }

  return (
    <section className="section-padding">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl mb-8">
            Skill <span className="gradient-text">Tree</span>
          </h2>
          <p className="text-xl text-body max-w-3xl mx-auto leading-relaxed">
            RPG-style progression of my technical abilities
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-white/5 border border-white/10 rounded-xl p-2">
            {Object.entries(skillTree).map(([key, category]) => {
              const IconComponent = category.icon
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                    activeCategory === key
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <IconComponent size={18} />
                  <span>{category.title}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Skill Tree Visualization */}
        <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 h-96 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full">
            {/* Connection Lines */}
            {skillTree[activeCategory].skills.map(skill => {
              if (!skill.prerequisite) return null
              const prereq = skillTree[activeCategory].skills.find(s => s.id === skill.prerequisite)
              if (!prereq) return null
              
              return (
                <motion.line
                  key={`${skill.id}-${prereq.id}`}
                  x1={`${prereq.x}%`}
                  y1={`${prereq.y}%`}
                  x2={`${skill.x}%`}
                  y2={`${skill.y}%`}
                  stroke={unlockedSkills.has(skill.id) ? '#3b82f6' : '#374151'}
                  strokeWidth="2"
                  strokeDasharray={unlockedSkills.has(skill.id) ? '0' : '5,5'}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              )
            })}
          </svg>

          {/* Skill Nodes */}
          {skillTree[activeCategory].skills.map((skill, index) => {
            const isUnlocked = unlockedSkills.has(skill.id)
            const canUnlock = !skill.prerequisite || unlockedSkills.has(skill.prerequisite)
            
            return (
              <motion.div
                key={skill.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className={`relative w-16 h-16 rounded-full border-2 flex items-center justify-center cursor-pointer ${
                    isUnlocked
                      ? `bg-gradient-to-r ${getSkillColor(skill.level)} border-white/30 shadow-lg`
                      : canUnlock
                      ? 'bg-white/10 border-white/30 hover:bg-white/20'
                      : 'bg-gray-800 border-gray-600 opacity-50'
                  }`}
                  whileHover={canUnlock ? { scale: 1.1 } : {}}
                  animate={isUnlocked ? { 
                    boxShadow: ['0 0 0 0 rgba(59, 130, 246, 0.7)', '0 0 0 10px rgba(59, 130, 246, 0)']
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {getSkillIcon(skill.level)}
                  
                  {/* Skill Level */}
                  {isUnlocked && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                      {skill.level}
                    </div>
                  )}
                </motion.div>

                {/* Skill Name */}
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-center">
                  <div className={`text-sm font-medium whitespace-nowrap ${
                    isUnlocked ? 'text-white' : canUnlock ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {skill.name}
                  </div>
                  {isUnlocked && (
                    <div className="text-xs text-blue-400">Level {skill.level}</div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Legend */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Award className="text-yellow-400" size={16} />
              <span className="text-gray-400">Expert (90+)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="text-purple-400" size={16} />
              <span className="text-gray-400">Advanced (80+)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="text-blue-400" size={16} />
              <span className="text-gray-400">Intermediate (70+)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillTree
