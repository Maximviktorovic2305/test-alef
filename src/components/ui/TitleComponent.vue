<script lang="ts" setup>
	interface Props {
		text: string
	}

	const props = defineProps<Props>()
	const { text } = props
</script>

<template>
	<h2 class="text-[16px] font-[500] text-black">{{ text }}</h2>
</template>
