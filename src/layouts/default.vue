<template>
	<Spin />
	<div class="h-full flex flex-col">
		<div class="z-50">
			<nav-bar />
		</div>
		<div class="flex-grow overflow-auto overflow-x-hidden pb-2 pt-3">
			<router-view v-slot="{ Component }">
				<Container>
					<transition name="fade" mode="out-in">
						<component :is="Component" />
					</transition>
				</Container>
			</router-view>
		</div>
		<div>
			<TabBar v-if="!lg" />
		</div>
	</div>
	<ModalLogin />
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
