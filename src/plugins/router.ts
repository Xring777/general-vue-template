import { setupLayouts, createGetRoutes } from 'virtual:meta-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { routes as fileRoutes } from 'vue-router/auto/routes'

export const router = createRouter({
	history: createWebHistory(),
	routes: setupLayouts(fileRoutes),
})

router.beforeEach(async (to, from, next) => {
	const { isLogin } = await useUserInfo()
	const modal = loginModal()
	if (to.meta.authRequire && !isLogin) {
		toast.info(localStorage.getItem('need-auth') as string)
		modal.show()
		next({
			path: from.fullPath,
			query: {
				redirect: to.fullPath,
			},
		})
	} else {
		next()
	}
})

export const getRoutes = createGetRoutes(router)

export default router
