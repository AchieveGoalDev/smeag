<script lang="ts">
	import PageWrapper from '$lib/layout/PageWrapper.svelte';
	import CourseSelector from '$lib/layout/courses/CourseSelector.svelte';
	import CourseScroller from '$lib/layout/courses/CourseScroller.svelte';
	import CourseChart from '$lib/layout/courses/CourseChart.svelte';

	import { courses } from '$lib/layout/courses/courseData';

	let index = 0;
	//TODO resize images
</script>

<PageWrapper>
	<section class="bg-white py-[50px]">
		<div class="bg-sky-700 flex flex-row w-1/2 xl:w-5/6 px-5 py-2 gap-3 rounded-md mx-auto">
			<h1 class="text-center font-heading-jp font-black text-3xl text-white py-3 shrink-0">
				コース選択
			</h1>
			<CourseSelector bind:currentIndex={index} />
		</div>
		<CourseScroller bind:currentIndex={index} />

		{#if courses[index].bannerPath}
			{#key index}
				<section
					class="mx-auto overflow-auto text-2xl text-section flex lg:flex-row flex-col gap-5 items-center max-h-[20%] w-2/3 2xl:w-1/2 xl:w-2/3 lg:w-5/6"
				>
					<div class=" bg-sky-700 p-3 flex-shrink-0 rounded-md shadow-lg max-w-1/3 overflow-hidden">
						<img
							class="float-right banner-image image-section rounded-md"
							src={courses[index].bannerPath}
						/>
					</div>
					<p>{courses[index].intro}</p>
				</section>
			{/key}
		{/if}

		{#if courses[index].graph}
			{#key index}
				<CourseChart data={courses[index].graph} />
			{/key}
		{/if}
	</section>
</PageWrapper>

<style lang="postcss">
	.text-section {
		min-width: 25%;
	}

	.image-section {
		height: clamp(10rem, 20vh, 30rem);
	}
</style>
