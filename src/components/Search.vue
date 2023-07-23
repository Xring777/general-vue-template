<template>
	<div
		v-if="showDropdown"
		class="fixed inset-0"
		@click="showDropdown = false"
	/>
	<div class="relative max-w-full w-3/4 flex flex-1 items-center">
		<n-input
			v-model:value="searchTerm"
			clearable
			size="large"
			round
			:placeholder="trendings.length ? trendings[0] : t('search')"
			@focus="showDropdown = true"
			@keyup.enter="handleSearch"
		>
			<template #suffix>
				<div
					class="ml-1 h-5 w-5 flex cursor-pointer items-center justify-center rounded-lg hover:text-blue-300"
				>
					<div class="i-mdi:magnify h-5 w-5" @click="handleSearch" />
				</div>
			</template>
			<template #clear-icon>
				<div class="i-pajamas:clear" />
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
						{{ t('none-result') }}
					</li>
				</ul>
				<div v-show="!searchTerm" class="flex flex-col">
					<div v-show="searchHistoriesStore.histories.length">
						<div class="flex items-center justify-between">
							<div class="px-4 py-2 text-lg font-semibold">
								{{ t('search-history') }}
							</div>
							<div class="px-5 text-xs opacity-50">
								<div
									class="flex cursor-pointer items-center gap-1 hover:opacity-70"
									@click="searchHistoriesStore.remove()"
								>
									<div class="i-mdi:trash-can-outline h-4 w-4" />
									<div>{{ t('clear-all') }}</div>
								</div>
							</div>
						</div>
						<ul class="w-full flex flex-wrap px-4">
							<li
								v-for="(item, index) in showMoreRecords
									? searchHistoriesStore.allHistories
									: searchHistoriesStore.halfHistories"
								:key="item"
								class="p-0.5"
							>
								<n-tag
									class="cursor-pointer border-0 rounded-md bg-neutral-200"
									dark="bg-[var(--my-popover-color-hover)]"
									closable
									size="small"
									@close="searchHistoriesStore.remove(index)"
								>
									<div hover="text-[var(--my-primary-color-hover)]">
										{{ item }}
									</div>
								</n-tag>
							</li>
						</ul>
						<div
							class="flex items-center justify-center text-xs opacity-50 transition"
							@click="showMoreRecords = !showMoreRecords"
						>
							<div
								v-show="searchHistoriesStore.histories.length > 10"
								class="flex cursor-pointer items-center justify-center hover:opacity-70"
							>
								{{ !showMoreRecords ? t('show-more') : t('pick-up') }}
							</div>
						</div>
					</div>
					<ul class="w-full py-1">
						<div class="px-4 py-2 text-lg font-semibold">
							{{ t('search-trending') }}
						</div>
						<li
							v-for="(item, index) in trendings"
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
			</div>
		</n-collapse-transition>
	</div>
</template>

<script setup lang="ts">
import { POSITION } from 'vue-toastification'
import SearchHistories from '~/stores/searchHistories'
const { t } = useI18n()
const searchTerm = ref('')
const showDropdown = ref(false)
const showMoreRecords = ref(false)
const searchHistoriesStore = SearchHistories()

const trendings = ref<string[]>([])
const dropdownItems = ref<string[]>([])

const dropdownItemsComputed = computed(() =>
	dropdownItems.value.filter((item) =>
		item.toLowerCase().includes(searchTerm.value.toLowerCase())
	)
)

const handleSearch = () => {
	let search = ''
	if (searchTerm.value) {
		search = searchTerm.value
	} else if (trendings.value.length) {
		search = trendings.value[0]
	}
	if (search) {
		searchHistoriesStore.add(search)
	} else {
		toast.info(t('none-search-item'), { position: POSITION.BOTTOM_CENTER })
	}
	// TODO:搜索内容
}
onMounted(() => {
	// TODO:加载热搜和搜索推荐
})
</script>
