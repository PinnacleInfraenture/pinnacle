<script>

	import IntersectionObserver from "./IntersectionObserver.svelte";

</script>
<div id="home">
	<div class="h-screen w-full bg-black/40 bg-cover animateBG bg-no-repeat grid place-items-center max-md:px-10">
		<div class="">
			<h1 class="capitalize text-white font-casta text-[42px] md:text-[100px]">
				Exceptional
			</h1>
			<div class="h-[48px] md:h-[120px] overflow-hidden">
				<div class="font-casta text-fadedGolden animateText text-[42px] md:text-[100px]">
					<h2>Dreams</h2>
					<h2>Homes</h2>
					<h2>Experiences</h2>
				</div>
			</div>
			<h3 class="text-white text-base md:text-2xl py-5 md:py-10 font-medium">
				Your Blueprint to Happiness.
			</h3>
			<div class="inline-flex gap-x-4">
				<a href="#portfolio" class="bg-fadedGolden text-md md:text-2xl border-2 border-fadedGolden px-5 md:px-8 py-2 rounded-md text-white font-casta">Portfolio</a>
				<button class="bg-transparent text-md md:text-2xl border-fadedGolden border-2 px-5 md:px-8 py-2 rounded-md text-fadedGolden font-casta">Contact Us</button>
			</div>
		</div>
	</div>
</div>
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
			background-image: url('$lib/assets/bg-1.webp');
		}
		10%{
		background-image: url('$lib/assets/bg-1.webp');
	}
	40%{
	background-image: url('$lib/assets/bg-2.webp');
	}
	50%{
		background-image: url('$lib/assets/bg-2.webp');
	}
	80%{
	background-image: url('$lib/assets/bg-3.webp');
	}
	90%{
		background-image: url('$lib/assets/bg-3.webp');
	}
	100%{
	background-image: url('$lib/assets/bg-1.webp');
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
