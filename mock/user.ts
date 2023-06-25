import { MockMethod } from 'vite-plugin-mock'
export default [
	{
		url: '/api/mock/user',
		method: 'get',
		response: () => {
			return {
				code: 200,
				data: {
					username: 'Exering',
					email: '2@2.com',
					avatar:
						'https://liuzihan-pics.obs.cn-south-1.myhuaweicloud.com/halo-app/avatar_1663604839275.jpeg',
					description: '我是Exering',
					gender: '0',
					age: '50',
				},
			}
		},
	},
] as MockMethod[]
