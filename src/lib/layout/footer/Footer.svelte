<script lang="ts">
	import FooterLinks from './FooterLinks.svelte';
	import FooterSocials from './FooterSocials.svelte';
	import FooterContact from './FooterContact.svelte';
	import Affiliates from './Affiliates.svelte';
	import { courseLinks } from './footerData';
</script>

<!-- <div class="h-[20px] bg-gradient-to-b from-transparent to-sky-800" /> -->
<footer class="w-full py-10 bg-sky-800 flex flex-row place-content-around text-white items-top">
	<FooterContact />
	<FooterLinks params={courseLinks} />
	<FooterLinks params={courseLinks} />
	<FooterSocials />
	<Affiliates />
</footer>
<div class="flex flex-row w-full place-content-center bg-sky-900 text-slate-400 py-2 text-xl">
	© 2023 セブ留学はSMEAG┃セブ島留学・フィリピン留学
</div>
