<script lang="ts">
	import PageWrapper from '$lib/layout/PageWrapper.svelte';
	import LinkList from '$lib/components/faq/LinkList.svelte';
	import Container from '$lib/layout/Container.svelte';
	import MainHeading from '$lib/components/headings/MainHeading.svelte';
	import CollectionLink from '$lib/components/faq/CollectionLink.svelte';
	import { collections } from '$lib/components/faq/FaqDefs';
</script>

<PageWrapper>
	<Container>
		<section class="w-full bg-white min-h-[100vh] py-10">
			<MainHeading>よくある質問</MainHeading>
			<div class="mx-4 mt-5">
				<LinkList {collections} color="red" />
				{#each collections as collection}
					<CollectionLink color="red" {collection} />
				{/each}
			</div>
		</section>
	</Container>
</PageWrapper>
