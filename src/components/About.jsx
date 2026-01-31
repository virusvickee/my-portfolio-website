import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { User, Code, Heart, Coffee, Globe, Cpu } from 'lucide-react'
import { Card3D } from './Card3D'

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
                        <Card3D className="w-full max-w-md mx-auto aspect-[4/5] rounded-3xl overflow-hidden">
                            <motion.div
                                className="w-full h-full relative"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                {/* Placeholder for user image - using a tech/abstract image if no personal photo provided yet */}
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-black rounded-3xl overflow-hidden border border-white/10">
                                    <img
                                        src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80"
                                        alt="About Vikas"
                                        className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                    {/* Floating Badges */}
                                    <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
                                                <Cpu size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold">Full Stack Dev</h4>
                                                <p className="text-gray-400 text-xs">Architecting Digital Solutions</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Card3D>
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
