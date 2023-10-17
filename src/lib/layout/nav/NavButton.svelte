<script lang="ts">
	import { page } from '$app/stores';
	export let url: string;

	let className: string;

	$: if ($page.url.pathname === url) {
		className = 'transition-all text-sky-600 -translate-y-[2px] select-none cursor-auto';
	} else {
		className =
			'transition-all hover:text-sky-600 hover:-translate-y-[2px] select-none cursor-pointer';
	}
</script>

<li class={className}>
	<a href={url}><slot /></a>
</li>
