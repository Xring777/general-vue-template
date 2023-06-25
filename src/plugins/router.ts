import { setupLayouts, createGetRoutes } from 'virtual:meta-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { routes as fileRoutes } from 'vue-router/auto/routes'

export const router = createRouter({
	history: createWebHistory(),
	routes: setupLayouts(fileRoutes),
})

router.beforeEach((to, from, next) => {
	if (to.meta.authRequire && !localStorage.getItem('token')) {
		next({
			path: '/auth',
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
