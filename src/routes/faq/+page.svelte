<script lang="ts">
	import PageWrapper from '$lib/layout/PageWrapper.svelte';
	import LinkList from '$lib/components/faq/LinkList.svelte';
	import CollectionLink from '$lib/components/faq/CollectionLink.svelte';
	import { collections } from '$lib/components/faq/FaqDefs';
</script>

<PageWrapper>
	<section class="w-full bg-white min-h-[100vh]">
		<h1 class="text-center my-5 text-6xl font-heading-jp font-black text-sky-700 py-2">
			よくある質問
		</h1>
		<div class="w-2/3 mx-auto">
			<LinkList {collections} color="red" />
			{#each collections as collection}
				<CollectionLink color="red" {collection} />
			{/each}
		</div>
	</section>
</PageWrapper>
