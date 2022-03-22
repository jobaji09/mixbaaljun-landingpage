import { useState } from 'react'
import friends from '/assets/friends.jpg'
import daniela from '/assets/Daniela.jpeg'
import luis from '/assets/Luis.jpeg'
import jonathan from '/assets/Jonathan.jpeg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <nav>
          <h1>MixbáalJun</h1>
        </nav>
      </header>

      <main>
        <div className='welcome'>
          <div className='welcome-title'>
            <span className='title'>
              Hola, Somos MixbáalJun
            </span>
            <span className='welcome-description'>
              Este proyecto surgió mientras éramos estudiantes de Ciencias de la Computación en la máxima casa de estudios UNAM,
              lo que empezó como un proyecto escolar se convirtió en una plataforma para proyectar nuestros trabajos personales y
              los proyectos que seguimos realizando bajo el sello de MixbáalJun, ¿Te animas conocernos más?.
            </span>
          </div>


          <div className='welcome-image'>
            <img src={friends} alt="friends" />
          </div>
        </div>

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
    


      </main >

    <footer>
      <span>No hay derechos que reservar gracias</span>
    </footer>
    </div >
  )
}

export default App
