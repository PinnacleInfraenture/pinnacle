<script>
import Logo from "$lib/assets/logo.svg";
import {inView} from "../../stores/inViewStore";
import MobileHamburger from "$lib/assets/mobileHamburger.svg"
    import { fade,fly } from 'svelte/transition'
let hamburger=false;
$: console.log($inView)
</script>
<nav class={`md:border-b bg-transparent justify-between flex flex-row border-[#D2D2D259] items-center max-md:mt-5 md:h-28 w-full relative`}>

	<div class="">
	<img src={Logo} alt="Logo" class="h-14 md:h-20">
			</div>

	<button class="md:hidden" on:click={()=>{
		hamburger=!hamburger;
	}}>
		<img src={MobileHamburger} alt="" class="w-6">
	</button>
	{#if hamburger}
		<ul in:fade out:fly class="w-full md:hidden absolute backdrop-blur-md py-2 top-full items-end right-0 flex flex-col gap-y-2">
		<li class="relative h-full text-center grid place-items-center">
			<a href="#home" class={`${$inView==="home"?"text-fadedGolden":"text-white"} transition-colors duration-500 ease-in-out`}>Home</a>
			<div class={`${$inView==="#home"?"opacity-100" : "opacity-0"} absolute bottom-0 left-0 rounded-t-xl bg-fadedGolden w-full h-1 transition-all duration-500 ease-in-out`}></div>
		</li>
		<li class="relative h-full text-center grid place-items-center">
			<a href="#aboutus" class={`${$inView==="aboutus"?"text-fadedGolden":"text-white"} transition-colors duration-500 ease-in-out`}>About Us</a>
			<div class={`${$inView==="aboutus"?"opacity-100" : "opacity-0"} absolute bottom-0 left-0 rounded-t-xl bg-fadedGolden w-full h-1 transition-all duration-500 ease-in-out`}></div>
		</li>
		<li class="relative h-full text-center grid place-items-center">
			<a href="#services" class={`${$inView==="services"?"text-fadedGolden":"text-white"} transition-colors duration-500 ease-in-out`}>Services</a>
			<div class={`${$inView==="services"?"opacity-100" : "opacity-0"} absolute bottom-0 left-0 rounded-t-xl bg-fadedGolden w-full h-1 transition-all duration-500 ease-in-out`}></div>
		</li>
		<li class="relative h-full text-center grid place-items-center">
			<a href="#ourworks" class={`${$inView==="ourworks"?"text-fadedGolden":"text-white"} transition-colors duration-500 ease-in-out`}>Our Works</a>
			<div class={`${$inView==="ourworks"?"opacity-100" : "opacity-0"} absolute bottom-0 left-0 rounded-t-xl bg-fadedGolden w-full h-1 transition-all duration-500 ease-in-out`}></div>
		</li>
		<li class="relative h-full text-center grid place-items-center">
			<a href="#contactus" class={`${$inView==="contactus"?"text-fadedGolden":"text-white"} transition-colors duration-500 ease-in-out`}>Contact Us</a>
			<div class={`${$inView==="contactus"?"opacity-100" : "opacity-0"} absolute bottom-0 left-0 rounded-t-xl bg-fadedGolden w-full h-1 transition-all duration-500 ease-in-out`}></div>
		</li>
		</ul>
	{/if}

	<ul class="max-md:hidden inline-flex items-center gap-x-7 h-full min-h-full font-casta font-medium">
		<li class="relative h-full text-center grid place-items-center">
			<a href="#home" class={`${$inView==="home"?"text-fadedGolden":"text-white"} transition-colors duration-500 ease-in-out`}>Home</a>
			<div class={`${$inView==="home"?"opacity-100" : "opacity-0"} absolute bottom-0 left-0 rounded-t-xl bg-fadedGolden w-full h-1 transition-all duration-500 ease-in-out`}></div>
		</li>
		<li class="relative h-full text-center grid place-items-center">
			<a href="#aboutus" class={`${$inView==="aboutus"?"text-fadedGolden":"text-white"} transition-colors duration-500 ease-in-out`}>About Us</a>
			<div class={`${$inView==="aboutus"?"opacity-100" : "opacity-0"} absolute bottom-0 left-0 rounded-t-xl bg-fadedGolden w-full h-1 transition-all duration-500 ease-in-out`}></div>
		</li>
		<li class="relative h-full text-center grid place-items-center">
			<a href="#services" class={`${$inView==="services"?"text-fadedGolden":"text-white"} transition-colors duration-500 ease-in-out`}>Services</a>
			<div class={`${$inView==="services"?"opacity-100" : "opacity-0"} absolute bottom-0 left-0 rounded-t-xl bg-fadedGolden w-full h-1 transition-all duration-500 ease-in-out`}></div>
		</li>
		<li class="relative h-full text-center grid place-items-center">
			<a href="#ourworks" class={`${$inView==="ourworks"?"text-fadedGolden":"text-white"} transition-colors duration-500 ease-in-out`}>Our Works</a>
			<div class={`${$inView==="ourworks"?"opacity-100" : "opacity-0"} absolute bottom-0 left-0 rounded-t-xl bg-fadedGolden w-full h-1 transition-all duration-500 ease-in-out`}></div>
		</li>
		<li class="relative h-full text-center grid place-items-center">
			<a href="#contactus" class={`${$inView==="contactus"?"text-fadedGolden":"text-white"} transition-colors duration-500 ease-in-out`}>Contact Us</a>
			<div class={`${$inView==="contactus"?"opacity-100" : "opacity-0"} absolute bottom-0 left-0 rounded-t-xl bg-fadedGolden w-full h-1 transition-all duration-500 ease-in-out`}></div>
		</li>
	</ul>
</nav>
