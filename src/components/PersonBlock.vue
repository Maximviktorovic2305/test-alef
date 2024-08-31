<script lang="ts" setup>
	import { toRefs } from 'vue'
	import Field from './ui/Field.vue'
	import TitleComponent from './ui/TitleComponent.vue'

	interface Props {
		personData: {
			name: string
			age: string | number
		}[]
	}

	const props = defineProps<Props>()
	const { personData } = toRefs(props)

	const onChangeKidsArray = (value: string, type: string) => {
		if (type === 'text') {
			personData.value[0].name = value
		}
		if (type === 'number') {
			personData.value[0].age = Number(value)
		}
	}
</script>

<template>
	<div>
		<TitleComponent class="mb-5" text="Персональные данные" />
		<div class="flex flex-col gap-3">
			<Field @onChange="onChangeKidsArray" type="Имя" />
			<Field @onChange="onChangeKidsArray" type="Возраст" />
		</div>
	</div>
</template>
