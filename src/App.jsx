import { useState } from 'react'
import friends from '/assets/friends.jpg'
import facultaCiencias from '/assets/Escudo-facultad-ciencias-unam-escalable.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <nav>
          <h1>MixbaalJun</h1>
        </nav>
      </header>

      <main>

        <section className='card'>
          <div className='card-content'>
            <h2 className='frase title'>
              Hola, Somos MixbaalJun
            </h2>
            <span>
              Este proyecto surgió mientras éramos estudiantes de Ciencias de la Computación en la máxima casa de estudios UNAM,
              lo que empezó como un proyecto escolar se convirtió en una plataforma para proyectar nuestros trabajos personales y
              los proyectos que seguimos realizando bajo el sello de MixbaalJun, acompáñanos a conocer más de cada uno de nosotros.
            </span>

          </div>
          <div className='card-info'>
            <img src={friends} alt="friends" className='card-image' />
          </div>
        </section>


        {/* <section className='card'>

          <div className='card-content'>
            <h2 className='frase'>
              Computologos de corazón
            </h2>
            <span>o de nuestros integrantes
            </span>

          </div>
          <div className='card-info'>
            <img src={facultaCiencias} alt="Escudo facultad de ciencias" className='card-image' />
          </div>
        </section> */}

        <section className='card'>
          <div className='card-content'>
            <h2 className='frase'>
              Conocenos a fondo
            </h2>
            <span>
              Si te interesa saber mas de cada uno te invito a checar el portafolio de cada uno.
            </span>
          </div>
        </section>


      </main>

      <footer>
        <span>No hay derechos que reservar gracias</span>
      </footer>
    </div>
  )
}

export default App
