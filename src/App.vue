<script setup lang="ts">
import { naiveTheme, isDark } from 'vue-dark-switch'
import { NConfigProvider } from 'naive-ui'

// 设置默认语言
useI18n().locale.value = 'zh-cn'
localStorage.setItem('need-auth', useI18n().t('need-auth'))

// 设置默认颜色
const { light, dark, setDefaultTheme } = useDefaultColors()
onBeforeMount(() => setDefaultTheme())
</script>

<template>
	<n-config-provider
		:theme="naiveTheme"
		:theme-overrides="isDark ? dark : light"
		class="h-full"
	>
		<router-view />
	</n-config-provider>
</template>
<style></style>
