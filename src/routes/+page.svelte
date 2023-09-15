<script>
	import IntersectionObserver from "$lib/components/IntersectionObserver.svelte";
	import Section100Img from "$lib/assets/100section.png"
	import Services from "$lib/components/Services.svelte";
	import ContactUs from "$lib/components/ContactUs.svelte";
	import AboutUs from "$lib/components/AboutUs.svelte";
	import OurWorks from "$lib/components/OurWorks.svelte";
</script>
<IntersectionObserver id="home" classNames="">
	<div class="h-screen w-full bg-black/40 bg-cover animateBG bg-no-repeat grid place-items-center">
		<div class="">
			<h1 class="capitalize text-white font-casta text-[100px]">
				We redefine your
			</h1>
			<div class="h-[120px] overflow-hidden">
				<div class="font-casta text-fadedGolden animateText text-[100px]">
					<h2>Dream.</h2>
					<h2>Desire.</h2>
					<h2>Future.</h2>
				</div>
			</div>
			<h3 class="text-white text-2xl py-10 font-medium">Dreams are meant to come true, We’ll make it happen for you</h3>
			<div class="inline-flex gap-x-4">
				<button class="bg-fadedGolden text-2xl border-2 border-fadedGolden px-8 py-2 rounded-md text-white font-casta">Our Works</button>
				<button class="bg-transparent text-2xl border-fadedGolden border-2 px-8 py-2 rounded-md text-fadedGolden font-casta">Contact Us</button>
			</div>
		</div>
	</div>
</IntersectionObserver>
<AboutUs />
<div class="relative">
	<img src={Section100Img} alt="100%">
	<div class="absolute top-0 left-0 grid w-full h-full grid-cols-3 place-items-center place-content-center">
		<div class="">
			<h3 class="text-white font-bold text-6xl text-center">
				100+
			</h3>
			<h4 class="text-medium text-3xl text-white text-center">Projects</h4>
		</div>
		<div class="">
			<h3 class="text-white font-bold text-6xl text-center">
				100+
			</h3>
			<h4 class="text-medium text-3xl text-white text-center">Happy Customers</h4>
		</div>
		<div class="">
			<h3 class="text-white font-bold text-6xl text-center">
				100%
			</h3>
			<h4 class="text-medium text-white text-3xl text-center">Efficiency</h4>
		</div>

	</div>
</div>
<Services />
<OurWorks />
<ContactUs />
<style>
	@keyframes textScroll{
	0%{
		transform:translateY(0%);
	}
	10%{transform:translateY(0%)}
	40%{transform:translateY(-33%)}
	50%{transform:translateY(-33%)}
	80%{transform:translateY(-66%)}
	90%{transform:translateY(-66%)}
	100%{transform:translateY(0%)}
	}
		@keyframes bgAnimate{
		0%{
			background-image: url('$lib/assets/bg-1.png');
		}
		10%{
		background-image: url('$lib/assets/bg-1.png');
	}
	40%{
	background-image: url('$lib/assets/bg-2.png');
	}
	50%{
		background-image: url('$lib/assets/bg-2.png');
	}
	80%{
	background-image: url('$lib/assets/bg-3.png');
	}
	90%{
		background-image: url('$lib/assets/bg-3.png');
	}
	100%{
	background-image: url('$lib/assets/bg-1.png');
	}
	}
	.animateText{
		transform:translateY(-33%);
		animation: textScroll 5s ease-in-out infinite forwards;
		}
		.animateBG{
			transition: background-image 1s ease-in-out;
			animation:bgAnimate 5s ease-in-out infinite forwards

	}
</style>
