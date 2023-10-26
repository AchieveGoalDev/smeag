export type DataSet = {
	label: string;
	backgroundColor: string;
	data: number[];
};

export type GraphData = {
	labels: string[];
	datasets: DataSet[];
	meta: {
		test: string;
		amount: string;
	};
};

export type CirriculumItem = string[]

export type Cirriculum = {
	title: string
	labels: string[]
	items: CirriculumItem[]
}

export type CirriculumCollection = Cirriculum[]

export type CourseData = {
	name: string;
	graph: null | GraphData;
	bannerPath: string;
	descriptionKey: string;
	intro: string;
	cirricula: CirriculumCollection
};

///******INTRO TEXT */
const ieltsIntro = `海外留学ならTOEFL・IELTSのスコアが求められることが一般的です。アカデミックな内容がメインのIELTSは英語圏の大学・大学院に入学する際の審査基準となるため、海外の大学進学を希望する方に向いています。
試験はリーディング、リスニング、スピーキング、ライティングの4つのセクションで構成されています。
SMEAG校は専門分化された講師と緻密な教育システムのもと、全ての学生が目標スコアを達成できるプログラムをご用意しています。`;

const toeicIntro = `TOEICは、アメリカ発の160カ国で行われているグローバルスタンダードな英語の試験です。社会的な信頼性も高く、日本では約3,000（2021年度）の企業などで利用されています。
高スコアを獲得できれば、キャリアアップや希望の就職・転職につながります。海外赴任や海外出張など、活躍の場を広げるチャンスも増えるでしょう。`;

const toeflIntro = `就活や転職活動で有利になるのはTOEIC、海外留学ならTOEFL・IELTSのスコアが求められることが一般的です。アカデミックな内容がメインのTOEFLは英語圏の大学・大学院に入学する際の審査基準となるため、留学や海外移住を希望する方に向いています。`;

const businessIntro = `SMEAG校のビジネスコースはビジネスシーンで必要なEメールの書き方や、電話対応の方法などのスキル習得を通じてビジネスで求められる英語力を分かりやすく学ぶことができるコースです。
授業評価システムを通じてコース修了時に学習効果を実感していただくことができます。`;

const familyIntro = `ファミリーコースは2歳～5歳を対象にしたBusy Bee（託児所）と6歳～12歳を対象としたプログラムの2種類ございます。2歳～5歳のお子様は、基本的に託児所でお絵かき、ダンス、読み聞かせなど、英語学習の入り口となるプログラムをご提供いたします。`;

const eslIntro = `ケンブリッジ大学が実施しているケンブリッジ英検は、130カ国以上で実施されている最も権威ある英語試験です。世界で広く認知されているケンブリッジ英検の認定書は、生涯にわたる世界標準の英語力の証明となります。ケンブリッジ英検は、英語の知識量のみを測る英語試験ではなく、習得している英語の知識をきちんと使いこなす能力があるかどうかを判断するものです。SMEAG校のESLコースは、そのケンブリッジ英検をベースにしたカリキュラムを提供しております。`;

/**************COURSE GRAPH DATA*****/

const graphBgOne = 'rgba(249, 115, 22, .8)';
const graphBgTwo = 'rgba(14, 165, 233, .5)';
const graphLabelOne = '受講後';
const graphLabelTwo = '受講前';

const toeflGraphData: GraphData = {
	labels: [
		'N.Hさん',
		'R.Mさん',
		'T.Aさん',
		'H.Oさん',
		'R.Fさん',
		'K.Hさん',
		'R.Tさん',
		'D.Uさん',
		'N.Hさん'
	],
	datasets: [
		{
			label: graphLabelOne,
			backgroundColor: graphBgOne,
			data: [73, 71, 63, 65, 46, 61, 88, 77, 75]
		},
		{
			label: graphLabelTwo,
			backgroundColor: graphBgTwo,
			data: [52, 59, 46, 42, 29, 55, 72, 70, 60]
		}
	],
	meta: {
		test: 'TOEFL',
		amount: '16'
	}
};

