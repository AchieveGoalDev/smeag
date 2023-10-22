<script lang="ts">
	import PageWrapper from '$lib/layout/PageWrapper.svelte';
	import CourseSelector from '$lib/layout/courses/CourseSelector.svelte';
	import CourseScroller from '$lib/layout/courses/CourseScroller.svelte';
	import CourseChart from '$lib/layout/courses/CourseChart.svelte';

	import { courses } from '$lib/layout/courses/courseData';

	let index = 0;
</script>

<PageWrapper>
	<section class="bg-white py-[50px]">
		<div class="bg-sky-700 flex flex-row w-1/2 px-5 py-2 gap-3 rounded-md mx-auto">
			<h1 class="text-center font-heading-jp font-black text-3xl text-white py-3 shrink-0">
				コース選択
			</h1>
			<CourseSelector bind:currentIndex={index} />
		</div>
		<CourseScroller bind:currentIndex={index} />

		{#if courses[index].graph}
			{#key index}
				<CourseChart data={courses[index].graph} />
			{/key}
		{/if}
	</section>
</PageWrapper>
