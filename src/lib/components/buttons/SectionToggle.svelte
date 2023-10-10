<script lang="ts">
	import Icon from '@iconify/svelte';

	export let toggle = false;

	let rotateValue: number = 180;

	function handleToggle() {
		toggle = !toggle;
	}

	$: if (toggle) {
		rotateValue = 180;
	} else {
		rotateValue = 90;
	}
	//TODO fix shadow not rotating
</script>

<button
	style:transform={`rotate(${rotateValue}deg)`}
	style:transition={'transform .3s cubic-bezier(.51,.92,.24,1.15)'}
	class="transition-all mx-5 my-auto rounded-full transition-all bg-white bg-opacity-70 hover:bg-opacity-90 h-10 w-10 grid place-content-center border hover:bg-gray-200"
	on:click={handleToggle}
>
	<div class="text-xl">
		<Icon icon="ion:chevron-up" />
	</div>
</button>
