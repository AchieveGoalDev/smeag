<script lang="ts">
	import SectionWrapper from '$lib/layout/SectionWrapper.svelte';
</script>

<h1 class="font-bold bg-green-500">Welcome to SvelteKit</h1>

<SectionWrapper params={{ themeColor: 'derp' }}>
	<p class="text-blue">Does TW work?</p>
</SectionWrapper>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
