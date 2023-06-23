<script setup lang="ts">
import { naiveTheme, isDark } from 'vue-dark-switch'
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'

const light: GlobalThemeOverrides = {
	common: {
		primaryColor: '#30A2FFFF',
		primaryColorHover: '#6AB7F7FF',
		primaryColorPressed: '#2584D2FF',
		primaryColorSuppl: '#6AB7F7FF',
	},
}
const dark: GlobalThemeOverrides = {
	common: {
		primaryColor: '#9AC5F4FF',
		primaryColorHover: '#B2D7FFFF',
		primaryColorSuppl: '#B2D7FFFF',
		primaryColorPressed: '#82BCFBFF',
		popoverColor: '#252525FF',
	},
}
</script>

<template>
	<n-config-provider
		:theme="naiveTheme"
		:theme-overrides="isDark ? dark : light"
	>
		<router-view />
	</n-config-provider>
</template>
