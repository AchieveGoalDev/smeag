<script lang="ts">
	import ColorButton from '../buttons/ColorButton.svelte';

	export let bgColor: string;
	export let buttonBg: string;
</script>

<div class="flex flex-row cta relative rounded-lg shadow-xl my-10 overflow-visible relative">
	<div class="h-full w-full z-10 bg-black p-5 opacity-30 flex flex-column overflow-visibles">
		<slot />
		<div class="align-middle opacity-100">
			<ColorButton params={{ color: 'orange', link: '#', function: null }}>
				yお問い合わせ・無料留学相談
			</ColorButton>
		</div>
	</div>
</div>

<style lang="postcss">
	.cta {
		display: flex;
		background-size: cover;
		background-position: center center;
		background-repeat: none;
		margin: 0px auto;
		width: 60%;
		height: 300px;
	}

	.cta::after {
		content: '';
		inset: 0;
		background-image: url('/Ocean.png');
		position: absolute;
	}
</style>
