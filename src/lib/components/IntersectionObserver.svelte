<script lang="ts">
	import { inView } from "../../stores/inViewStore";
	let observer: IntersectionObserver | null = null;
	let section: HTMLDivElement | null = null;
	export let sec: string = "";
	export let id: string = "";
	const options: IntersectionObserverInit = {
		root: null, 
		rootMargin: "0px", 
		threshold: 1, 
	};
	export let className: string = ""; 
	const handleIntersection: IntersectionObserverCallback = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				inView.set(sec);
			}
		});
	};
	$: {
		if (section && !observer) {
			observer = new IntersectionObserver(handleIntersection, options);
			observer.observe(section);
		}
	}
</script>

<div bind:this={section} id={id} class={className}>
	<slot></slot>
</div>

