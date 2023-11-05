<script lang="ts">
	import Icon from '@iconify/svelte';
	import { stringify } from 'postcss';

	export let icon: string;
	export let bgColor: string;
</script>

<h3
	style:background-color={bgColor}
	class="flex flex-row gap-4 text-3xl font-primary-jp font-bold text-white p-3 items-center w-full mb-3"
>
	<Icon {icon} />
	<div>
		<slot />
	</div>
</h3>
