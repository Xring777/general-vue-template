<template>
	<div
		class="flex cursor-pointer items-center justify-between"
		@click="router.push('/')"
	>
		<img src="/logo.png" class="logo px-1 py-1" />
		<!-- TODO: 修改logo -->
		<p class="pl-2 font-mono text-sm font-semibold">Exering</p>
	</div>
</template>

<script setup lang="ts">
const router = useRouter()
</script>

<style scoped>
.logo {
	width: 2em;
	height: 2em;
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
