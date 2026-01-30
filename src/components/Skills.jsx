import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Database, Layout, Server, Terminal, Wrench, Cpu, Globe } from 'lucide-react'

// Skill Data
const SKILLS = [
  // Frontend
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 95, category: 'Frontend', exp: '4+ Years' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', level: 85, category: 'Frontend', exp: '2+ Years' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', level: 90, category: 'Frontend', exp: '3+ Years' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', level: 88, category: 'Frontend', exp: '2+ Years' },
  { name: 'Framer Motion', icon: 'https://pagepro.co/blog/wp-content/uploads/2020/03/framer-motion.png', level: 80, category: 'Frontend', exp: '1+ Years' }, // Using PNG for Framer as devicon might not have it or it's svgs
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 95, category: 'Frontend', exp: '5+ Years' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 90, category: 'Frontend', exp: '5+ Years' },

  // Backend & Tools
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 85, category: 'Backend', exp: '3+ Years' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', level: 90, category: 'Backend', exp: '4+ Years' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 88, category: 'Database', exp: '4+ Years' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 80, category: 'Database', exp: '2+ Years' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', level: 75, category: 'DevOps', exp: '2+ Years' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 90, category: 'Tools', exp: '4+ Years' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 75, category: 'Backend', exp: '3+ Years' },
]

const SkillCard = ({ skill }) => (
  <motion.div
    className="relative group w-24 h-24 md:w-32 md:h-32 m-4 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center cursor-pointer overflow-hidden backdrop-blur-sm hover:border-indigo-500/50 transition-colors"
    whileHover={{ scale: 1.1, y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    {/* Background Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/20 group-hover:to-purple-500/20 transition-all duration-300" />

    {/* Icon */}
    <div className="relative z-10 p-2 mb-1">
      <img src={skill.icon} alt={skill.name} className="w-10 h-10 md:w-12 md:h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />
    </div>

    {/* Name (Always visible) */}
    <span className="relative z-10 text-gray-400 text-xs font-medium md:text-sm group-hover:text-white transition-colors">{skill.name}</span>
  </motion.div>
)

const MarqueeRow = ({ skills, direction = "left", speed = 20 }) => {
  return (
    <div className="relative flex overflow-hidden py-4 group">
      {/* Side Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#0B0F19] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#0B0F19] to-transparent z-10" />

      <motion.div
        className="flex"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      // Pause on hover hack: we can't easily pause Framer Motion simply with CSS, 
      // but we can make the animation super slow or use state. 
      // For simplicity in this "pure" marquee, we'll keep it moving or use CSS animation class instead if needed.
      // Let's stick to Framer Motion for smoothness, but maybe just accept it keeps moving 
      // OR we can wrap individual cards to be interactive even while moving.
      >
        {/* Double the list for seamless loop */}
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <SkillCard key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </motion.div>
    </div>
  )
}

const Skills = () => {
  // Split skills
  const row1 = SKILLS.slice(0, Math.ceil(SKILLS.length / 2));
  const row2 = SKILLS.slice(Math.ceil(SKILLS.length / 2));

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="container-premium relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl mb-6">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            A comprehensive toolkit that I leverage to build scalable, high-performance web applications.
          </p>
        </motion.div>

        <div className="space-y-4">
          <MarqueeRow skills={row1} direction="left" speed={30} />
          <MarqueeRow skills={row2} direction="right" speed={30} />
        </div>

        {/* Background Decorative */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
      </div>
    </section>
  )
}

export default Skills
