<script lang="ts">
	import type { Testimonial } from './testimonialData';
	export let params: Testimonial;
</script>

<div
	class="flex flex-row shadow p-3 gap-3 bg-sky-100 items-center transition-all hover:cursor-pointer hover:scale-105 hover:bg-sky-600 hover:text-white"
>
	<div class="flex flex-col items-center">
		<img src="https://i.pravatar.cc/80" class="w-[80px] rounded-full" />
		<h2 class="font-heading-jp font-bold text-xl">{params.name}さん</h2>
	</div>
	<p class="font-primary-jp text-lg max-w-[200px] px-3">
		直接経験出来る事は英語を学ぶ事以上にとても良い経験になります。
	</p>
</div>
