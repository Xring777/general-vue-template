<template>
	<n-layout>
		<n-layout-header>
			<Navigation />
		</n-layout-header>
		<n-layout-content content-style="padding: 24px;">
			<div class="w-screen flex flex-col items-center justify-center">
				<router-view v-slot="{ Component }">
					<transition name="fade" mode="out-in">
						<component :is="Component" />
					</transition>
				</router-view>
			</div>
		</n-layout-content>
	</n-layout>
</template>

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
