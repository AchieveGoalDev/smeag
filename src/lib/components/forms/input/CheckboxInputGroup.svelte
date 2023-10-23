<script lang="ts">
  import { slide } from "svelte/transition";
  import type { CheckboxInput } from "$lib/forms/ApplicationData";

  export let data: CheckboxInput;

  export let value: boolean;

  let errorMessage: string[] = [];

  $: if (!value && data.isNecessary) {
    errorMessage.push("必要項目です");
  } else {
    errorMessage = [];
  }
</script>

<div class="my-2 w-full grid grid-cols-12 gap-0">
  <legend class="col-span-3 font-bold text-right pr-4 w-full h-full border-r">
    {#if data.isNecessary}
      <span class="text-red-500">*</span>
    {/if}
    {data.label}</legend
  >
  <fieldset class="pl-5 flex flex-col my-2 col-span-8">
    {#each data.choices as choice}
      <div class="flex flex-row space between">
        <input
          class="mr-3"
          bind:checked={value}
          value={choice}
          id={choice}
          type="checkbox"
          name={data.label}
        />
        <label class="mr-4" for={choice}>{choice}</label>
      </div>
    {/each}
    {#if errorMessage.length > 0}
      {#each errorMessage as error}
        <p transition:slide class="text-red-500 mx-auto my-1">{error}</p>
      {/each}
    {/if}
  </fieldset>
</div>
