<template>
	<n-input round :placeholder="t('search')">
		<template #suffix>
			<div class="i-mdi:magnify" />
		</template>
	</n-input>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
