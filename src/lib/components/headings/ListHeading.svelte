<script lang="ts">
	import Icon from '@iconify/svelte';

	export let icon: string;
</script>

<h3 class="flex flex-row gap-4 text-3xl font-primary-jp">
	<Icon {icon} />
	<slot />
</h3>
