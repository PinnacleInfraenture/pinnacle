<script>
	import SectionTitle from "./SectionTitle.svelte";
	import YellowLines from "$lib/assets/yellowLines.svg";
	import IntersectionObserver from "$lib/components/IntersectionObserver.svelte";
	import ContactUs from "$lib/assets/contactUs.png"

</script>


<IntersectionObserver id="contactus" classNames="w-full bg-greyBG py-32 flex flex-col md:flex-row items-stretch gap-x-20 relative max-md:px-10 md:pr-32">
	<div class="max-md:hidden md:w-[40%]">
		<img src={ContactUs} class="w-full h-full object-cover" alt="Contact Us">
	</div>
	<img src={YellowLines} alt="" class="absolute -top-40 right-5">
	<div class="flex h-full min-h-full  flex-col w-full md:w-[60%] justify-between">
				<div class="max-md:grid max-md:place-items-center">
		<SectionTitle title="Contact Us" />
			</div>
		<h4 class="text-white font-bold text-lg max-md:text-center md:text-3xl mt-8">
			Let's Begin Your Dream Project

		</h4>
		<h4 class="text-white/80 font-medium text-sm max-md:text-center md:text-xl mt-8">Ready to take the next step in your housing project? Contact us today to discuss your requirements and receive a detailed house building estimate. </h4>
		<form action="" class="flex flex-col gap-y-10 mt-10">
			<input class="px-10 py-4" placeholder="Name*">
			<input  class="px-10 py-4" placeholder="Email*">
			<textarea rows='8' class="px-10 py-4" placeholder="Message*" />
			

				<div class="max-md:grid max-md:place-items-center">
			<button type="submit" class="font-casta text-md md:text-2xl px-6 w-fit py-3 rounded-lg border-2 border-fadedGolden text-fadedGolden">Get in Touch</button>
				</div>
		</form>
	</div>
</IntersectionObserver>

