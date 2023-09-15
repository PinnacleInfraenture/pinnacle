<script>
	import YellowLines from "$lib/assets/yellowLines.svg";
	import AboutUs from "$lib/assets/aboutus.png";
	import {inview} from "svelte-inview";
	import {inView} from "../../stores/inViewStore";
	import SectionTitle from "$lib/components/SectionTitle.svelte";
	import IntersectionObserver from "./IntersectionObserver.svelte";


</script>
 <IntersectionObserver id="aboutus" classNames="w-full bg-greyBG py-32 relative px-32 flex md:flex-row gap-x-10">
	<img src={YellowLines} alt="" class="absolute top-5 left-5">
	<div class="md:w-[55%]">
		<SectionTitle title="About Us" />
		<h4 class="font-medium text-white mt-14 text-2xl">Pinnacle is a rapidly growing, innovative engineering and construction company. With over 10+ years of experience in delivering exceptionally high standard construction projects, specializing in providing a comprehensive build and design, construction management, facility management and infrastructure services.</h4>
		<button class="bg-fadedGolden mt-10 text-2xl border-2 border-fadedGolden px-8 py-2 rounded-md text-white font-casta">Learn More</button>

	</div>
	<div class="md:w-[45%]">
		<img src={AboutUs} alt="About Us">
	</div>
 </IntersectionObserver>
