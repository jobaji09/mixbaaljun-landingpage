import React, { useState } from "react";
import { IntlProvider} from 'react-intl'
import spanish from '@/lang/es-MX.json'
import english from '@/lang/en-US.json'

const langContext = React.createContext();

const suportedLanguages = {
  "es-MX": spanish,
  "en-US": english
}

const showTheOtherLang = {
  'es-MX':'en-US',
  'en-US':'es-MX',
}

const LangProvider = ({ children }) => {

  const currentLang = localStorage.getItem('lang') || 'es-MX' 

  const [messages, setMessages] = useState(suportedLanguages[currentLang]||spanish)
  const [locale, setLocale] = useState(currentLang in suportedLanguages? currentLang : 'es-MX')

  const changeLang = (lang) => {
    if (lang in suportedLanguages) {
      localStorage.setItem('lang', lang)
      setMessages(suportedLanguages[lang])
      setLocale(lang)
    }
  }
  return (
    <langContext.Provider value={{ changeLang,langtoChange : showTheOtherLang[currentLang] }}>
      <IntlProvider 
        locale={locale}  
        messages={messages}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  )
}

export { LangProvider, langContext }