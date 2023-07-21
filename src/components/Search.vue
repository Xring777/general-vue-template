<template>
	<div
		v-if="showDropdown"
		class="fixed inset-0"
		@click="showDropdown = false"
	/>
	<div class="relative max-w-full w-3/4 flex items-center">
		<n-input
			v-model:value="searchTerm"
			size="large"
			round
			:placeholder="t('search')"
			@focus="showDropdown = true"
		>
			<template #suffix>
				<div class="i-mdi:magnify" />
			</template>
		</n-input>
		<n-collapse-transition :show="showDropdown" class="absolute top-12">
			<div
				class="w-full border rounded-lg bg-white shadow dark:bg-[var(--my-popover-color)]"
				dark="border-none"
			>
				<ul v-show="searchTerm" class="flex flex-col justify-center py-1">
					<li
						v-for="(item, index) in dropdownItemsComputed"
						:key="index"
						class="flex cursor-pointer items-center gap-2 p-1.5 hover:bg-neutral-200 dark:hover:bg-neutral-500"
					>
						<div class="px-4">{{ item }}</div>
					</li>
					<li
						v-show="!dropdownItemsComputed.length"
						class="flex items-center justify-center p-1.5 text-sm"
					>
						无搜索结果
					</li>
				</ul>
				<ul v-show="!searchTerm" class="w-full py-1">
					<div class="px-4 py-2 text-lg font-semibold">搜索历史</div>
					<ul
						class="w-full flex flex-wrap items-center gap-x-2 px-4 transition-all"
						:class="
							showMoreRecords
								? 'h-30 overflow-y-hidden'
								: 'h-15 overflow-hidden'
						"
					>
						<li
							v-for="item in tags"
							:key="item"
							:class="showMoreRecords ? 'h-1/4' : 'h-1/2'"
						>
							<n-tag
								class="cursor-pointer border-0 rounded-md bg-neutral-200"
								dark="bg-[var(--my-popover-color-hover)]"
								closable
								size="small"
							>
								<div hover="text-[var(--my-primary-color-hover)]">
									{{ item }}
								</div>
							</n-tag>
						</li>
					</ul>
					<div
						class="flex cursor-pointer items-center justify-center text-[6px] opacity-50 transition hover:opacity-70"
						@click="showMoreRecords = !showMoreRecords"
					>
						{{ !showMoreRecords ? '查看更多' : '收起' }}
					</div>
					<div class="px-4 py-2 text-lg font-semibold">热搜</div>
					<li
						v-for="(item, index) in dropdownRecommendItems"
						:key="index"
						class="flex cursor-pointer items-center gap-2 p-1.5 hover:bg-neutral-200 dark:hover:bg-neutral-500"
					>
						<div class="h-5 w-5 px-2" :class="index > 2 ? 'opacity-50' : ''">
							{{ index + 1 }}
						</div>
						<div class="px-2">{{ item }}</div>
					</li>
				</ul>
			</div>
		</n-collapse-transition>
	</div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const searchTerm = ref('')
const showDropdown = ref(false)
const showMoreRecords = ref(false)
const tags = ref([
	'教师',
	'程序员',
	'教师',
	'程序员',
	'教师',
	'程序员',
	'教师',
	'程序员',
	'教师',
	'程序员',
	'教师',
	'程序员',
])
const dropdownRecommendItems = ref(['Item 1', 'Item 2', 'Item 3', 'Item 4'])
const dropdownItems = ref(['Item 1', 'Item 2', 'Item 3', 'Item 4'])
const dropdownItemsComputed = computed(() =>
	dropdownItems.value.filter((item) =>
		item.toLowerCase().includes(searchTerm.value.toLowerCase())
	)
)
</script>
