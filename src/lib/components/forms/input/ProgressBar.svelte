<script lang="ts">
  import { buildTween } from "$lib/tweens/buildTween";
  import ProgressIndicatorWrapper from "$lib/forms/ProgressIndicatorWrapper.svelte";

  export let progress: {
    current: number;
    latest: number;
    latestStatus: string;
    barwidth: number;
  };

  let barTween: any;

  $: barTween = buildTween([0, 100], 200);

  $: barTween.set(progress.barwidth);
</script>

<div class="flex w-full place-content-between items-center relative z-5">
  <div class="h-[10px] bg-slate-600 inset-x-0 rounded-md absolute z-[3]">
    <div
      style:width={`${$barTween}%`}
      class="h-[10px] bg-rose-700 w-1/2 rounded-md absolute z-[4]"
    />
  </div>

  <ProgressIndicatorWrapper {progress} number={1}>
    <div slot="number" class="mx-auto my-auto">1</div>
    <strong
      class="absolute translate-y-[-100%] translate-x-[-25%] break-keep overflow-visible whitespace-nowrap"
      slot="description">キャンパス情報</strong
    >
  </ProgressIndicatorWrapper>
  <ProgressIndicatorWrapper {progress} number={2}>
    <strong
      class="absolute translate-y-[-100%] translate-x-[-25%] break-keep overflow-visible whitespace-nowrap"
      slot="description">個人情報</strong
    >
    <div slot="number" class="mx-auto my-auto">2</div>
  </ProgressIndicatorWrapper>
  <ProgressIndicatorWrapper {progress} number={3}>
    <div slot="number" class="mx-auto my-auto">3</div>
    <strong
      class="absolute translate-y-[-100%] translate-x-[-25%] break-keep overflow-visible whitespace-nowrap"
      slot="description">スケジュール</strong
    >
  </ProgressIndicatorWrapper>
  <ProgressIndicatorWrapper {progress} number={4}>
    <strong
      class="absolute translate-y-[-100%] translate-x-[-25%] break-keep overflow-visible whitespace-nowrap"
      slot="description">同意・送信</strong
    >
    <div slot="number">4</div>
  </ProgressIndicatorWrapper>
</div>
