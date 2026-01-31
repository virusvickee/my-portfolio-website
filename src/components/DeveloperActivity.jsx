import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Coffee, Clock, GitCommit, GitBranch, Star, GitFork, Activity, Terminal, Github } from 'lucide-react'

const DeveloperActivity = () => {
    const [activeTab, setActiveTab] = useState('live') // 'live' | 'github'

    // --- Live Coding State ---
    const [currentActivity, setCurrentActivity] = useState('')
    const [isActive, setIsActive] = useState(false)
    const [lastCommit, setLastCommit] = useState('')
    const [codingStreak, setCodingStreak] = useState(0)
    const [hours, setHours] = useState(0)
    const [coffeeCount, setCoffeeCount] = useState(0)

    // --- GitHub State ---
    const [githubStats, setGithubStats] = useState({
        repos: 0,
        stars: 0,
        forks: 0,
        commits: 0,
        languages: []
    })
    const [recentRepos, setRecentRepos] = useState([])
    const [loadingGithub, setLoadingGithub] = useState(true)

    // --- Live Coding Effects ---
    useEffect(() => {
        // Initialize stable values
        setHours(Math.floor(Math.random() * 8) + 2)
        setCoffeeCount(Math.floor(Math.random() * 5) + 2)

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

        // Simulate live coding activity
        const activityInterval = setInterval(() => {
            const isCurrentlyActive = Math.random() > 0.3
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
            if (Math.random() > 0.6) {
                const randomCommit = commits[Math.floor(Math.random() * commits.length)]
                setLastCommit(randomCommit)
            }
        }, 15000)

        return () => {
            clearInterval(activityInterval)
            clearInterval(commitInterval)
        }
    }, [])

    // --- GitHub Effects ---
    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                const userResponse = await fetch('https://api.github.com/users/virusvickee')
                if (!userResponse.ok) throw new Error(`User API error: ${userResponse.status}`)
                const userData = await userResponse.json()

                const reposResponse = await fetch('https://api.github.com/users/virusvickee/repos?sort=updated&per_page=6')
                if (!reposResponse.ok) throw new Error(`Repos API error: ${reposResponse.status}`)
                const reposData = await reposResponse.json()

                if (!userData.public_repos || !Array.isArray(reposData)) {
                    throw new Error('Invalid API response format')
                }

                const totalStars = reposData.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0)
                const totalForks = reposData.reduce((sum, repo) => sum + (repo.forks_count || 0), 0)
                const languages = [...new Set(reposData.map(repo => repo.language).filter(Boolean))]

                setGithubStats({
                    repos: userData.public_repos,
                    stars: totalStars,
                    forks: totalForks,
                    commits: 'N/A',
                    languages: languages.slice(0, 5)
                })

                setRecentRepos(reposData.slice(0, 3))
            } catch (error) {
                console.log('GitHub API error:', error)
                // Fallback data
                setGithubStats({
                    repos: 25,
                    stars: 45,
                    forks: 12,
                    commits: 'N/A',
                    languages: ['JavaScript', 'React', 'PHP', 'Python', 'CSS']
                })
                setRecentRepos([
                    { name: 'my-portfolio-website', description: 'Modern portfolio with React', language: 'JavaScript', updated_at: '2026-01-29' },
                    { name: 'ecommerce-app', description: 'Full-stack ecommerce platform', language: 'React', updated_at: '2026-01-25' },
                    { name: 'api-project', description: 'RESTful API with PHP', language: 'PHP', updated_at: '2026-01-20' }
                ])
            } finally {
                setLoadingGithub(false)
            }
        }

        fetchGitHubData()
    }, [])

    const getCurrentTime = () => {
        return new Date().toLocaleTimeString('en-US', {
            hour12: true,
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    return (
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl h-full flex flex-col">
            {/* Header / Tabs */}
            <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                <button
                    onClick={() => setActiveTab('live')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${activeTab === 'live'
                            ? 'bg-blue-500/20 text-blue-400 ring-1 ring-blue-500/50'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                >
                    <Terminal size={18} />
                    <span className="font-medium">Live Activity</span>
                    {isActive && (
                        <span className="flex h-2 w-2 relative ml-1">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                    )}
                </button>

                <button
                    onClick={() => setActiveTab('github')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${activeTab === 'github'
                            ? 'bg-purple-500/20 text-purple-400 ring-1 ring-purple-500/50'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                >
                    <Github size={18} />
                    <span className="font-medium">GitHub</span>
                </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 relative overflow-hidden">
                <AnimatePresence mode="wait">
                    {activeTab === 'live' ? (
                        <motion.div
                            key="live"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-6"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Clock size={16} className="text-gray-400" />
                                    <span className="text-gray-400 text-sm">{getCurrentTime()}</span>
                                </div>
                                <div className={`px-2 py-1 rounded text-xs font-medium ${isActive ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}`}>
                                    {isActive ? 'Online' : 'Away'}
                                </div>
                            </div>

                            <div className="min-h-[60px]">
                                <p className={`text-lg font-medium ${isActive ? 'text-white' : 'text-gray-400'}`}>
                                    {currentActivity}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-black/20 rounded-xl p-3">
                                    <div className="text-xl font-bold text-blue-400">{codingStreak}m</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider">Session</div>
                                </div>
                                <div className="bg-black/20 rounded-xl p-3">
                                    <div className="text-xl font-bold text-green-400">{hours}h</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider">Today</div>
                                </div>
                                {lastCommit && (
                                    <div className="col-span-2 bg-black/20 rounded-xl p-3 flex items-start gap-3">
                                        <GitCommit size={16} className="text-purple-400 mt-1 shrink-0" />
                                        <div>
                                            <div className="text-xs text-purple-400 font-medium mb-1">Latest Commit</div>
                                            <div className="text-sm text-gray-300 font-mono line-clamp-1">{lastCommit}</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="github"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-6"
                        >
                            {loadingGithub ? (
                                <div className="space-y-4 animate-pulse">
                                    <div className="h-4 bg-white/10 rounded w-1/2"></div>
                                    <div className="h-8 bg-white/10 rounded"></div>
                                </div>
                            ) : (
                                <>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="text-center p-2 bg-black/20 rounded-xl">
                                            <GitBranch className="text-blue-400 mx-auto mb-1" size={16} />
                                            <div className="text-lg font-bold text-white">{githubStats.repos}</div>
                                            <div className="text-[10px] text-gray-500 uppercase">Repos</div>
                                        </div>
                                        <div className="text-center p-2 bg-black/20 rounded-xl">
                                            <Star className="text-yellow-400 mx-auto mb-1" size={16} />
                                            <div className="text-lg font-bold text-white">{githubStats.stars}</div>
                                            <div className="text-[10px] text-gray-500 uppercase">Stars</div>
                                        </div>
                                        <div className="text-center p-2 bg-black/20 rounded-xl">
                                            <GitFork className="text-green-400 mx-auto mb-1" size={16} />
                                            <div className="text-lg font-bold text-white">{githubStats.forks}</div>
                                            <div className="text-[10px] text-gray-500 uppercase">Forks</div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Recent Items</h4>
                                        <div className="space-y-2">
                                            {recentRepos.slice(0, 2).map(repo => (
                                                <div key={repo.name} className="flex justify-between items-center p-2 bg-black/20 rounded-lg hover:bg-black/30 transition-colors cursor-default">
                                                    <span className="text-sm text-gray-200 truncate max-w-[120px]">{repo.name}</span>
                                                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                                                        {repo.language || 'Code'}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default DeveloperActivity
