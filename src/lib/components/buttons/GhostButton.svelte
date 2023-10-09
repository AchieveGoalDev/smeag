<script lang="ts">
	import type { ColorButtonParams, ButtonFunction } from './buttonDefs';

	export let params: ColorButtonParams;

	let basicButton =
		'transition-all active:-translate-y-[.25rem] hover:-translate-y-[.5rem] text-2xl text-bold shadow-md py-2 px-8 rounded-lg font-bold text-amber-50 ';

	function dispatchStyle(color: string) {
		switch (color) {
			case 'green':
				return 'bg-green-700 hover:bg-green-800 active:bg-green-600';
			case 'orange':
				return 'bg-orange-600 hover:bg-orange-700 active:bg-orange-500';
			case 'purple':
				return 'bg-purple-700 hover:bg-purple-800 active:bg-purple-600';
			case 'blue':
				return 'bg-sky-600 hover:bg-sky-700 active:bg-sky-500';
		}
	}

	console.log(params);
</script>

{#if params.link}
	<a href={params.link} class={basicButton + dispatchStyle(params.color)}>
		<slot />
	</a>
{:else if params.function}
	<button on:click={params.function}>
		<slot />
	</button>
{/if}
