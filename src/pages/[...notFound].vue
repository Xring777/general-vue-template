<script setup lang="ts">
const typedRef = useTyped([' is not found!'])
</script>

<template>
	<div class="h-screen flex flex-wrap items-center justify-around text-center">
		<div class="desc flex flex-col font-bold">
			<div class="code text-7xl">404</div>
			<div ref="typedRef" class="content mb-16 text-3xl">The Page</div>
			<RouterLink to="/">
				<n-button size="large" strong quaternary>👉 Go Home</n-button>
			</RouterLink>
		</div>

		<img src="/notFound/32.svg" class="cover" alt="page not found" />
		<div
			v-if="false"
			class="i-mdi:home i-mdi:home-outline i-mdi:logout i-mdi:test-tube"
		/>
	</div>
</template>

<style>
.code {
	margin-bottom: 20px;
}

.content {
	height: 40px;
}

.cover {
	height: auto;
	width: 700px;
	margin: 0 5px;
	max-width: 100%;
	max-height: 100%;
}

.desc {
	flex: 1;
	width: 300px;
}
</style>

<route lang="json">
{
	"meta": {
		"layout": "notFound",
		"name": "notFound"
	}
}
</route>
