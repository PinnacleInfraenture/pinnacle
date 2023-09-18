<script>
import Logo from "$lib/assets/logo.svg";
import {inView} from "../../stores/inViewStore";
$: console.log($inView)
</script>
<nav class={`border-b bg-transparent justify-between flex flex-row border-[#D2D2D259] items-center h-28 w-full`}>
	<img src={Logo} alt="Logo" class="h-20 my-4">
	<ul class="inline-flex items-center gap-x-7 h-full min-h-full font-casta font-medium">
		<li class="relative h-full text-center grid place-items-center">
			<a href="#home" class={`${$inView==="#home"?"text-fadedGolden":"text-white"} transition-colors duration-500 ease-in-out`}>Home</a>
			<div class={`${$inView==="#home"?"opacity-1" : "opacity-0"} absolute bottom-0 left-0 rounded-t-xl bg-fadedGolden w-full h-1 transition-all duration-500 ease-in-out`}></div>
		</li>
		<li class="relative h-full text-center grid place-items-center">
			<a href="#aboutus" class={`${$inView==="#aboutus"?"text-fadedGolden":"text-white"} transition-colors duration-500 ease-in-out`}>About Us</a>
			<div class={`${$inView==="#aboutus"?"opacity-1" : "opacity-0"} absolute bottom-0 left-0 rounded-t-xl bg-fadedGolden w-full h-1 transition-all duration-500 ease-in-out`}></div>
		</li>
		<li class="relative h-full text-center grid place-items-center">
			<a href="#services" class={`${$inView==="#services"?"text-fadedGolden":"text-white"} transition-colors duration-500 ease-in-out`}>Services</a>
			<div class={`${$inView==="#services"?"opacity-1" : "opacity-0"} absolute bottom-0 left-0 rounded-t-xl bg-fadedGolden w-full h-1 transition-all duration-500 ease-in-out`}></div>
		</li>
		<li class="relative h-full text-center grid place-items-center">
			<a href="#ourworks" class={`${$inView==="#ourworks"?"text-fadedGolden":"text-white"} transition-colors duration-500 ease-in-out`}>Our Works</a>
			<div class={`${$inView==="#ourworks"?"opacity-1" : "opacity-0"} absolute bottom-0 left-0 rounded-t-xl bg-fadedGolden w-full h-1 transition-all duration-500 ease-in-out`}></div>
		</li>
		<li class="relative h-full text-center grid place-items-center">
			<a href="#contactus" class={`${$inView==="#contactus"?"text-fadedGolden":"text-white"} transition-colors duration-500 ease-in-out`}>Contact Us</a>
			<div class={`${$inView==="#contactus"?"opacity-1" : "opacity-0"} absolute bottom-0 left-0 rounded-t-xl bg-fadedGolden w-full h-1 transition-all duration-500 ease-in-out`}></div>
		</li>
	</ul>
</nav>
