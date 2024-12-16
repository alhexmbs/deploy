import React from 'react'
import './App.css'

const MyComponent = () => {
  const rutaImagen = '../public/cyberpunk.jpg'

  return (
    <div>
      <img src={ rutaImagen } alt="imagenHero" id="imagenHero" />
      <h1>🦖 Bienvenido ✌️</h1>
      <p> <strong><i>Despliegue termiando </i>🚀</strong> </p>

    </div>

  )
}

export default MyComponent
