<script lang="ts">
  import type { SelectInput } from "$lib/forms/ApplicationData";
  import { slide } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  let dispatch = createEventDispatcher();

  export let value: string;
  export let data: SelectInput;
  export let isValid: boolean;

  let disabled: boolean;

  function handleChange(value: string) {
    dispatch("updateSelect", value);
  }

  $: if (value === "") {
    console.log("invalid");
    console.log(value);
    isValid = false;
  } else {
    console.log("valid", value);
    isValid = true;
  }
</script>

<div transition:slide|local>
  <slot />
  <div
    class="flex mb-2 justify-center items-center w-full place-content-between px-3"
  >
    <select
      on:change={() => handleChange(value)}
      bind:value
      class="w-[250px] sm:w-[300px] text-xl my-4 mx-auto shadow-md transition-all ease-in disabled:bg-slate-400 bg-sky-50 disabled:shadow-none"
      {disabled}
    >
      <option value="" class="bg-sky-100">{data.placeholder}</option>
      {#each data.options as option}
        <option value={option}>{option}</option>
      {/each}
    </select>
  </div>
</div>

