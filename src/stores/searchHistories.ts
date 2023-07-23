import { defineStore } from 'pinia'

export default defineStore('SearchHistories', {
	state(): { histories: string[] } {
		return {
			histories: [],
		}
	},
	getters: {
		halfHistories: (state) => state.histories.slice(0, 10),
		allHistories: (state) => state.histories,
	},
	actions: {
		add(item: string) {
			this.histories = this.histories.filter((i) => i !== item)
			if (this.histories.length >= 20) {
				this.histories.pop()
			}
			this.histories = [item, ...this.histories]
		},
		remove(index?: number) {
			index !== undefined
				? this.histories.splice(index, 1)
				: (this.histories = [])
		},
	},
	persist: true,
})
