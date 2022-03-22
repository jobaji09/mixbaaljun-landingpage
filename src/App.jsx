import { useState } from 'react'

import './App.css'
import ContactUs from './components/ContactUs/index.jsx'
import Welcome from './components/Welcome/index.jsx'

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


        <Welcome />
        <ContactUs />


      </main >

      <footer>
        <span>No hay derechos que reservar gracias</span>
      </footer>
    </div >
  )
}

export default App
