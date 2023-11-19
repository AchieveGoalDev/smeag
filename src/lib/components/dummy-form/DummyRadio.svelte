<script lang="ts">
	import LabelWrapper from './LabelWrapper.svelte';
	import InteractWrapper from './InteractWrapper.svelte';

	export let label: string;
	export let choices: string[];
</script>

<LabelWrapper>
	<h3>{label}</h3>
</LabelWrapper>
<InteractWrapper>
	<fieldset class="grid grid-cols-2 items-center justify-start gap-3 w-full p-4 overflow-visible">
		{#each choices as choice}
			<div class="flex flex-row gap-2 items-center">
				<input class="hover:cursor-pointer" type="radio" id={choice} name={label} value={choice} />
				<label class="select-none hover:cursor-pointer" for={choice}>{choice}</label>
			</div>
		{/each}
	</fieldset>
</InteractWrapper>
