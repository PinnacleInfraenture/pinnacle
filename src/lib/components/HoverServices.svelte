<script>
	export let src='';
	export let alt='';
	export let hoverText="";
	export let showText=false;
</script>

<div class="group relative" on:click={()=>{
	if(window.innerWidth<=768){
		showText=!showText;
	}
}}

>
	<img src={src} alt={alt} class={`w-full group-hover:opacity-0 transition-all duration-500 ease-in-out h-full object-contain ${showText&&'opacity-0'}`}>
	<div 
		style="background: linear-gradient(180deg, rgba(0, 0, 0, 0.16) -88.12%, rgba(0, 0, 0, 0.8) 100%);"
		class={`absolute z-50 top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-500 grid place-items-center p-8 ease-in-out text-white text-md md:text-2xl ${showText && 'opacity-100' }`}>
		<p>{hoverText}</p>
	</div>
</div>

