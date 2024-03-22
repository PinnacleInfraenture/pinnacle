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
		<HoverServices src={HomeConstruction} alt="Construction Contractor" hoverText="As reputable home construction contractors, we understand the importance of delivering top-notch quality in every project. We deliver superior house construction, backed by a deep understanding of the local housing market and a team of experienced house construction contractors." />
		<HoverServices src={Planning} alt="Precision Planning" hoverText="Count on Pinnacle Infraventure for unparalleled expertise in planning your dream home. As leading building contractors in Bangalore, we tailor our services to your unique vision, offering accurate house construction cost, transparent house building estimates, and meticulous planning to make your dream a reality." />
		<HoverServices src={Renovation} alt="Renovation" hoverText="Looking to refresh your living space? Our team of experienced home renovation contractors is equipped to provide top-notch renovation services. Our seasoned team understands the dynamics of house renovation in Bangalore. With meticulous planning and execution, we breathe new life into your cherished space.
" />
	</div>
</IntersectionObserver>

