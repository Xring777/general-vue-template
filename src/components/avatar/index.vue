<template>
	<div
		class="flex flex-row cursor-pointer items-center gap-3 border-[1px] border-1 rounded-full p-1 transition hover:animate-rotate-in hover:animate-duration-200 hover:shadow-md"
		dark="hover:shadow-gray-600 border-dark-300"
	>
		<img v-if="src" height="30" width="30" alt="Avatar" :src="src" />
		<div
			v-else
			class="i-mdi:account h-8 w-8 hover:text-[var(--my-primary-color-hover)] hover:shadow-md"
		></div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	src?: string
}>()
</script>
