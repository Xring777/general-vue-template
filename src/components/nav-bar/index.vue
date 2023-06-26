<script setup lang="ts">
const { lg, md } = useMediaWidth()
</script>

<template>
	<div
		class="fixed z-50 w-full bg-white p-1 shadow-md dark:bg-[#141415] dark:shadow-blue-gray-800 dark:shadow-sm"
	>
		<div class="flex items-center justify-between">
			<NavBarLogo v-if="md" />
			<nav
				aria-label="Site Nav"
				class="mx-auto max-w-full flex flex-1 items-center justify-between gap-10 p-3 lg:px-10"
			>
				<NavBarHeader v-if="lg" />
				<div class="flex flex-1 items-center gap-3">
					<UserMenu />
					<Search />
					<MoreOptionMenu v-if="!lg" />
				</div>
				<NavBarTail v-if="lg" />
			</nav>
		</div>
	</div>
</template>
