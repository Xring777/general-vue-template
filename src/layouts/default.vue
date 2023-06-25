<template>
	<div class="h-full flex flex-col">
		<nav-bar class="shadow-sm" />
		<div class="mt-2 h-full flex-1 shadow-sm">
			<router-view v-slot="{ Component }">
				<transition name="fade" mode="out-in">
					<Container>
						<component :is="Component" />
					</Container>
				</transition>
			</router-view>
		</div>
		<TabBar v-if="!lg" class="w-full" />
	</div>
</template>

<script setup lang="ts">
const lg = useMediaQuery('(min-width: 1024px)')
</script>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
