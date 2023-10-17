<script lang="ts">
	import SectionWrapper from '$lib/layout/SectionWrapper.svelte';
	import TestimonialScroller from '$lib/layout/testimonial-scroller/TestimonialScroller.svelte';

	import ColorButton from '$lib/components/buttons/ColorButton.svelte';
	import Hero from '$lib/layout/hero/Hero.svelte';
	import PageWrapper from '$lib/layout/PageWrapper.svelte';
</script>

<PageWrapper>
	<Hero />
	<SectionWrapper params={{ themeColor: 'orange', borderStyle: 'none' }}>
		<div
			slot="heading"
			class="font-heading-jp text-5xl drop-shadow font-extrabold text-sky-800 flex flex-row justify-center items-center pr-3"
		>
			<h1>キャンパスについて</h1>

			<h2 class="ml-5 my-3 font-thin text-2xl italic pt-1 transition-fly">Lorem ipsum dolor</h2>
			<hr />
		</div>
		<div class="flex flex-col w-1/2 mx-auto gap-9 shadow-md">
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
</PageWrapper>
