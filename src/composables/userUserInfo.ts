export default async () => {
	let isLogin = false
	const token = useStorage('token', '').value
	if (!token) {
		return { isLogin }
	}
	try {
		const userInfo = await http.get('/mock/user', {
			params: { token },
		})
		isLogin = true
		return { isLogin, userInfo: userInfo.data }
	} catch (error) {
		console.error(error)
		return { isLogin }
	}
}
