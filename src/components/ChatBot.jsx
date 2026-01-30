import React, { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, Send, Bot, User, Settings, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const PORTFOLIO_CONTEXT = `
You are an AI assistant for Vikas Uniyal's portfolio website.
Your goal is to answer questions about Vikas's skills, experience, and projects professionally.

INFO ABOUT VIKAS:
- Role: Full Stack Developer (Specialized in React, PHP, Modern Web Tech).
- Location: India.
- Contact: vikasuniyalcsa@gmail.com (or via LinkedIn/GitHub links in the footer).
- Status: Available for freelance projects.

KEY SKILLS:
- Frontend: React, Tailwind CSS, Framer Motion, Three.js, Vite.
- Backend: PHP, Node.js, MySQL, MongoDB.
- Cloud/Tools: AWS, Git, Vercel, OpenAI API integration.

PROJECTS & EXPERIENCE:
1. Freelance Full Stack Dev (2024-Present): Building e-commerce platforms (10k+ daily reqs) and AI-driven SaaS apps. Uses React, PHP, AWS.
2. Web Developer at Tech Startup (2023-2024): Built SaaS products, real-time collab tools with WebSockets.
3. Computer Software Application Grad (University): Top 5% of class, led coding club.

HIGHLIGHTS:
- "Global Testimonials": Clients from SF, London, Singapore, etc.
- Interactive 3D Elements: He builds premium, interactive UIs (like this chatbot and the 3D globe).

TONE:
- Professional, friendly, and concise.
- Use emojis occasionally.
- If asked "HIRE HIM", guide them to the Contact section or Sticky CTA.
`

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm Vikas's AI assistant. Ask me anything about his work! 🤖", sender: 'bot' }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [apiKey, setApiKey] = useState('')
  const [showSettings, setShowSettings] = useState(false)
  const messagesEndRef = useRef(null)

  // Load API Key from local storage
  useEffect(() => {
    const storedKey = localStorage.getItem('openai_api_key')
    if (storedKey) setApiKey(storedKey)
  }, [])

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const saveApiKey = (key) => {
    setApiKey(key)
    localStorage.setItem('openai_api_key', key)
    setShowSettings(false)
  }

  const handleSend = async () => {
    if (!input.trim()) return
    if (!apiKey) {
      setMessages(prev => [...prev, { id: Date.now(), text: input, sender: 'user' }])
      setTimeout(() => {
        setMessages(prev => [...prev, { id: Date.now() + 1, text: "⚠️ Please configure your OpenAI API Key in settings to enable live chat.", sender: 'bot' }])
      }, 500)
      setInput('')
      return
    }

    const userMsg = { id: Date.now(), text: input, sender: 'user' }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: PORTFOLIO_CONTEXT },
            ...messages.filter(m => m.id !== 1).map(m => ({
              role: m.sender === 'user' ? 'user' : 'assistant',
              content: m.text
            })),
            { role: "user", content: input }
          ],
          max_tokens: 150
        })
      })

      const data = await response.json()

      if (data.error) {
        throw new Error(data.error.message)
      }

      const botText = data.choices[0].message.content
      setMessages(prev => [...prev, { id: Date.now(), text: botText, sender: 'bot' }])

    } catch (error) {
      console.error(error)
      setMessages(prev => [...prev, { id: Date.now(), text: "❌ Oops! Something went wrong. Check your API Key or try again.", sender: 'bot' }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-20 md:right-24 z-50 p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg shadow-indigo-500/30 text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Bot size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 md:right-10 w-80 md:w-96 h-[500px] bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-indigo-600/20 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Bot size={20} className="text-indigo-400" />
                  <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Vikas AI Assistant</h3>
                  <p className="text-indigo-300/60 text-xs">Powered by OpenAI</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setShowSettings(!showSettings)} className="text-white/60 hover:text-white transition-colors">
                  <Settings size={18} />
                </button>
                <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Settings Mode */}
            {showSettings ? (
              <div className="flex-1 p-6 flex flex-col justify-center bg-slate-900">
                <h4 className="text-white font-medium mb-4">Configuration</h4>
                <p className="text-gray-400 text-xs mb-4">
                  To enable live chat, please enter your OpenAI API Key. It will be stored locally in your browser.
                </p>
                <input
                  type="password"
                  placeholder="sk-..."
                  className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white text-sm mb-4 focus:outline-none focus:border-indigo-500"
                  defaultValue={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
                <button
                  onClick={() => saveApiKey(apiKey)}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg p-2 text-sm font-medium transition-colors"
                >
                  Save Key
                </button>
              </div>
            ) : (
              /* Chat Mode */
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                            ? 'bg-indigo-600 text-white rounded-br-none'
                            : 'bg-white/10 text-gray-200 rounded-bl-none border border-white/5'
                          }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white/10 p-3 rounded-2xl rounded-bl-none flex gap-1">
                        <motion.div className="w-1.5 h-1.5 bg-gray-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity }} />
                        <motion.div className="w-1.5 h-1.5 bg-gray-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
                        <motion.div className="w-1.5 h-1.5 bg-gray-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <div className="p-4 border-t border-white/10 bg-slate-900/50">
                  <div className="flex gap-2 relative">
                    <input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      disabled={isLoading}
                      placeholder={apiKey ? "Ask something..." : "Set API Key to chat..."}
                      className="flex-1 bg-black/20 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-indigo-500/50 text-sm"
                    />
                    <button
                      onClick={handleSend}
                      disabled={isLoading || !input.trim()}
                      className="p-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl transition-all"
                    >
                      {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatBot
