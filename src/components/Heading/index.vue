<template>
	<div :class="center ? `text-center` : `text-start`">
		<div :class="`text-2xl font-bold`">
			{{ title }}
		</div>
		<div :class="`font-light text-neutral-500 mt-2`">
			{{ subTitle }}
		</div>
	</div>
</template>

<script setup lang="ts">
interface HeadingProps {
	title: string
	subTitle?: string
	center?: boolean
}
defineProps<HeadingProps>()
</script>

<style scoped></style>
