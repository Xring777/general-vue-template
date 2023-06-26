<template>
	<div>
		<ul class="flex items-center gap-2">
			<li>
				<a @click="handleGithub()">
					<n-button text :focusable="false">
						<div
							class="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium"
						>
							<div class="i-mdi:github h-5 w-5"></div>
							<p>Github</p>
						</div>
					</n-button>
				</a>
			</li>
			<li>
				<LocaleMenu>
					<n-button text :focusable="false">
						<div
							class="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium"
						>
							<div class="i-heroicons:language h-5 w-5"></div>
							<p>{{ t('language') }}</p>
						</div>
					</n-button>
				</LocaleMenu>
			</li>
			<li>
				<n-button text :focusable="false" @click="toggleDark()">
					<div
						class="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium"
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
const { t } = useLanguage()
const handleGithub = () => {
	window.open('https://github.com/Xring777/general-vue3-ts-navieUI-template')
}
</script>

<style scoped></style>
