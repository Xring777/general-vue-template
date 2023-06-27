import { UserInfo } from './../types/user.d'
import { defineStore } from 'pinia'

export default defineStore('userInfoStore', {
	state() {
		return {
			isLogin: false,
			userInfo: {
				username: '',
				email: '',
				avatar: '',
				description: '',
				gender: '',
				age: '',
			},
		}
	},
	actions: {},
	getters: {
		async getUserInfo(): Promise<{ isLogin: boolean; userInfo: UserInfo }> {
			const { isLogin, userInfo } = await useUserInfo()
			this.isLogin = isLogin
			this.userInfo = { ...userInfo }
			return { isLogin: this.isLogin, userInfo: this.userInfo }
		},
	},
})
