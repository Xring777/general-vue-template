import { getRoutes } from '~/plugins/router'
export default () => {
	const dontRenderRoutes = ['notFound', 'auth', 'user']
	const routes = getRoutes()
		.filter((r) => !dontRenderRoutes.includes(r.meta.name as string))
		.map((r) => {
			let { path, meta } = r
			let { icon, activeIcon, name } = meta
			if (path === '/') {
				return {
					path,
					name: 'home',
					icon: 'i-mdi:home-outline',
					activeIcon: 'i-mdi:home',
				}
			}
			return { path, name, icon, activeIcon }
		})
	const dontRenderRoutesTabbar = ['notFound', 'auth']
	const routesTabbar = getRoutes()
		.filter((r) => !dontRenderRoutesTabbar.includes(r.meta.name as string))
		.map((r) => {
			let { path, meta } = r
			let { icon, activeIcon, name } = meta
			if (path === '/') {
				return {
					path,
					name: 'home',
					icon: 'i-mdi:home-outline',
					activeIcon: 'i-mdi:home',
				}
			}
			return { path, name, icon, activeIcon }
		})
	// console.log(routes)
	return { routes, routesTabbar }
}
