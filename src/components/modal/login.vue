<template>
	<n-modal
		v-model:show="modal.isShow"
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
					toggleRegister
						? t('Create your account')
						: forgotPassword
						? t('Get your password back')
						: t('Login to your account')
				"
			/>
		</template>

		<div class="flex flex-col gap-5">
			<n-collapse-transition :show="toggleRegister">
				<n-input
					v-model:value="username"
					size="large"
					round
					type="text"
					:placeholder="t('username')"
				/>
			</n-collapse-transition>
			<n-input
				v-model:value="email"
				size="large"
				round
				type="text"
				:placeholder="t('email')"
			/>
			<n-collapse-transition :show="toggleRegister || forgotPassword">
				<n-input
					v-model:value="verificationCode"
					size="large"
					round
					type="text"
					:placeholder="t('Verification code')"
				/>
			</n-collapse-transition>
			<n-input
				v-model:value="password"
				size="large"
				round
				type="password"
				show-password-on="click"
				:placeholder="t('password')"
			/>
			<n-collapse-transition :show="toggleRegister || forgotPassword">
				<n-input
					v-model:value="confirmPassword"
					size="large"
					round
					type="password"
					show-password-on="click"
					:placeholder="t('confirm-password')"
				/>
			</n-collapse-transition>
			<n-collapse-transition :show="!toggleRegister">
				<div
					class="flex items-center justify-end px-2 text-xs"
					@click="forgotPassword = !forgotPassword"
				>
					<div class="cursor-pointer opacity-50 hover:opacity-70">
						{{ forgotPassword ? t('To Login') : t('forgot-password') }}
					</div>
				</div>
			</n-collapse-transition>
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
									? t('Already have an account')
									: t('First time use site')
							}}
						</div>
						<div
							class="cursor-pointer text-neutral-500 hover:underline"
							@click="
								toggleRegister = !toggleRegister
								forgotPassword = false
							"
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

const { t } = useLanguage()
const route = useRoute()

const modal = loginModal()

const isLoading = ref(false)
const username = ref('')
const email = ref('')
const verificationCode = ref('')
const password = ref('')
const confirmPassword = ref('')

const toggleRegister = ref(false)
const forgotPassword = ref(false)
const onSubmit = () => {
	isLoading.value = true
	// console.log(email.value, password.value, route.query)
	// TODO:注册，登录，找回
	// if (toggleRegister){

	// }else if (forgotPassword){

	// }

	route.query.redirect &&
		router.push({
			path: route.query.redirect as string,
		})
}
</script>
