<script setup lang="ts">
import type { UserInfo } from '~/types/user'
const { localeOptions, mdOptions } = useLanguage()
const { lg, md } = useMediaWidth()
const { signIned, signIning } = useUserMenu()

let isLogin = ref(false)
let userInfo = reactive<UserInfo>({
	username: '',
	email: '',
	avatar: '',
	description: '',
	gender: '',
	age: '',
})

onMounted(async () => {
	const data = await userUserInfo()
	isLogin.value = data.isLogin
	userInfo = isLogin.value && data.userInfo
})
</script>

<template>
	<div class="flex">
		<NavBarLogo v-if="md" />
		<nav
			aria-label="Site Nav"
			class="mx-auto max-w-full flex flex-1 items-center justify-between gap-10 p-3 lg:px-10"
		>
			<NavBarHeader v-if="lg" />
			<div class="flex flex-1 items-center gap-3">
				<NDropdown :options="isLogin ? signIned : signIning">
					<Avatar :src="userInfo.avatar" />
				</NDropdown>
				<Search />
				<NDropdown v-if="!lg" :options="mdOptions" trigger="click">
					<div
						class="i-mdi:format-list-bulleted h-7 w-7 hover:text-[var(--my-primary-color-hover)]"
					></div>
				</NDropdown>
			</div>
			<NavBarTail v-if="lg" :locale-options="localeOptions" />
		</nav>
	</div>
</template>
