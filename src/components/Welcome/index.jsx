import styles from './styles.module.css'
import friends from '/assets/friends.jpg'
import { FormattedMessage } from 'react-intl'


export default function Welcome() {

  return (

    <div className={styles.welcomeContainer}>

      <section className={styles.welcome}>
        <div className={styles.welcomeTitle}>
          <span className={styles.title}>
            <FormattedMessage
              id='welcome.title'
            />
          </span>
          <span className={styles.welcomeDescription}>
            <FormattedMessage
              id='welcome.text'
            />
          </span>
        </div>


        <div className={styles.welcomeImage}>
          <img src={friends} alt="friends" />
        </div>
      </section>
    </div>
  )

}