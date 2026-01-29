import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, X } from 'lucide-react'

const ProjectFilters = ({ projects, onFilteredProjects }) => {
  const [activeFilters, setActiveFilters] = useState(['All'])
  const [isOpen, setIsOpen] = useState(false)

  // Extract unique technologies from projects
  const allTechnologies = ['All', ...new Set(projects.flatMap(project => project.tech))]

  const toggleFilter = (tech) => {
    if (tech === 'All') {
      setActiveFilters(['All'])
    } else {
      const newFilters = activeFilters.includes('All') 
        ? [tech]
        : activeFilters.includes(tech)
          ? activeFilters.filter(f => f !== tech)
          : [...activeFilters.filter(f => f !== 'All'), tech]
      
      setActiveFilters(newFilters.length === 0 ? ['All'] : newFilters)
    }
  }

  // Filter projects based on active filters
  const filteredProjects = activeFilters.includes('All') 
    ? projects 
    : projects.filter(project => 
        project.tech.some(tech => activeFilters.includes(tech))
      )

  // Call parent callback when filters change
  useEffect(() => {
    onFilteredProjects(filteredProjects)
  }, [activeFilters, projects, filteredProjects, onFilteredProjects])

  return (
    <div className="relative mb-8">
      {/* Filter Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Filter size={16} />
        <span>Filter Projects</span>
        <span className="text-blue-400">({filteredProjects.length})</span>
      </motion.button>

      {/* Filter Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-12 left-0 right-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 z-10"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-semibold">Filter by Technology</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {allTechnologies.map((tech) => (
                <motion.button
                  key={tech}
                  onClick={() => toggleFilter(tech)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeFilters.includes(tech)
                      ? 'bg-blue-500 text-white border border-blue-400'
                      : 'bg-white/5 text-gray-300 border border-white/20 hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                  {tech !== 'All' && (
                    <span className="ml-1 text-xs opacity-70">
                      ({projects.filter(p => p.tech.includes(tech)).length})
                    </span>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Active Filters Display */}
            {activeFilters.length > 0 && !activeFilters.includes('All') && (
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center space-x-2">
                  <span className="text-white text-sm">Active filters:</span>
                  <div className="flex flex-wrap gap-1">
                    {activeFilters.map((filter) => (
                      <span
                        key={filter}
                        className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-blue-300 text-xs flex items-center space-x-1"
                      >
                        <span>{filter}</span>
                        <button
                          onClick={() => toggleFilter(filter)}
                          className="hover:text-white"
                        >
                          <X size={12} />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProjectFilters
