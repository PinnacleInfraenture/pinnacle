<script>
	import Section100Img from "$lib/assets/100section.png"
	import Services from "$lib/components/Services.svelte";
	import ContactUs from "$lib/components/ContactUs.svelte";
	import AboutUs from "$lib/components/AboutUs.svelte";
	import OurWorks from "$lib/components/OurWorks.svelte";
	import Testimonials from "$lib/components/Testimonials.svelte";
	import Home from "$lib/components/Home.svelte";
</script>
	<Home />
<AboutUs />
<div class="relative">
	<img src={Section100Img} alt="100%">
	<div class="absolute top-0 left-0 grid w-full h-full grid-cols-3 place-items-center place-content-center">
		<div class="">
			<h3 class="text-white font-bold text-md md:text-6xl text-center">
				100+
			</h3>
			<h4 class="text-medium text-[8px] md:text-3xl text-white text-center">Projects</h4>
		</div>
		<div class="">
			<h3 class="text-white font-bold text-md md:text-6xl text-center">
				100+
			</h3>
			<h4 class="text-medium text-[8px] md:text-3xl text-white text-center">Happy Customers</h4>
		</div>
		<div class="">
			<h3 class="text-white font-bold text-md md:text-6xl text-center">
				100%
			</h3>
			<h4 class="text-medium text-[8px] text-white md:text-3xl text-center">Efficiency</h4>
		</div>

	</div>
</div>
<Services />
<OurWorks />
<Testimonials />
<ContactUs />
