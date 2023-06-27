import type { UserMenuOptionsType } from '~/types/menuOptions'
import { router } from './../plugins/router'
export default () => {
	const signIned: UserMenuOptionsType = [
		{
			label: 'user',
			key: 'user',
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
	const signIning: UserMenuOptionsType = [
		{
			label: 'sign-in-sign-up',
			key: 'sign in sign-up',
			icon: 'mdi:login',
			props: {
				onClick: () => {
					// userDrawer().close()
					loginModal().show()
				},
			},
		},
	]
	return { signIned, signIning }
}
