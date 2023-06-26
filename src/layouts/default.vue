<template>
	<div>
		<nav-bar />
		<TabBar v-if="!lg" />
		<div class="h-full pb-18 pt-23">
			<router-view v-slot="{ Component }">
				<transition name="fade" mode="out-in">
					<Container>
						<component :is="Component" />
					</Container>
				</transition>
			</router-view>
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
