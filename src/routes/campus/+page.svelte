<script lang="ts">
	import PageWrapper from '$lib/layout/PageWrapper.svelte';
	import VideoHeader from '$lib/layout/video-header/VideoHeader.svelte';
	import ColorButton from '$lib/components/buttons/ColorButton.svelte';
</script>

<PageWrapper>
	<section class="bg-white py-10">
		<h1 class="my-10 text-center font-heading-jp drop-shadow-md text-6xl font-bold text-sky-700">
			SMEAGキャンパスの紹介
		</h1>

		<div class="flex flex-col w-1/2 mx-auto gap-9">
			<p class="text-2xl font-primary-jp">
				SMEAG校は、セブ市内キャピタルキャンパス、マクタン島内にエンカントキャンパスの2つのキャンパスを運営しています。それぞれの特徴がございますので、ご留学の目的に合わせてお好きなキャンパスをお選びください。
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
	</section>
	<section>
		<VideoHeader url="https://smeag.s3.ap-northeast-1.amazonaws.com/video/intro.mp4"
			>Capital</VideoHeader
		>
	</section>
	<section>
		<VideoHeader url="https://smeag.s3.ap-northeast-1.amazonaws.com/video/encanto.mp4"
			>Encanto</VideoHeader
		>
	</section>
</PageWrapper>
