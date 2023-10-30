<script lang="ts">
	import PageWrapper from '$lib/layout/PageWrapper.svelte';
	import VideoHeader from '$lib/layout/video-header/VideoHeader.svelte';
	import CtaBox from '$lib/components/heros/CTABox.svelte';

	import ColorButton from '$lib/components/buttons/ColorButton.svelte';

	import ImageTitleCard from '$lib/components/cards/ImageTitleCard.svelte';
	import Icon from '@iconify/svelte';

	// <ColorButton
	//   params={{
	//     color: 'purple',
	//     link: null,
	//     function: () => {
	//       console.log('click');
	//     }
	//   }}
	// >
	//   詳細はこちら
	// </ColorButton>
	// </div>
	// <div class="shadow-lg bg-purple-600 p-5 flex flex-col flex-shrink max-w-[350px] gap-5">
	// <h1 class="text-white text-3xl font-bold">Capital Campus</h1>
	// <img
	//   src="https://placehold.jp/300x300.png"
	//   class="hover:-rotate-[2deg] transition-all shadow-lg p-1 bg-white hover:cursor-pointer"
	// />
	// <p class="text-white overflow-wrap w-full">
	//   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet gravida
	//   nisi. Nulla quam eros, efficitur vitae odio laoreet, tristique hendrerit turpis.
	// </p>
	// <ColorButton
	//   params={{
	//     color: 'green',
	//     link: null,
	//     function: () => {
	//       console.log('click');
	//     }
	//   }}
	// >
	//   詳細はこちら
	// </ColorButton>
	// </div>
	// </div>
	// </div>
	// <div class="flex flex-col w-1/2 mx-auto gap-9">
	//   <p class="text-2xl font-primary-jp">
	//     SMEAG校は、セブ市内キャピタルキャンパス、マクタン島内にエンカントキャンパスの2つのキャンパスを運営しています。それぞれの特徴がございますので、ご留学の目的に合わせてお好きなキャンパスをお選びください。
	//   </p>
	//   <div class="flex flex-row place-content-between pt-5">
	//     <div class="shadow-lg bg-green-600 p-5 flex flex-col flex-shrink max-w-[350px] gap-5">
	//       <h1 class="text-white text-3xl font-bold">Encanto Campus</h1>
	//       <img
	//         src="https://placehold.jp/300x300.png"
	//         class="hover:-rotate-[2deg] transition-all shadow-lg p-1 bg-white hover:cursor-pointer"
	//       />
	//       <p class="text-white overflow-wrap w-full">
	//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet gravida
	//         nisi. Nulla quam eros, efficitur vitae odio laoreet, tristique hendrerit turpis.
	//       </p>
	//     </div>
	//   </div>
	// </div>
</script>

<PageWrapper>
	<section class="bg-white">
		<section
			class="flex flex-col mx-auto h-[95vh] h-[95svh] place-content-center gap-[50px] w-[80%]"
		>
			<h1 class="text-center font-heading-jp drop-shadow-md text-6xl font-bold text-sky-700">
				SMEAGキャンパスの紹介
			</h1>
			<div
				class="flex flex-row w-2/3 place-content-center items-center text-3xl mx-auto gap-7 font-bold"
			>
				<div
					class="flex shrink-0 rounded-full shadow-md items-center justify-center border-4 border-orange-500 p-3"
				>
					<Icon icon="mingcute:school-fill" class="text-8xl text-sky-700 rounded-full" />
				</div>
				<p>
					SMEAG校は、セブ市内キャピタルキャンパス、マクタン島内にエンカントキャンパスの2つのキャンパスを運営しています。それぞれの特徴がございますので、ご留学の目的に合わせてお好きなキャンパスをお選びください。
				</p>
			</div>
			<div class="flex flex-row w-full place-content-around">
				<ImageTitleCard data={{ url: '/Capital.jpg', alt: '', element: 'capital', color: 'green' }}
					>Capital</ImageTitleCard
				>

				<ImageTitleCard
					data={{ url: '/EncantoResize.png', alt: '', element: 'encanto', color: 'blue' }}
					>Encanto</ImageTitleCard
				>
			</div>
		</section>
	</section>
	<section id="capital">
		<VideoHeader url="https://smeag.s3.ap-northeast-1.amazonaws.com/video/intro.mp4"
			>Capital</VideoHeader
		>
		<CtaBox />
	</section>
	<section id="encanto">
		<VideoHeader url="https://smeag.s3.ap-northeast-1.amazonaws.com/video/encanto.mp4"
			>Encanto</VideoHeader
		>
	</section>
</PageWrapper>