const toeicGraphData: GraphData = {
	labels: [
		'H.Nさん',
		'A.Hさん',
		'F.Tさん',
		'K.Sさん',
		'R.Iさん',
		'O.Kさん',
		'S.Kさん',
		'A.Sさん',
		'Y.Dさん'
	],
	datasets: [
		{
			label: graphLabelOne,
			backgroundColor: graphBgOne,
			data: [680, 650, 620, 630, 520, 600, 720, 680, 670]
		},
		{
			label: graphLabelTwo,
			backgroundColor: graphBgTwo,
			data: [550, 590, 520, 510, 440, 570, 650, 640, 600]
		}
	],
	meta: {
		test: 'TOEIC',
		amount: '100'
	}
};

const ieltsGraphData: GraphData = {
	labels: [
		'T.Aさん',
		'S.Fさん',
		'H.Mさん',
		'O.Rさん',
		'T.Iさん',
		'A.Sさん',
		'K.Sさん',
		'Y.Kさん',
		'I.Rさん'
	],
	datasets: [
		{
			label: graphLabelOne,
			backgroundColor: graphBgOne,
			data: [6.0, 6.0, 5.5, 5.5, 5.0, 5.5, 6.5, 6.0, 6.0]
		},
		{
			label: graphLabelTwo,
			backgroundColor: graphBgTwo,
			data: [5.5, 5.5, 5.0, 5.0, 4.5, 5.0, 5.0, 5.5, 5.5]
		}
	],
	meta: {
		test: 'IELTS',
		amount: '1'
	}
};

/*************END COURSE GRAPH DATA *****/

/**************CIRRICULUM DATA ********/
const eslCirricula: CirriculumCollection = [
	{
		title: "ESL",
		labels: ["時間", "月～金曜日カリキュラム", "授業内容"],
		items: [
			["6:40 - 8:00", "早朝スパルタ授業", "ボキャブラリー"],
			["8:00 - 8:40", "朝食", ""],
			["8:40 - 9:25", "マンツーマン授業", "リスニング"],
			["9:30 - 10:15", "マンツーマン授業", "スピーキング"],
			["10:25 - 11:10", "マンツーマン授業", "ライティング"],
			["11:15 - 12:00", "マンツーマン授業", "リーディング"],
			["12:00 - 13:00", "昼食", ""],
			["13:00 - 13:35", "グループ授業 (1:4-1:8)", "ディスカッション1"],
			["13:45 - 14:35", "グループ授業 (1:4-1:8)", "ディスカッション2"],
			["14:45 - 15:30", "オプショナルクラス", "発音"],
			["15:35 - 16:20", "オプショナルクラス", "ビジネス英語"],
			["16:30 - 17:15", "オプショナルクラス", "ストーリーテリング"],
			["17:20 - 18:05", "オプショナルクラス", "音楽"],
			["18:05 - 19:00", "夕食", ""],
			["19:00 - 20:35", "夜間スパルタ授業", "ケンブリッジ試験対策"],
		]
	},
]

const toeicCirricula: CirriculumCollection = [
	{
		title: "ESL",
		labels: ["時間", "月～金曜日カリキュラム", "授業内容"],
		items: [
			["6:40 - 8:00", "早朝スパルタ授業", "ボキャブラリー"],
			["8:00 - 8:40", "朝食", ""],
			["8:40 - 9:25", "マンツーマン授業", "基礎"],
			["9:30 - 10:15", "マンツーマン授業", "基礎"],
			["10:25 - 11:10", "マンツーマン授業", "リーディング1"],
			["11:15 - 12:00", "マンツーマン授業", "リーディング2"],
			["12:00 - 13:00", "昼食", ""],
			["13:00 - 13:35", "グループ授業 (1:4-1:8)", "リスニング1"],
			["13:45 - 14:35", "グループ授業 (1:4-1:8)", "リスニング2"],
			["14:45 - 15:30", "オプショナルクラス", "スピーチ"],
			["15:35 - 16:20", "オプショナルクラス", "映画"],
			["16:30 - 17:15", "オプショナルクラス", "音楽"],
			["17:20 - 18:05", "オプショナルクラス", "イディオム"],
			["18:05 - 19:00", "夕食", ""],
			["19:00 - 20:35", "夜間スパルタ授業", "TOEIC試験対策"],
		]
	},
]

