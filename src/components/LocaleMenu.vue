<template>
	<MenuGroup right>
		<template #default>
			<slot />
		</template>
		<template #content>
			<MenuItem
				v-for="option in localeOptions"
				:key="option.key"
				:label="option.key"
				@on-click="option.props.onClick"
			>
			</MenuItem>
		</template>
	</MenuGroup>
</template>

<script setup lang="ts">
const { localeOptions } = useLanguage()
</script>
