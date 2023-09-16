<script>
	import ReviewCard from "./ReviewCard.svelte";
  import Carousel from 'svelte-carousel';
  import { browser } from '$app/environment';
  import WhiteRight from "$lib/assets/whiteRight.svg"
  let carousel;
  const data=[1,2,3,4,5]
</script>

{#if browser}
<div class="relative">
  <Carousel
  let:currentPageIndex
  autoplay
  autoplayDuration={2000}
  particlesToShow={1.5}
  duration={1000}
  dots={false}

    bind:this={carousel}
  >
  {#each data as item,idx}
    <div class={`transition-all duration-500 ease-in-out ${currentPageIndex!==idx&&"scale-90"}`}>
		<ReviewCard />
      </div>
      {/each}
      <div slot="prev" class="absolute -bottom-16 left-0">
        <button on:click={()=>carousel.goToPrev()} class={`w-10 h-10 bg-fadedGolden rounded-full grid place-items-center`}>
          <img src={WhiteRight} alt="" class="rotate-180" />
        </button>
      </div>
      <div slot="next" class="absolute left-20 -bottom-16">
        <button on:click={()=>carousel.goToNext()} class={`w-10 h-10 bg-fadedGolden rounded-full grid place-items-center`}>
          <img src={WhiteRight} alt="" class="" />
        </button>
      </div>

  </Carousel>
</div>
{/if}


