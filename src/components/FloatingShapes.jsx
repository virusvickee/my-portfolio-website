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

    // Create floating shapes
    const shapes = []
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.7, 16, 16),
      new THREE.ConeGeometry(0.7, 1.5, 8),
      new THREE.OctahedronGeometry(0.8),
    ]

    for (let i = 0; i < 15; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)]
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(0.6 + Math.random() * 0.2, 0.7, 0.5),
        wireframe: true,
        transparent: true,
        opacity: 0.3
      })
      
      const mesh = new THREE.Mesh(geometry, material)
      
      // Random position
      mesh.position.x = (Math.random() - 0.5) * 20
      mesh.position.y = (Math.random() - 0.5) * 20
      mesh.position.z = (Math.random() - 0.5) * 20
      
      // Random rotation speed and floating parameters
      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        },
        floatSpeed: Math.random() * 0.02 + 0.01,
        floatOffset: Math.random() * Math.PI * 2,
        initialY: mesh.position.y
      }
      
      shapes.push(mesh)
      scene.add(mesh)
    }

    shapesRef.current = shapes
    camera.position.z = 15

    // Animation loop
    const animate = (time) => {
      shapes.forEach((shape, index) => {
        // Rotation
        shape.rotation.x += shape.userData.rotationSpeed.x
        shape.rotation.y += shape.userData.rotationSpeed.y
        shape.rotation.z += shape.userData.rotationSpeed.z
        
        // Floating motion - use initial Y to avoid cumulative drift
        shape.position.y = shape.userData.initialY + Math.sin(time * 0.001 * shape.userData.floatSpeed + shape.userData.floatOffset) * 0.5
      })
      
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
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}

export default FloatingShapes
