<script>
	import Header from './Header.svelte';
	import './styles.css';
	import '$lib/fonts.css';
	import {Router, Route} from "svelte-routing";
	import Home from "./+page.svelte";
	import About from "./about/+page.svelte";
	import Projects from "./projects/+page.svelte";
	import Project from "./projects/[slug]/+page.svelte";
	import Contact from "./contact/+page.svelte";
	import {theme} from "$lib/stores/theme.ts";
	import {onDestroy} from "svelte";

	let currentTheme = 'white';
	const unsubscribe = theme.subscribe(value => {
		currentTheme = value;
	});
	onDestroy(() => {
		unsubscribe();
	});

	export let url = "";
</script>

<Router {url}>
	<div
		class="app transition-all duration-500 flex flex-col min-h-screen py-11"
		class:theme-white={currentTheme == 'white'}
		class:theme-black={currentTheme == 'black'}
		class:bg-white={currentTheme == 'white'}
		class:bg-black={currentTheme == 'black'}
	>
		<Header/>

		<div>
			<Route path="/">
				<Home/>
			</Route>
			<Route path="/projects" component={Projects}/>
			<Route path="/projects/*" component={Project}/>
			<Route path="/about" component={About}/>
			<Route path="/contact" component={Contact}/>
		</div>
	</div>
</Router>