<script lang="ts">
	import YellowDots from "$lib/assets/yellowdots.png";
	import IntersectionObserver from "$lib/components/IntersectionObserver.svelte";
	import SectionTitle from "./SectionTitle.svelte";
	import {loadImagePaths} from "../../utils/getGalleryImages";
	import ArrowRight from "$lib/assets/arrowRight.png"
	import { onMount } from "svelte";
	let imagePaths:string[] = [];
	onMount(async ()=>{
		const temp = await loadImagePaths();
		imagePaths = temp.map(x=>x.replace("/static",""))
	})
	function rotateArray(arr:string[], positions = 5) {
		if (arr.length === 0 || positions === 0) {
			return arr;
		}

		const n = arr.length;
		const normalizedPositions = ((positions % n) + n) % n;

		// Instead of using array slices, we'll create a new array without modifying the original.
		const rotatedArray = [];
		for (let i = normalizedPositions; i < n; i++) {
			rotatedArray.push(arr[i]);
		}
		for (let i = 0; i < normalizedPositions; i++) {
			rotatedArray.push(arr[i]);
		}

		return rotatedArray;
	}

</script>

<IntersectionObserver id="portfolio" classNames="w-full bg-greyBG py-10 relative px-10 md:px-32">
	<img src={YellowDots} alt="Yellow Dots" class="absolute top-0 right-0">
				<div class="max-md:grid max-md:place-items-center">
	<SectionTitle title="Portfolio" />
		</div>
	<h4 class="font-medium text-md md:text-2xl text-white my-5 md:my-20">Our extensive portfolio of successful projects showcases our ability to bring your dream home to life.</h4>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 mt-10 gap-y-5 relative md:h-[80vh]">
		<button on:click={
			()=>imagePaths=rotateArray(imagePaths,-5)
			} class="max-md:hidden absolute top-1/2 bottom-1/2 -left-20">
			<img src={ArrowRight} alt="" class="h-16 rotate-180">
		</button>
		<button on:click={
			()=>imagePaths=rotateArray(imagePaths,5)
			} class="max-md:hidden absolute top-1/2 bottom-1/2 -right-20">
			<img src={ArrowRight} alt="" class="h-16">
		</button>
		<div class="w-full h-full min-h-full">
			<img src={imagePaths[0]} alt="Portfolio" class="w-full h-full object-cover z-30" />
		</div>
		<div class="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-5">
			<div class="w-full h-full aspect-square">
				<img src={imagePaths[1]} alt="" class="w-full h-full aspect-square object-cover z-30">
			</div>
			<div class="w-full h-full aspect-square">
				<img src={imagePaths[2]} alt="" class="w-full h-full aspect-square object-cover z-30">
			</div>
			<div class="w-full h-full aspect-square">
				<img src={imagePaths[3]} alt="" class="w-full h-full aspect-square object-cover z-30">
			</div>
			<div class="w-full h-full aspect-square">
				<img src={imagePaths[4]} alt="" class="w-full h-full aspect-square object-cover z-30">
			</div>
		</div>
	</div>
	<div class="md:hidden grid place-items-center mt-4">
					<button on:click={()=>{
						imagePaths=rotateArray(imagePaths,5)
					}} class="font-casta text-md px-6 w-fit py-3 rounded-lg border-2 border-fadedGolden z-30 text-fadedGolden">Load More</button>

	</div>
</IntersectionObserver>
