<script>import Star from "$lib/assets/star.png"
import Cutu from "$lib/assets/person.png"
export let text='';
export let name='';
</script>
<div class="">
	<div class="flex flex-row">
	<div class="h-2 w-1/6 bg-fadedGolden"></div>
	<div class="h-2 w-5/6 bg-transparent"></div>
</div>
	<div class="bg-white pt-6 px-3 md:px-8">
		<div class="inline-flex gap-x-3">
			<img src={Star} alt="" class="w-4 md:w-6 h-4 md:h-6">
			<img src={Star} alt="" class="w-4 md:w-6 h-4 md:h-6">
			<img src={Star} alt="" class="w-4 md:w-6 h-4 md:h-6">
			<img src={Star} alt="" class="w-4 md:w-6 h-4 md:h-6">
			<img src={Star} alt="" class="w-4 md:w-6 h-4 md:h-6">

		</div>
		<p class="text-[9.5px] md:text-2xl py-4 md:py-8">{text}</p>
	</div>
		<div class="bg-fadedGolden px-3 md:px-8 py-3 md:py-5 inline-flex gap-x-5 items-center w-full">
<div class="">
	<h3 class="font-extrabold text-white text-[8px] md:text-xl">{name}</h3>
</div>
		</div>
</div>
