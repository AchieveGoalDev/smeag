<script lang="ts">
	import { capitalFees, encantoFees } from '$lib/components/pricing/pricingData';

	import PageWrapper from '$lib/layout/PageWrapper.svelte';
	import VideoHeader from '$lib/layout/video-header/VideoHeader.svelte';
	import CtaBox from '$lib/components/heros/CTABox.svelte';
	import HeadingList from '$lib/components/lists/HeadingList.svelte';
	import ThreeList from '$lib/components/lists/ThreeList.svelte';
	import Iframe from '$lib/components/video/Iframe.svelte';
	import MainHeading from '$lib/components/headings/MainHeading.svelte';
	import Pricing from '$lib/components/pricing/Pricing.svelte';
	import Container from '$lib/layout/Container.svelte';

	import ImageTitleCard from '$lib/components/cards/ImageTitleCard.svelte';
	import Icon from '@iconify/svelte';
</script>

<PageWrapper>
	<Container>
		<article class="bg-white pt-10 overflow-visible">
			<MainHeading>SMEAGキャンパスの紹介</MainHeading>
			<section class="flex flex-col mx-auto place-content-center gap-[50px] w-[80%]">
				<div
					class="flex flex-col md:px-0 px-4 md:flex-row w-full place-content-start md:place-content-around"
				>
					<ImageTitleCard
						data={{ url: '/Capital.jpg', alt: '', element: 'capital', color: 'green' }}
						>Capital</ImageTitleCard
					>

					<ImageTitleCard
						data={{ url: '/EncantoResize.png', alt: '', element: 'encanto', color: 'blue' }}
						>Encanto</ImageTitleCard
					>
				</div>
				<div class="flex flex-row place-content-center items-center text-2xl mx-auto gap-7">
					<div class="p-10 flex flex-col gap-3">
						<div
							class="flex flex-row border-orange-500 bg-orange-500 rounded-full border-4 shadow-lg"
						>
							<Icon
								icon="ri:school-fill"
								class="text-6xl text-white bg-orange-500 rounded-full place-self-start p-2"
							/>
							<h3 class="text-3xl font-bold text-white self-center">SMEAGのキャンパスについて</h3>
						</div>

						<p class="mb-3">
							SMEAG校は、セブ市内キャピタルキャンパス、マクタン島内にエンカントキャンパスの2つのキャンパスを運営しています。
						</p>
						<p>
							それぞれの特徴がございますので、ご留学の目的に合わせてお好きなキャンパスをお選びください。
						</p>
					</div>
				</div>
			</section>
		</article>
	</Container>
	<article id="capital">
		<VideoHeader url="https://smeag.s3.ap-northeast-1.amazonaws.com/video/intro.mp4"
			>Capitalキャンパス</VideoHeader
		>
		<div class="py-10">
			<Container>
				<section class="mx-4">
					<ThreeList>
						<HeadingList
							title="キャンパスの特徴"
							slot="listOne"
							icon="mdi:feature-highlight"
							bgColor="#ea580c"
							listContent={[
								'IELTS公式試験会場',
								'全てのコースが受講可能（ESL、ビジネス、TOEIC、TOEFL、IEL  TS、ファミリー）',
								'1人部屋から4人部屋まで、選べる部屋タイプ',
								'提携のS Hotelからの通学プランあり',
								'市庁舎がある地域なので、治安面も安心',
								'30分圏内に空港、病院、ショッピングモールがあるので生活しやすい'
							]}
						/>
						<HeadingList
							title="生活条件"
							slot="listTwo"
							icon="mdi:living-room"
							bgColor="#0369a1"
							listContent={[
								'入校後4週間早朝、夜間スパルタクラス参加必須',
								'門限：11:00 pmまで',
								'平日週末外出や外泊可能'
							]}
						/>
						<HeadingList
							title="開講コース"
							slot="listThree"
							icon="ic:baseline-class"
							bgColor="#15803d"
							listContent={[
								'ESL①コース：日常的な英会話能力を上げたい方におすすめ',
								'ESL②コース：日常的な英会話能力を上げたい方におすすめ',
								'TOEIC-Preコース：TOEICをこれから学習する方向け',
								'Four'
							]}
						/>
					</ThreeList>
				</section>

				<section class="flex flex-row place-content-around py-10 items-center">
					<CtaBox bgColor="purple" buttonBg="green">
						<span slot="text">キャピタルキャンパスで英語力を確実に身に着けよう!</span>
						<span slot="button">お問い合わせ・無料留学相談はこちら</span>
					</CtaBox>

					<Iframe
						caption={'Capitalキャンパスツアー'}
						src={'https://www.youtube.com/embed/h3Mzmjj8q8U?si=9WuDzMNTo2H9VujA'}
					/>
				</section>
				<Pricing fees={capitalFees} heading={'キャピタルキャンパスの滞在費用予算'} />
			</Container>
		</div>
	</article>
	<section id="encanto">
		<VideoHeader url="https://smeag.s3.ap-northeast-1.amazonaws.com/video/encanto.mp4"
			>Encantoキャンパス</VideoHeader
		>
		<Container>
			<Pricing fees={encantoFees} heading={'エンカントキャンパスの滞在費用予算'} />
		</Container>
	</section>
</PageWrapper>
