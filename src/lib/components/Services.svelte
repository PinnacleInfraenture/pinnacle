<script>
	import YellowLines from "$lib/assets/yellowLines.svg";
	import IntersectionObserver from "$lib/components/IntersectionObserver.svelte";
	import SectionTitle from "./SectionTitle.svelte";
	import HomeConstruction from "$lib/assets/services/service1.png"
	import Planning from "$lib/assets/services/service2.png"
	import Renovation from "$lib/assets/services/service3.png"
	import HoverServices from "./HoverServices.svelte";

</script>
<IntersectionObserver id="services" classNames="w-full bg-greyBG py-32 relative px-10 md:px-32">
	<img src={YellowLines} alt="" class="absolute top-5 right-5">
				<div class="max-md:grid max-md:place-items-center">

	<SectionTitle title="Services" />
		</div>
	<h4 class="font-medium text-white my-14 text-md md:text-2xl">Our ability to deliver quality services has grown over the years because of experienced workforce.</h4> <div class="grid grid-cols-1 md:grid-cols-3 max-md:gap-y-10 md:gap-x-12">
		<HoverServices src={HomeConstruction} alt="Home Construction" hoverText="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." />
		<HoverServices src={Planning} alt="Planning" hoverText="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." />
		<HoverServices src={Renovation} alt="Renovation" hoverText="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat." />
	</div>
</IntersectionObserver>

