<script>
	import YellowLines from "$lib/assets/yellowLines.svg";
	import AboutUs from "$lib/assets/aboutus.png";
</script>
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
<div class="w-full bg-greyBG py-32 relative px-32 flex md:flex-row gap-x-10">
	<img src={YellowLines} alt="" class="absolute top-5 left-5">
<div class="md:w-[55%]">
	<h3 id='aboutus' class="font-semibold font-casta text-4xl relative">About Us</h3>
		<h4 class="font-medium text-white mt-14 text-2xl">Pinnacle is a rapidly growing, innovative engineering and construction company. With over 10+ years of experience in delivering exceptionally high standard construction projects, specializing in providing a comprehensive build and design, construction management, facility management and infrastructure services.</h4>
						<button class="bg-fadedGolden mt-10 text-2xl border-2 border-fadedGolden px-8 py-2 rounded-md text-white font-casta">Learn More</button>

		</div>
	<div class="md:w-[45%]">
		<img src={AboutUs} alt="About Us">
	</div>

</div>
<style>
	#aboutus{
	font-weight: 600;
	font-family: "Casta";
	color:transparent;
	-webkit-text-stroke: 1px #D8C691;
		font-size:60px;
		width:fit-content;
	}
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
	#aboutus:after{
	background: linear-gradient(to top, #333333,#333333,transparent);
		position:absolute;
		width:100%;
		top:15px;
	left:0;
		text-align: center;
		font-size:50px;
		font-weight:600;
		color:#D8C691;
		content:"About Us";
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
