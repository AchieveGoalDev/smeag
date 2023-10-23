<script lang="ts">
  import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";

  import { fly } from "svelte/transition";
  import type { ImageSelectChoice } from "../data/typeDefs";

  export let selection: string;
  export let choices: ImageSelectChoice[];

  let index = 0;
  const s3 = PUBLIC_IMAGE_BUCKET_URL;

  function handleIndex(currentSelection: string) {
    if (currentSelection) {
      choices.forEach((choice) => {
        if (choice.value === currentSelection) {
          index = choices.indexOf(choice);
        }
      });
    }
    if (!currentSelection) {
      index = 0;
    }
  }

  $: handleIndex(selection);
</script>

<div class="grid grid-rows-1 grid-cols-1 relative">
  {#each [choices[index]] as src (index)}
    <img
      transition:fly
      src={s3 + src.imageUrl}
      alt={src.imageAlt}
      class="w-auto col-span-full row-span-full"
    />
    {#if src.bottomText}
      <div
        transition:fly
        class="flex h-[30px] absolute inset-x-0 bottom-0 w-full z-30"
      >
        <div
          class="pl-4 bg-rose-800 h-full opacity-100 color-white text-center text-white font-bold text-lg sm:text-2xl w-full"
        >
          <p>{src.bottomText}</p>
        </div>
        <div
          class="bg-gradient-to-r from-rose-800 to-transparent h-full w-full"
        />
      </div>
    {/if}
  {/each}
</div>