const ieltsCirricula: CirriculumCollection = [
	{
		title: "ESL",
		labels: ["時間", "月～金曜日カリキュラム", "授業内容"],
		items: [
			["6:40 - 8:00", "早朝スパルタ授業", "ボキャブラリー"],
			["8:00 - 8:40", "朝食", ""],
			["8:40 - 9:25", "マンツーマン授業", "スピーキング1"],
			["9:30 - 10:15", "マンツーマン授業", "スピーキング2"],
			["10:25 - 11:10", "マンツーマン授業", "ライティング1"],
			["11:15 - 12:00", "マンツーマン授業", "ライティング2"],
			["12:00 - 13:00", "昼食", ""],
			["13:00 - 13:35", "グループ授業 (1:4-1:8)", "リーディング1"],
			["13:45 - 14:35", "グループ授業 (1:4-1:8)", "リーディング2"],
			["14:45 - 15:30", "オプショナルクラス", "スピーチなど"],
			["15:35 - 16:20", "オプショナルクラス", "自習（IELTSのプロ講師監修）"],
			["16:30 - 17:15", "グループ授業 (1:4-1:8)", "リスニング1"],
			["17:20 - 18:05", "グループ授業 (1:4-1:8)", "リスニング2"],
			["18:05 - 19:00", "夕食", ""],
			["19:00 - 20:35", "夜間スパルタ授業", "IELTS試験対策"],
		]
	},
]


const businessCirricula: CirriculumCollection = [
	{
		title: "ビジネス",
		labels: ["時間", "カリキュラム", "授業内容"],
		items: [
			["6:40 - 8:00", "Morning Sparta (Step-Up1, Step-Up2, Advanced Vocabulary"],
			["8:40 - 9:25", "1:1 Business with BULATS Speaking Practice A"],
			["9:30 - 10:15", "1:1 Business with BULATS Speaking Practice B"],
			["10:25 - 11:10", "1:1 Business with BULATS Writing Practice A"],
			["11:15 - 12:00", "1:1 Business with BULATS Writing Practice B"],
			["13:00 - 13:35", "1:1 Business with BULATS Reading Practice A"],
			["13:45 - 14:35", "1:1 Business with BULATS Reading Practice B"],
			["14:45 - 15:30", "1:1 Business with BULATS Listening Practice A"],
			["15:35 - 16:20", "1:1 Business with BULATS Listeing Practice B"],
			["16:30 - 17:15", "1:4 Business Discussion with Presentation A"],
			["17:20 - 18:05", "1:4 Business Discussion with Presentation B"],
			["19:00 - 19:45", "Evening Sparta Class (BULATS Practice Test) Pt.1"],
			["19:50 - 20:35", "Evening Sparta Class (BULATS Practice Test) Pt.2"],
		]
	},
]


const toeflCirricula: CirriculumCollection = [
	{
		title: "Pre-TOEFL",
		labels: ["時間", "授業内容"],
		items: [
			["6:40 - 8:00", "モーニングスパルタ"],
			["8:40 - 9:25", "1:1リスニング&スピーキング①"],
			["9:30 - 10:15", "1:1リスニング&スピーキング②"],
			["10:25 - 11:10", "1:1リーディング＆ライティング①"],
			["11:15 - 12:00", "1:1リーディング＆ライティング②"],
			["13:00 - 13:45", "1:4ディスカッション①"],
			["13:50 - 14:35", "1:4ディスカッション②"],
			["14:45 - 15:30", "スペシャルクラス①"],
			["15:35 - 16:20", "スペシャルクラス②"],
			["16:30 - 17:15", "1:8 PRE TOEFL①"],
			["17:20 - 18:05", "1:8 PRE TOEFL②"],
			["19:00 - 20:35", "イブニングスパルタ（TOEFLプラクティステスト）"],
		]
	},
	{
		title: "TOEFL 60/80/90/100",
		labels: ["時間", "授業内容"],
		items: [
			["6:40 - 8:00", "モーニングスパルタ"],
			["8:40 - 9:25", "1:1スピーキング①"],
			["9:30 - 10:15", "1:1スピーキング②"],
			["10:25 - 11:10", "1:1ライティング①"],
			["11:15 - 12:00", "1:1ライティング②"],
			["13:00 - 13:45", "1:4リ－ディング①"],
			["13:50 - 14:35", "1:4リ－ディング②"],
			["14:45 - 15:30", "スペシャルクラス①"],
			["15:35 - 16:20", "スペシャルクラス②"],
			["16:30 - 17:15", "1:8リスニング①"],
			["17:20 - 18:05", "1:8リスニング②"],
			["19:00 - 20:35", "イブニングスパルタ（TOEFLプラクティステスト）"],
		]
	},


]


