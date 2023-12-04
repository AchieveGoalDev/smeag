<script lang="ts">
	import DummyForm from '$lib/components/dummy-form/DummyForm.svelte';
	import PageWrapper from '$lib/layout/PageWrapper.svelte';
	import Container from '$lib/layout/Container.svelte';
	import MainHeading from '$lib/components/headings/MainHeading.svelte';
</script>

<PageWrapper>
	<Container>
		<section class="my-10 bg-white p-4 shadow-md">
			<MainHeading>ラインでお問い合わせ</MainHeading>
			<img src="/qr.png" class="mx-auto shadow-lg my-4" />
			<div class="flex flex-col gap-4 bg-sky-50 rounded-md">
				<p class="text-2xl w-full text-center">
					友達追加して、LINEでお気軽にご相談ください！（対応可能時間平日9時～18時）
				</p>
				<p class="text-2xl w-full text-center">画像をタップして友達追加！</p>
			</div>
		</section>
		<section class="my-10">
			<DummyForm />
		</section>
	</Container>
</PageWrapper>
