<script lang="ts">
    import type { SubformData } from "./data/typeDefs";
    import { buildTween } from "$lib/tweens/buildTween";

    export let subformData: SubformData;

    let progress = buildTween([0, 100], 400);

    $: progress.set(subformData.meta.percentComplete * 100);

    $: subformData = subformData;
</script>

<div class="flex flex-row place-content-around px-[20%]">
    <div class="w-2/3 border-2 border-rose-800 rounded-md bg-rose-50">
        <div
            style:width={`${$progress}%`}
            class="bg-rose-800 h-[10px] rounded-md"
        />
    </div>
</div>
