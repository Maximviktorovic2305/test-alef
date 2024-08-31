<script lang="ts" setup>
	import { toRefs } from 'vue'
	import Button from './ui/Button.vue'
	import Field from './ui/Field.vue'
	import TitleComponent from './ui/TitleComponent.vue'

	interface Props {
		kids: {
			name: string
			age: string | number
		}[]
	}

	const props = defineProps<Props>()
	const { kids } = toRefs(props)

	const addChild = () => {
		kids.value.push({ name: '', age: 0 })
	}

	const deleteChild = (index: number) => {
		kids.value.splice(index, 1)
	}

	const onChangeKidsArray = (value: string, type: string, index: number) => {
		if (type === 'text') {
			kids.value[index].name = value
		}
		if (type === 'number') {
			kids.value[index].age = Number(value)
		}
	}
</script>

<template>
	<div>
		<div class="flex items-center justify-between mb-3">
			<TitleComponent text="Дети (макс. 5)" />
			<Button :disabled="kids.length > 4" @addChild="addChild" type="add" />
		</div>
		<div class="flex flex-col gap-3">
			<div
				v-for="(_, index) of kids"
				:key="index"
				class="flex items-center justify-between w-full gap-3">
				<Field
					@onChange="onChangeKidsArray"
					:index="index"
					class="w-[43%]"
					type="Имя" />
				<Field
					@onChange="onChangeKidsArray"
					:index="index"
					class="w-[43%]"
					type="Возраст" />
				<Button
					@deleteChild="deleteChild(index)"
					class="max-w-[10%] w-full"
					type="delete" />
			</div>
		</div>
	</div>
</template>
