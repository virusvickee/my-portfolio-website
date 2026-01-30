import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const SocialCard = () => {
    return (
        <div className="h-full flex flex-col justify-between">
            <div>
                <h3 className="text-xl font-bold text-white mb-2">Let's Connect</h3>
                <p className="text-indigo-200 text-sm mb-6">Open for collaborations and opportunities.</p>
            </div>

            <div className="flex gap-3">
                <a
                    href="https://github.com/virusvickee"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white/10 rounded-xl hover:bg-white/20 hover:scale-110 transition-all text-white"
                    aria-label="GitHub"
                >
                    <Github size={20} />
                </a>
                <a
                    href="https://linkedin.com/in/vikas-uniyal"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white/10 rounded-xl hover:bg-white/20 hover:scale-110 transition-all text-white"
                    aria-label="LinkedIn"
                >
                    <Linkedin size={20} />
                </a>
                <a
                    href="mailto:vikasuniyalcsa@gmail.com"
                    className="p-3 bg-white/10 rounded-xl hover:bg-white/20 hover:scale-110 transition-all text-white"
                    aria-label="Email"
                >
                    <Mail size={20} />
                </a>
            </div>
        </div>
    )
}

export default SocialCard
