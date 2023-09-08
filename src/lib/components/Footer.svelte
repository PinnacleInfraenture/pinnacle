<script>
	import Logo from "$lib/assets/logo.png"
	import Instagram from "$lib/assets/icons/insta.png"
	import Facebook from "$lib/assets/icons/fb.png"
	import LinkedIn from "$lib/assets/icons/linkedin.png"
</script>
<footer class="w-full bg-fadedGolden">
	<div class="flex flex-col md:flex-row items-start justify-between gap-x-10  px-32 py-20">
		<div class="md:w-1/3">
			<img src={Logo} alt="Logo" class="-my-14" />
			<p class="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum facilis soluta nisi totam omnis, deserunt necessitatibus dolores officia voluptatum laboriosam.</p>
		</div>
		<div class="md:w-1/3 grid place-items-center">
			<div class="">
				<h3 class="font-semibold text-2xl">Website Links</h3>
				<ul class="mt-8 space-y-6 font-medium text-muted">
				<li><a href="#home">Home</a></li>
					<li><a href="#aboutus">About Us</a></li>
					<li><a href="#services">Services</a></li>
					<li><a href="#ourworks">Our Works</a></li>
					<li><a href="#contactus">Contact Us</a></li>
			</ul></div>
		</div>
		<div class="md:w-1/3">
			<h3 class="font-semibold text-2xl">Location</h3>
			<p class="text-2xl mt-10 font-mormal text-muted">5123 Market St. #22B Charlottesville, California 44635</p>
			<div class="flex flex-col">
				<a href="tel:+911234567890" class="text-md text-[#0A142F] border-b border-[#0081FE] my-6 w-fit">+911234567890</a>
				<a href="mail:contact@pinnacle.com" class="text-md text-[#0A142F] border-b border-[#0081FE] w-fit">contact@pinnacle.com</a>
			</div>
		</div>

	</div>
	<div class="border-t border-white w-full px-32 py-5 flex flex-row justify-between items-center">
		<div class="inline-flex gap-x-8">
			<img src={Facebook} alt="Facebook Logo" class="h-10 w-10">
			<img src={Instagram} alt="Instagram Logo" class="h-10 w-10">
			<img src={LinkedIn} alt="LinkedIn Logo" class="h-10 w-10">
		</div>
		<p class="text-muted text-xl">All Rights Reserved &copy; 2023</p>

	</div>
</footer>
