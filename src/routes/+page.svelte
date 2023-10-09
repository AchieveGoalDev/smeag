<script lang="ts">
	import { window } from '$lib/store/window';
	import SectionWrapper from '$lib/layout/SectionWrapper.svelte';
	import Wave from '$lib/layout/hero/Wave.svelte';
	import WaveTop from '$lib/layout/hero/WaveTop.svelte';

	import ColorButton from '$lib/components/buttons/ColorButton.svelte';

	let main: HTMLElement;

	// let xOffset = 500;
	let position = 'in';

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

	// function changeXOffset() {
	// 	if (position === 'in') {
	// 		position = 'out';
	// 	} else {
	// 		position = 'in';
	// 	}
	// }

	function parseScroll() {
		$window.mainScrollY = main.scrollTop;
	}

	$: position = position;
	$: console.log(position);
</script>

<main
	on:scroll={parseScroll}
	bind:this={main}
	style:height={`${$window.height}px`}
	class="overflow-y-auto"
>
	<!-- <button on:click={changeXOffset}>toggle</button> -->
	<div style:height={`${$window.height - 80}px`} class="flex flex-row w-full mx-[100px]">
		<div class="w-1/2 h-full flex flex-col items-center justify-center">
			<div class="flex flex-col w-full items-center justify-center">
				<p class="text-5xl font-bolder">
					日本人留学実績<span class="text-orange-500 drop-shadow-lg text-8xl font-heading-en"
						>No.1</span
					>
				</p>
				<p>フィリピン最大規模語学学校で</p>
				<p>英語を確実にみに着けよう!</p>
				<div class="flex flex-row place-content-between w-1/2 py-3">
					<ColorButton
						params={{
							color: 'orange',
							link: null,
							function: () => {
								console.log('click');
							}
						}}
					>
						今すぐ問い合わせ
					</ColorButton>

					<ColorButton
						params={{
							color: 'blue',
							link: null,
							function: () => {
								console.log('click');
							}
						}}
					>
						詳細はこちら
					</ColorButton>
				</div>
			</div>
		</div>
		<div class="w-1/2 flex flex-col h-full items-center justify-center">
			<div class="flex flex-row w-full items-center justify-center">
				<img src="https://placehold.jp/500x500.png" alt="hero" />
			</div>
		</div>
		<!-- <div class="w-1/2 relative">
			<WaveTop />
			<Wave color="#0284c7" {position} type={'wave'} />
			<Wave color="white" {position} type={'foam'} />
			<!-- <Wave color="#0369a1" offset={[-200, 500]} z={2} position={'none'} />
			<Wave color="#0369a1" offset={[-200, 500]} z={1} position={'none'} />
		</div> -->
	</div>
	<SectionWrapper params={{ themeColor: 'orange', borderStyle: 'none' }}>
		<div slot="heading" class="font-heading-jp text-5xl drop-shadow font-extrabold text-blue-700">
			<h1>キャンパスについて</h1>
			<h2 class="ml-5 my-3 font-thin text-2xl italic pt-1 transition-fly">
				楽に英語勉強生活を送りましょう。
			</h2>
			<hr />
		</div>
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
