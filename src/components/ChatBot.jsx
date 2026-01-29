import React, { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm Vikas's assistant. Ask me about his skills, projects, or experience!", sender: 'bot' }
  ])
  const [input, setInput] = useState('')

  const responses = {
    skills: "Vikas specializes in React, PHP, MySQL, and full-stack web development. He focuses on clean UI and maintainable code.",
    projects: "You can view Vikas's projects in the Projects section above. He builds fast, reliable web applications.",
    experience: "Vikas is a Full Stack Developer with expertise in modern web technologies and practical solutions.",
    contact: "You can reach Vikas at vikasuniyalcsa@gmail.com or connect via LinkedIn and GitHub.",
    default: "I can help you learn about Vikas's skills, projects, experience, or contact information. What would you like to know?"
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { id: Date.now(), text: input, sender: 'user' }
    setMessages(prev => [...prev, userMessage])

    const key = Object.keys(responses).find(k => 
      input.toLowerCase().includes(k) && k !== 'default'
    ) || 'default'

    setTimeout(() => {
      const botMessage = { id: Date.now() + 1, text: responses[key], sender: 'bot' }
      setMessages(prev => [...prev, botMessage])
    }, 500)

    setInput('')
  }

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 md:bottom-6 left-4 md:left-6 p-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img src="/chatbot.png" alt="Chat" className="w-6 h-6 md:w-8 md:h-8" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-16 md:bottom-20 left-4 md:left-6 w-72 md:w-80 h-80 md:h-96 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl z-50"
          >
            <div className="flex items-center justify-between p-3 md:p-4 border-b border-white/20">
              <h3 className="text-white font-semibold text-sm md:text-base">Chat with Vikas's Assistant</h3>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
                <X size={18} className="md:w-5 md:h-5" />
              </button>
            </div>

            <div className="flex-1 p-3 md:p-4 h-48 md:h-64 overflow-y-auto">
              {messages.map(msg => (
                <div key={msg.id} className={`mb-2 md:mb-3 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block p-2 rounded-lg max-w-xs text-xs md:text-sm ${
                    msg.sender === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white/20 text-white'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 md:p-4 border-t border-white/20">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about skills, projects..."
                  className="flex-1 p-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 text-xs md:text-sm"
                />
                <button
                  onClick={handleSend}
                  className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Send size={14} className="md:w-4 md:h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatBot
