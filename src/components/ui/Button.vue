<script lang="ts" setup>
	interface Props {
		type: 'add' | 'save' | 'delete'
		disabled?: boolean
	}

	const emit = defineEmits(['addChild', 'deleteChild'])
	const props = defineProps<Props>()
</script>

<template>
	<div>
		<button
			type="button"
			@click="() => emit('addChild')"
			:disabled="disabled"
			v-if="props.type === 'add'"
			:class="[
				'border-[2px] rounded-[100px] border-blue px-[20px] py-[10px] flex items-center gap-[4px] cursor-pointer',
				disabled ? 'border-grayLight' : '',
			]">
			<img v-if="!disabled" src="/plus.svg" alt="plus" />
			<span
				:class="[
					disabled ? 'border-grayLight text-gray' : 'text-blue max-sm:hidden',
				]"
				>Добавить ребенка</span
			>
		</button>

		<button
			type="submit"
			v-if="props.type === 'save'"
			class="text-white rounded-[100px] bg-blue px-[20px] py-[12px] cursor-pointer hover:text-blue hover:bg-white duration-200 max-w-[118px]">
			Сохранить
		</button>

		<button
			type="button"
			@click="() => emit('deleteChild')"
			v-if="props.type === 'delete'"
			class="text-blue cursor-pointer">
			Удалить
		</button>
	</div>
</template>
