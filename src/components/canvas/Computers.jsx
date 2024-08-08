import { Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei' ;

import CanvasLoader from '../Loader';

const Computers = ( isMobile) => {

  const computer = useGLTF('./macbook/scene.gltf');

  return (
    <mesh>
    <hemisphereLight intensity={4}
    groundColor="green" />
    <pointLight intensity={5} />
     <spotLight 
     position={[-20,50,10]}
     angle={0.12}
     penumbra={1}
     intensity={2}
     castShadow
     shadow-mapSize={1024}
     />
    <primitive object={computer.scene} 
     scale={isMobile ? 9 : 0.4}
     position={isMobile ? [-0.5, -2.8, -1] :[0,-3.25, -1.5]}
     rotation = {[-0.01, -9, 0.05 ]}
     />
   </mesh> 
  
  )
}

const ComputersCanvas = () => {
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    /* se agrega un Listener para escuchar los cambios del cambio de tamaño de pantalla */
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    /* setea el valor incial de la variable de estado IsMobile */
    setisMobile(mediaQuery.matches);

    /* define el callback de la funcion para manejar los cambios del media query */

    const handleMediaQueryChange = (event) => {
      setisMobile(event.matches);
    }
   /* agrega el callback de la funcion como escucha para los cambios del media query */
    mediaQuery.addEventListener('change',
    handleMediaQueryChange);

    /* remueve la escucha cuando el componente es desmontado */
    return () => {
      mediaQuery.removeEventListener('change',
      handleMediaQueryChange);
    }

  }, [])

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera = {{ position:[20, 3, 5], fov: 25 }}
      gl = {{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={ < CanvasLoader /> } >
       <OrbitControls
        autoRotate
         enableZoom={false} 
         maxPolarAngle={Math.PI /2}
         MinPolarAngle={Math.PI/ 2}
         />
         <Computers isMobile={isMobile}/>
         
      </Suspense>

      <Preload all />
    
    </Canvas>
  )

}

export default ComputersCanvas