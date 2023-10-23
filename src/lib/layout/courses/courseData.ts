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

export type CourseData = {
	name: string;
	graph: null | GraphData;
	bannerPath: string;
	descriptionKey: string;
	intro: string;
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

export const courses: CourseData[] = [
	{
		name: 'ESL',
		graph: null,
		descriptionKey: 'esl',
		bannerPath: 'international-students.jpg',
		intro: eslIntro
	},
	{
		name: 'ビジネス',
		graph: null,
		descriptionKey: 'business',
		bannerPath: './business.jpg',
		intro: businessIntro
	},
	{
		name: 'ファミリー',
		graph: null,
		descriptionKey: 'family',
		bannerPath: './family-photo.jpg',
		intro: familyIntro
	},
	{
		name: 'IELTS',
		graph: ieltsGraphData,
		descriptionKey: 'ielts',
		bannerPath: './ieltscenter.png',
		intro: ieltsIntro
	},
	{
		name: 'TOEFL',
		graph: toeflGraphData,
		descriptionKey: 'toefl',
		bannerPath: './toeflcenter.png',
		intro: toeflIntro
	},
	{
		name: 'TOEIC',
		graph: toeicGraphData,
		descriptionKey: 'toeic',
		bannerPath: './lessonstyle.jpg',
		intro: toeicIntro
	}
];
