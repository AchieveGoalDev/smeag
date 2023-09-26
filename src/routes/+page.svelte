<script lang="ts">
	import { window } from '$lib/store/window';
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

<main style:height={`${$window.height}px`} class="overflow-y-scroll">
	<SectionWrapper params={{ themeColor: 'derp' }}>
		<h1 slot="heading">Heading</h1>
		<h1 class="text-orange-600 font-heading-en text-8xl drop-shadow">No.1</h1>
		<h1 class="text-blue font-extrabold font-heading-jp text-4xl drop-shadow-lg">これは見出し</h1>
		<h1 class="text-blue font-primary-jp text-4xl drop-shadow">これは普通</h1>
		<h1 class="text-blue font-primary-en text-4xl drop-shadow">This is standard</h1>
		<div class="h-[700px]">Space</div>
	</SectionWrapper>

	<div class="h-[200px] bg-green-50 flex flex-row place-content-around items-center">
		{#each testButtons as button}
			<ColorButton params={button}>詳細はこちら</ColorButton>
		{/each}
	</div>

	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</main>
