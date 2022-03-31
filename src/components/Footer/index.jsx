import { FormattedMessage} from 'react-intl'
import styles from './styles.module.css'


export default function Footer() {

  return (
    <footer className={styles.footer}>
      <span>
        <FormattedMessage
          id='footer'
        />
      </span>
    </footer>
  )
}