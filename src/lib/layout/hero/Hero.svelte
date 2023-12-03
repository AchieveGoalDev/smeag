<script lang="ts">
	import { window } from '$lib/store/window';
	import Icon from '@iconify/svelte';
	import ColorButton from '$lib/components/buttons/ColorButton.svelte';
	import PhotoImageContainer from '$lib/components/cards/PhotoImageContainer.svelte';
</script>

<div class="border-b-2 border-orange-500">
	<div
		style:height={`${$window.height - 80}px`}
		class="flex flex-col-reverse md:flex-row w-full 2xl:max-w-[1536px] mx-auto"
	>
		<div
			class=" w-full md:w-2/5 2xl:w-1/2 h-full flex flex-col items-center justify-start md:justify-center px-3"
		>
			<div class="flex flex-col gap-4 w-full items-center justify-center">
				<h2 class="text-4xl lg:text-6xl l:text-8xl font-bolder">
					日本人留学実績
					<span
						class="text-orange-600 drop-shadow-lg text-6xl font-heading-en relative overflow-visible"
					>
						<h1 class="inline">No.1</h1>
						<div
							class="absolute z-1 top-0 left-0 text-xl text-sky-600 -translate-x-[10px] rotate-[15deg] drop-shadow-lg"
						>
							<Icon icon="fa6-solid:award" />
						</div>
					</span>
				</h2>
				<h2 class="font-thin text-3xl">フィリピン最大規模語学学校で</h2>
				<h2 class="text-3xl"><strong>英語</strong>を確実にみに着けよう!</h2>
				<div
					class="flex flex-col md:flex-row place-content-between w-full 2xl:w-2/3 py-3 items-center gap-4"
				>
					<ColorButton
						params={{
							color: 'orange',
							link: '/contact',
							function: null
						}}
					>
						今すぐ問い合わせ
					</ColorButton>

					<ColorButton
						params={{
							color: 'blue',
							link: '/campus',
							function: null
						}}
					>
						詳細はこちら
					</ColorButton>
				</div>
			</div>
		</div>
		<div class="w-full md:w-3/5 2xl:w-1/2 h-full flex items-center justify-center overflow-visible">
			<div class="flex flex-col items-start overflow-visible gap-[3rem]">
				<PhotoImageContainer />
			</div>
		</div>
	</div>
</div>
