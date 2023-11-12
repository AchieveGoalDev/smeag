<script lang="ts">
	import { slide, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import type { StayFee, RoomFees, CampusFees, CourseFees } from './pricingData';
	import PricingSelect from './PricingSelect.svelte';
	import { courses } from '$lib/layout/courses/courseData';

	export let fees: CampusFees;

	let currentCourse: CourseFees;
	let currentRoom: RoomFees;
	let currentStay: StayFee;

	let currentCourseName: string;
	let currentRoomName: string;
	let currentStayName: string;

	let amount: number;
	onMount(() => {
		console.log('mounting...');
		currentCourse = fees.getDefaultCourse();
		currentRoom = fees.getDefaultRoom(currentCourse);
		currentStay = fees.getDefaultStay(currentRoom);

		currentCourseName = currentCourse.name;
		currentRoomName = currentRoom.name;
		currentStayName = currentStay.name;

		console.log(currentCourseName);
		console.log(currentRoomName);
		console.log(currentStayName);
	});

	$: console.log(currentCourse);
	$: console.log(currentRoom);
	$: console.log(currentStay);

	$: if (currentCourseName) {
		currentCourse = fees.getCourse(currentCourseName)!;
	}

	$: if (currentCourseName && currentRoomName && currentStayName) {
		amount = fees.getFee(currentCourseName, currentRoomName, currentStayName)!;
	}
</script>

{#if currentCourse !== undefined}
	<section class="w-[80%] mx-auto my-5 flex flex-col gap-4">
		<div class="flex flex-row w-full place-content-center gap-5">
			{#key fees.courses}
				{#if fees.courses}
					<div>
						<h4 class="text-md font-bold mb-1">コース選択</h4>
						<PricingSelect params={fees.courses} bind:selected={currentCourseName} />
					</div>
				{/if}
			{/key}
			{#key currentCourseName}
				{#if currentCourse}
					<div>
						<h4 class="text-md font-bold mb-1">ルーム選択</h4>
						<PricingSelect params={currentCourse.rooms} bind:selected={currentRoomName} />
					</div>
				{/if}
			{/key}
			{#key currentRoomName}
				{#if currentRoom}
					<div>
						<h4 class="text-md font-bold mb-1">滞在期間選択</h4>
						<PricingSelect params={currentRoom.stay} bind:selected={currentStayName} />
					</div>
				{/if}
			{/key}
		</div>
		<h3 class="text-2xl">{currentCourse.name}</h3>
		{#key currentCourse}
			<div transition:slide|global>
				{#each currentCourse.description as description}
					{#key description}
						<p>{description}</p>
					{/key}
				{/each}
			</div>
		{/key}
		<div class="grid grid-cols-1 grid-rows-1 w-full p-3 place-items-center font-heading-jp">
			{#key amount}
				<p
					in:fly|global={{ y: -150 }}
					out:fly|global={{ y: 150 }}
					class="col-span-full row-span-full text-6xl text-orange-500 font-black drop-shadow-lg"
				>
					{`¥${amount?.toLocaleString()}`}
				</p>
			{/key}
		</div>
	</section>
{/if}
