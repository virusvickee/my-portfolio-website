import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Settings, X, ChevronRight } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import ARBusinessCard from './ARBusinessCard'
import MiniGame from './MiniGame'
import VoiceCommands from './VoiceCommands'

const FeaturesDrawer = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* Floating Trigger Button */}
            <motion.button
                onClick={() => setIsOpen(true)}
                className="fixed top-24 right-6 z-40 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white shadow-lg hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
                whileHover={{ rotate: 180 }}
                aria-label="Open Features"
            >
                <Settings size={20} className="group-hover:text-indigo-400 transition-colors" />
            </motion.button>

            {/* Drawer Overlay & Panel */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-80 bg-[#0F172A] border-l border-white/10 z-50 p-6 shadow-2xl overflow-y-auto"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    <Settings className="text-indigo-400" />
                                    <span>Features</span>
                                </h2>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Features List */}
                            <div className="space-y-6">

                                {/* Theme Toggle Section */}
                                <div className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-gray-300 font-medium">Appearance</span>
                                    </div>
                                    <div className="flex justify-center">
                                        <ThemeToggle />
                                    </div>
                                </div>

                                {/* Voice Commands Section */}
                                <div className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-gray-300 font-medium">Voice Control</span>
                                    </div>
                                    <VoiceCommands />
                                </div>

                                {/* AR Card Section */}
                                <div className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-gray-300 font-medium">AR Business Card</span>
                                    </div>
                                    <div className="flex justify-center">
                                        <ARBusinessCard />
                                    </div>
                                </div>

                                {/* Mini Game Section */}
                                <div className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-gray-300 font-medium">Mini Game</span>
                                    </div>
                                    <div className="flex justify-center">
                                        <MiniGame />
                                    </div>
                                </div>

                            </div>

                            {/* Footer text */}
                            <div className="absolute bottom-6 left-6 right-6 text-center text-xs text-gray-500">
                                Portfolio Settings v1.0
                            </div>

                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default FeaturesDrawer
