<script lang="ts">
	import Logo from '$lib/components/svg/Logo.svelte';
	import Icon from '@iconify/svelte';
	import ContactButton from '$lib/components/buttons/ContactButton.svelte';
</script>

<div class="flex flex-col gap-3">
	<div class="flex flex-row gap-2 items-center">
		<Icon icon={'material-symbols:info'} class="text-2xl" />
		<h3 class="font-display-jp font-bold text-xl">お問い合わせ</h3>
	</div>
	<div class="p-2 rounded-md bg-white">
		<Logo />
	</div>
	<div class="text-sky-200">
		<p>SMEAG校販売代理店 株式会社アチーブゴール</p>
		<p>〒151-0053 東京都渋谷区代々木1-30-7</p>
		<p>ヤマノ24ビルB1F</p>
	</div>
	<ContactButton params={{ color: 'blue', type: 'mail', link: 'info@achievegoal.jp' }}
		>info@achievegoal.jp</ContactButton
	>
	<ContactButton params={{ color: 'green', type: 'phone', link: '03‐5302‐2239' }}
		>03‐5302‐2239</ContactButton
	>
	<div class="text-sky-200">
		<p>（受付時間）</p>
		<p>平日：9:00〜18:00</p>
		<p>土曜日：10:00〜18:00　日祝休み</p>
	</div>
</div>
