import './App.css'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'
import Home from './pages/Home/index.jsx'
import Jonathan from './pages/Jonathan/index.jsx'
import NotFound from './pages/NotFound/index.jsx'
import { LangProvider } from './context/langContext.jsx'
import { Switch, Route } from "wouter"
import ScrollToTop from './hooks/ScrollToTop'

function App() {
  return (
    <LangProvider>
      <div className="App">
        <Header />
        <main>
          <ScrollToTop/>
          <Switch>
            <Route
              path='/'
              component={Home} />
            {/* <Route
              path='/jonathan'
              component={Jonathan} /> */}
            <Route component={NotFound}/>
          </Switch>

        </main >
        <Footer />
      </div >
    </LangProvider>
  )
}

export default App
