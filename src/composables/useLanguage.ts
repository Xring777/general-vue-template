export default () => {
	const { t, availableLocales, locale } = useI18n()

	const localeOptions = availableLocales.map((availableLocale) => ({
		label: availableLocale,
		key: availableLocale,
		props: {
			onClick: () => {
				locale.value = availableLocale
				localStorage.setItem('need-auth', t('need-auth'))
			},
		},
	}))

	return { t, localeOptions }
}
