<script lang="ts" setup>
	import { computed } from 'vue'
	import PreviewInfo from '../components/PreviewInfo.vue'
	import TitleComponent from '../components/ui/TitleComponent.vue'
	import store from '../store'

	const person = computed(() => store.state.person)
	const children = computed(() => store.state.children)

	console.log(person)
</script>

<template>
	<section class="flex flex-1 h-full flex-col gap-[40px]">
		<div>
			<TitleComponent class="mb-5" text="Персональные данные" />
			<PreviewInfo
				v-if="person.name.length > 0"
				:name="person?.name"
				:age="person?.age" />
			<div v-else class="text-[12px] text-gray">Здесь буду Ваши данные...</div>
		</div>

		<div>
			<TitleComponent class="mb-5" text="Дети" />
			<PreviewInfo
				v-if="children.length > 0"
				v-for="(kid, index) of children"
				type="bgGray"
				:key="index"
				:name="kid?.name"
				:age="kid?.age" />
			<div v-else class="text-[12px] text-gray">
				Здесь буду данные Ваших детей...
			</div>
		</div>
	</section>
</template>
