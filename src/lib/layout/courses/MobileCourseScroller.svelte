<script lang="ts">
	import { courses } from './courseData';
	import { fly } from 'svelte/transition';
	import ScrollTab from '$lib/components/buttons/ScrollTab.svelte';

	export let currentIndex = 0;
	export let maxIndex = courses.length - 1;
</script>

<div class="w-full flex flex-row items-center justify-center">
	<div class="grid grid-cols-12 w-full my-4">
		<ScrollTab bind:index={currentIndex} {maxIndex} direction="left" />
		<div class="col-span-10 flex flex-row items-center justify-center">
			<h1 class="grid grid-rows-2 p-10 text-2xl gap-3">
				<div
					class="grid grid-cols-1 grid-rows-1 col-start-1 col-span-2 row-span-1 overflow-hidden max-h-full bg-orange-600 text-white font-bold p-4 rounded-md text-center shadow-md"
				>
					{#each courses as course, i (course)}
						{#if i === currentIndex}
							<span
								class="row-span-full col-span-full"
								in:fly={{ y: -50, delay: 100, duration: 100 }}
								out:fly={{ y: 50, duration: 100 }}
							>
								{course.name}
							</span>
						{/if}
					{/each}
				</div>
				<div class="col-start-2 col-span-1 row-span-1 p-5">コース<ddiv /></div>
			</h1>
		</div>
		<ScrollTab bind:index={currentIndex} {maxIndex} direction="right" />
	</div>
</div>
