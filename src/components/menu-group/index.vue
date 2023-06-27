<template>
	<div v-if="isOpen" class="fixed inset-0" @click="isOpen = false" />
	<div class="relative">
		<div @click="isOpen = !isOpen">
			<slot />
		</div>
		<Transition>
			<div
				v-show="isOpen"
				class="absolute top-12 overflow-hidden rounded-xl shadow-md dark:shadow-none"
				:class="right ? 'right-0' : 'left-0'"
			>
				<div
					class="w-27 flex flex-col cursor-pointer sm:w-30"
					@click="isOpen = !isOpen"
				>
					<slot name="content" />
				</div>
			</div>
		</Transition>
	</div>
</template>

<script setup lang="ts">
const isOpen = ref(false)
defineProps<{
	right?: boolean
}>()
</script>
