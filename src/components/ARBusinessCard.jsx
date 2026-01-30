import React, { useState } from 'react'
import { QrCode, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const ARBusinessCard = () => {
  const [showQR, setShowQR] = useState(false)

  // Generate QR code data for AR business card
  const businessCardData = {
    name: "Vikas Uniyal",
    title: "Full Stack Developer",
    email: "vikasuniyalcsa@gmail.com",
    github: "https://github.com/virusvickee",
    linkedin: "https://linkedin.com/in/vikas-uniyal",
    website: window.location.origin
  }

  const qrData = `BEGIN:VCARD
VERSION:3.0
FN:${businessCardData.name}
TITLE:${businessCardData.title}
EMAIL:${businessCardData.email}
URL:${businessCardData.website}
END:VCARD`

  return (
    <>
      <motion.button
        onClick={() => setShowQR(true)}
        className="p-3 bg-purple-500 text-white rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <QrCode size={16} className="md:w-5 md:h-5" />
      </motion.button>

      <AnimatePresence>
        {showQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60]"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white p-4 md:p-8 rounded-xl relative max-w-xs md:max-w-sm mx-4"
            >
              <button
                onClick={() => setShowQR(false)}
                className="absolute top-3 md:top-4 right-3 md:right-4 text-gray-500 hover:text-gray-700"
              >
                <X size={18} className="md:w-5 md:h-5" />
              </button>

              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center">AR Business Card</h3>

              <div className="bg-gray-100 p-3 md:p-4 rounded-lg mb-3 md:mb-4">
                <div className="w-40 h-40 md:w-48 md:h-48 mx-auto bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrData)}`}
                    alt="QR Code"
                    className="w-full h-full"
                  />
                </div>
              </div>

              <div className="text-center text-xs md:text-sm text-gray-600">
                <p className="mb-2">Scan with your phone to save contact</p>
                <div className="bg-blue-50 p-2 md:p-3 rounded-lg">
                  <p className="font-semibold text-sm md:text-base">{businessCardData.name}</p>
                  <p className="text-xs md:text-sm">{businessCardData.title}</p>
                  <p className="text-blue-600 text-xs md:text-sm">{businessCardData.email}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ARBusinessCard
