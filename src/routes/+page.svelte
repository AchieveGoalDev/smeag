<script lang="ts">
	import SectionWrapper from '$lib/layout/SectionWrapper.svelte';
	import TestimonialScroller from '$lib/layout/testimonial-scroller/TestimonialScroller.svelte';

	import ColorButton from '$lib/components/buttons/ColorButton.svelte';
	import Hero from '$lib/layout/hero/Hero.svelte';
	import PageWrapper from '$lib/layout/PageWrapper.svelte';
	import HowTo from '$lib/layout/howto/HowTo.svelte';
</script>

<PageWrapper>
	<Hero />
	<SectionWrapper params={{ themeColor: 'orange', borderStyle: 'none' }}>
		<div
			slot="heading"
			class="font-heading-jp text-5xl drop-shadow font-extrabold text-sky-800 flex flex-row justify-center items-center pr-3"
		>
			<h1>キャンパス</h1>
			<hr />
		</div>
		<div class="flex flex-col w-full mx-auto gap-9">
			<div class="flex flex-col lg:flex-row gap-4 p-5 lg:w-full lg:place-content-around mx-auto">
				<div
					class="shadow-lg bg-green-600 p-5 flex flex-col flex-shrink w-[350px] xl:w-[400px] gap-5"
				>
					<h1 class="text-white text-3xl font-bold">Encanto Campus</h1>
					<img
						src="/EncantoResize.png"
						class="hover:-rotate-[2deg] transition-all shadow-lg p-1 bg-white hover:cursor-pointer"
					/>
					<p class="text-white overflow-wrap w-full font-bold">
						「フィリピン留学は治安が心配」「施設はキレイなの？」というフィリピン留学を検討中の方が必ずぶつかる壁をすべて解消！滞在部屋、教室、食堂、プール、ジムなど全てが新しい施設ですので、快適にお過ごしいただけます♪
					</p>
					<ColorButton
						params={{
							color: 'purple',
							link: '/campus',
							function: null
						}}
					>
						詳細はこちら
					</ColorButton>
				</div>
				<div
					class="shadow-lg bg-purple-600 p-5 flex flex-col flex-shrink w-[350px] xl:w-[400px] gap-5"
				>
					<h1 class="text-white text-3xl font-bold">Capital Campus</h1>
					<img
						src="/Capital.jpg"
						class="hover:-rotate-[2deg] transition-all shadow-lg p-1 bg-white hover:cursor-pointer"
					/>
					<p class="text-white overflow-wrap w-full font-bold">
						セブ島留学の魅力は何と言っても圧倒的なコストパフォーマンスの良さ！基本料金には学費、滞在費、食費、クリーニング代の全てが含まれていますので、他に必要な費用は航空券代と海外保険代のみ。
						最短1週間、10万円から行けますので思い立ったら気軽に行けるのも魅力です。
					</p>
					<ColorButton
						params={{
							color: 'green',
							link: '/campus',
							function: null
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
			<h1>留学の流れ</h1>
		</div>
		<HowTo />
	</SectionWrapper>
</PageWrapper>
