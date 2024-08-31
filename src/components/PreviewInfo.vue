<script lang="ts" setup>
	interface Props {
		name: string
		age: number
		type?: 'bgWhite' | 'bgGray'
	}

	const props = defineProps<Props>()
	const { name, age, type = 'bgWhite' } = props
</script>

<template>
	<div>
		<div
			v-if="age || name"
			:class="[
				'text-[16px] w-fit rounded-[4px]  py-2.5 font-bold mb-5',
				type === 'bgWhite' ? 'bg-white' : 'bg-grayWhite px-5',
			]">
			<span>{{ name }}, </span>
			<span>{{ age }} лет</span>
		</div>
		<div v-else class="text-[12px] text-gray">Заполните данные...</div>
	</div>
</template>
