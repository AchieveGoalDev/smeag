<script lang="ts">
	import Icon from '@iconify/svelte';

	import type { LinkParams, FooterLinksParams } from './footerData';

	export let params: FooterLinksParams;
</script>

<div class="flex flex-col gap-2">
	<div class="flex flex-row gap-2 items-center">
		<Icon icon={params.icon} />
		<h3 class="font-display-jp font-bold text-xl">{params.title}</h3>
	</div>
	<ul class="text-sky-300 underline">
		{#each params.links as link}
			<li class="transition-colors hover:text-sky-100 visited:text-sky-100">
				<a href={link.url}>{link.text}</a>
			</li>
		{/each}
	</ul>
</div>
