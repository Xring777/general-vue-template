import { defineStore } from 'pinia'

export default defineStore('loginModal', {
	state() {
		return {
			isShow: false,
		}
	},
	actions: {
		show() {
			this.isShow = true
		},
		close() {
			this.isShow = false
		},
	},
})
