import { defineStore } from 'pinia'

export default defineStore('needAuth', {
	state() {
		return {
			needAuth: '',
		}
	},
	getters: {},
	actions: {
		set() {
			const { t } = useI18n()
			this.needAuth = t('need-auth')
		},
	},
})
