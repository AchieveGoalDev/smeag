<script lang="ts">
  export let data: { yes: boolean; no: boolean };

  function handleToggleOne() {
    data.yes = true;
    data.no = false;
  }

  function handleToggleTwo() {
    data.yes = false;
    data.no = true;
  }

  let selected =
    "flex-shrink transition-all border-2 border-blue-700 text-white bg-blue-700 hover:text-white font-bold focus:bg-blue-600 focus:border-blue-600 focus:text-white rounded-md p-3 text-xl";
  let unselected =
    "flex-shrink transition:all border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white font-bold rounded-md p-3 text-xl";
</script>

<div class="flex items-center h-[150px] place-content-around">
  <button on:click={handleToggleOne} class={data.yes ? selected : unselected}>
    はい
  </button>

  <button on:click={handleToggleTwo} class={data.no ? selected : unselected}>
    いいえ
  </button>
</div>
