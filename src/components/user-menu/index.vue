<template>
	<MenuGroup>
		<template #default>
			<Avatar :src="userInfo.avatar" />
		</template>
		<template #content>
			<MenuGroupItem
				v-for="option in options.value"
				:key="option.key"
				:label="option.label"
				:icon="option.icon"
			/>
			<MenuGroupItem
				v-if="!isLogin"
				:label="signOption.label"
				:icon="signOption.icon"
				@click="showModal = true"
			/>
		</template>
	</MenuGroup>
	<n-modal
		v-model:show="showModal"
		preset="card"
		:bordered="false"
		embedded
		class="lg:w-lg md:w-md sm:w-sm"
		:segmented="{ content: 'soft', footer: 'soft' }"
	>
		<template #header>
			<Heading
				:title="toggleRegister ? t('Welcome to site') : t('Welcome back')"
				:sub-title="
					toggleRegister ? t('Create your account') : t('Login to your account')
				"
			/>
		</template>

		<div class="flex flex-col gap-5">
			<Transition>
				<n-input
					v-show="toggleRegister"
					v-model:value="username"
					size="large"
					round
					type="text"
					:placeholder="t('username')"
				/>
			</Transition>
			<n-input
				v-model:value="email"
				size="large"
				round
				type="text"
				:placeholder="t('email')"
			/>
			<n-input
				size="large"
				round
				type="password"
				show-password-on="mousedown"
				:placeholder="t('password')"
			/>
			<n-button type="primary" size="large" round secondary @click="onSubmit()">
				<div
					class="flex items-center hover:text-[var(--my-primary-color-hover)]"
				>
					<div v-show="toggleRegister" class="i-mdi:login h-7 w-7 px-5" />
					<div v-show="!toggleRegister" class="i-mdi:logout h-7 w-7 px-5" />
					<span>
						{{ toggleRegister ? t('sign-up') : t('sign-in') }}
					</span>
				</div>
			</n-button>
		</div>
		<template #footer>
			<div class="mt-3 flex flex-col gap-4">
				<n-button
					secondary
					round
					strong
					size="large"
					:focusable="false"
					@onClick="onSubmit"
				>
					<div
						class="flex items-center hover:text-[var(--my-primary-color-hover)]"
					>
						<div class="i-mdi:github h-7 w-7 px-5" />
						<span>
							{{ t('Continue With Github') }}
						</span>
					</div>
				</n-button>
				<n-button
					secondary
					round
					strong
					size="large"
					:focusable="false"
					@onClick="onSubmit"
				>
					<div
						class="flex items-center hover:text-[var(--my-primary-color-hover)]"
					>
						<div class="i-mdi:google h-7 w-7 px-5" />
						<span>
							{{ t('Continue With Google') }}
						</span>
					</div>
				</n-button>
				<div class="mt-4 text-center font-light text-neutral-400">
					<div class="flex flex-row items-center justify-center gap-2">
						<div>
							{{
								toggleRegister
									? t('Already hav an account')
									: t('First time use site')
							}}
						</div>
						<div
							class="cursor-pointer text-neutral-500 hover:underline"
							@click="toggleRegister = !toggleRegister"
						>
							{{ toggleRegister ? t('To Login') : t('Create an account') }}
						</div>
					</div>
				</div>
			</div>
		</template>
	</n-modal>
</template>

<script setup lang="ts">
import router from '~/plugins/router'
import type { UserInfo } from '~/types/user'
const { t } = useLanguage()
const { signIned, signIning } = useUserMenu()
let isLogin = ref(false)
let options = ref([])
const showModal = ref(false)

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

onMounted(async () => {
	const data = await userUserInfo()
	isLogin.value = data.isLogin
	if (isLogin.value) {
		userInfo = data.userInfo
	}
	options.value = isLogin.value ? signIned : signIning
})

const isLoading = ref(false)
const username = ref('')
const email = ref('')
const password = ref('')
const toggleRegister = ref(false)
const route = useRoute()
const onSubmit = () => {
	isLoading.value = true
	console.log(email.value, password.value, route.query)
	router.push({
		path: route.query.redirect,
	})
}
</script>
