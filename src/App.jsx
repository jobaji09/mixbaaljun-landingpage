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
              Somo un grupo de amigos que estudiaron en la Maxima casa de estudios que alguna vez hicimos equipo para desarrollar un sistema de software,
              como fue tan espectacular el resultado del trabajo en equipo decidimos no dejarlo morir apesar de que cada uno tomo su propio camino
            </span>

          </div>
          <div className='card-info'>
            <img src={friends} alt="friends" className='card-image' />
          </div>
        </section>


        <section className='card'>

          <div className='card-content'>
            <h2 className='frase'>
              Computologos de corazón
            </h2>
            <span>
              Estudiamos Ciencias de la Computación en la Facultad de ciencias, esto nos da una gran oportudidad para
              poder desarrollarnos en lo que queramos
            </span>

          </div>
          <div className='card-info'>
            <img src={facultaCiencias} alt="Escudo facultad de ciencias" className='card-image' />
          </div>
        </section>

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
