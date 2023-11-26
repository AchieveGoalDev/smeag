<script lang="ts">
	import type { NavButton } from './navData';

	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';

	let isCurrent: boolean;
	export let params: NavButton;

	$: if ($page.url.pathname === params.url) {
		isCurrent = true;
	} else if ($page.url.pathname !== params.url) {
		isCurrent = false;
	}
</script>

<li>
	<a
		href={params.url}
		class:bg-white={isCurrent}
		class:bg-sky-600={!isCurrent}
		class:text-sky-800={isCurrent}
		class:text-white={!isCurrent}
		class={`grid grid-cols-6 transition-all bg-sky-600 ${
			isCurrent && 'hover:text-white'
		} focus:bg-sky-700 h-[3rem] font-bold hover:bg-sky-700`}
	>
		<div class="col-span-1 flex justify-center items-center h-full">
			<Icon icon={params.icon} />
		</div>
		<div class="col-span-5 text-center flex h-full items-center justify-center">
			{params.text}
		</div>
	</a>
</li>
