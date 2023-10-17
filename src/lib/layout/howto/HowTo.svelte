<script lang="ts">
	import ProgressBar from './ProgressBar.svelte';
	import ScrollTab from './ScrollTab.svelte';
	import Icon from '@iconify/svelte';

	let index = 0;
	let maxIndex = 5;

	$: console.log(index);
</script>

<div class="grid grid-cols-12 w-4/5 my-10 place-items-center gap-0 mx-auto">
	<ScrollTab direction="left" bind:index {maxIndex} />
	<div class="col-span-10 w-full bg-white z-10 drop-shadow-lg h-[500px] bg-slate-50">
		<ProgressBar {index} />
		<div>
			<h1>Content Here</h1>
		</div>
	</div>
	<ScrollTab direction="right" bind:index {maxIndex} />
</div>
