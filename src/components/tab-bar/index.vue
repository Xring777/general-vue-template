<template>
	<nav
		aria-label="Site Tab"
		class="fixed bottom-0 z-50 mx-auto max-w-full w-full border-t bg-white py-2 dark:border-gray-800 dark:bg-[#141415] md:px-10"
	>
		<div>
			<ul class="flex items-center justify-around gap-8 px-5">
				<li v-for="r of routes" :key="r.path" class="">
					<RouterLink :to="r.path">
						<a
							class="flex items-center justify-center rounded-lg <md:flex-col md:gap-2 md:py-2 hover:text-[var(--my-primary-color-hover)]"
							:class="
								r.path === route.path
									? 'text-[var(--my-primary-color-suppl)]'
									: ''
							"
						>
							<div
								:class="r.path === route.path ? r.activeIcon : r.icon"
								class="h-5 w-5 sm:h-7 sm:w-7"
							/>
							<p class="font-medium md:text-lg">{{ t(r.name as string) }}</p>
						</a>
					</RouterLink>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script setup lang="ts">
const route = useRoute()
const { t } = useLanguage()
const { routesTabbar: routes } = useSiteRoutes()
</script>

<style scoped></style>
