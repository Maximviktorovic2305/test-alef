<script lang="ts" setup></script>

<template>
	<header
		class="px-[92px] py-[24px] flex items-center border-b border-grayLight">
		<a href="https://alef.im/" target="_blank">
			<img src="/Logo-full.png" alt="logo" />
		</a>
		<div class="mx-auto flex items-center gap-[24px] text-gray">
			<router-link to="/">
				<span class="hover:text-black duration-200 cursor-pointer">Форма</span>
			</router-link>

			<router-link to="/preview">
				<span class="hover:text-black duration-200 cursor-pointer">Превью</span>
			</router-link>
		</div>
	</header>
</template>
