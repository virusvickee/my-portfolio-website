import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Send, X, Bot, User } from 'lucide-react'

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Vikas's AI assistant. Ask me anything about his experience, skills, or projects!",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Predefined responses based on Vikas's portfolio
  const getAIResponse = (message) => {
    const lowerMessage = message.toLowerCase()
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
      return "Vikas is skilled in React, Node.js, PHP, Python, MongoDB, MySQL, and AI integration. He specializes in full-stack development with modern frameworks and has experience with cloud platforms like AWS."
    }
    
    if (lowerMessage.includes('experience') || lowerMessage.includes('work')) {
      return "Vikas has extensive experience in full-stack development, building scalable web applications, and integrating AI features. He's worked with companies like Microsoft, Flipkart, and Adobe on various projects."
    }
    
    if (lowerMessage.includes('project')) {
      return "Vikas has built various projects including modern web applications, AI-powered tools, and performance-optimized systems. Check out his Projects section to see detailed case studies and live demos."
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('hire')) {
      return "You can contact Vikas at vikasuniyalcsa@gmail.com. He's currently available for freelance projects and full-time opportunities. Response time is typically under 24 hours!"
    }
    
    if (lowerMessage.includes('education') || lowerMessage.includes('certification')) {
      return "Vikas has multiple certifications in web development, cloud computing, and AI/ML. Check the Certifications section for detailed information about his educational background."
    }
    
    if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence')) {
      return "Vikas specializes in AI integration for web applications, including chatbots, recommendation systems, and automated workflows. He has experience with OpenAI APIs, machine learning models, and AI-powered user experiences."
    }
    
    if (lowerMessage.includes('location') || lowerMessage.includes('where')) {
      return "Vikas is based in India and works with clients globally. He's experienced in remote collaboration and has worked across different time zones with international teams."
    }
    
    if (lowerMessage.includes('rate') || lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return "Vikas offers competitive rates based on project scope and requirements. Contact him directly at vikasuniyalcsa@gmail.com to discuss pricing for your specific needs."
    }
    
    if (lowerMessage.includes('timeline') || lowerMessage.includes('delivery') || lowerMessage.includes('time')) {
      return "Vikas is known for delivering projects ahead of schedule with zero bugs. Project timelines depend on scope, but he maintains excellent communication throughout the development process."
    }
    
    if (lowerMessage.includes('language') || lowerMessage.includes('speak')) {
      return "Vikas is fluent in English and Hindi. He communicates effectively with international clients and has excellent written and verbal communication skills."
    }
    
    if (lowerMessage.includes('team') || lowerMessage.includes('collaborate')) {
      return "Vikas works excellently in teams and has experience leading development projects. He's collaborative, communicative, and adapts well to different team structures and methodologies."
    }
    
    if (lowerMessage.includes('passion') || lowerMessage.includes('interest') || lowerMessage.includes('hobby')) {
      return "Vikas is passionate about cutting-edge web technologies, AI innovation, and creating user-centric applications. He continuously learns new technologies and enjoys solving complex technical challenges."
    }
    
    if (lowerMessage.includes('availability') || lowerMessage.includes('free') || lowerMessage.includes('available')) {
      return "Vikas is currently available for new projects! He's open to both freelance work and full-time opportunities. Reach out to discuss your project requirements."
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello! I'm here to help you learn more about Vikas Uniyal. Feel free to ask about his skills, experience, projects, or how to get in touch with him."
    }
    
    return "That's a great question! For detailed information, I'd recommend checking out the relevant sections of Vikas's portfolio or contacting him directly at vikasuniyalcsa@gmail.com for specific inquiries."
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: getAIResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 z-50 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          y: [0, -5, 0],
          boxShadow: [
            "0 10px 25px rgba(59, 130, 246, 0.15)",
            "0 15px 35px rgba(147, 51, 234, 0.25)",
            "0 10px 25px rgba(59, 130, 246, 0.15)"
          ]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </motion.div>
        
        {/* Pulse ring animation */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-blue-400"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.7, 0, 0.7]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 left-6 w-96 h-[500px] bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <motion.div 
              className="p-4 border-b border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center space-x-3">
                <motion.div 
                  className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Bot size={20} className="text-white" />
                </motion.div>
                <div>
                  <motion.h3 
                    className="text-white font-semibold"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    AI Assistant
                  </motion.h3>
                  <motion.p 
                    className="text-gray-400 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.span
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      🟢 Online
                    </motion.span>
                    {" "}Ask about Vikas's experience
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.4,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <motion.div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${message.sender === 'user' ? 'bg-blue-500' : 'bg-purple-500'}`}
                      whileHover={{ scale: 1.1 }}
                      animate={message.sender === 'bot' ? { 
                        rotate: [0, 5, -5, 0] 
                      } : {}}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {message.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </motion.div>
                    <motion.div 
                      className={`p-3 rounded-2xl ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-white/10 text-gray-300'}`}
                      whileHover={{ scale: 1.02 }}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div 
                  className="flex justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="flex items-start space-x-2">
                    <motion.div 
                      className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center"
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Bot size={16} />
                    </motion.div>
                    <motion.div 
                      className="bg-white/10 p-3 rounded-2xl"
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <div className="flex space-x-1">
                        <motion.div 
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div 
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div 
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <motion.div 
              className="p-4 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex space-x-2">
                <motion.input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about skills, experience, projects..."
                  className="flex-1 bg-white/5 border border-white/20 rounded-xl px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  animate={inputMessage.trim() ? { 
                    boxShadow: [
                      "0 0 0 rgba(59, 130, 246, 0)",
                      "0 0 20px rgba(59, 130, 246, 0.3)",
                      "0 0 0 rgba(59, 130, 246, 0)"
                    ]
                  } : {}}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Send size={16} />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatAssistant
