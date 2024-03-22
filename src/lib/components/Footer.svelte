<script>
	import Logo from "$lib/assets/logo.png"
	import Instagram from "$lib/assets/icons/insta.png"
	import Facebook from "$lib/assets/icons/fb.png"
	import LinkedIn from "$lib/assets/icons/linkedin.png"
</script>
<footer class="w-full bg-fadedGolden">
	<div class="flex flex-col md:flex-row items-start justify-between gap-x-10 px-10 md:px-32 py-5 md:py-20">
		<div class="md:w-1/3 max-md:flex max-md:flex-col">
			<img src={Logo} alt="Logo" class="md:-my-14" />
			<p class="text-muted max-md:text-xs max-md:text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum facilis soluta nisi totam omnis, deserunt necessitatibus dolores officia voluptatum laboriosam.</p>
		</div>
		<div class="w-full md:w-1/3 grid place-items-center">
			<div class="w-full">
				<h3 class="max-md:hidden font-semibold text-2xl">Website Links</h3>
				<ul class="mt-8 md:space-y-6 max-md:flex max-md:flex-row w-full max-md:items-center max-md:justify-between max-md:text-xs font-medium text-muted">
				<li class=""><a href="#home">Home</a></li>
					<li class="md:hidden">|</li>
				<li class=""><a href="#aboutus">About Us</a></li>
					<li class="md:hidden">|</li>
					<li><a href="#services">Services</a></li>
					<li class="md:hidden">|</li>
					<li><a href="#portfolio">Portfolio</a></li>
					<li class="md:hidden">|</li>
					<li><a href="#contactus">Contact Us</a></li>
			</ul></div>
		</div>

		<div class="md:w-1/3 max-md:mt-5">
			<h3 class="font-semibold text-md md:text-2xl">Location</h3>
			<p class="text-md md:text-2xl mt-4 md:mt-10 font-mormal text-muted">5123 Market St. #22B Charlottesville, California 44635</p>
			<div class="flex flex-col">
				<a href="tel:+911234567890" class="text-[10px] md:text-md text-[#0A142F] border-b border-[#0081FE] my-6 w-fit">+911234567890</a>
				<a href="mail:contact@pinnacle.com" class="text-[10px] md:text-md text-[#0A142F] border-b border-[#0081FE] w-fit">contact@pinnacle.com</a>
			</div>
		</div>

	</div>
	<div class="border-t border-white w-full px-10 md:px-32 py-5 flex flex-row justify-between items-center">
		<div class="inline-flex gap-x-4 md:gap-x-8">
			<img src={Facebook} alt="Facebook Logo" class="w-7 h-7 md:h-10 md:w-10">
			<img src={Instagram} alt="Instagram Logo" class="w-7 h-7 md:h-10 md:w-10">
			<img src={LinkedIn} alt="LinkedIn Logo" class="w-7 h-7 md:h-10 md:w-10">
		</div>
		<p class="text-muted text-[9px] md:text-xl">All Rights Reserved &copy; 2023</p>

	</div>
</footer>
