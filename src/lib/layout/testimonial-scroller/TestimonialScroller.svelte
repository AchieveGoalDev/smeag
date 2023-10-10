<script lang="ts">
	import { onMount } from 'svelte';
	import { testimonials } from './testimonialData';
	import Testimonial from './Testimonial.svelte';
	import TestimonialFull from './TestimonialFull.svelte';

	let scroller: HTMLElement | null;
	let matchMedia: boolean;

	onMount(() => {
		scroller = document.querySelector('.scroller');
		const scrollerInner = scroller?.querySelector('.scroller-inner');
		matchMedia = window.matchMedia('prefers-reduced-mition: reduce').matches;
		if (scrollerInner) {
			const scrollerContent = Array.from(scrollerInner.children);
			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				scrollerInner.appendChild(duplicatedItem);
			});
		}
	});
</script>

<div class="w-1/2 mx-auto">
	<TestimonialFull />
	{#if !matchMedia}
		<div bind:this={scroller} class="scroller mx-auto">
			<div class="scroller-inner item-list text-2xl">
				{#each testimonials as testimonial}
					<Testimonial params={testimonial} />
				{/each}
			</div>
		</div>
	{/if}
</div>

<style lang="postcss">
	.item-list {
		margin: 0;
		padding-inline: 0;
		list-style: none;
	}

	.scroller {
		max-width: 1000px;
		-webkit-mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
		mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
		overflow: hidden;
		flex-wrap: nowrap;
	}

	.scroller-inner {
		width: max-content;
		padding-block: 1rem;
		display: flex;
		gap: 3rem;
		animation: scroll 80s forwards linear infinite;
	}

	@keyframes scroll {
		to {
			transform: translate(calc(-50% - 1.5rem));
		}
	}
</style>
