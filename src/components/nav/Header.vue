<template>
	<div class="">
		<ul class="flex items-center justify-start gap-1">
			<li v-for="r of routes" :key="r.path" class="w-15">
				<RouterLink :to="r.path">
					<a
						class="flex flex-col items-center gap-y-1 hover:animate-tada hover:text-[var(--my-primary-color-hover)]"
						:class="
							r.path === route.path
								? 'text-[var(--my-primary-color-suppl)]'
								: ''
						"
					>
						<div
							class="h-5 w-5 flex items-center justify-center"
							:class="r.path === route.path ? r.activeIcon : r.icon"
						/>
						<p class="text-sm font-medium">{{ t(r.name as string) }}</p>
					</a>
				</RouterLink>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
const route = useRoute()
const { routes } = useSiteRoutes()
const { t } = useI18n()
</script>

<style scoped></style>
