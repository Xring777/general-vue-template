<template>
	<div
		class="flex items-center justify-center gap-1 bg-white py-3 transition hover:bg-neutral-200"
		dark="bg-[var(--my-popover-color)] hover:bg-neutral-500"
		@click="$emit('onClick')"
	>
		<div v-if="icon" :class="`i-${icon}`" class="h-5 w-5 px-1"></div>
		<slot name="icon" />
		<div class="md:text-md text-sm font-medium sm:text-sm">{{ t(label) }}</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{ label: string; icon?: string }>()
defineEmits(['onClick'])
const { t } = useLanguage()
</script>
