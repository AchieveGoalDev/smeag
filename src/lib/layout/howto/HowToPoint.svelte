<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<div class="flex flex-row gap-3">
	<Icon icon="bxs:right-arrow" class="my-auto text-2xl text-sky-700" />
	<p>
		<slot />
	</p>
</div>
