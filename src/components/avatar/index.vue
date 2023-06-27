<template>
	<div
		:style="size === 'md' ? md : size === 'lg' ? lg : sm"
		class="flex cursor-pointer items-center items-center justify-center gap-3 border-[1px] border-1 p-1 transition hover:animate-rotate-in hover:animate-duration-200 hover:shadow-md"
		dark="hover:shadow-gray-600 border-dark-300"
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
		size: 'md',
		round: true,
	}
)
const lg = { width: '80px', height: '80px' }
const md = { width: '50px', height: '50px' }
const sm = { width: '20px', height: '20px' }
</script>
