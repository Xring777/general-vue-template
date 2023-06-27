<template>
	<MenuGroup>
		<template #default>
			<Avatar :src="userInfo.avatar" />
		</template>
		<template #content>
			<MenuGroupItem
				v-for="option in options"
				:key="option.key"
				:label="option.label"
				:icon="option.icon"
			/>
			<MenuGroupItem
				v-if="!isLogin"
				:label="signOption.label"
				:icon="signOption.icon"
				@click="login.show()"
			/>
		</template>
	</MenuGroup>
	<ModalLogin />
</template>

<script setup lang="ts">
import type { UserInfo } from '~/types/user'

const { signIned, signIning } = useUserMenu()
const login = loginModal()

let isLogin = ref(false)

let userInfo = reactive<UserInfo>({
	username: '',
	email: '',
	avatar: '',
	description: '',
	gender: '',
	age: '',
})
const signOption = {
	label: 'sign-in-sign-up',
	key: 'sign in sign-up',
	icon: 'mdi:login',
}
let options: any[] = []
onMounted(async () => {
	const data = await userUserInfo()
	isLogin.value = data.isLogin
	if (isLogin.value) {
		userInfo = data.userInfo
	}
	options = isLogin.value ? signIned : signIning
})
</script>
