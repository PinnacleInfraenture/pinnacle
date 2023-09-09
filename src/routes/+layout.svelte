<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { onMount } from 'svelte';
	import '../app.postcss';
	let top=true;

	function scrollDetect(){
		if(window.scrollY<50)
		top=true;
		else
		top=false;
	}
	onMount(()=>{document.addEventListener('scroll',scrollDetect);
return ()=>document.removeEventListener('scroll',scrollDetect)
})


</script>

<svelte:head>
	<title>Pinnacle</title> 
</svelte:head>

<div class={`fixed top-0 left-0 w-full z-50 px-32 ${!top? "backdrop-blur-md":""}`}>
	<Navbar />
</div>
<slot />
<Footer />
