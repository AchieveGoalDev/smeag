<script lang="ts">
	import { courses } from './courseData';
	import CourseSelectorItem from './CourseSelectorItem.svelte';

	export let currentIndex = 0;
</script>

<div class="bg-sky-700 flex flex-row w-2/3 xl:w-5/6 px-5 py-2 gap-3 rounded-md mx-auto shadow-md">
	<h1
		class="text-center font-heading-jp font-black text-3xl text-white py-3 shrink-0 flex flex-row items-center h-full"
	>
		コース選択
	</h1>

	<nav class={`w-full overflow-visible`}>
		<ul
			class={`mx-auto grid grid-cols-4 lg:flex lg:flex-row place-content-around bg-white rounded-md p-2 gap-3 shrink-0`}
		>
			{#each courses as course, i}
				<CourseSelectorItem bind:currentIndex itemIndex={i}>{course.name}</CourseSelectorItem>
			{/each}
		</ul>
	</nav>
</div>
