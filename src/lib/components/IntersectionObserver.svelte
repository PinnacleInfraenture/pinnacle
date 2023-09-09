<script lang="ts">
	import { inView } from "../../stores/inViewStore";


	let observer: IntersectionObserver | null = null;
	let section: HTMLDivElement | null = null;
	export let sec: string = "";
	const options: IntersectionObserverInit = {
		root: null, // use the viewport as the root
		rootMargin: "0px", // no margin
		threshold: 1, // 50% of the section must be visible
	};
	export let className: string = ""; 
	const handleIntersection: IntersectionObserverCallback = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				// If the section is intersecting, update the 'inView' store with the provided text
				inView.set(sec);
			}
		});
	};

	$: {
		// When the component is mounted, initialize the Intersection Observer
		if (section && !observer) {
			observer = new IntersectionObserver(handleIntersection, options);
			observer.observe(section);
		}
	}
</script>

<div bind:this={section} class={className}>
	<slot></slot>
</div>

