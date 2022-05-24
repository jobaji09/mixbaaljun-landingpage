import styles from './styles.module.css'
import { FormattedMessage } from 'react-intl'

export default function Home() {
  return (
    <div id="container">
      <section id="message">
        <h1>
          <FormattedMessage
            id='notfound.title'
          />
        </h1>
        <h2>
          <FormattedMessage
            id='notfound.text'
          />
        </h2>
      </section>
    </div>
  )
}