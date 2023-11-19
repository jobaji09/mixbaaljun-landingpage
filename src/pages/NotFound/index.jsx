import styles from './styles.module.css'
import { FormattedMessage } from 'react-intl'
import { WorkInProgress } from '@/components/Icons/WorkInProgress'

export default function Home() {
  return (
    <>
      <section className={styles.notFoundSection}>
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
        <WorkInProgress size='20rem' />
      </section>
    </>
  )
}