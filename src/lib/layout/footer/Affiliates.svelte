<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<div class="flex flex-col gap-4 overflow-visible">
	<div class="flex flex-row gap-2 items-center">
		<Icon icon={'vaadin:connect'} class="text-2xl" />
		<h3 class="font-display-jp font-bold text-xl">関連企業・その他</h3>
	</div>
	<a href="https://travel.aig.co.jp/ota?p=oKC43K01" target="_blank">
		<img
			src="/AIG.gif"
			alt="AIG損保"
			class="transition-transform hover:cursor-pointer hover:scale-105 grow-0"
		/>
	</a>
	<a href="https://www.hs-sonpo.co.jp/travel/?aid=S0231" target="_blank">
		<img
			class="transition-transform hover:cursor-pointer hover:scale-105 grow-0"
			src="/tabitomo.jpg"
			alt="HS損保・たびとも"
		/>
	</a>
</div>
