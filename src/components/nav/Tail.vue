<template>
	<div>
		<ul class="flex items-center gap-x-3">
			<li>
				<a @click="handleGithub()">
					<n-button text :focusable="false">
						<div
							class="w-15 inline-flex flex-col items-center gap-y-1 rounded-lg text-[13px] hover:animate-tada"
						>
							<div class="i-mdi:github h-5 w-5"></div>
							<p>Github</p>
						</div>
					</n-button>
				</a>
			</li>
			<li>
				<Menu :options="localeOptions" position-y="bottom" position-x="middle">
					<template #button>
						<n-button text :focusable="false">
							<div
								class="w-15 inline-flex flex-col items-center gap-y-1 rounded-lg text-[13px] hover:animate-tada"
							>
								<div class="i-heroicons:language h-5 w-5"></div>
								<p>{{ t('language') }}</p>
							</div>
						</n-button></template
					>
				</Menu>
			</li>
			<li>
				<n-button text :focusable="false" @click="toggleDark()">
					<div
						class="w-15 inline-flex flex-col items-center gap-y-1 rounded-lg text-[13px] hover:animate-tada"
					>
						<SwitchIcon @click.prevent="toggleDark()" />
						<p>{{ t('theme') }}</p>
					</div>
				</n-button>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { SwitchIcon, toggleDark } from 'vue-dark-switch'
const { t, localeOptions } = useLanguage()
const handleGithub = () => {
	window.open('https://github.com/Xring777/general-vue-template')
}
</script>

<style scoped></style>
