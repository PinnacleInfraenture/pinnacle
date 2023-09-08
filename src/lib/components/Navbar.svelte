<script>
import Logo from "$lib/assets/logo.svg";
import {inView} from ".././../stores/inViewStore";
</script>
<nav class="border-b bg-transparent justify-between flex flex-row border-[#D2D2D259] w-full">
	<img src={Logo} alt="Logo" class="h-32">
	<ul class="inline-flex items-center gap-x-4 font-casta font-medium">
		<li class="relative h-full text-center grid place-items-center">
			<a href="#home" class={`${$inView==="#home"?"text-fadedGolden":"text-white"}`}>Home</a>
			<div class={`${$inView==="#home"?"absolute bottom-0 left-0" : "hidden"} rounded-t-xl bg-fadedGolden w-full h-1`}></div>
		</li>
		<li class="relative h-full text-center grid place-items-center">
			<a href="#aboutus" class={`${$inView==="#aboutus"?"text-fadedGolden":"text-white"}`}>About Us</a>
			<div class={`${$inView==="#aboutus"?"absolute bottom-0 left-0" : "hidden"} rounded-t-xl bg-fadedGolden w-full h-1`}></div>
		</li>
		<li class="relative h-full text-center grid place-items-center">
			<a href="#services" class={`${$inView==="#services"?"text-fadedGolden":"text-white"}`}>Services</a>
			<div class={`${$inView==="#services"?"absolute bottom-0 left-0" : "hidden"} rounded-t-xl bg-fadedGolden w-full h-1`}></div>
		</li>
		<li class="relative h-full text-center grid place-items-center">
			<a href="#ourworks" class={`${$inView==="#ourworks"?"text-fadedGolden":"text-white"}`}>Our Works</a>
			<div class={`${$inView==="#ourworks"?"absolute bottom-0 left-0" : "hidden"} rounded-t-xl bg-fadedGolden w-full h-1`}></div>
		</li>
		<li class="relative h-full text-center grid place-items-center">
			<a href="#contactus" class={`${$inView==="#contactus"?"text-fadedGolden":"text-white"}`}>Contact Us</a>
			<div class={`${$inView==="#contactus"?"absolute bottom-0 left-0" : "hidden"} rounded-t-xl bg-fadedGolden w-full h-1`}></div>
		</li>
	</ul>
</nav>
