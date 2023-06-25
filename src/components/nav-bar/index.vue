<script setup lang="ts">
import { getRoutes } from '~/plugins/router'
import { SwitchIcon } from 'vue-dark-switch'
import { toggleDark } from 'vue-dark-switch'

const route = useRoute()
const router = useRouter()

const { t, availableLocales, locale } = useI18n()
const localeOptions = availableLocales.map((availableLocale) => ({
	label: t(availableLocale),
	key: availableLocale,
	props: {
		onClick: () => {
			locale.value = availableLocale
			mdOptions.forEach((mdOption) => {
				if (mdOption.key !== 'Github') mdOption.label = t(mdOption.key)
			})
		},
	},
}))

const dontRenderRoutes = ['notFound', 'auth']
const routes = getRoutes()
	.filter((r) => !dontRenderRoutes.includes(r.meta.name as string))
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

const lg = useMediaQuery('(min-width: 1024px)')
const md = useMediaQuery('(min-width: 768px)')
// const sm = useMediaQuery('(min-width: 640px)')
function renderIcon(icon: string) {
	return () => h('div', { class: `i-${icon} w-5 h-5` })
}
const mdOptions = [
	{
		label: 'Github',
		key: 'Github',
		icon: renderIcon('mdi:github'),
		props: {
			onclick: () => {
				window.open('https://github.com/dishait/tov-template')
			},
		},
	},
	{
		label: t('language'),
		key: 'language',
		icon: renderIcon('heroicons:language'),
		children: localeOptions,
	},
	{
		label: t('theme'),
		key: 'theme',
		icon: () => h(SwitchIcon, { ['onClick']: () => toggleDark() }),
		props: {
			onClick: () => toggleDark(),
		},
	},
]
</script>

<template>
	<div class="flex">
		<div
			v-if="md"
			class="flex cursor-pointer items-center justify-between pl-10"
			@click="router.push('/')"
		>
			<img src="/public/logo.png" class="h-12 w-16 px-3 py-2" />
			<!-- TODO: 修改logo -->
			<p v-if="lg" class="text-xl font-semibold">网站</p>
		</div>
		<nav
			aria-label="Site Nav"
			class="mx-auto max-w-full flex flex-1 items-center justify-between gap-10 p-4 md:px-10"
		>
			<div v-if="lg">
				<ul class="flex items-center justify-start gap-8 px-5">
					<li v-for="r of routes" :key="r.path" class="">
						<RouterLink :to="r.path">
							<a
								class="rounded-lg hover:text-[var(--my-primary-color-hover)]"
								:class="
									r.path === route.path
										? 'text-[var(--my-primary-color-suppl)]'
										: ''
								"
							>
								<p class="text-sm font-medium">{{ t(r.name) }}</p>
							</a>
						</RouterLink>
					</li>
				</ul>
			</div>
			<div class="flex flex-1 items-center gap-3">
				<Avatar />
				<Search />
				<NDropdown v-if="!lg" :options="mdOptions" trigger="click">
					<div
						class="i-mdi:format-list-bulleted h-7 w-7 hover:text-[var(--my-primary-color-hover)]"
					></div>
				</NDropdown>
			</div>
			<div v-if="lg">
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
					<li>
						<n-dropdown trigger="click" :options="localeOptions">
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
			</div>
		</nav>
	</div>
</template>
