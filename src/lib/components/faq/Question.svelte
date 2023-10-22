<script lang="ts">
	export let question: { q: string; a: string[] };
	import Icon from '@iconify/svelte';
</script>

<div class="bg-white rounded-lg mb-4 shadow-md md:text-2xl">
	<div class="flex flex-row mb-4 mt-3 pl-3 pr-2 py-3">
		<Icon icon="ri:question-fill" />
		<p class="font-bold">
			{question.q}
		</p>
	</div>
	<hr />
	<div class="flex flex-row py-3 mb-3 bg-sky-50 pl-3 pr-2">
		<Icon icon="simple-icons:answer" />
		<div class="flex flex-col gap-4">
			{#each question.a as answer}
				<p>
					{@html answer}
				</p>
			{/each}
		</div>
	</div>
</div>
