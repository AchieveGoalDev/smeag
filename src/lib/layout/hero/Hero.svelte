<script lang="ts">
	import { window } from '$lib/store/window';
	import Icon from '@iconify/svelte';
	import ColorButton from '$lib/components/buttons/ColorButton.svelte';
	import PhotoImageContainer from '$lib/components/cards/PhotoImageContainer.svelte';

	let position = 'in';

	function changeXOffset() {
		if (position === 'in') {
			position = 'out';
		} else {
			position = 'in';
		}
	}

	$: position = position;
</script>

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
		<div class="w-1/2 h-full flex items-center justify-center overflow-visible">
			<div class="flex items-start overflow-visible">
				<PhotoImageContainer />
			</div>
		</div>
	</div>
</div>
