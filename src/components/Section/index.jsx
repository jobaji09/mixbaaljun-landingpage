import styles from './styles.module.css'
import { MixbaalJunLogo } from '@/components/Icons/MixbaalJunLogo'

function DescriptionSection({ title = "This is a title", description = "This is a description" }) {

  return (
    <div className={styles.welcomeTitle}>
      <span className={styles.title}>
        {title}
      </span>
      <span className={styles.welcomeDescription}>
        {description}
      </span>
    </div>
  )
}

const getComponent = ({ reverse = false, title = "this is a title", description = "This is a description", image }) => (
  !reverse
    ?
    <DescriptionSection
      title={title}
      description={description}
    />
    :
    <div className={styles.welcomeImage}>
      {image || <MixbaalJunLogo />}
      {/*<img src={friends} alt="friends" />  */}
    </div>
)

export default function Section({ title = "this is a title", description = "This is a description", image, reverse = false }) {

  // const r = reverse?{flexDirection:"column-reverse"}:{}
  return (

    <div className={styles.welcomeContainer}>

      <section className={styles.welcome}>
         
        {
          getComponent({
            reverse,
            title,
            description,
            image
          })
        }
        {
          getComponent({
            reverse:!reverse,
            title,
            description,
            image
          })
        }
      </section>
    </div>
  )

}