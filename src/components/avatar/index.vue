<template>
	<img
		v-if="src"
		class="cursor-pointer rounded-full shadow-sm transition hover:animate-rotate-in hover:animate-duration-400 hover:shadow-md"
		height="30"
		width="30"
		alt="Avatar"
		:src="src"
	/>
	<div
		v-else
		class="i-mdi:account h-8 w-8 cursor-pointer transition hover:animate-rotate-in hover:animate-duration-400 hover:text-[var(--my-primary-color-hover)] hover:shadow-md"
	></div>
</template>

<script setup lang="ts">
defineProps<{
	src?: string
}>()
</script>
