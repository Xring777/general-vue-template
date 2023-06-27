import { defineStore } from 'pinia'

export default defineStore('userDrawer', {
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
