import styles from './styles.module.css'
import friends from '/assets/friends.jpg'


export default function Welcome() {

  return (

    <div className={styles.welcome}>
      <div className={styles.welcomeTitle}>
        <span className={styles.title}>
          Hola, Somos MixbáalJun
        </span>
        <span className={styles.welcomeDescription}>
          Este proyecto surgió mientras éramos estudiantes de Ciencias de la Computación en la máxima casa de estudios UNAM,
          lo que empezó como un proyecto escolar se convirtió en una plataforma para proyectar nuestros trabajos personales y
          los proyectos que seguimos realizando bajo el sello de MixbáalJun, ¿Te animas a conocernos más?
        </span>
      </div>


      <div className={styles.welcomeImage}>
        <img src={friends} alt="friends" />
      </div>
    </div>
  )

}