<script lang="ts">
	import type { RoomFees, StayFee, CourseFees } from './pricingData';

	export let params: StayFee[] | CourseFees[] | RoomFees[];

	export let selected: string;

	let style =
		'p-4 cursor-pointer disabled:cursor-not-allowed shadow-md bg-white text-slate-700 border-solid border-slate-700 border-2 focus:bg-orange-600 focus:text-white hover:bg-orange-600 hover:text-white transition-all rounded-2xl font-bold disabled:hover:bg-slate-200 disabled:bg-slate-200 disabled:text-slate-500 disabled:text-slate-500';

	let optionStyle = 'bg-white text-slate-700';

	$: console.log(params.length);
</script>

{#if params.length === 1}
	<select name="" id="" bind:value={params[0].name} class={style} disabled>
		<option class={optionStyle} disabled>{params[0].name}</option>
	</select>
{/if}

{#if params.length > 1}
	<select bind:value={selected} class={style}>
		{#each params as param, i}
			{#key params.length}
				<option class={optionStyle} value={param.name}>
					{param.name}
				</option>
			{/key}
		{/each}
	</select>
{/if}
