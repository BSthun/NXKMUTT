import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import homeEn from './home-en.json'
import homeTh from './home-th.json'
import contentEn from './content-en.json'
import contentTh from './content-th.json'
import eventEn from './event-en.json'
import eventTh from './event-th.json'

i18n.use(initReactI18next)
	.init({
		resources: {
			en: {
				home: homeEn,
				content: contentEn,
				event: eventEn,
			},
			th: {
				home: homeTh,
				content: contentTh,
				event: eventTh,
			},
		},
		ns: ['home'],
		// whitelist: ["en", "th"],
		lng: 'en',
		fallbackLng: 'en',
		detection: {
			order: ['localStorage'],
			lookupLocalStorage: 'lng',
			checkWhitelist: true,
		},
		interpolation: {
			escapeValue: false,
		},
	})
	.then((r) => {
		// Do nothing
	})
