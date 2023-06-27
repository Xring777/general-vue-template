import type { MdMenuOptionsType } from '~/types/menuOptions'
export default () => {
	const mdOptions: MdMenuOptionsType = [
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
			props: {
				onClick() {},
			},
		},
		{
			label: 'theme',
			key: 'theme',
			icon: '',
			props: {
				onClick() {},
			},
		},
	]
	return { mdOptions }
}
