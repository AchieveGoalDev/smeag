<script lang="ts">
	import ColorButton from '../buttons/ColorButton.svelte';

	export let bgColor: string;
	export let buttonBg: string;
</script>

<div class="flex flex-row rounded-lg shadow-xl my-10 overflow-visible bg-purple-700">
	<div class=" flex flex-col h-full p-5 overflow-visible gap-5">
		<div class="flex flex-row text-white text-xl font-semibold">
			<slot name="text" />
		</div>
		<ColorButton params={{ color: 'green', link: '#', function: null }}>
			<slot name="button" />
		</ColorButton>
	</div>
</div>

<style lang="postcss">
</style>
