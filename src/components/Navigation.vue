<script setup lang="ts">
import { getRoutes } from '~/plugins/router'
import { SwitchIcon } from 'vue-dark-switch'
import { toggleDark } from 'vue-dark-switch'

const route = useRoute()
const router = useRouter()

const { t, availableLocales, locale } = useI18n()
const options = availableLocales.map((availableLocale) => ({
	label: t(availableLocale),
	key: availableLocale,
}))

const routes = getRoutes()
	.filter((r) => !r.path.includes('notFound'))
	.map((r) => {
		let { path, name } = r
		if (path === '/') {
			return { path, name: 'home' }
		}

		if (!name) {
			name = path
		}

		return { path, name: name.toString().slice(1).replaceAll('/', ' · ') }
	})
</script>

<template>
	<nav
		aria-label="Site Nav"
		class="mx-auto h-80px max-w-full flex items-center justify-between p-4 px-10"
	>
		<div
			class="w-xs flex cursor-pointer items-center justify-start"
			@click="router.push('/')"
		>
			<img src="/public/logo.png" class="h-15 w-20 px-3 py-2" />
			<!-- TODO: 修改logo -->
			<p class="text-xl font-semibold">{{ t('site-name') }}</p>
		</div>
		<ul class="w-full flex items-center justify-start gap-8 px-10">
			<li v-for="r of routes" :key="r.path" class="hidden !block">
				<RouterLink :to="r.path">
					<a
						class="route rounded-lg"
						:class="r.path === route.path ? 'active' : ''"
					>
						<p class="text-sm font-medium">{{ t(r.name) }}</p>
					</a>
				</RouterLink>
			</li>
		</ul>
		<ul class="flex items-center gap-2">
			<li>
				<a href="https://github.com/dishait/tov-template" target="_blank">
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

			<li class="hidden !block">
				<n-dropdown
					trigger="click"
					:options="options"
					@select="
						(value) => {
							locale = value
						}
					"
				>
					<n-button text :focusable="false">
						<div
							class="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium"
						>
							<div class="i-heroicons:language h-5 w-5"></div>
							<p>{{ t('language') }}</p>
						</div>
					</n-button>
				</n-dropdown>
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
	</nav>
</template>

<style scoped>
.route.active {
	color: #2584d2;
}
.route:hover {
	color: #6ab7f7;
}
.dark .route.active {
	color: #9ac5f4;
}
.dark .route:hover {
	color: #b2d7ff;
}
</style>
