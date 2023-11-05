<script lang="ts">
	export let src: string;
	export let caption: string;
</script>

<figure class="w-1/4 shadow-xl rounded-md">
	<div class="iframe-container flex h-[350px]">
		<iframe
			width="560"
			height="315"
			class="responsive-iframe"
			{src}
			title={caption}
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>
	<figcaption class="bg-orange-600 font-bold text-white text-center py-2">{caption}</figcaption>
</figure>

<style lang="postcss">
	.iframe-container {
		position: relative;
		overflow: hidden;
		width: 100%;
		padding-top: 56.25%;
	}

	.responsive-iframe {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
	}
</style>
