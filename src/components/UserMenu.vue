<template>
	<Menu :options="options" position-y="bottom" position-x="middle">
		<template #button>
			<Avatar :src="userInfo.avatar" />
		</template>
	</Menu>
</template>

<script setup lang="ts">
import type { UserMenuOptionsType } from '~/types/menuOptions'
import type { UserInfo } from '~/types/user'
defineProps<{
	options: UserMenuOptionsType
	userInfo: UserInfo
}>()

// const { signIned, signIning } = useUserMenu()

// let isLogin = ref(false)
// let options: UserMenuOptionsType = []

// let userInfo = reactive<UserInfo>({
// 	username: '',
// 	email: '',
// 	avatar: '',
// 	description: '',
// 	gender: '',
// 	age: '',
// })

// onMounted(async () => {
// 	const data = await useUserInfo()
// 	isLogin.value = data.isLogin
// 	if (isLogin.value) {
// 		userInfo = data.userInfo
// 	}
// 	options = isLogin.value ? signIned : signIning
// })
</script>
