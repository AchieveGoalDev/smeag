<script lang="ts">
	import CourseSelectorItem from './CourseSelectorItem.svelte';
	import ScrollTab from '../howto/ScrollTab.svelte';
	import type { CirriculumCollection } from './courseData';

	export let collection: CirriculumCollection;
	let index = 0;
</script>

<section class="w-full md:w-[80%] mx-auto">
	{#if collection.length > 1}
		<h2 class="flex flex-col w-full">
			<div class="grid grid-cols-10 w-full">
				<div class="col-start-1 col-span-1">
					<ScrollTab bind:index maxIndex={collection.length - 1} direction={'left'} />
				</div>
				<div class="col-start-2 col-span-8 flex flex-col">
					<div class="flex flex-row items-center place-content-around bg-sky-700 p-1 h-full">
						<h3 class="font-bold text-2xl text-white m-2">カリキュラム選択</h3>
						<nav class={`w-[80%]`}>
							<ul
								class={`mx-auto flex flex-row place-content-around bg-white rounded-md p-2 gap-3 shrink-0`}
							>
								{#each collection as course, i}
									<CourseSelectorItem bind:currentIndex={index} itemIndex={i}
										>{course.title}</CourseSelectorItem
									>
								{/each}
							</ul>
						</nav>
					</div>
					<h3
						class="text-center border-sky-700 border-[5px] text-slate-800 font-bold min-h-[3rem] text-2xl"
					>
						{collection[index].title}
					</h3>
				</div>
				<div class="col-span-1">
					<ScrollTab bind:index maxIndex={collection.length - 1} direction="right" />
				</div>
			</div>
		</h2>
	{/if}
	<div class="grid grid-cols-10 mx-auto w-full">
		<div class="col-span-1" />
		<table class="col-start-2 col-span-8 w-full text-center border-sky-700 border-4 shadow-2xl">
			<thead>
				<tr class="bg-sky-700 text-white">
					{#each collection[index].labels as label}
						<th class="p-2">{label}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each collection[index].items as rows, i}
					<tr>
						{#each rows as cell}
							{#if i % 2 === 0}
								<td class="bg-sky-50 p-2 text-sm md:text-md"> {cell}</td>
							{:else}
								<td>{cell}</td>
							{/if}
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
		<div class="col-span-1">
			{''}
		</div>
	</div>
</section>
