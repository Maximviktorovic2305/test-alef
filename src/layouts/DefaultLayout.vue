<script setup lang="ts">
	import Footer from '../components/Footer.vue'
	import Header from '../components/Header.vue'
</script>

<template>
	<div class="min-h-screen flex flex-col justify-between">
		<Header />
		<main class="max-w-[636px] w-full h-full mx-auto pt-[30px] px-5 flex-1">
			<router-view />
		</main>
		<Footer />
	</div>
</template>
