<script lang="ts" setup>
	import { ref } from 'vue'
	import { useRouter } from 'vue-router'
	import ChildrenBlock from '../components/ChildrenBlock.vue'
	import PeersonalBlock from '../components/PersonBlock.vue'
	import Button from '../components/ui/Button.vue'
	import store from '../store'

	const router = useRouter()
	const personData = ref([{ name: '', age: 0 }])
	const kids = ref([{ name: '', age: 0 }])

	const submitForm = () => {
		store.dispatch('getPersonData', personData.value)
		store.dispatch('getPersonChildren', kids.value)
		router.push('/preview')
	}
</script>

<template>
	<form @submit.prevent="submitForm" class="flex flex-col gap-[44px]">
		<PeersonalBlock :personData="personData" />
		<ChildrenBlock :kids="kids" />
		<Button type="save" />
	</form>
</template>
