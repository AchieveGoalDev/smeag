<script lang="ts">
	import InteractWrapper from './InteractWrapper.svelte';
	import LabelWrapper from './LabelWrapper.svelte';

	export let label: string;
	export let placeholder: string;
</script>

<LabelWrapper>
	<label for="thing">{label}</label>
</LabelWrapper>
<InteractWrapper>
	<input
		class="self-center border-solid border-slate-700 border-[2px] rounded-lg py-1 px-3 shadow-md w-full mx-4 focus:border-[3px] focus:border-orange-500 focus:outline-none focus:shadow-lg transition-all"
		name="thing"
		{placeholder}
	/>
</InteractWrapper>
