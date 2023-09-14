<script>
	import SectionTitle from "./SectionTitle.svelte";
	import YellowLines from "$lib/assets/yellowLines.svg";
	import IntersectionObserver from "$lib/components/IntersectionObserver.svelte";
	import ContactUs from "$lib/assets/contactUs.png"

</script>


<IntersectionObserver id="contactus" sec='#contactus' className="w-full bg-greyBG py-32 flex flex-col md:flex-row items-stretch gap-x-20 relative pr-32">
	<div class="w-[40%]">
		<img src={ContactUs} class="w-full h-full object-cover" alt="Contact Us">
	</div>
	<img src={YellowLines} alt="" class="absolute top-5 right-5">
	<div class="flex h-full min-h-full  flex-col w-[60%] justify-between">
		<SectionTitle title="Contact Us" />
		<h4 class="text-white font-medium text-2xl mt-8">Any queries? Feel free to reach us.</h4>
		<form action="" class="flex flex-col gap-y-10 mt-10">
			<input class="px-10 py-4" placeholder="Name*">
			<input  class="px-10 py-4" placeholder="Email*">
			<textarea rows='8' class="px-10 py-4" placeholder="Message*" />
			<button type="submit" class="font-casta text-2xl px-6 w-fit py-3 rounded-lg border-2 border-fadedGolden text-fadedGolden">Get in Touch</button>
		</form>
	</div>
</IntersectionObserver>

