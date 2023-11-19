<script lang="ts">
	import { slide, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import type { StayFee, RoomFees, CampusFees, CourseFees } from './pricingData';
	import PricingSelect from './PricingSelect.svelte';
	import { courses } from '$lib/layout/courses/courseData';

	export let fees: CampusFees;
	export let heading: string;

	let currentCourse: CourseFees;
	let currentRoom: RoomFees;
	let currentStay: StayFee;

	let currentCourseName: string;
	let currentRoomName: string;
	let currentStayName: string;

	let amount: number;
	onMount(() => {
		currentCourse = fees.getDefaultCourse();
		currentRoom = fees.getDefaultRoom(currentCourse);
		currentStay = fees.getDefaultStay(currentRoom);

		currentCourseName = currentCourse.name;
		currentRoomName = currentRoom.name;
		currentStayName = currentStay.name;
	});

	$: if (currentCourseName) {
		currentCourse = fees.getCourse(currentCourseName)!;
	}

	$: if (currentCourseName && currentRoomName && currentStayName) {
		amount = fees.getFee(currentCourseName, currentRoomName, currentStayName)!;
	}

	$: if (currentCourseName?.includes('ファミリー')) {
		currentRoomName = '2人';
	}
</script>

{#if currentCourse !== undefined}
	<section class="w-[80%] mx-auto my-5 bg-white rounded-xl shadow-xl pb-[1rem]">
		<h3 class="font-bold text-white font-heading-jp text-3xl bg-sky-600 text-center p-[1rem]">
			{heading}
		</h3>
		<div class="m-[1rem] flex flex-col gap-4">
			<div class="flex flex-row w-full place-content-center gap-5">
				{#key fees.courses}
					{#if fees.courses}
						<div>
							<h4 class="text-md font-bold mb-1">コース選択</h4>
							<PricingSelect params={fees.courses} bind:selected={currentCourseName} />
						</div>
					{/if}
				{/key}
			</div>
			<div class="p-[2rem]">
				<h3
					class="text-2xl mb-[.5rem] font-bold text-sky-800 drop-shadow-md grid grid-cols-1 grid-rows-1"
				>
					{currentCourse.name}について
				</h3>
				{#key currentCourse}
					<div
						in:fly|global={{ delay: 200 }}
						class="bg-sky-50 shadow-sm py-[1rem] text-xl p-[.5rem] col-span-full row-span-full"
					>
						{#each currentCourse.description as description}
							{#key description}
								<p class="mb-2">{description}</p>
							{/key}
						{/each}
					</div>
				{/key}
			</div>
			<div>
				<h4 class="text-center text-3xl font-bold">費用予算</h4>
				<div class="flex flex-row grow-0 place-content-center gap-5 w-full my-[.5rem]">
					{#key currentCourseName}
						{#if currentCourse}
							<div>
								<h4 class="text-sm font-bold mb-1 text-sky-800 mx-autos">ルーム選択</h4>

								<PricingSelect params={currentCourse.rooms} bind:selected={currentRoomName} />
							</div>
						{/if}
					{/key}
					{#key currentRoomName}
						{#if currentRoom}
							<div>
								<h4 class="text-sm font-bold mb-1 text-sky-800 mx-autos">滞在期間選択</h4>
								<PricingSelect params={currentRoom.stay} bind:selected={currentStayName} />
							</div>
						{/if}
					{/key}
				</div>
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
			</div>
		</div>
	</section>
{/if}
