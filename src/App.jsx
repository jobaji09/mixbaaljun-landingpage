import { useState } from 'react'
import friends from '/assets/friends.jpg'
import daniela from '/assets/Daniela.jpeg'
import luis from '/assets/Luis.jpeg'
import jonathan from '/assets/jonathan.png'
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
            <div className='contact-us'>
              <div className='contact'>
                <h3>Daniela Calderón Pérez </h3>
                <img
                  alt="Daniela Calderon Perez"
                  className='contact-image'
                  src={daniela}
                />
                <ul className='social-media-list'>
                  <li><a href="https://www.linkedin.com/in/daniela-calder%C3%B3n-p%C3%A9rez-87998221a/">linkedin</a></li>
                  <li><a href="https://github.com/DanielaCP19">github</a></li>
                </ul>
              </div>
              <div className='contact'>
                <h3>Jonathan Barragán Jiménez</h3>
                <img
                  alt="Jonathan Barragán Jiménez"
                  className='contact-image'
                  src={jonathan}
                />
                <ul className='social-media-list'>
                  <li><a href="https://www.linkedin.com/in/jonathan-barrag%C3%A1n-68a76b200/">linkedin</a></li>
                  <li><a href="https://github.com/jobaji09">github</a></li>
                </ul>
              </div>
              <div className='contact'>
                <h3>Luis Soto Martínez</h3>
                <img
                  alt="Luis Soto Martínez"
                  className='contact-image'
                  src={luis}
                />
                <ul className='social-media-list'>
                  <li><a href="https://www.linkedin.com/in/luis-soto-mart%C3%ADnez-8604ab127/">linkedin</a></li>
                  <li><a href="https://github.com/luisoto076">github</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='card-info'>
         
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
