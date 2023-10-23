<script lang="ts">
  import { slide, fly } from "svelte/transition";
  import Icon from "@iconify/svelte";
  import type { SingleTextInput } from "../data/typeDefs";

  export let data: SingleTextInput;

  function handleSize(size: string) {
    if (size === "short") {
      return "w-[100px]";
    } else if (size === "long") {
      return "w-[200px]";
    }
  }

  // $: errorMessage = data.validator(data.value);
  $: data = data;
  $: data.validate();

  $: if (data.isUpper && data.value) {
    data.value = data.value.toUpperCase();
  }
</script>

<div class="my-2 w-full grid grid-cols-12 gap-0">
  <label
    class="font-bold text-right col-span-3 border-r pr-4 w-full h-full items-center"
    for={data.label}
  >
    {#if data.isRequired}
      <span class="text-red-500">*</span>
    {/if}
    {data.label}
  </label>
  <div class="pl-5 flex flex-col my-2 col-span-8">
    <span>
      <span class="flex flex-row items-center">
        <input
          name={data.alt}
          type="text"
          style:background-color={data.isValid ? "white" : "#fef2f2"}
          style:outline-color={data.isValid ? "" : "#b91c1c"}
          class={`shadow-md 
            rounded-sm 
            transitions-all 
            ease-in 
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
          alt={data.alt}
          placeholder={data.placeholder}
          bind:value={data.value}
          maxlength={data.length}
        />
        {#if data.isValid}
          <div transition:fly|local class="text-emerald-700 text-lg">
            <Icon icon="pajamas:check-xs" />
          </div>
        {/if}
      </span>
      {#if data.trailText}
        {data.trailText}
      {/if}
    </span>
    {#each data.description as line}
      <p class="text-slate-600 text-sm my-1">
        {line}
      </p>
    {/each}
    {#if !data.isValid}
      {#each data.errors as error}
        <p transition:slide|local class="text-red-600 my-1">{error}</p>
      {/each}
    {/if}
  </div>
</div>
