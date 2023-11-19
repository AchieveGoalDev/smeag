<script lang="ts">
	import DummyCheckGroup from './DummyCheckGroup.svelte';
	import DummyRadio from './DummyRadio.svelte';
	import DummySelect from './DummySelect.svelte';
	import DummyInput from './DummyInput.svelte';

	let courseChoices = [
		'ESL①コース',
		'ESL②コース',
		'TOEIC Preコース',
		'TOEIC600~900コース',
		'TOEFL Preコース',
		'TOEFL60～100コース',
		'IELTS Preコース',
		'IELTS5.5～7.0コース',
		'ビジネスコース',
		'ファミリープログラム（2~5歳）',
		'ファミリープログラム（6~12歳）'
	];
	let roomChoices = ['1人部屋', '2人部屋', '3人部屋', '4人部屋'];
	let stayChoices = [
		'1週間',
		'2週間',
		'3週間',
		'4週間',
		'8週間',
		'12週間',
		'16週間',
		'20週間',
		'24週間',
		'それ以外(奇数週)'
	];
	let checkChoices = [
		'一般英会話・日常英会話を学びたい',
		'旅行で使える程度の英会話を学びたい',
		'TOEIC対策をしたい',
		'TOEFL対策をしたい',
		'IELTS対策をしたい',
		'スピーキング・リスニングを身につけたいから',
		'プレゼンテーション力を身につけたいから',
		'ビジネスで使える英会話力を身につけたい'
	];
</script>

<form class="grid grid-cols-3 bg-white gap-1 shadow-xl">
	<h2 class="col-span-full text-center bg-sky-600 font-bold text-white text-2xl p-3">
		メールでお問い合わせ
	</h2>
	<DummyInput label={'氏名'} placeholder={'例: 山田　太郎'} />
	<DummyInput label={'フリガナ'} placeholder={'例: ヤマダ　タロウ'} />
	<DummyInput label={'メールアドレス'} placeholder={'例: xxx@xxx.com'} />
	<DummyInput label={'電話番号'} placeholder={'例: 03-5302-2239'} />
	<DummyRadio label={'性別'} choices={['男性', '女性']} />
	<DummyRadio
		label={'希望キャンパス名'}
		choices={['キャピタルキャンパス', 'エンカントキャンパス']}
	/>
	<DummySelect label={'希望コース'} choices={courseChoices} />
	<DummySelect label={'希望お部屋タイプ'} choices={roomChoices} />
	<DummyInput label={'留学開始希望日'} placeholder={''} />
	<DummySelect label={'検討している留学期間をお選びください。'} choices={stayChoices} />
	<DummyCheckGroup label={'留学する目的をお選びください。（複数選択可）'} choices={checkChoices} />
	<div class="col-span-full place-items-center flex flex-row justify-center items-center py-5">
		<button
			class="self-start bg-sky-700 text-white text-2xl font-bold rounded-md py-2 px-[4rem]"
			on:click={() => console.log('boop')}>送信</button
		>
	</div>
</form>
