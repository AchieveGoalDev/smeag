<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<div class="w-full shadow-lg bg-white rounded-md border-orange-500 relative z-5 grid-cols-3">
	<div
		class="absolute -translate-x-[50px] bottom-0 top-0 m-auto justify-center items-center bg-orange-600 h-[50px]"
	>
		<Icon
			class="mx-auto transition-all hover:scale-105 hover:cursor-pointer text-5xl rounded-full hover:bg-white p-2"
			icon="teenyicons:left-outline"
		/>
	</div>
	<div
		class="absolute -z-5 top-0 bottom-0 left-0 -translate-x-[50px] justify-center items-center bg-orange-600 overflow-visible"
	>
		<Icon
			class="mx-auto transition-all hover:scale-105 hover:cursor-pointer text-5xl rounded-full hover:bg-sky-50 p-2"
			icon="teenyicons:right-outline"
		/>
	</div>
	<div class="flex flex-row w-full">
		<div class="w-full flex flex-col">
			<div
				class="flex flex-row grow-0 bg-orange-500 p-5 text-white shadow-sm w-full place-content-around"
			>
				<img src="https://i.pravatar.cc/150" class="rounded-full bg-white p-2 me-4" />
				<div class="flex flex-col text-5xl font-bold drop-shadow gap-2">
					<h2>高橋良佳さん</h2>
					<h2 class="font-normal">期間: 4週間</h2>
					<h2 class="font-normal">コース: Pre TOEFL</h2>
				</div>
			</div>
			<div
				class="text-xl font-primary-jp flex flex-col gap-4 my-4 max-h-[300px] shrink-0 grow-0 overflow-y-scroll p-5"
			>
				<p class="shrink-0">
					私は4週間という短い期間でしたが、とても濃いセブのこのSMEAGだけでしか味わえない体験を毎日させてもらいました。
					まず、私は一日目、登校に着き、オリエンテーションや施設の説明を受け、アヤラショッピングモールでの両替や楽しみ方、タクシーの乗り方など様々なことを学びました。その際の添乗員スタッフも日本人で安心でき、一緒に施設をまわっていた日本人学生ともすぐに仲良くなることができました。私は、沖縄から一人で来たので最初は不安だらけでしたが、他の学生も私と同じで一人で留学に来た人が多かったので、その点の不安はすぐに解消されました。
				</p>
				<p class="shrink-0">
					二日目から早速授業が開始され、とても気合が入りました。授業のシステムとしては、毎日４つのクラス(1:4,
					1:8, 1:1,
					1:1)に加え２つのスパルタクラスと１つのスペシャルクラスがありました。朝の6時40分から夜の８時３５分までみっちり自分のコースの仲間と先生と一緒に日々点数アップのために頑張ってきました。
				</p>
				<p class="shrink-0">
					約１か月の授業を終えて、マンツーマンのクラスとグループ授業の配分が自分にはとてもあっているなと感じました。マンツーマンの授業では、自分の弱点や克服するべき点を先生が丁寧に教えてくれるので毎日モチベーションを保ちながら授業を受けることができました。グループクラスでは、生徒同士の視点で意見を出し合い、それに踏まえた形で先生も一体となって授業が進むので一人で問題を解くよりも仲間と楽しみながら真剣に取り組むことができました。
				</p>
				<p class="shrink-0">
					SAについて、SAとは簡単にいうと私個人の担任のようなもので、毎週行われる模擬テストの結果やその他学校生活に関して気軽にカウンセリングできる先生が一人ひとりについてくれます。毎日私の顔を見るたび声をかけてくれるSAの存在は、私の学校生活の充実の一つの要因でもあります。
				</p>
			</div>
		</div>
	</div>
</div>
