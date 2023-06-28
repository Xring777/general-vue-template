<template>
	<Avatar :src="userInfo.avatar" @click="drawer.show()" />
	<n-drawer v-model:show="drawer.isShow" width="70%" placement="left">
		<n-drawer-content closable>
			<template #header>
				<UserDrawerLogo />
			</template>
			<div class="h-full w-full flex flex-col gap-4">
				<n-card>
					<div class="w-full flex gap-2">
						<Avatar :src="userInfo.avatar" />
						<div class="flex flex-1 flex-col gap-1 text-shadow">
							<div class="w-20 truncate">
								{{ userInfo.username ? userInfo.username : t('unknown') }}
							</div>
							<div class="flex items-center gap-2">
								<div
									v-if="userInfo.age === '1'"
									class="i-mdi:face-woman text-pink-400"
								/>
								<div v-else class="i-mdi:face-man text-blue-500" />
								<span class="text-sm font-thin">{{
									userInfo.age ? userInfo.age : t('unknown')
								}}</span>
							</div>
						</div>
					</div>
				</n-card>
				<n-card class="flex-1">
					<n-collapse :expanded-names="['options']">
						<template #arrow>
							<div class="i-ic:outline-content-paste h-5 w-5 rotate-270" />
						</template>
						<n-collapse-item :title="t('options')" name="options">
							<div
								v-for="{ key, icon, label, props } in options"
								:key="key"
								class="flex items-center gap-2 rounded-md py-3 pl-2 transition hover:bg-neutral-200"
								dark="hover:bg-neutral-700"
								@click="props.onClick()"
							>
								<div
									v-if="icon"
									:class="`i-${icon}`"
									class="h-5 w-5 px-1"
								></div>
								<div class="md:text-md text-sm font-medium sm:text-sm">
									{{ t(label) }}
								</div>
							</div>
						</n-collapse-item>
					</n-collapse>
				</n-card>
			</div>
		</n-drawer-content>
	</n-drawer>
</template>

<script setup lang="ts">
import type { UserMenuOptionsType } from '~/types/menuOptions'
import type { UserInfo } from '~/types/user'

const { t } = useLanguage()
const drawer = userDrawer()
defineProps<{ options: UserMenuOptionsType; userInfo: UserInfo }>()

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
// 	const data = await useUserInfo();
// 	isLogin.value = data.isLogin;
// 	if (isLogin.value) {
// 		userInfo = data.userInfo;
// 	}
// 	options = isLogin.value ? signIned : signIning;
// })
</script>

<style scoped></style>
