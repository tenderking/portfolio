import { createRouter, createWebHistory } from "vue-router";
import About from "../components/AboutPage.vue";
import Work from "../components/WorkPage.vue";
import NotFound from "../components/404.vue";

const routes = [
	{
		path: "/",
		redirect: "/about",
	},
	{
		path: "/about",
		name: "About",
		component: About,
	},
	{
		path: "/work",
		name: "Work",
		component: Work,
	},
	{
		path: "/:pathMatch(.*)*",
		name: "NotFound",
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
