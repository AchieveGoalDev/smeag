<script lang="ts">
	import Icon from '@iconify/svelte';
	export let index: number;

	let progress = [
		'お問合せ・カウンセリング',
		'留学プランの決定',
		'費用のお見積り',
		'お申込み・費用のお振込み',
		' 渡航前のご案内',
		'ご出発'
	];
</script>

<div class="flex flex-row py-5 w-full place-content-between px-5 shadow-lg overflow-visible">
	{#each progress as item, i}
		{#if i === 0}
			<button
				on:click={() => (index = i)}
				class={`${index >= i ? 'highlighted' : 'grayed'} ${
					index === i && 'selected'
				} gap-4 p-2 progress-item`}
			>
				<div class="flex flex-col items-center w-full gap-2 overflow-visible">
					<div class="flex flex-row items-center justify-center overflow-visible">
						<h3 class="font-bold text-xl">{item}</h3>
						<div class={index === i ? 'selected-icon' : '' + ' overflow-visible'}>
							<Icon icon="gis:flag-start" class="text-4xl" />
						</div>
					</div>
					<div class="h-[4px] selected-underline w-full" />
				</div>
			</button>
		{/if}

		{#if i === progress.length - 1}
			<button
				on:click={() => (index = i)}
				class={`${index >= i ? 'highlighted' : 'grayed'} ${
					index === i && 'selected'
				}  p-2 progress-item font-bold text-xl`}
			>
				<div class="flex flex-col items-center w-full gap-2 overflow-visible">
					<div class="flex flex-row items-center justify-center gap-4 overflow-visible">
						<h3>{item}</h3>
						<div class={index === i ? 'selected-icon' : '' + ' overflow-visible'}>
							<Icon icon="ion:location-sharp" class="text-4xl" />
						</div>
					</div>
					<div class="h-[4px] selected-underline w-full" />
				</div>
			</button>
		{:else if i < progress.length - 1 && i > 0}
			<button
				on:click={() => (index = i)}
				class={`${index >= i ? 'highlighted' : 'grayed'} ${
					index === i && 'selected'
				} p-2 progress-item font-bold text-xl`}
			>
				<div class="flex flex-col items-center w-full gap-2 overflow-visible">
					<div class="flex flex-row items-center justify-center gap-4 overflow-visible">
						<h3>{item}</h3>
						<div class={index === i ? 'selected-icon' : ''}>
							<Icon icon="icon-park-solid:right-c" class={`text-4xl` + ' overflow-visible'} />
						</div>
					</div>
					<div class="h-[4px] selected-underline w-full" />
				</div>
			</button>
		{/if}
	{/each}
</div>

<style lang="postcss">
	.progress-item {
		transition: all 0.2s ease-in-out;
	}

	.progress-item:hover {
		background-color: #16a34a;
		color: white;
		cursor: pointer;
		animation: pulse;
	}

	.highlighted {
		color: #2563eb;
	}

	.highlighted .selected-underline {
		transform: scale(0);
	}

	.grayed {
		color: gray;
	}

	.selected-underline {
		transition: transform 0.3s ease-in-out;
	}

	.grayed .selected-underline {
		transform: scale(0);
	}

	.selected {
		transform: scale(1.05);
		color: #ea580c;
	}

	.selected .selected-underline {
		background-color: #ea580c;
		transform: scaleX(1);
	}

	.selected-icon {
		animation: bounce 1s ease-in-out 1s infinite forwards;
	}

	@keyframes bounce {
		from {
			transform: scale(1) translateY(0px);
		}

		20% {
			transform: scaleX(0.9) translateY(-3px);
		}

		50% {
			transform: scaleX(1) translateY(-5px);
		}

		80% {
			transform: translateY(0px);
		}

		100% {
			transform: scaleX(1.01) scaleY(0.9);
		}
	}

	@keyframes pulse {
		0% {
			transform: scale(1);
		}

		50% {
			transform: scale(1.1);
		}

		100% {
			transform: scale(1);
		}
	}
</style>
