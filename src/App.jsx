import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>MixbaalJun</h1>
      </header>

      <main>

        <section className='card'>
          <h2 className='frase title'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ducimus?
          </h2>
          <div>
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
        </section>


        <section className='card'>
          <div>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit sit cupiditate natus eius alias ea et minus quo consectetur fuga sed omnis, neque debitis autem magni? Quam a sunt consequatur.
            </span>
          </div>
        </section>

        <section className='card'>
          <div>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit sit cupiditate natus eius alias ea et minus quo consectetur fuga sed omnis, neque debitis autem magni? Quam a sunt consequatur.
            </span>
          </div>
        </section>

        <section className='card'>
          <div>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit sit cupiditate natus eius alias ea et minus quo consectetur fuga sed omnis, neque debitis autem magni? Quam a sunt consequatur.
            </span>
          </div>
        </section>

      </main>

      <footer>
        <span>Hola</span>
      </footer>
    </div>
  )
}

export default App
