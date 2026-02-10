import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { User, Code, Heart, Coffee, Globe, Cpu } from 'lucide-react'

const About = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [100, -100])

    const stats = [
        { icon: <Code size={20} />, label: 'Clean Code', value: '100%' },
        { icon: <Heart size={20} />, label: 'Passionate', value: '24/7' },
        { icon: <Coffee size={20} />, label: 'Coffee', value: 'Infinite' },
        { icon: <Globe size={20} />, label: 'Remote', value: 'Ready' },
    ]

    return (
        <section id="about" className="section-padding relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container-premium relative z-10" ref={containerRef}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Image/Visual */}
                    <div className="relative group">
                        {/* Floating orbs */}
                        <motion.div 
                            className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500/30 rounded-full blur-3xl"
                            animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div 
                            className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl"
                            animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />
                        
                        <motion.div
                            className="relative w-full max-w-md mx-auto"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            {/* Rotating border */}
                            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-xl group-hover:opacity-100 transition-opacity" />
                            
                            {/* Main image container */}
                            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border-2 border-white/10 backdrop-blur-sm">
                                <img
                                    src="/profile.png"
                                    alt="Vikas Uniyal"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                
                                {/* Gradient overlays */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-purple-500/20 mix-blend-overlay" />
                                
                                {/* Floating badge */}
                                <motion.div 
                                    className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl">
                                            <Cpu size={20} className="text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm">Full Stack Developer</h4>
                                            <p className="text-gray-300 text-xs">Building Digital Experiences</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="heading-xl mb-6">
                                Crafting Code with <span className="gradient-text">Purpose</span>
                            </h2>

                            <p className="text-body text-lg mb-6 leading-relaxed">
                                Hello! I'm <strong className="text-white">Vikas Uniyal</strong>, a passionate developer who bridges the gap between clean code and compelling user experiences.
                            </p>

                            <p className="text-body text-lg mb-8 leading-relaxed">
                                With a deep understanding of modern web architectures, I don't just build websites; I build digital ecosystems. My journey is defined by a relentless curiosity and a commitment to solving complex problems with elegant, scalable solutions. Whether it's optimization, accessibility, or interactivity, I ensure every pixel serves a purpose.
                            </p>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                {stats.map((stat, i) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center group hover:bg-white/10 transition-colors"
                                    >
                                        <div className="mb-2 text-indigo-400 group-hover:text-indigo-300 transition-colors flex justify-center">
                                            {stat.icon}
                                        </div>
                                        <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary"
                                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            >
                                Let's Work Together
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
