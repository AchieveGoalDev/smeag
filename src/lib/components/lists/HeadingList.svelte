<script lang="ts">
	import ListHeading from '../headings/ListHeading.svelte';
	import Icon from '@iconify/svelte';

	export let icon: string;
	export let bgColor: string;

	export let listContent: string[];
	export let title: string;
</script>

<div class="flex flex-col items-center align-baseline max-w-1/5 bg-white shadow-md rounded-md">
	<ListHeading {bgColor} {icon}>
		{title}
	</ListHeading>
	<ul class="p-2">
		{#each listContent as item}
			<li class="my-4 text-xl flex flex-row gap-2">
				<Icon icon="mdi:check-bold" class="text-green-800" />{item}
			</li>
		{/each}
	</ul>
</div>
