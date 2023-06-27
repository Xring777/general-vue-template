<script setup lang="ts">
import { UserMenuOptionsType } from '~/types/menuOptions'
import { UserInfo } from '~/types/user'

const { lg, md, sm } = useMediaWidth()
const { signIned, signIning } = useUserMenu()

let isLogin = ref(false)
let options: Ref<UserMenuOptionsType> = ref([])

let userInfo = reactive<UserInfo>({
	username: '',
	email: '',
	avatar: '',
	description: '',
	gender: '',
	age: '',
})

onMounted(async () => {
	const data = await useUserInfo()
	isLogin.value = data.isLogin
	if (isLogin.value) {
		userInfo = data.userInfo
	}
	options.value = isLogin.value ? signIned : signIning
})
</script>

<template>
	<div
		class="w-full bg-white shadow-md dark:bg-[#141415] dark:shadow-blue-gray-800 dark:shadow-sm"
	>
		<div class="flex items-center justify-between">
			<NavBarLogo v-if="md" />
			<nav
				aria-label="Site Nav"
				class="mx-auto max-w-full flex flex-1 items-center justify-between gap-10 p-3 lg:px-10"
			>
				<NavBarHeader v-if="lg" />
				<div class="flex flex-1 items-center justify-around">
					<UserDrawer v-if="!sm" :user-info="userInfo" :options="options" />
					<UserMenu v-else :user-info="userInfo" :options="options" />
					<Search />
					<MoreOptionMenu v-if="!lg" />
				</div>
				<NavBarTail v-if="lg" />
			</nav>
		</div>
	</div>
</template>
