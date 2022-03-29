import styles from './styles.module.css'
import daniela from '/assets/Daniela.jpeg'
import luis from '/assets/Luis.jpeg'
import jonathan from '/assets/Jonathan.jpeg'
import { Github } from '../Icons/Github.jsx'
import { Linkedin } from '../Icons/Linkedin.jsx'

const contacts = [
  {
    id: 1,
    name: "Daniela Calderon Perez",
    img: daniela,
    social: [
      {
        id: 1,
        name: "linkedin",
        link: "https://www.linkedin.com/in/daniela-calder%C3%B3n-p%C3%A9rez-87998221a"
      },
      {
        id: 2,
        name: "github",
        link: "https://github.com/DanielaCP19"
      }
    ]

  },
  {
    id: 2,
    name: "Jonathan Barragán Jiménez",
    img: jonathan,
    social: [
      {
        id: 1,
        name: "linkedin",
        link: "https://www.linkedin.com/in/jonathan-barrag%C3%A1n-68a76b200/"
      },
      {
        id: 2,
        name: "github",
        link: "https://github.com/jobaji09"
      }
    ]

  },
  {
    id: 3,
    name: "Luis Soto Martínez",
    img: luis,
    social: [
      {
        id: 1,
        name: "linkedin",
        link: "https://www.linkedin.com/in/luis-soto-mart%C3%ADnez-8604ab127/"
      },
      {
        id: 2,
        name: "github",
        link: "https://github.com/luisoto076"
      }
    ]

  }
];

const socialMedia = {
  'linkedin': <Linkedin />,
  'github': <Github />
}

function Contact({ name, social = [], img }) {

  const socialmedia = social.map(({ id, name, link }) => {
    return <li key={id}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer">
        {socialMedia[name]}
      </a>
    </li>
  });

  return (
    <div className={styles.contact}>
      <h4>{name} </h4>
      <img
        alt={name}
        className={styles.contactImage}
        src={img}
      />
      <ul className={styles.socialMediaList}>
        {socialmedia}
      </ul>
    </div>
  )
}


export default function ContactUs() {

  return (
    <div className={styles.contactUs}>
      {contacts.map(({ id, name, img, social }) => <Contact
        key={id}
        name={name}
        img={img}
        social={social}
      />
      )
      }

    </div>
  )
}