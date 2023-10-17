<script lang="ts">
	import Logo from '$lib/components/svg/Logo.svelte';
	import NavButton from './NavButton.svelte';
	import { navButtons } from './navData';
	import ContactButton from '$lib/components/buttons/ContactButton.svelte';
</script>

<nav class="h-[80px bg-opacity-0 drop-shadow-lg shadow-lg flex-col overflow-visible">
	<div class="flex flex-row items-center h-[75px] bg-white overflow-visible">
		<a href="/" class="cursor-pointer w-1/5">
			<div class="p-2">
				<Logo />
			</div>
		</a>
		<div
			class="text-xl font-heading-jp font-bold text-slate-800
			 w-3/5"
		>
			<ul class="w-full flex flex-row place-content-between px-5">
				{#each navButtons as button}
					<NavButton url={button.url}>
						{button.text}
					</NavButton>
				{/each}
			</ul>
		</div>
		<div class="w-1/5 p-1 overflow-visible">
			<div class="flex flex-row place-content-center overflow-visible">
				<ContactButton params={{ type: 'phone', color: 'blue', link: '03-5302-2239' }}>
					03-5302-2239
				</ContactButton>
			</div>
		</div>
	</div>
	<div class="flex flex-row h-[10px] w-full overflow-visible">
		<div class="h-full w-1/4 bg-orange-600" />
		<div class="h-full w-1/4 bg-sky-500" />
		<div class="h-full w-1/4 bg-green-500" />
		<div class="h-full w-1/4 bg-purple-500" />
	</div>
</nav>
