import { useState, useEffect } from 'react'

const DynamicContent = () => {
  const [timeGreeting, setTimeGreeting] = useState('')
  const [location, setLocation] = useState('')

  useEffect(() => {
    // Time-based greeting
    const hour = new Date().getHours()
    if (hour < 12) setTimeGreeting('Good Morning')
    else if (hour < 18) setTimeGreeting('Good Afternoon')
    else setTimeGreeting('Good Evening')

    // Location-based content
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
            )
            const data = await response.json()
            setLocation(data.city || data.locality || 'Unknown')
          } catch (error) {
            console.log('Location fetch failed')
          }
        },
        () => console.log('Geolocation denied')
      )
    }
  }, [])

  return (
    <div className="text-center mb-4">
      <p className="text-white/80">
        {timeGreeting}! {location && `Greetings from ${location}!`}
      </p>
    </div>
  )
}

export default DynamicContent
