export default () => {
	const mdOptions = [
		{
			label: 'github',
			key: 'github',
			icon: 'mdi:github',
			props: {
				onClick: () => {
					window.open(
						'https://github.com/Xring777/general-vue3-ts-navieUI-template'
					)
				},
			},
		},
		{
			label: 'language',
			key: 'language',
			icon: 'heroicons:language',
		},
		{
			label: 'theme',
			key: 'theme',
		},
	]
	return { mdOptions }
}
