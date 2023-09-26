<script lang="ts">
	import SectionWrapper from '$lib/layout/SectionWrapper.svelte';

	import ColorButton from '$lib/components/ColorButton.svelte';

	let testButtons = [
		{
			color: 'orange',
			link: '#',
			function: null
		},
		{
			color: 'purple',
			link: '#',
			function: null
		},
		{
			color: 'green',
			link: '#',
			function: null
		},
		{
			color: 'blue',
			link: '#',
			function: null
		}
	];
</script>

<h1 class="font-bold bg-green-500">Welcome to SvelteKit</h1>

<SectionWrapper params={{ themeColor: 'derp' }}>
	<p class="text-blue">Does TW work?</p>
</SectionWrapper>

<div class="h-[200px] bg-green-50 flex flex-row place-content-around items-center">
	{#each testButtons as button}
		<ColorButton params={button}>詳細はこちら</ColorButton>
	{/each}
</div>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
