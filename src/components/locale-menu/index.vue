<template>
	<MenuGroup right>
		<template #default>
			<slot />
		</template>
		<template #content>
			<MenuGroupItem
				v-for="option in localeOptions"
				:key="option.key"
				:label="option.key"
				@on-click="option.props.onClick"
			>
			</MenuGroupItem>
		</template>
	</MenuGroup>
</template>

<script setup lang="ts">
const { localeOptions } = useLanguage()
</script>
