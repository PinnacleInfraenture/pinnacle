<script>
	import SectionTitle from "./SectionTitle.svelte";
	import TestimonialCarousel from "./TestimonialCarousel.svelte";
	import Quotes from "$lib/assets/Quotes.svg"
	import YellowLines from "$lib/assets/yellowLines.svg";
	import IntersectionObserver from "./IntersectionObserver.svelte";

		let inView=false;
	import {inview} from "svelte-inview"
</script>

<div class=""
	use:inview={{
		threshold:0.5,
	}}
	on:inview_enter={()=>{
		inView=true;
	}}
	on:inview_leave={()=>{
		inView=false;
	}}>


<IntersectionObserver id="" classNames="w-full bg-greyBG py-32 relative px-10 md:pr-0 md:pl-32">
	<img src={YellowLines} alt="" class="absolute -top-40 z-10 left-5">
				<div class="max-md:grid max-md:place-items-center">

	<SectionTitle show={inView} title="Testimonials" />
		</div>
	<h4 class={`my-20 text-white font-medium text-md md:text-2xl ${inView?'opacity-100 translate-y-0':'translate-y-10 opacity-0'} delay-300 transition-[opacity,transform] duration-700 ease-in-out`}>Some of the impressions from our clients.</h4>
	<div class="py-20 md:pl-20 relative" style="background: linear-gradient(179.92deg, rgba(81, 81, 81, 0.3) 10.8%, rgba(81, 81, 81, 0) 90.21%);">
	<div class="max-sm:hidden absolute -top-10 -left-10 text-4xl p-8 bg-fadedGolden rounded-full">
		<img src={Quotes} class="h-10 w-10" alt="">
	</div>
	<TestimonialCarousel />
	</div>
</IntersectionObserver>
		</div>
