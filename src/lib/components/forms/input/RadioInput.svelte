<script lang="ts">
  import { slide } from "svelte/transition";
  import type { RadioInput } from "$lib/forms/data/typeDefs";

  export let data: RadioInput;

  $: data = data;
  $: data.validate();
</script>

<div class="my-2 w-full grid grid-cols-12 gap-0">
  <legend class="col-span-3 font-bold text-right pr-4 w-full h-full border-r">
    {#if data.isRequired}
      <span class="text-red-500">*</span>
    {/if}
    {data.label}</legend
  >
  <div class="w-full pl-5 col-span-8 flex flex-col">
    <fieldset class="flex flex-col sm:flex-row my-2 place-content-around mb-2">
      {#each data.choices as choice}
        <div class="flex flex-row my-1 sm:my-0">
          <label class="mr-1" for={choice}>{choice}</label>
          <input
            bind:group={data.value}
            value={choice}
            id={choice}
            type="radio"
            name={data.label}
          />
        </div>
      {/each}
    </fieldset>
    {#if !data.isValid}
      {#each data.errors as error}
        <p transition:slide class="text-red-500">{error}</p>
      {/each}
    {/if}
  </div>
</div>
