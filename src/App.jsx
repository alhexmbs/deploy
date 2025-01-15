import React from 'react'
import './App.css'

const MyComponent = () => {
  const rutaImagen = 'https://geekzilla.tech/home/wp-content/uploads/2024/10/image-281.png'

  return (
    <div>
      <img src={ rutaImagen } alt="imagenHero" id="imagenHero" />
      <h1>🦖 Hola que hace ✌️</h1>
      <p> <strong><i>Despliegue termiando </i>🚀</strong> </p>

    </div>

  )
}

export default MyComponent
