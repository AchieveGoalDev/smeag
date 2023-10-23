<script lang="ts">
  import { slide } from "svelte/transition";

  import type { LargeTextInput } from "$lib/forms/ApplicationData";

  export let data: LargeTextInput;

  let errorMessage: string[];

  export let isValid: boolean;
  export let value: string;

  $: if (errorMessage?.length > 0) {
    isValid = false;
  } else {
    isValid = true;
  }

  $: if (!value && data.isNecessary) {
    errorMessage = [];
    errorMessage.push("必要項目です");
  } else if (value) {
    errorMessage = [];
  }

  function handleSize(size: string) {
    if (size === "small") {
      return "w-[150px] sm:w-[200px] h-[100px]";
    } else if (size === "large") {
      return "w-[210px] sm:w-[300px] h-[150px]";
    }
  }
</script>

<div class="my-2 w-full grid grid-cols-12 gap-0">
  <label
    class="font-bold text-right col-span-3 border-r pr-4 w-full h-full"
    for={data.label}
  >
    {#if data.isNecessary}
      <span class="text-red-500">*</span>
    {/if}
    {data.label}
  </label>
  <div class="pl-5 flex flex-col my-2 col-span-8">
    <textarea
      name={data.label}
      style:background-color={isValid ? "white" : "#fef2f2"}
      style:outline-color={isValid ? "" : "#b91c1c"}
      class={`shadow-md 
            rounded-sm 
            transitions-all 
            ease-in
            text-sm 
            border-2 
            border-black 
            focus:outline-sky-500 
            focus:outline-2 
            bg-white 
            pl-2
            py-1
            my-2
            ${handleSize(data.size)}
          `}
      placeholder={data.placeholder}
      bind:value
    />
    {#each data.desc as line}
      <p class="text-slate-600 text-sm my-1">
        {line}
      </p>
    {/each}
    {#if !isValid}
      {#each errorMessage as error}
        <p transition:slide|local class="text-red-600 my-1">{error}</p>
      {/each}
    {/if}
  </div>
</div>
