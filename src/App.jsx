import './App.css'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'
import Home from './pages/Home/index.jsx'
import { LangProvider } from './context/langContext.jsx'
function App() {


  return (
    <LangProvider>
      <div className="App">
        <Header />

        <main>
          <Home />
        </main >
        <Footer />
      </div >
    </LangProvider>
  )
}

export default App
