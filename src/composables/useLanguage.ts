import { SwitchIcon } from 'vue-dark-switch'
import { toggleDark } from 'vue-dark-switch'

function renderIcon(icon: string) {
	return () => h('div', { class: `i-${icon} w-5 h-5` })
}

export default () => {
	const { t, availableLocales, locale } = useI18n()

	const localeOptions = availableLocales.map((availableLocale) => ({
		label: t(availableLocale),
		key: availableLocale,
		props: {
			onClick: () => {
				locale.value = availableLocale
				localStorage.setItem('need-auth', t('need-auth'))
				mdOptions.forEach((mdOption) => {
					if (mdOption.key !== 'Github') mdOption.label = t(mdOption.key)
				})
			},
		},
	}))
	const mdOptions = [
		{
			label: 'Github',
			key: 'Github',
			icon: renderIcon('mdi:github'),
			props: {
				onclick: () => {
					window.open('https://github.com/dishait/tov-template')
				},
			},
		},
		{
			label: t('language'),
			key: 'language',
			icon: renderIcon('heroicons:language'),
			children: localeOptions,
		},
		{
			label: t('theme'),
			key: 'theme',
			icon: () => h(SwitchIcon, { ['onClick']: () => toggleDark() }),
			props: {
				onClick: () => toggleDark(),
			},
		},
	]
	return { t, localeOptions, mdOptions }
}
