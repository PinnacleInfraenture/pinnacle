<script>
	import SectionTitle from "./SectionTitle.svelte";
	import TestimonialCarousel from "./TestimonialCarousel.svelte";
	import Quotes from "$lib/assets/Quotes.svg"
	import YellowLines from "$lib/assets/yellowLines.svg";
</script>

<div class="w-full bg-greyBG py-32 relative px-10 md:pr-0 md:pl-32">
	<img src={YellowLines} alt="" class="absolute -top-40 z-10 left-5">
	<SectionTitle title="Testimonials" />
	<h4 class="my-20 text-white font-medium text-md md:text-2xl">Some of the impressions from our clients.</h4>
	<div class="py-20 md:pl-20 relative" style="background: linear-gradient(179.92deg, rgba(81, 81, 81, 0.3) 10.8%, rgba(81, 81, 81, 0) 90.21%);">
	<div class="max-sm:hidden absolute -top-10 -left-10 text-4xl p-8 bg-fadedGolden rounded-full">
		<img src={Quotes} class="h-10 w-10" alt="">
	</div>
	<TestimonialCarousel />
	</div>
</div>
