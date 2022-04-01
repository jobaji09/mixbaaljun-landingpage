import { useContext } from 'react'
import { langContext } from '@/context/langContext.jsx'
import styles from './styles.module.css'
import { MixbaalJunLogo } from '../Icons/MixbaalJunLogo'
import { Link } from "wouter";


export default function Header() {

  const { changeLang, langtoChange } = useContext(langContext)

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Link href='/'>
          <div className={styles.logo}>
            <MixbaalJunLogo />
            <h1>MixbáalJun</h1>
          </div>
        </Link>
        <div className='languajes'>
          <button className={styles.button} onClick={() => { changeLang(langtoChange); }}>{langtoChange.slice(0, 2)}</button>
        </div>
      </nav>
    </header>
  )
}