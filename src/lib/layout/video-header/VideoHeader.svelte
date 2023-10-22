<script lang="ts">
	export let url: string;
</script>

<div class="container">
	<div class="hero text-8xl font-heading-en drop select-none">
		<h1>
			<slot />
		</h1>
		<video autoplay muted loop class="video-bg">
			<source src={url} type="video/mp4" />
			<slot />
		</video>
	</div>
</div>

<style lang="postcss">
	.hero {
		min-width: 100%;
		min-height: 50vh;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		background: rgba(0, 0, 0, 0.6);
		color: white;
		position: relative;
		overflow: hidden;
	}

	.video-bg {
		min-width: 100%;
		min-height: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
	}

	.container {
		min-width: 100%;
	}
</style>
