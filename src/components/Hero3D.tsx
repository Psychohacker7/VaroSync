import { useEffect, useRef, useState, useCallback } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

const MAX_RETRIES = 3
const TARGET_FPS = 60
const FRAME_TIME = 1000 / TARGET_FPS

const Hero3D = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const modelRef = useRef<THREE.Object3D | null>(null)
  const particlesRef = useRef<THREE.Points | null>(null)
  const animationIdRef = useRef<number | null>(null)
  const lastFrameTimeRef = useRef<number>(0)
  const [showFallback, setShowFallback] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Throttled animation function to prevent excessive frame requests
  const animate = useCallback((currentTime: number) => {
    if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return

    // Frame rate limiting
    if (currentTime - lastFrameTimeRef.current < FRAME_TIME) {
      animationIdRef.current = requestAnimationFrame(animate)
      return
    }
    lastFrameTimeRef.current = currentTime

    try {
      const time = currentTime * 0.001
      
      // Update particles with error handling
      if (particlesRef.current) {
        particlesRef.current.rotation.x = time * 0.1
        particlesRef.current.rotation.y = time * 0.05
      }

      // Update model with error handling
      if (modelRef.current) {
        // Smooth rotation with bounds checking
        const rotationY = (modelRef.current.rotation.y + 0.01) % (Math.PI * 2)
        modelRef.current.rotation.y = rotationY
        
        // Subtle bounce animation
        modelRef.current.position.y = Math.sin(time * 1.2) * 0.05
        
        // Ensure scale stays consistent
        if (modelRef.current.scale.x !== 1) {
          modelRef.current.scale.set(1, 1, 1)
        }
      }

      // Render with error handling
      rendererRef.current.render(sceneRef.current, cameraRef.current)
      
      // Continue animation loop
      animationIdRef.current = requestAnimationFrame(animate)
    } catch (error) {
      console.error('Animation error:', error)
      // Fallback to static rendering if animation fails
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current)
      }
      // Continue animation loop
      animationIdRef.current = requestAnimationFrame(animate)
    }
  }, [])

  useEffect(() => {
    let retries = 0
    let didSucceed = false
    let isDestroyed = false
    
    if (!containerRef.current) return
    const container = containerRef.current
    
    // Check WebGL support
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) {
      console.warn('WebGL not available, showing fallback')
      setShowFallback(true)
      return
    }

    try {
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
      
      // Optimize renderer settings
      const renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance",
        stencil: false,
        depth: true
      })
      renderer.setSize(width, height)
      renderer.setClearColor(0x000000, 0)
      renderer.shadowMap.enabled = false // Disable shadows for performance
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) // Limit pixel ratio
      rendererRef.current = renderer
      
      container.appendChild(renderer.domElement)
      
      // Make the canvas fill its parent and not overflow
      renderer.domElement.style.width = '100%'
      renderer.domElement.style.height = '100%'
      renderer.domElement.style.position = 'relative'
      renderer.domElement.style.left = '0'
      renderer.domElement.style.top = '0'
      
      // Simplified lighting setup for performance
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
      scene.add(ambientLight)
      
      const directionalLight = new THREE.DirectionalLight(0xfff8e7, 1.5)
      directionalLight.position.set(5, 10, 7)
      scene.add(directionalLight)
      
      // Load 3D model with retry logic
      let animationStarted = false

      function loadModel() {
        if (isDestroyed) return
        
        const loader = new GLTFLoader()
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')
        loader.setDRACOLoader(dracoLoader)
        
        loader.load(
          '/assets/3d/proteindna.glb',
          (gltf: any) => {
            if (didSucceed || isDestroyed) return
            didSucceed = true
            setIsLoading(false)
            
            const model = gltf.scene
            model.scale.set(8, 8, 8)
            model.position.set(0, 0, 0)
            
            // Optimize model for performance
            model.traverse((child: any) => {
              if (child.isMesh) {
                child.castShadow = false
                child.receiveShadow = false
                if (child.material && child.material.isMeshStandardMaterial) {
                  child.material.roughness = 0.7
                  child.material.metalness = 0.1
                  child.material.needsUpdate = true
                }
                // Optimize geometry
                if (child.geometry) {
                  child.geometry.computeBoundingSphere()
                  child.geometry.computeBoundingBox()
                }
              }
            })
            
            modelRef.current = model
            scene.add(model)
            
            // Start animation loop only after model is loaded
            if (!animationStarted && !isDestroyed) {
              animationStarted = true
              lastFrameTimeRef.current = performance.now()
              animate(performance.now())
            }
          },
          () => {
            // Optional: Add loading progress indicator
          },
          (error) => {
            console.error('Model loading error:', error)
            if (retries < MAX_RETRIES && !isDestroyed) {
              retries++
              setTimeout(loadModel, 1000)
            } else {
              setShowFallback(true)
              setIsLoading(false)
            }
          }
        )
      }
      
      loadModel()

      // Simplified particles for performance
      const particleCount = 50 // Reduced from 100
      const particleGeometry = new THREE.BufferGeometry()
      const positions = new Float32Array(particleCount * 3)
      const colors = new Float32Array(particleCount * 3)
      
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 8
        positions[i * 3 + 1] = (Math.random() - 0.5) * 8
        positions[i * 3 + 2] = (Math.random() - 0.5) * 8
        colors[i * 3] = 0.6 + Math.random() * 0.4
        colors[i * 3 + 1] = 0.2 + Math.random() * 0.3
        colors[i * 3 + 2] = 0.8 + Math.random() * 0.2
      }
      
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
      
      const particleMaterial = new THREE.PointsMaterial({
        size: 0.04,
        vertexColors: true,
        transparent: true,
        opacity: 0.5
      })
      
      const particles = new THREE.Points(particleGeometry, particleMaterial)
      particlesRef.current = particles
      scene.add(particles)

      // Optimized resize handler
      const handleResize = () => {
        if (isDestroyed || !camera || !renderer || !container) return
        
        const newWidth = container.clientWidth
        const newHeight = container.clientHeight
        
        camera.aspect = newWidth / newHeight
        camera.updateProjectionMatrix()
        renderer.setSize(newWidth, newHeight)
      }
      
      window.addEventListener('resize', handleResize)

      // Cleanup function
      return () => {
        isDestroyed = true
        
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current)
          animationIdRef.current = null
        }
        
        window.removeEventListener('resize', handleResize)
        
        if (renderer && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement)
          renderer.dispose()
        }
        
        if (scene) {
          scene.clear()
        }
        
        // Clear refs
        sceneRef.current = null
        cameraRef.current = null
        rendererRef.current = null
        modelRef.current = null
        particlesRef.current = null
      }
    } catch (error) {
      console.error('3D setup error:', error)
      setShowFallback(true)
      setIsLoading(false)
    }
  }, [animate])

  return (
    <div ref={containerRef} className="hero-3d" style={{ width: '100%', height: '100%', position: 'relative' }}>
      {isLoading && (
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#666',
          fontSize: '14px',
          zIndex: 1
        }}>
          Loading 3D Model...
        </div>
      )}
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