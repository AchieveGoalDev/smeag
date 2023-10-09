<script lang="ts">
	import Logo from '$lib/components/svg/Logo.svelte';
	import { window } from '$lib/store/window';
	import '../app.css';

	$: windowWidth = 0;
	$: windowHeight = 0;

	$: $window.width = windowWidth;
	$: $window.height = windowHeight;

	$: console.log($window);
</script>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />
<nav class="h-[80px] bg-white bg-opacity-0 drop-shadow-lg shadow-lg flex-col">
	<div class="flex flex-row items-center h-[75px] bg-white">
		<div class="p-2 w-1/5">
			<Logo />
		</div>
		<div
			class="text-xl font-heading-jp font-bold text-slate-800
			 w-3/5"
		>
			<ul class="w-full flex flex-row place-content-between mx-10">
				<li>HOME</li>
				<li
					class="transition-all hover:text-sky-600 hover:-translate-y-[2px] select-none cursor-pointer"
				>
					留学の流れ
				</li>
				<li>キャンパス紹介</li>
				<li>コース紹介</li>
				<li>よくある質問</li>
				<li>詳細</li>
			</ul>
		</div>
	</div>
	<div class="flex flex-row h-[10px] w-full overflow-visible">
		<div class="h-full w-1/4 bg-orange-600" />
		<div class="h-full w-1/4 bg-sky-500" />
		<div class="h-full w-1/4 bg-green-500" />
		<div class="h-full w-1/4 bg-purple-500" />
	</div>
</nav>
<div class="text-slate-800">
	<slot />
</div>
