import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import Form from '../pages/Form.vue'
import Preview from '../pages/Preview.vue'

const routes = [
	{
		path: '/',
		component: DefaultLayout,
		children: [
			{
				path: '/',
				name: 'form',
				component: Form,
			},
			{
				path: '/preview',
				name: 'preview',
				component: Preview,
			},
		],
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
