import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
	resources: {
		en: {
			home: require('./home-en.json'),
			content: require('./content-en.json'),
			event: require('./event-en.json'),
		},
		th: {
			home: require('./home-th.json'),
			content: require('./content-th.json'),
			event: require('./event-th.json'),
		},
	},
	ns: ['home'],
	whitelist: ['en', 'th'],
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
}).then((r) => {
	// Do nothing
});
