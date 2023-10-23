<script lang="ts">
  import { handleAPIPost } from "$lib/api/RESTFunctions";
  import ProvisionalRedirect from "./ProvisionalRedirect.svelte";
  import { slide } from "svelte/transition";
  import { onMount } from "svelte";
  import { applicationData } from "$lib/store/apply";
  import Subform from "./subforms/Subform.svelte";
  import { buildTween } from "$lib/tweens/buildTween";
  import CheckIsStudent from "./subforms/CheckIsStudent.svelte";
  import ProgressBar from "./ProgressBar.svelte";

  import type { FormSetItem, FormSet } from "$lib/store/apply";
  import type { SubformData } from "./data/typeDefs";

  let subformHeight: number;

  // function handleMode() {}
  // $: $dataCheck.campus = $dataCheck.campus;

  // $: if ($dataCheck.campus) {
  //   $dataCheck.campus.calculateValid();
  // }

  // function handleSubmitCampus() {
  //   if ($dataCheck.campus.meta.allValid) {
  //     ++currentIndex;
  //   }
  // }

  function handleNext() {
    let currentIndex = $applicationData.meta.currentIndex;
    $applicationData.meta.resetCurrentForm(currentIndex + 1);
    $applicationData = $applicationData;
  }

  function handlePrevious() {
    let currentIndex = $applicationData.meta.currentIndex;
    $applicationData.meta.resetCurrentForm(currentIndex - 1);
    $applicationData = $applicationData;
  }

  function handleSubmit() {
    handleAPIPost(
      $applicationData.parsed,
      "https://api.achieve-english.jp/apply"
    );
    $applicationData.meta.isSubmitted = true;
  }

  $: $applicationData = $applicationData;
  $: $applicationData.meta.currentIndex = $applicationData.meta.currentIndex;
  $: $applicationData.meta.checkIsAllValid();
  $: $applicationData.meta.checkCanSubmit();
  $: $applicationData.parseFormData();

  ////REAL CODE HERE
  // {#if !$applicationData.meta.isSubmitted}
  //   {#key $applicationData.meta.currentForm.meta.id}
  //     <Subform
  //       bind:subformData={$applicationData.meta.currentForm}
  //       bind:height={subformHeight}
  //     />
  //   {/key}
  //   <div class="flex flex-row place-content-between px-4 py-5 bg-rose-500">
  //     <button
  //       style:visibility={$applicationData.meta.currentIndex === 0
  //         ? "hidden"
  //         : "visible"}
  //       on:click={handlePrevious}
  //       class="flex-shrink p-5 font-bold bg-blue-700 text-white rounded-md transition-all hover:bg-blue-500"
  //     >
  //       前へ
  //     </button>
  //     <button
  //       on:click={handleSubmit}
  //       disabled={!$applicationData.meta.canSubmit}
  //       class="disabled:bg-gray-600 disabled:cursor-not-allowed disabled:text-gray-200 w-1/3 p-4 font-bold bg-blue-800 text-white rounded-md transition-all hover:bg-blue-500"
  //     >
  //       送信
  //     </button>
  //     <button
  //       style:visibility={$applicationData.meta.currentIndex ===
  //       $applicationData.meta.indexMax
  //         ? "hidden"
  //         : "visible"}
  //       on:click={handleNext}
  //       class="disabled:bg-gray-600 disabled:cursor-not-allowed flex-shrink p-4 font-bold bg-blue-700 text-white rounded-md transition-all hover:bg-blue-500"
  //     >
  //       次へ
  //     </button>
  //   </div>
  // {/if}

  // {#if $applicationData.meta.isSubmitted}
  //   <div
  //     class="text-2xl p-10 flex-col border-blue-800 border-4 place-content-between"
  //   >
  //     <p class="mb-5">
  //       お申し込みありがとうございます。申込内容を確認した上、学校メールにメッセージを送ります。
  //     </p>
  //     <p>
  //       メールが届かない場合、<a
  //         href="mailto:info@achieve-english.jp"
  //         class="underline transition-all text-blue-800 hover:text-blue-600"
  //         >info@achieve-english.jp</a
  //       >に問い合わせください。
  //     </p>
  //   </div>
  // {/if}
</script>

<div class="flex flex-col mx-auto grow-0 mt-[50px] shadow-lg">
  <ProvisionalRedirect />
</div>
