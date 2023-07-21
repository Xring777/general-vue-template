<template>
	<Menu
		:options="mdOptions"
		position-x="left"
		position-y="bottom"
		sub-position-x="left"
		sub-position-y="middle"
	>
		<template #button>
			<div
				class="i-mdi:format-list-bulleted h-7 w-7 hover:animate-tada hover:cursor-pointer hover:text-[var(--my-primary-color-hover)]"
			></div>
		</template>
	</Menu>
</template>

<script setup lang="ts">
const { mdOptions } = useMoreToolOptions()
</script>
