<template>
	<div
		v-if="!isSubmenu && isShow"
		class="fixed inset-0"
		@click="isShow = false"
	/>
	<div
		class="relative h-full"
		@mouseenter="isShow = true"
		@mouseleave="isShow = false"
		@click="isShow = true"
	>
		<slot name="button" />
		<Transition>
			<div
				v-show="isShow"
				class="absolute w-30 flex flex-col cursor-pointer items-center rounded-xl bg-white p-0 shadow-md lg:w-28 dark:bg-[var(--my-popover-color)] dark:shadow-none"
				:left="positionX === 'left' ? -28 : positionX === 'middle' ? 0 : 28"
				:top="positionY === 'bottom' ? 11 : positionY === 'middle' ? 2 : -11"
			>
				<div
					v-for="({ label, children, props, key, icon }, index) of options"
					:key="key"
					class="w-full"
				>
					<Menu
						v-if="children"
						:options="children"
						:position-y="subPositionY"
						:position-x="subPositionX"
						is-submenu
					>
						<template #button>
							<div
								:class="rounedxl(index, options.length)"
								class="py-2 hover:bg-neutral-200"
								dark="bg-[var(--my-popover-color)] hover:bg-neutral-500"
								@click="props.onClick"
							>
								<div class="md:text-md text-sm font-medium sm:text-sm">
									<div class="flex items-center justify-center gap-1">
										<div v-if="icon" :class="'i-' + icon" class="h-5 w-5" />
										<div>{{ t(label) }}</div>
										<div class="i-mdi:chevron-right h-5 w-5 opacity-50"></div>
									</div>
								</div>
							</div>
						</template>
					</Menu>
					<div
						v-else
						:class="rounedxl(index, options.length)"
						class="flex items-center justify-center gap-1 py-2 hover:bg-neutral-200"
						dark="bg-[var(--my-popover-color)] hover:bg-neutral-500"
						@click.stop="props.onClick"
					>
						<div v-if="icon" :class="'i-' + icon" class="h-5 w-5" />
						<SwitchIcon
							v-if="label === 'theme'"
							@click.prevent="toggleDark()"
						/>
						<div class="md:text-md text-sm font-medium sm:text-sm">
							{{ t(label) }}
						</div>
					</div>
				</div>
			</div>
		</Transition>
		<div></div>
	</div>
</template>

<script setup lang="ts">
import { MenuOptionsType } from '~/types/menuOptions'
import { SwitchIcon, toggleDark } from 'vue-dark-switch'
withDefaults(
	defineProps<{
		isSubmenu?: boolean
		positionX?: 'left' | 'middle' | 'right'
		positionY?: 'top' | 'middle' | 'bottom'
		subPositionX?: 'left' | 'middle' | 'right'
		subPositionY?: 'top' | 'middle' | 'bottom'
		options: MenuOptionsType
		show?: boolean
	}>(),
	{
		isSubmenu: false,
		show: false,
		positionX: 'right',
		positionY: 'middle',
		subPositionX: 'right',
		subPositionY: 'middle',
	}
)
const isShow = ref(false)
const { t } = useLanguage()
const rounedxl = (index: number, length: number) => {
	let res = ''
	if (index === length - 1) {
		res += ' rounded-b-xl '
	}
	if (index === 0) {
		res += ' rounded-t-xl '
	}
	return res
}
</script>

<style scoped></style>
