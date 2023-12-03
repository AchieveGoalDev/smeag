<script lang="ts">
	import PageWrapper from '$lib/layout/PageWrapper.svelte';
	import CourseSelector from '$lib/layout/courses/CourseSelector.svelte';
	import MobileCourseSelector from '$lib/layout/courses/MobileCourseSelector.svelte';
	import CourseScroller from '$lib/layout/courses/CourseScroller.svelte';
	import CourseChart from '$lib/layout/courses/CourseChart.svelte';
	import Cirriculum from '$lib/layout/courses/Cirriculum.svelte';

	import { courses } from '$lib/layout/courses/courseData';
	import { window } from '$lib/store/window';

	let index = 0;
	//TODO resize images
</script>

<PageWrapper>
	<section class="bg-white py-[50px]">
		{#if $window.width > 1070}
			<CourseSelector bind:currentIndex={index} />
		{:else}
			<MobileCourseSelector bind:currentIndex={index} />
		{/if}
		<CourseScroller bind:currentIndex={index} />

		{#if courses[index].bannerPath}
			{#key index}
				<section
					class="mx-auto overflow-auto text-2xl text-section flex lg:block flex-col gap-5 items-center max-h-[20%] w-2/3 2xl:w-1/2 xl:w-2/3 lg:w-5/6"
				>
					<div
						class="float-left m-4 bg-sky-700 p-3 flex-shrink-0 rounded-md shadow-lg max-w-1/3 overflow-hidden"
					>
						<img class="banner-image image-section rounded-md" src={courses[index].bannerPath} />
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

		<h2 class="text-center my-10 text-4xl font-black drop-shadow text-sky-800">
			<span>{courses[index].name}</span>コースカリキュラム
		</h2>
		<Cirriculum collection={courses[index].cirricula} />
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
