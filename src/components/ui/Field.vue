<script lang="ts" setup>
	interface Props {
		type: 'Имя' | 'Возраст'
		index?: number
	}

	const props = defineProps<Props>()
	const { type, index } = props

	const emit = defineEmits(['onChange'])

	const onInput = (eventTarget: EventTarget | null) => {
		if (!eventTarget) return
		const value = (eventTarget as HTMLInputElement).value
		const type = (eventTarget as HTMLInputElement).type
		emit('onChange', value, type, index)
	}

	const inputType = type === 'Имя' ? 'text' : 'number'
</script>

<template>
	<div class="relative">
		<input
			@input="onInput($event.target)"
			:type="inputType"
			:id="type"
			:aria-describedby="type"
			min="1"
			max="99"
			class="block rounded-[4px] px-2.5 pb-2.5 pt-5 w-full bg-inherit border border-grayWhite focus:outline-none focus:ring-0 focus:border-blue peer"
			placeholder=" " />
		<label
			:for="type"
			class="absolute text-sm text-gray duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
			>{{ type }}</label
		>
	</div>
</template>
