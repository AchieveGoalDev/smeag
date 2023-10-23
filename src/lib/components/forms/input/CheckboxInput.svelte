<script lang="ts">
  import { slide } from "svelte/transition";
  import type { CheckboxInput } from "../data/typeDefs";

  export let data: CheckboxInput;
</script>

<div
  class="my-2 w-full flex flex-row bg-green-50 place-content-center justify-center items-center"
>
  <div class="flex flex-row space between items-center justify-center">
    <label class="mr-4 font-bold" for={data.label}>{data.label}</label>
    <input
      id={data.label}
      class="mr-3"
      bind:checked={data.value}
      value={data.value}
      type="checkbox"
      name={data.label}
    />
    <div>
      {#each data.description as line}
        <label class="block" for={data.label}>{line}</label>
      {/each}
    </div>
  </div>
  {#if data.errors.length > 0}
    {#each data.errors as error}
      <p transition:slide class="text-red-500 mx-auto my-1">{error}</p>
    {/each}
  {/if}
</div>
