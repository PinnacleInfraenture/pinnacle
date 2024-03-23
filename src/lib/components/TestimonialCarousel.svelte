<script lang="ts">
  import ReviewCard from "./ReviewCard.svelte";
  import Carousel from 'svelte-carousel';
  import { browser } from '$app/environment';
  import WhiteRight from "$lib/assets/whiteRight.svg"
  let carousel:any;
  const data =[
    {
      text:'The attention to detail and the quality of work is outstanding. Their team was professional, attentive, and truly understood our needs. We couldn\'t be happier.',
name:'Nancy Marks'},

    {
text:'Our experience from start to finish was seamless, and the end result was a stunning house that we are proud to call our home. Thank you, Sharan and team, for your exceptional work.',
name:'Reena Freddie'
    },
    {
      text:'The attention to detail and the quality of work is outstanding. Their team was professional, attentive, and truly understood our needs. We couldn\'t be happier.',
name:'Nancy Marks'},

    {
text:'Our experience from start to finish was seamless, and the end result was a stunning house that we are proud to call our home. Thank you, Sharan and team, for your exceptional work.',
name:'Reena Freddie'
    },
    {
      text:'The attention to detail and the quality of work is outstanding. Their team was professional, attentive, and truly understood our needs. We couldn\'t be happier.',
name:'Nancy Marks'},

    {
text:'Our experience from start to finish was seamless, and the end result was a stunning house that we are proud to call our home. Thank you, Sharan and team, for your exceptional work.',
name:'Reena Freddie'
    },
    {
      text:'The attention to detail and the quality of work is outstanding. Their team was professional, attentive, and truly understood our needs. We couldn\'t be happier.',
name:'Nancy Marks'},

    {
text:'Our experience from start to finish was seamless, and the end result was a stunning house that we are proud to call our home. Thank you, Sharan and team, for your exceptional work.',
name:'Reena Freddie'
    },
  ]
</script>

{#if browser}
<div class="relative">
  <Carousel
  let:currentPageIndex
  autoplay
  autoplayDuration={2000}
  particlesToShow={1.3}
  duration={1000}
  dots={false}

    bind:this={carousel}
  >
  {#each data as item,idx}
    <div class={`transition-all duration-500 ease-in-out ${currentPageIndex!==idx&&"scale-90"}`}>
		<ReviewCard text={item.text} name={item.name} />
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


