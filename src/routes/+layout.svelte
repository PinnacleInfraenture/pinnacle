<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.postcss';
</script>

<svelte:head>
	<title>Pinnacle</title> 
</svelte:head>

<div class="fixed top-0 left-0 w-full px-32">
	<Navbar />
</div>
<slot />
<Footer />
