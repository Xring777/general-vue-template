<script setup lang="ts">
import { naiveTheme, toggleDark, isDark } from 'vue-dark-switch'
import { NConfigProvider, GlobalThemeOverrides, useOsTheme } from 'naive-ui'

// 设置默认语言
let { locale } = useI18n()
locale.value = 'zh-cn'

// 设置默认主题
let light: GlobalThemeOverrides = {
	common: {
		primaryColor: '#30A2FFFF',
		primaryColorHover: '#6AB7F7FF',
		primaryColorPressed: '#2584D2FF',
		primaryColorSuppl: '#6AB7F7FF',
	},
}
let dark: GlobalThemeOverrides = {
	common: {
		primaryColor: '#9AC5F4FF',
		primaryColorHover: '#B2D7FFFF',
		primaryColorSuppl: '#B2D7FFFF',
		primaryColorPressed: '#82BCFBFF',
		popoverColor: '#252525FF',
	},
}

// 跟随操作系统
const osThemeRef = useOsTheme()
onBeforeMount(() => {
	osThemeRef.value === 'light' ? toggleDark(false) : toggleDark(true)
})
</script>

<template>
	<n-config-provider
		:theme="naiveTheme"
		:theme-overrides="isDark ? dark : light"
	>
		<router-view />
	</n-config-provider>
</template>
