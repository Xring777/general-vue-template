import type { UserInfo } from '~/types/user'

export default async (): Promise<{ isLogin: boolean; userInfo: UserInfo }> => {
	let isLogin = false
	let userInfo: UserInfo = {
		username: '',
		email: '',
		avatar: '',
		description: '',
		gender: '',
		age: '',
	}
	const token = useStorage('token', '').value
	if (!token) {
		return { isLogin, userInfo }
	}
	try {
		const userInfo = await http.get('/mock/user', {
			params: { token },
		})
		isLogin = true
		return { isLogin, userInfo: { ...userInfo.data } }
	} catch (error) {
		console.error(error)
		return { isLogin, userInfo }
	}
}
