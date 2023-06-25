<template>
	<n-layout>
		<n-layout-header>
			<nav-bar />
		</n-layout-header>
		<n-divider class="pb-2 !m-0 md:pb-4 sm:pb-2" />
		<n-layout-content>
			<router-view v-slot="{ Component }">
				<transition name="fade" mode="out-in">
					<Container>
						<component :is="Component" />
					</Container>
				</transition>
			</router-view>
		</n-layout-content>
	</n-layout>
</template>

<script setup lang="ts"></script>

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
