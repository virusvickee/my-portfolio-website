import React from 'react'
import { motion } from 'framer-motion'
import { Monitor, Smartphone, Database, Globe, Rocket, Shield } from 'lucide-react'

const services = [
    {
        icon: <Monitor size={32} />,
        title: 'Frontend Development',
        description: 'Building responsive, high-performance user interfaces with React, Tailwind CSS, and modern JavaScript frameworks.'
    },
    {
        icon: <Database size={32} />,
        title: 'Backend Engineering',
        description: 'Designing robust APIs and database architectures using Node.js, PHP, MySQL, and MongoDB for scalable applications.'
    },
    {
        icon: <Smartphone size={32} />,
        title: 'Full Stack Solutions',
        description: 'End-to-end web application development, handling everything from server configuration to pixel-perfect client-side code.'
    },
    {
        icon: <Rocket size={32} />,
        title: 'Performance Optimization',
        description: 'Auditing and optimizing web applications for maximum speed, accessibility, and search engine visibility.'
    },
    {
        icon: <Globe size={32} />,
        title: 'SaaS Development',
        description: 'Turning complex business requirements into elegant, multi-tenant Software-as-a-Service platforms.'
    },
    {
        icon: <Shield size={32} />,
        title: 'Secure Architecture',
        description: 'Implementing security best practices, authentication systems, and data protection standards in all projects.'
    }
]

const Services = () => {
    return (
        <section id="services" className="section-padding bg-black/20">
            <div className="container-premium">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="heading-xl mb-6">
                        Technical <span className="gradient-text">Expertise</span>
                    </h2>
                    <p className="text-body text-xl max-w-2xl mx-auto">
                        Delivering comprehensive web solutions tailored to business needs with a focus on quality and performance.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 group"
                        >
                            <div className="mb-6 inline-block p-4 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
