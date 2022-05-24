import Section from '@/components/Section/index.jsx'
import ContactUs from '@/components/ContactUs/index.jsx'
import { Beginnings } from '@/components/Icons/Beginnings'
import { FormattedMessage } from 'react-intl'
import friends from '/assets/friends.jpg'

export default function Home() {
  return (
    <>
      <Section
        title={
          <FormattedMessage
            id='welcome.title'
          />
        }
        description={
          <FormattedMessage
            id='welcome.text'
          />
        }
        image={<img src={friends} alt="friends" />}
      />
      <ContactUs />
      <Section
        title={
          <FormattedMessage
            id='history.title'
          />
        }
        description={
          
          <FormattedMessage
            id='history.text'
          />
        }

        image={<Beginnings />}
        reverse
      />
    </>
  )
}