import { toggleDark } from 'vue-dark-switch'
import type { MdMenuOptionsType } from '~/types/menuOptions'
export default () => {
	const { localeOptions } = useLanguage()
	const mdOptions: MdMenuOptionsType = [
		{
			label: 'github',
			key: 'github',
			icon: 'mdi:github',
			props: {
				onClick: () => {
					window.open('https://github.com/Xring777/general-vue-template')
				},
			},
		},
		{
			label: 'language',
			key: 'language',
			icon: 'heroicons:language',
			children: localeOptions,
			props: {
				onClick() {},
			},
		},
		{
			label: 'theme',
			key: 'theme',
			props: {
				onClick() {
					toggleDark()
				},
			},
		},
	]
	return { mdOptions }
}
