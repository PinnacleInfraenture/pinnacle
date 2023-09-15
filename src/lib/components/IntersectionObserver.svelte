<script lang="ts">
	import { inView } from "../../stores/inViewStore";
	export let id:string;
	import {inview} from "svelte-inview";
	export let classNames:string;
</script>

<div use:inview={{
	rootMargin: '0px',
	threshold: 1,
	root: null,
}} 
on:inview_enter={()=>{
			inView.set("#"+id);
}}
 id={id} class={classNames}>
	<slot></slot>
</div>

