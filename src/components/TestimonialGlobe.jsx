import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const TestimonialGlobe = ({ locations = [], activeIndex, onLocationSelect }) => {
    const mountRef = useRef(null)
    const globeRef = useRef(null)
    const markersRef = useRef([])

    useEffect(() => {
        if (!mountRef.current) return

        // Scene Setup
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(45, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000)
        camera.position.z = 18

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
        renderer.setPixelRatio(window.devicePixelRatio)
        mountRef.current.appendChild(renderer.domElement)

        // Globe
        const globeGeometry = new THREE.SphereGeometry(5, 64, 64)
        const globeMaterial = new THREE.MeshBasicMaterial({
            color: 0x6366f1, // Indigo-500
            wireframe: true,
            transparent: true,
            opacity: 0.1
        })
        const globe = new THREE.Mesh(globeGeometry, globeMaterial)
        scene.add(globe)
        globeRef.current = globe

        // Atmosphere Glow
        const atmosphereGeometry = new THREE.SphereGeometry(5, 64, 64)
        const atmosphereMaterial = new THREE.ShaderMaterial({
            transparent: true,
            side: THREE.BackSide,
            uniforms: {},
            vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
            fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.7 - dot(vNormal, vec3(0, 0, 1.0)), 4.0);
          gl_FragColor = vec4(0.3, 0.5, 1.0, 1.0) * intensity;
        }
      `
        })
        const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
        atmosphere.scale.set(1.1, 1.1, 1.1)
        scene.add(atmosphere)

        // Markers
        markersRef.current = locations.map((loc, index) => {
            const phi = (90 - loc.lat) * (Math.PI / 180)
            const theta = (loc.lng + 180) * (Math.PI / 180)

            const r = 5.2
            const x = -(r * Math.sin(phi) * Math.cos(theta))
            const z = (r * Math.sin(phi) * Math.sin(theta))
            const y = (r * Math.cos(phi))

            const geometry = new THREE.SphereGeometry(0.15, 16, 16)
            const material = new THREE.MeshBasicMaterial({ color: 0xffffff })
            const marker = new THREE.Mesh(geometry, material)

            marker.position.set(x, y, z)
            marker.userData = { id: index }
            globe.add(marker)

            // Glow ring for active marker
            const ringGeo = new THREE.RingGeometry(0.2, 0.25, 32)
            const ringMat = new THREE.MeshBasicMaterial({ color: 0x4f46e5, side: THREE.DoubleSide })
            const ring = new THREE.Mesh(ringGeo, ringMat)
            ring.lookAt(x * 2, y * 2, z * 2)
            ring.position.set(x, y, z)
            marker.add(ring)

            return { mesh: marker, ring: ring }
        })

        // Animation Loop
        let animationFrameId
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate)

            if (globeRef.current) {
                globeRef.current.rotation.y += 0.002
            }

            // Pulse active marker
            markersRef.current.forEach((markerObj, idx) => {
                if (idx === activeIndex) {
                    markerObj.mesh.material.color.setHex(0x4f46e5) // Active Blue
                    const scale = 1 + Math.sin(Date.now() * 0.005) * 0.3
                    markerObj.ring.scale.set(scale, scale, scale)
                    markerObj.ring.visible = true
                } else {
                    markerObj.mesh.material.color.setHex(0xffffff)
                    markerObj.ring.visible = false
                }
            })

            renderer.render(scene, camera)
        }
        animate()

        // Resize Handler
        const handleResize = () => {
            if (!mountRef.current) return
            const width = mountRef.current.clientWidth
            const height = mountRef.current.clientHeight
            renderer.setSize(width, height)
            camera.aspect = width / height
            camera.updateProjectionMatrix()
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            cancelAnimationFrame(animationFrameId)
            mountRef.current?.removeChild(renderer.domElement)

            // Dispose Three.js resources
            renderer.dispose()
            globeGeometry.dispose()
            globeMaterial.dispose()
            atmosphereGeometry.dispose()
            atmosphereMaterial.dispose()

            markersRef.current.forEach(({ mesh, ring }) => {
                mesh.geometry.dispose()
                mesh.material.dispose()
                ring.geometry.dispose()
                ring.material.dispose()
            })
        }
    }, [locations, activeIndex])

    return <div ref={mountRef} className="w-full h-full min-h-[400px]" />
}

export default TestimonialGlobe
