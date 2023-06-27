<template>
	<div class="max-w-full w-3/4 flex items-center">
		<n-input size="large" round :placeholder="t('search')">
			<template #suffix>
				<div class="i-mdi:magnify" />
			</template>
		</n-input>
	</div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
