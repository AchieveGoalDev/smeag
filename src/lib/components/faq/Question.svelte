<script lang="ts">
	export let question: { q: string; a: string[] };
	import Icon from '@iconify/svelte';
</script>

<div class="bg-white rounded-lg mb-[2rem] shadow-md md:text-2xl">
	<div class="flex flex-row mb-4 mt-3 py-3 pl-3 pr-2 items-center gap-4 text-3xl">
		<Icon icon="ri:question-fill" class="text-sky-700" />
		<p class="font-bold">
			{question.q}
		</p>
	</div>
	<hr />
	<div class="flex flex-row py-3 mb-3 bg-sky-50 pl-3 pr-2 items-center gap-4">
		<Icon icon="simple-icons:answer" class="text-sky-700" />
		<div class="flex flex-col gap-4">
			{#each question.a as answer}
				<p>
					{@html answer}
				</p>
			{/each}
		</div>
	</div>
</div>
