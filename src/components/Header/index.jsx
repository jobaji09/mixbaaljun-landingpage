import { useContext } from 'react'
import { langContext } from '@/context/langContext.jsx'
import styles from './styles.module.css'

export default function Header() {

  const { changeLang,langtoChange } = useContext(langContext)

  return (
    <header>
      <nav>
        <h1>MixbáalJun</h1>
        <div className='languajes'>
          <button onClick={() => { changeLang(langtoChange); }}>{langtoChange.slice(0,2)}</button>
        </div>
      </nav>
    </header>
  )
}