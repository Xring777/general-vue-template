<template>
	<MenuGroup right>
		<template #default>
			<div
				class="i-mdi:format-list-bulleted h-7 w-7 hover:text-[var(--my-primary-color-hover)]"
			></div>
		</template>
		<template #content>
			<MenuItem
				:label="mdOptions[0].label"
				:icon="mdOptions[0].icon"
				@on-click="mdOptions[0].props.onClick"
			/>
			<!-- <Teleport > -->
			<NDropdown :options="localeOptions" trigger="click">
				<MenuItem
					:label="mdOptions[1].label"
					:icon="mdOptions[1].icon"
					@click.stop=""
				/>
			</NDropdown>
			<!-- </Teleport> -->
			<MenuItem :label="mdOptions[2].label" @click.stop="toggleDark()">
				<template #icon>
					<SwitchIcon @click="toggleDark()" />
				</template>
			</MenuItem>
		</template>
	</MenuGroup>
</template>

<script setup lang="ts">
import { SwitchIcon, toggleDark } from 'vue-dark-switch'
const { localeOptions } = useLanguage()
const { mdOptions } = useMoreToolOptions()
</script>
