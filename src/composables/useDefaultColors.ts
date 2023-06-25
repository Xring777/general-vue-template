import { GlobalThemeOverrides, useOsTheme } from 'naive-ui'
import { toggleDark } from 'vue-dark-switch'

export default () => {
	// const primaryColor = useCssVar('--my-primary-color').value
	// const primaryColorHover = useCssVar('--my-primary-color-hover').value
	// const primaryColorPressed = useCssVar('--my-primary-color-pressed').value
	// const primaryColorSuppl = useCssVar('--my-primary-color-suppl').value

	// 设置默认主题
	let light: GlobalThemeOverrides = {
		common: {
			primaryColor: '#30A2FFFF',
			primaryColorHover: '#6AB7F7FF',
			primaryColorPressed: '#2584D2FF',
			primaryColorSuppl: '#6AB7F7FF',
		},
	}
	let dark: GlobalThemeOverrides = {
		common: {
			primaryColor: '#9AC5F4FF',
			primaryColorHover: '#B2D7FFFF',
			primaryColorSuppl: '#B2D7FFFF',
			primaryColorPressed: '#82BCFBFF',
			popoverColor: '#252525FF',
		},
	}

	// 跟随操作系统
	const osThemeRef = useOsTheme()
	const setDefaultTheme = () => {
		if (localStorage.getItem('vueuse-color-scheme') === 'auto') {
			localStorage.setItem(
				'vueuse-color-scheme',
				osThemeRef.value ? osThemeRef.value : 'light'
			)
		}
		localStorage.getItem('vueuse-color-scheme') === 'dark'
			? toggleDark(true)
			: toggleDark(false)
	}
	return { light, dark, setDefaultTheme }
}
