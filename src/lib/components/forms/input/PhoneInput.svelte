<script lang="ts">
  import { slide } from "svelte/transition";

  import type { PhoneInput } from "../data/typeDefs";

  export let data: PhoneInput;

  $: data = data;
  $: data.validate();
</script>

<div class="my-2 w-full grid grid-cols-12 gap-0">
  <label
    class="font-bold text-right col-span-3 border-r pr-4 w-full h-full"
    for={data.label}
  >
    {#if data.isRequired}
      <span class="text-red-500">*</span>
    {/if}
    {data.label}
  </label>
  <div class="pl-5 flex flex-col my-2 col-span-8">
    <span>
      <input
        name={data.label + "市外局番"}
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
            w-[75px]
          `}
        alt={"電話番号の市外局番"}
        bind:value={data.valueOne}
        maxlength={4}
      />
      -
      <input
        name={data.label + "市内局番"}
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
        w-[75px]
      `}
        alt={"電話番号の市内局番"}
        bind:value={data.valueTwo}
        maxlength={4}
      />
      -
      <input
        name={data.label + "加入者番号"}
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
      w-[75px]
    `}
        alt={"電話番号の加入者番号"}
        bind:value={data.valueThree}
        maxlength={4}
      />
    </span>
    {#each data.description as line}
      <p class="text-slate-600 text-sm my-1">
        {line}
      </p>
    {/each}
    {#if !data.isValid}
      {#each data.errors as error}
        <p transition:slide|local class="text-red-600 my-2">{error}</p>
      {/each}
    {/if}
  </div>
</div>
