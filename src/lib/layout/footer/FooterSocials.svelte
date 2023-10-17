<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<div class="flex flex-col gap-2">
	<div class="flex flex-row gap-2 items-center">
		<Icon icon={'wpf:speech-bubble'} />
		<h3 class="font-display-jp font-bold text-xl">SNS</h3>
	</div>
	<ul class="text-sky-300 text-4xl">
		<li class="transition-all hover:text-sky-100 visited:text-sky-100 my-4 hover:-translate-y-0.5">
			<a target="_blank" href={'https://www.facebook.com/SMEAGCEBU'}
				><Icon icon={'ic:baseline-facebook'} /></a
			>
		</li>
		<li class="transition-all hover:text-sky-100 visited:text-sky-100 my-4 hover:-translate-y-0.5">
			<a target="_blank" href={'https://www.instagram.com/smeag_global_education/'}
				><Icon icon={'ri:instagram-fill'} /></a
			>
		</li>
	</ul>
</div>
