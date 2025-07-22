import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

const MAX_RETRIES = 3

const Hero3D = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const modelRef = useRef<THREE.Object3D | null>(null)
  const particlesRef = useRef<THREE.Points | null>(null)
  const animationIdRef = useRef<number | null>(null)
  const [showFallback, setShowFallback] = useState(false)

  useEffect(() => {
    let retries = 0
    let didSucceed = false
    if (!containerRef.current) return
    const container = containerRef.current
    const scene = new THREE.Scene()
    sceneRef.current = scene
    const width = container.clientWidth
    const height = container.clientHeight
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    // Detect mobile and adjust camera distance
    const isMobile = window.innerWidth <= 768
    camera.position.z = isMobile ? 2.3 : 2.0
    camera.position.y = 0.1
    camera.position.x = -0.1
    cameraRef.current = camera
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setClearColor(0x000000, 0)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    rendererRef.current = renderer
    container.appendChild(renderer.domElement)
    // Make the canvas fill its parent and not overflow
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    renderer.domElement.style.position = 'relative'
    renderer.domElement.style.left = '0'
    renderer.domElement.style.top = '0'
    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.99) // Lowered for more contrast
    scene.add(ambientLight)
    const directionalLight = new THREE.DirectionalLight(0xfff8e7, 2.2) // Slightly warm
    directionalLight.position.set(5, 10, 7)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 1024
    directionalLight.shadow.mapSize.height = 1024
    scene.add(directionalLight)
    const pointLight = new THREE.PointLight(0xffffff, 1.5, 100)
    pointLight.position.set(-5, 5, 10)
    scene.add(pointLight)
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.7)
    rimLight.position.set(-10, 10, -10)
    scene.add(rimLight)

    // Load 3D model with retry logic
    let animationStarted = false
    let mouseTilt = { x: 0, y: 0 }
    let targetTilt = { x: 0, y: 0 }

    // Subtle mouse interactivity: tilt model based on mouse position
    const handleMouseMove = (event: MouseEvent) => {
      if (!container) return
      const rect = container.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1
      targetTilt.x = y * 0.18 // up/down tilt
      targetTilt.y = x * 0.18 // left/right tilt
    }
    const handleMouseLeave = () => {
      targetTilt.x = 0
      targetTilt.y = 0
    }
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    function loadModel() {
      const loader = new GLTFLoader()
      const dracoLoader = new DRACOLoader()
      dracoLoader.setDecoderPath('/draco/')
      loader.setDRACOLoader(dracoLoader)
      loader.load(
        '/assets/3d/proteindna.glb',
        (gltf: any) => {
          if (didSucceed) return
          didSucceed = true
          const model = gltf.scene
          model.scale.set(8, 8, 8)
          model.position.set(0, 0, 0)
          // Enable cast/receive shadow for all meshes in the model
          model.traverse((child: any) => {
            if (child.isMesh) {
              child.castShadow = true
              child.receiveShadow = true
              if (child.material && child.material.isMeshStandardMaterial) {
                child.material.roughness = 0.7
                child.material.metalness = 0.1
                child.material.needsUpdate = true
              }
            }
          })
          modelRef.current = model
          scene.add(model)
          // Start animation loop only after model is loaded
          if (!animationStarted) {
            animationStarted = true
            animate()
          }
        },
        undefined,
        () => {
          if (retries < MAX_RETRIES) {
            retries++
            setTimeout(loadModel, 1000)
          } else {
            setShowFallback(true)
          }
        }
      )
    }
    loadModel()

    // Add floating particles (unchanged)
    const particleCount = 100
    const particleGeometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
      colors[i * 3] = 0.6 + Math.random() * 0.4
      colors[i * 3 + 1] = 0.2 + Math.random() * 0.3
      colors[i * 3 + 2] = 0.8 + Math.random() * 0.2
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.6
    })
    const particles = new THREE.Points(particleGeometry, particleMaterial)
    particlesRef.current = particles
    scene.add(particles)

    // Remove mouse/touch interactivity
    // (No event listeners for pointer/mouse/touch)
    const handleResize = () => {
      if (!camera || !renderer || !container) return
      const newWidth = container.clientWidth
      const newHeight = container.clientHeight
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }
    window.addEventListener('resize', handleResize)

    // Animation loop: slow y-rotation, bounce, and mouse tilt
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate)
      const time = Date.now() * 0.001
      if (particlesRef.current) {
        particlesRef.current.rotation.x = time * 0.1
        particlesRef.current.rotation.y = time * 0.05
      }
      // Smoothly interpolate tilt
      mouseTilt.x += (targetTilt.x - mouseTilt.x) * 0.08
      mouseTilt.y += (targetTilt.y - mouseTilt.y) * 0.08
      if (modelRef.current) {
        modelRef.current.rotation.y = time * 0.3 + mouseTilt.y // slow y-rotation + mouse tilt
        modelRef.current.rotation.x = mouseTilt.x
        modelRef.current.position.y = Math.sin(time * 1.2) * 0.08 // slight bounce
        modelRef.current.rotation.z = 0
        modelRef.current.scale.set(1, 1, 1)
      }
      renderer.render(scene, camera)
    }
    // Do NOT call animate() here; it is called after model loads

    // Cleanup function
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)
      if (renderer && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
        renderer.dispose()
      }
      if (scene) {
        scene.clear()
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="hero-3d" style={{ width: '100%', height: '100%', position: 'relative' }}>
      {showFallback && (
        <img src="/assets/images/fallback.png" alt="3D Fallback" className="hero-3d-fallback" style={{
          position: 'absolute', 
          left: '50%', 
          top: '50%', 
          transform: 'translate(-50%, -50%)', 
          width: '300px',
          height: 'auto',
          zIndex: 1
        }} />
      )}
    </div>
  )
}

export default Hero3D 