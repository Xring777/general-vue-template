import { router } from './../plugins/router'
function renderIcon(icon: string) {
	return () => h('div', { class: `i-${icon} w-5 h-5` })
}
export default () => {
	const { t } = useI18n()
	const signIned = [
		{
			label: t('user'),
			key: 'sign in',
			icon: renderIcon('mdi:account-outline'),
			props: {
				onClick: () => router.push('/user'),
			},
		},
		{
			label: t('sign-out'),
			key: 'sign out',
			icon: renderIcon('gg:log-out'),
			props: {
				onClick: () => {
					localStorage.setItem('token', '')
					router.push(router.currentRoute.value.path)
					location.reload()
				},
			},
		},
	]
	const signIning = [
		{
			label: t('sign-in') + t('sign-up'),
			key: 'sign in',
			icon: renderIcon('gg:log-in'),
			props: {
				onClick: () =>
					router.push({ path: '/auth', query: { needRedirct: '1' } }),
			},
		},
	]
	return { signIned, signIning }
}
