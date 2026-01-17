import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const FloatingShapes = () => {
  const mountRef = useRef(null)
  const sceneRef = useRef(null)
  const rendererRef = useRef(null)
  const animationRef = useRef(null)
  const shapesRef = useRef([])

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)
    
    sceneRef.current = scene
    rendererRef.current = renderer

    // Tech stack with icons (using Unicode symbols and emojis)
    const techStack = [
      { name: 'React', icon: '⚛️' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Express', icon: '🚀' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'PHP', icon: '🐘' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'Tailwind', icon: '💨' },
      { name: 'JWT', icon: '🔐' },
      { name: 'API', icon: '🔗' },
      { name: 'Git', icon: '📦' },
      { name: 'Vite', icon: '⚡' }
    ]

    // Create floating tech icons
    const shapes = []
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    canvas.width = 128
    canvas.height = 128

    for (let i = 0; i < 15; i++) {
      const tech = techStack[Math.floor(Math.random() * techStack.length)]
      
      // Clear canvas
      context.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw icon
      context.font = '48px Arial, sans-serif'
      context.textAlign = 'center'
      context.textBaseline = 'middle'
      context.fillText(tech.icon, canvas.width / 2, canvas.height / 2)
      
      // Draw tech name below icon
      context.font = 'bold 12px Inter, sans-serif'
      context.fillStyle = `hsl(${220 + Math.random() * 40}, 70%, 80%)`
      context.fillText(tech.name, canvas.width / 2, canvas.height / 2 + 35)
      
      // Create texture and material
      const texture = new THREE.CanvasTexture(canvas.cloneNode())
      texture.needsUpdate = true
      
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.7
      })
      
      // Create plane geometry for icon
      const geometry = new THREE.PlaneGeometry(1.5, 1.5)
      const mesh = new THREE.Mesh(geometry, material)
      
      // Random position with more 3D depth
      mesh.position.x = (Math.random() - 0.5) * 30
      mesh.position.y = (Math.random() - 0.5) * 20
      mesh.position.z = (Math.random() - 0.5) * 40 - 10
      
      // Random rotation and floating parameters
      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        },
        floatSpeed: Math.random() * 0.02 + 0.01,
        floatOffset: Math.random() * Math.PI * 2,
        initialY: mesh.position.y,
        initialX: mesh.position.x,
        initialZ: mesh.position.z
      }
      
      shapes.push(mesh)
      scene.add(mesh)
    }

    shapesRef.current = shapes
    camera.position.z = 20

    // Animation loop with 3D movement
    const animate = (time) => {
      shapes.forEach((shape) => {
        // 3D Rotation
        shape.rotation.x += shape.userData.rotationSpeed.x
        shape.rotation.y += shape.userData.rotationSpeed.y
        shape.rotation.z += shape.userData.rotationSpeed.z
        
        // 3D Floating motion
        const t = time * 0.001
        shape.position.y = shape.userData.initialY + Math.sin(t * shape.userData.floatSpeed + shape.userData.floatOffset) * 1.5
        shape.position.x = shape.userData.initialX + Math.cos(t * shape.userData.floatSpeed * 0.7 + shape.userData.floatOffset) * 0.8
        shape.position.z = shape.userData.initialZ + Math.sin(t * shape.userData.floatSpeed * 0.5 + shape.userData.floatOffset) * 2
        
        // Scale based on Z position for depth effect
        const distance = Math.abs(shape.position.z + 10) / 30
        const scale = 0.5 + (1 - distance) * 0.8
        shape.scale.setScalar(scale)
        
        // Opacity based on distance
        shape.material.opacity = 0.6 + (1 - distance) * 0.4
      })
      
      // Slight camera movement for parallax effect
      camera.position.x = Math.sin(time * 0.0005) * 2
      camera.position.y = Math.cos(time * 0.0003) * 1
      camera.lookAt(0, 0, 0)
      
      renderer.render(scene, camera)
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animate(0)

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      // Dispose of mesh geometries and materials
      shapesRef.current.forEach((mesh) => {
        if (mesh.geometry) {
          mesh.geometry.dispose()
        }
        if (mesh.material) {
          if (mesh.material.map) {
            mesh.material.map.dispose()
          }
          mesh.material.dispose()
        }
        scene.remove(mesh)
      })
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ opacity: 1 }}
    />
  )
}

export default FloatingShapes
