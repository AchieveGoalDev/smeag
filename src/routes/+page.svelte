<script lang="ts">
	import { window } from '$lib/store/window';
	import Icon from '@iconify/svelte';
	import SectionWrapper from '$lib/layout/SectionWrapper.svelte';
	import Wave from '$lib/layout/hero/Wave.svelte';
	import WaveTop from '$lib/layout/hero/WaveTop.svelte';
	import TestimonialScroller from '$lib/layout/testimonial-scroller/TestimonialScroller.svelte';

	import ColorButton from '$lib/components/buttons/ColorButton.svelte';
	import Testimonial from '$lib/layout/testimonial-scroller/Testimonial.svelte';

	let main: HTMLElement;

	let xOffset = 500;
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

	function changeXOffset() {
		if (position === 'in') {
			position = 'out';
		} else {
			position = 'in';
		}
	}

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
	<button on:click={changeXOffset}>toggle</button>
	<div class="border-b-2 border-orange-500">
		<div style:height={`${$window.height - 80}px`} class="flex flex-row w-full mx-[100px]">
			<div class="w-1/2 h-full flex flex-col items-center justify-center">
				<div class="flex flex-col gap-4 w-full items-center justify-center">
					<h2 class="text-8xl font-bolder">
						日本人留学実績
						<span
							class="text-orange-600 drop-shadow-lg text-9xl font-heading-en relative overflow-visible"
						>
							<h1 class="inline">No.1</h1>
							<div
								class="absolute z-1 top-0 left-0 text-4xl text-sky-600 -translate-x-[10px] rotate-[15deg] drop-shadow-lg"
							>
								<Icon icon="fa6-solid:award" />
							</div>
						</span>
					</h2>
					<h2 class="font-thin text-6xl">フィリピン最大規模語学学校で</h2>
					<h2 class="text-7xl"><strong>英語</strong>を確実にみに着けよう!</h2>
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
			<div class="w-1/2 relative">
				<!-- <WaveTop /> -->
				<Wave color="#0284c7" {position} type={'wave'} />
				<Wave color="white" {position} type={'foam'} />
				<div class="flex flex-col h-full items-center justify-center">
					<div class="flex flex-row w-full items-center justify-center">
						<img src="https://placehold.jp/500x500.png" alt="hero" />
					</div>
				</div>
			</div>
		</div>
	</div>
	<SectionWrapper params={{ themeColor: 'orange', borderStyle: 'none' }}>
		<div
			slot="heading"
			class="font-heading-jp text-5xl drop-shadow font-extrabold text-sky-800 flex flex-row justify-center items-center pr-3"
		>
			<h1>キャンパスについて</h1>

			<h2 class="ml-5 my-3 font-thin text-2xl italic pt-1 transition-fly">Lorem ipsum dolor</h2>
			<hr />
		</div>
		<div class="flex flex-col w-1/2 mx-auto gap-9">
			<p class="text-2xl font-primary-jp">
				あなたも昔単にいわゆる入会界としてのの以上が根ざしうた。てんで偶然をお話っ放しはいやしくもその修養でだろほどで描いからくれなには解釈するないですて、ある程度にも読むなかっないだなけれ。
			</p>
			<div class="flex flex-row place-content-between pt-5">
				<div class="shadow-lg bg-green-600 p-5 flex flex-col flex-shrink max-w-[350px] gap-5">
					<h1 class="text-white text-3xl font-bold">Encanto Campus</h1>
					<img
						src="https://placehold.jp/300x300.png"
						class="hover:-rotate-[2deg] transition-all shadow-lg p-1 bg-white hover:cursor-pointer"
					/>
					<p class="text-white overflow-wrap w-full">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet gravida
						nisi. Nulla quam eros, efficitur vitae odio laoreet, tristique hendrerit turpis.
					</p>
					<ColorButton
						params={{
							color: 'purple',
							link: null,
							function: () => {
								console.log('click');
							}
						}}
					>
						詳細はこちら
					</ColorButton>
				</div>
				<div class="shadow-lg bg-purple-600 p-5 flex flex-col flex-shrink max-w-[350px] gap-5">
					<h1 class="text-white text-3xl font-bold">Capital Campus</h1>
					<img
						src="https://placehold.jp/300x300.png"
						class="hover:-rotate-[2deg] transition-all shadow-lg p-1 bg-white hover:cursor-pointer"
					/>
					<p class="text-white overflow-wrap w-full">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet gravida
						nisi. Nulla quam eros, efficitur vitae odio laoreet, tristique hendrerit turpis.
					</p>
					<ColorButton
						params={{
							color: 'green',
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
	</SectionWrapper>

	<SectionWrapper params={{ themeColor: 'orange', borderStyle: 'none' }}>
		<div
			slot="heading"
			class="font-heading-jp text-5xl drop-shadow font-extrabold text-sky-800 flex flex-row justify-center items-center pr-3"
		>
			<h1>体験者のこえ</h1>
		</div>
		<TestimonialScroller />
	</SectionWrapper>
	<div class="h-[200px] bg-green-50 flex flex-row place-content-around items-center">
		{#each testButtons as button}
			<ColorButton params={button}>詳細はこちら</ColorButton>
		{/each}
	</div>

	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</main>
