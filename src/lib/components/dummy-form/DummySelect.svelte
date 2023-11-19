<script lang="ts">
	import LabelWrapper from './LabelWrapper.svelte';
	import InteractWrapper from './InteractWrapper.svelte';

	export let label: string;
	export let choices: string[];
</script>

<LabelWrapper>
	{label}
</LabelWrapper>
<select
	class="self-center p-1 ml-3 bg-white border-[2px] border-slate-800 shadow-md flex flex-row focus:outline-none focus:border-orange-600"
>
	{#each choices as choice}
		<option>{choice}</option>
	{/each}
</select>
<InteractWrapper />
