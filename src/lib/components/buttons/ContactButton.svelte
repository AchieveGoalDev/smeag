<script lang="ts">
	import type { ContactButtonParams } from './buttonDefs';
	import Icon from '@iconify/svelte';

	export let params: ContactButtonParams;

	let basicButton =
		'transition-all active:-translate-y-[.25rem] hover:-translate-y-[.5rem] text-lg lg:text-xl xl:text-2xl text-2xl text-bold font-heading-jp shadow-md py-2 px-[1em] rounded-lg font-bold text-amber-50 ';

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

{#if params.type === 'phone'}
	<a href={`tel:${params.link}`} class={basicButton + dispatchStyle(params.color)}>
		<div class="flex flex-row gap-4 items-center">
			<Icon icon="ph:phone-fill" />
			<slot />
		</div>
	</a>
{:else if params.type === 'mail'}
	<a href={`mailto:${params.link}`} class={basicButton + dispatchStyle(params.color)}>
		<div class="flex flex-row gap-4 items-center">
			<Icon icon="ic:round-mail" />
			<slot />
		</div>
	</a>
{/if}
