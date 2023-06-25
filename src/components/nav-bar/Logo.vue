<template>
	<div
		class="flex cursor-pointer items-center justify-between pl-10"
		@click="router.push('/')"
	>
		<img src="/logo.png" class="logo h-12 w-16 px-3 py-2" />
		<!-- TODO: 修改logo -->
		<p class="text-xl font-semibold <lg:hidden hover:text-shadow">网站</p>
	</div>
</template>

<script setup lang="ts">
const router = useRouter()
</script>

<style scoped>
.logo {
	width: 5em;
	height: 4em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
