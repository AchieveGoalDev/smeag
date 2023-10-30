<script lang="ts">
	type ImageData = {
		url: string;
		alt: string;
		element: string;
		color: string;
	};

	export let data: ImageData;
	let y: number;
	let hoverState: boolean = false;
</script>

<svelte:window bind:scrollY={y} />

<a
	href={`#${data.element}`}
	on:mouseover={() => (hoverState = true)}
	on:focus={() => (hoverState = true)}
	on:focusout={() => (hoverState = false)}
	on:mouseleave={() => (hoverState = false)}
	class="flex flex-col overflow-visible p-5 text-5xl font-black gap-5 text-orange-600 text-shadow hover:cursor-pointer"
>
	<img
		src={data.url}
		alt={data.alt}
		class={`${
			data.color === 'blue' ? 'image-shadow-blue' : 'image-shadow-green'
		} rounded-xl transition-all`}
	/>
	<h3 class={`sub-title ${hoverState ? 'move-text' : ''} overflow-visible`}>
		<slot />
		<hr
			class={`${hoverState ? 'border-expand' : 'border-collapse'} ${
				data.color === 'blue' ? 'border-expand-blue' : 'border-expand-green'
			}`}
		/>
    
	</h3>
</a>

<style lang="postcss">
	.border-expand,
	.border-expand {
		transition: all 0.25s;
		transition-property: border-bottom, width;
	}

	.border-collapse {
		border-bottom: 3px solid;
		width: 0%;
	}

	.border-expand {
		border-bottom: 3px solid;
		width: 50%;
	}

	.border-expand-green {
		border-color: #16a34a;
	}

	.border-expand-blue {
		border-color: #0ea5e9;
	}

	.sub-title {
		transition: all 0.5s;
		transition-property: transform, text-shadow;
	}

	.move-text {
		transform: translateX(20px);
		text-shadow: 2px 2px rgba(0, 0, 0, 0.1);
	}

	.image-shadow-green,
	.image-shadow-blue {
		transition: all 0.5s;
		transition-property: transform, box-shadow, opacity;
	}

	.image-shadow-green:hover {
		box-shadow: 10px 10px #16a34a;
		transform: translateX(20px);
		opacity: 80%;
	}

	.image-shadow-blue:hover {
		box-shadow: 10px 10px #0ea5e9;
		transform: translateX(20px);
		opacity: 80%;
	}
</style>