const familyCirricula: CirriculumCollection = [
	{
		title: "(2歳～5歳)",
		labels: ["時間", "お子様", "親御様"],
		items: [
			["9:00 - 10:00", "ミュージック", "1:1リスニング"],
			["10:00 - 11:00", "読み聞かせ", "1:1スピーキング"],
			["11:00 - 12:00", "ランチ", "1:1リーディング"],
			["12:00 - 14:00", "お昼寝", "1:1ライティング"],
			["14:00 - 15:00", "ダンス", "1:4ディスカッションA"],
			["15:00 - 16:00", "スイミング", "1:4ディスカッションB"],
			["16:00 - 17:00", "お絵かき", "自由時間"],
			["17:15 - 19:00", "自由時間", "自由時間"],
			["19:00 - 20:35", "自由時間", "自由時間"],
		]
	},
	{
		title: "(6歳～12歳)",
		labels: ["時間", "お子様", "親御様"],
		items: [
			["8:40 - 9:25", "1:1リスニング", "1:1リスニング"],
			["9:30 - 10:15", "1:1スピーキング", "1:1スピーキング"],
			["10:25 - 11:10", "1:1リーディング", "1:1リーディング"],
			["11:15 - 12:00", "1:1ライティング", "1:1ライティング"],
			["13:00 - 13:45", "1:4ディスカッションA", "1:4ディスカッションA"],
			["13:50 - 14:35", "1:4ディスカッションB", "1:4ディスカッションB"],
			["14:45 - 17:15", "オプションクラス（ゴルフ、水泳、音楽、ダンス）", "自由時間"],
			["17:15 - 19:00", "自由時間", "自由時間"],
			["19:00 - 20:35", "	イブニングクラス（音楽、ボキャブラリ1、ボキャブラリ2、ディスカッション）", "自由時間"],
		]
	},
]

/**************END CIRRICULUM DATA ********/

export const courses: CourseData[] = [
	{
		name: 'ESL',
		graph: null,
		descriptionKey: 'esl',
		bannerPath: 'international-students.jpg',
		intro: eslIntro,
		cirricula: eslCirricula
	},
	{
		name: 'ビジネス',
		graph: null,
		descriptionKey: 'business',
		bannerPath: './business.jpg',
		intro: businessIntro,
		cirricula: businessCirricula
	},
	{
		name: 'ファミリー',
		graph: null,
		descriptionKey: 'family',
		bannerPath: './family-photo.jpg',
		intro: familyIntro,
		cirricula: familyCirricula
	},
	{
		name: 'IELTS',
		graph: ieltsGraphData,
		descriptionKey: 'ielts',
		bannerPath: './ieltscenter.png',
		intro: ieltsIntro,
		cirricula: ieltsCirricula
	},
	{
		name: 'TOEFL',
		graph: toeflGraphData,
		descriptionKey: 'toefl',
		bannerPath: './toeflcenter.png',
		intro: toeflIntro,
		cirricula: toeflCirricula
	},
	{
		name: 'TOEIC',
		graph: toeicGraphData,
		descriptionKey: 'toeic',
		bannerPath: './lessonstyle.jpg',
		intro: toeicIntro,
		cirricula: toeicCirricula
	}
];
