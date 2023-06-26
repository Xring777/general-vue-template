import { router } from './../plugins/router'
export default () => {
	const signIned = [
		{
			label: 'user',
			key: 'sign in',
			icon: 'mdi:account-outline',
			props: {
				onClick: () => router.push('/user'),
			},
		},
		{
			label: 'sign-out',
			key: 'sign out',
			icon: 'mdi:logout',
			props: {
				onClick: () => {
					localStorage.setItem('token', '')
					router.push(router.currentRoute.value.path)
					location.reload()
				},
			},
		},
	]
	const signIning = [{}]
	return { signIned, signIning }
}
