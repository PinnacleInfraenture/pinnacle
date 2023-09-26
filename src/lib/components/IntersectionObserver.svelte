<script lang="ts">
	import { inView as inViewStore } from "../../stores/inViewStore";
	export let id:string;
	import {inview} from "svelte-inview";
	export let classNames:string;
	let iv=false;
</script>

<div use:inview={{
	rootMargin: '0px',
	threshold: 0.8,
	root: null,
}} 
	on:inview_enter={event=>{
		inViewStore.set(id);

	}}>
	<div
		use:inview={{
			rootMargin: '0px',
			threshold: 0.3,
			root: null,
		}} 
		on:inview_enter={evt=>{
			iv=true;
		}}
			on:inview_leave={evt=>{
			iv=false;

	}}

	id={id} class={`${classNames} transition-[blur,opacity] duration-1000 ease-in-out ${iv ? 'opacity-100 blur-0' : 'blur-sm opacity-20'}`}>
		<slot />
	</div>
</div>

