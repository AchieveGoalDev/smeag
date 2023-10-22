<script lang="ts">
	import { courses } from './courseData';
	import CourseSelectorItem from './CourseSelectorItem.svelte';

	export let currentIndex = 0;
</script>

<nav class={`w-full`}>
	<ul class={`mx-auto flex flex-row place-content-around bg-white rounded-md p-2 gap-3 shrink-0`}>
		{#each courses as course, i}
			<CourseSelectorItem bind:currentIndex itemIndex={i}>{course.name}</CourseSelectorItem>
		{/each}
	</ul>
</nav>
