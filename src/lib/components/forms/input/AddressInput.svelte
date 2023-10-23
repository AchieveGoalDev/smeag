<script lang="ts">
  import { slide } from "svelte/transition";

  import type { AddressInput } from "$lib/forms/ApplicationData";

  export let data: AddressInput;

  let zip: string;
  let address: string;

  let errorMessage: string[] = [];

  function validateAddress(zip: string, address: string) {
    let errors: string[] = [];

    if (data.isNecessary) {
      if (!zip && !address) {
        errors.push("必要項目です。");
      }
    }

    if (zip) {
      if (zip.split("").length < 7) {
        errors.push("有効な郵便番号を入力してください");
      }
    }

    if (zip && !address) {
      errors.push("住所を入力してください	");
    }

    if (address && !zip) {
      errors.push("郵便番号を入力してください");
    }

    return errors;
  }

  export let isValid: boolean;
  export let value: string;


  $: value = zip + " " + address;

  $: errorMessage = validateAddress(zip, address);

  $: if (errorMessage.length > 0) {
    isValid = false;
  } else {
    isValid = true;
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
    <span>
      〒
      <input
        name={data.label + "郵便番号"}
        type="text"
        style:background-color={isValid ? "white" : "#fef2f2"}
        style:outline-color={isValid ? "" : "#b91c1c"}
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
            w-[100px]
          `}
        alt={data.label + "郵便番号の入力"}
        placeholder={"151-0053"}
        bind:value={zip}
        maxlength={8}
      />
    </span>
    <input
      name={data.label + "住所"}
      type="text"
      style:background-color={isValid ? "white" : "#fef2f2"}
      style:outline-color={isValid ? "" : "#b91c1c"}
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
          max-w-[300px]
          sm:w-[275px]
          text-sm
          sm:text-md
        `}
      alt={data + "住所の入力"}
      placeholder={"東京都渋谷区代々木1-30-7ヤマノ24ビルB1F"}
      bind:value={address}
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
