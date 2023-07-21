<template>
	<div
		:style="size === 'md' ? md : size === 'lg' ? lg : sm"
		class="flex cursor-pointer items-center items-center justify-center gap-3 p-1 transition hover:animate-tada"
		:rounded="round ? 'full' : '0'"
	>
		<img
			v-if="src"
			:style="{ width: '100%', backgroundSize: 'cover', borderRadius: '50%' }"
			alt="Avatar"
			:src="src"
		/>
		<div
			v-else
			class="i-mdi:account h-7 w-7 hover:text-[var(--my-primary-color-hover)] hover:shadow-md"
		></div>
	</div>
</template>

<script setup lang="ts">
withDefaults(
	defineProps<{
		src?: string
		size?: 'lg' | 'md' | 'sm'
		round?: boolean
	}>(),
	{
		src: '',
		size: 'md',
		round: true,
	}
)
const lg = { width: '80px', height: '80px' }
const md = { width: '40px', height: '40px' }
const sm = { width: '20px', height: '20px' }
</script>
