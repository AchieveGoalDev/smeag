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
	<div class="grid grid-cols-2 p-3 gap-2">
		{#each choices as choice}
			<div class="flex flex-row items-center gap-2 select-none">
				<input
					class="hover:cursor-pointer"
					name={choice}
					type="checkbox"
					value={choice}
					id={choice}
				/>
				<label class="hover:cursor-pointer" for={choice}>{choice}</label>
			</div>
		{/each}
	</div>
</InteractWrapper>
