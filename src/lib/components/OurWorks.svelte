<script lang="ts">
	import YellowDots from "$lib/assets/yellowdots.png";
	import IntersectionObserver from "$lib/components/IntersectionObserver.svelte";
	import SectionTitle from "./SectionTitle.svelte";
	import {loadImagePaths} from "../../utils/getGalleryImages";
	import ArrowRight from "$lib/assets/arrowRight.png"
	import { onMount } from "svelte";
	let imagePaths:string[] = [];
	onMount(async ()=>{
		imagePaths = await loadImagePaths();
	})
	function rotateArray(arr:string[], positions=5) {
  if (arr.length === 0 || positions === 0) {
    return arr;
  }

  const n = arr.length;
  const normalizedPositions = ((positions % n) + n) % n;

  return [...arr.slice(normalizedPositions), ...arr.slice(0, normalizedPositions)];
}


</script>

<IntersectionObserver id="ourworks" classNames="w-full bg-greyBG py-32 relative px-32">
	<img src={YellowDots} alt="Yellow Dots" class="absolute top-0 right-0">
	<SectionTitle title="Our Works" />
	<h4 class="font-medium text-2xl text-white my-20">Here are our recent building projects.</h4>
	<div class="grid grid-cols-2 gap-x-10 mt-10 relative">
		<button on:click={
			()=>imagePaths=rotateArray(imagePaths,-5)
		} class="absolute top-1/2 bottom-1/2 -left-20">
		<img src={ArrowRight} alt="" class="h-16 rotate-180">
		</button>
		<button on:click={
			()=>imagePaths=rotateArray(imagePaths,5)
		} class="absolute top-1/2 bottom-1/2 -right-20">
		<img src={ArrowRight} alt="" class="h-16">
		</button>
		<img src={imagePaths[0]} alt="Our Works" class="w-full h-full object-cover z-30" />
		<div class="grid grid-cols-2 gap-5">
		<div class="w-full h-full aspect-square">
			<img src={imagePaths[1]} alt="" class="w-full h-full object-cover z-30">
		</div>
		<div class="w-full h-full aspect-square">
			<img src={imagePaths[2]} alt="" class="w-full h-full object-cover z-30">
		</div>
		<div class="w-full h-full aspect-square">
			<img src={imagePaths[3]} alt="" class="w-full h-full object-cover z-30">
		</div>
		<div class="w-full h-full aspect-square">
			<img src={imagePaths[4]} alt="" class="w-full h-full object-cover z-30">
		</div>
	</div>
	</div>
	<!-- {#each imagePaths as imagePath}
    <img src={imagePath} alt="Our Works" />
  {/each} -->
</IntersectionObserver>