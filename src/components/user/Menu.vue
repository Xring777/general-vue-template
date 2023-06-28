<template>
	<MenuGroup>
		<template #default>
			<Avatar :src="userInfo.avatar" />
		</template>
		<template #content>
			<MenuItem
				v-for="option in options"
				:key="option.key"
				:label="option.label"
				:icon="option.icon"
				@on-click="option.props.onClick"
			/>
		</template>
	</MenuGroup>
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
