<script lang="ts">
	import { capitalFees } from './pricingData';

	import { onMount } from 'svelte';
	import type { StayFee, RoomFees, CampusFees, CourseFees } from './pricingData';

	let currentCourse: CourseFees;
	let currentRoom: RoomFees;
	let currentStay: StayFee;

	onMount(() => {
		currentCourse = capitalFees.getDefaultCourse();
		currentRoom = capitalFees.getDefaultRoom(currentCourse);
		currentStay = capitalFees.getDefaultStay(currentRoom);
	});

	$: console.log(currentCourse);
	$: console.log(currentRoom);
	$: console.log(currentStay);
	$: amount = capitalFees.getFee('ESL①一般英会話', '1人', '2週間');
	$: console.log(amount);
</script>

{#if currentCourse !== undefined}
	<section>
		<h3>{currentCourse.name}</h3>
		{#each currentCourse.description as description}
			<p>{description}</p>
		{/each}
		<div>
			<p>{`¥${amount?.toLocaleString()}`}</p>
		</div>
	</section>
{/if}
