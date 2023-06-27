<template>
	<div class="h-[100vh] flex flex-col">
		<div class="z-50">
			<nav-bar />
		</div>
		<div class="flex-grow overflow-auto overflow-x-hidden pb-2 pt-3">
			<router-view v-slot="{ Component }">
				<transition name="fade" mode="out-in">
					<Container>
						<component :is="Component" />
					</Container>
				</transition>
			</router-view>
		</div>
		<div>
			<TabBar v-if="!lg" />
		</div>
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
