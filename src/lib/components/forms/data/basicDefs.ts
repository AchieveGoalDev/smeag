import {
	type FormFormatParams,
	type TextInputParams,
	type RadioInputParams,
	type ImageSelectChoiceParams,
	DoubleTextInput,
	CheckboxInput,
	PhoneInput
} from '$lib/components/forms/data/typeDefs';
import {
	RadioInput,
	SingleTextInput,
	SubformData,
	ImageSelectChoice,
	ImageSelectInput
} from '$lib/components/forms/data/typeDefs';
import {
	validate英字名,
	validate学籍番号,
	validateフリガナデータ,
	validateIsRequired,
	validateSchoolEmail,
	validatePersonalEmail
} from '$lib/components/forms/data/validatorDefs';

/***PARAMS***/
const 学籍番号Data: TextInputParams = {
	size: 'medium',
	isRequired: true,
	label: '学籍番号',
	description: [
		'アルファベット入力の際は大文字で入力してください。',
		'学籍番号がアルファベットから始まることはありません。'
	],
	altText: '学籍番号の入力',
	placeholder: '',
	length: 10,
	isUpper: true,
	trailText: ''
};

export const 氏名Data: TextInputParams = {
	size: 'long',
	isRequired: true,
	label: '氏名',
	description: [],
	altText: '氏名の入力',
	placeholder: '山田　太郎',
	length: 100,
	isUpper: false,
	trailText: ''
};

export const フリガナData: TextInputParams = {
	size: 'long',
	isRequired: true,
	label: 'フリガナ',
	description: [],
	altText: 'フリガナの入力',
	placeholder: 'ヤマダ　タロウ',
	length: 30,
	isUpper: false,
	trailText: ''
};

export const 英字名FirstData: TextInputParams = {
	size: 'long',
	isRequired: true,
	label: '英字名 First Name (名前)',
	description: ['頭文字のみ大文字で入力してください。'],
	altText: '英字名で名前の入力',
	placeholder: 'Taro',
	length: 30,
	isUpper: false,
	trailText: ''
};

export const 英字名LastData: TextInputParams = {
	size: 'long',
	isRequired: true,
	label: '英字名 Last Name (名字)',
	description: [],
	altText: '英字名で名字の入力',
	placeholder: 'YAMADA',
	length: 30,
	isUpper: true,
	trailText: ''
};

export const 性別Data: RadioInputParams = {
	isRequired: true,
	label: '性別',
	altText: '性別の入力',
	choices: ['男性', '女性'],
	description: ['男性', '女性'],
	trailText: ''
};

export const 大学メールData: TextInputParams = {
	size: 'medium',
	length: 30,
	label: '大学メール',
	description: [`大学より貸与される"@toyo.jp"、"@iniad.org"のアドレスを入力してください。`],
	placeholder: '1234abcd@toyo.jp',
	altText: '大学メールの入力',
	trailText: '',
	isRequired: true,
	isUpper: false
};

export const 個人メールData: TextInputParams = {
	size: 'medium',
	length: 30,
	label: '個人メール',
	description: [
		`大学メールアドレスへのメールが届かない場合に、連絡が可能なメールアドレスを入力してください。`
	],
	placeholder: 'achievetaro@mail.jp',
	altText: '個人メールの入力',
	trailText: '',
	isRequired: true,
	isUpper: false
};

//ImageSelectParams
export const 未選択: ImageSelectChoiceParams = {
	bottomText: 'キャンパスを選択してください',
	imageUrl: 'images/images/Unselected.webp',
	imageAlt: 'キャンパス未選択',
	isDefault: true,
	value: '未選択'
};

export const 白山: ImageSelectChoiceParams = {
	bottomText: '白山キャンパス',
	imageUrl: 'images/images/HAKUSAN.webp',
	imageAlt: '白山キャンパス',
	isDefault: false,
	value: '白山'
};

export const INIAD: ImageSelectChoiceParams = {
	bottomText: 'INIADキャンパス',
	imageUrl: 'images/images/INIAD.webp',
	imageAlt: 'INIADキャンパス',
	isDefault: false,
	value: 'INIAD'
};

export const WELLB: ImageSelectChoiceParams = {
	bottomText: 'WELLBキャンパス',
	imageUrl: 'images/images/WELLB.webp',
	imageAlt: 'WELLBキャンパス',
	isDefault: false,
	value: 'WELLB'
};

export const 板倉: ImageSelectChoiceParams = {
	bottomText: '板倉キャンパス',
	imageUrl: 'images/images/ITAKURA.webp',
	imageAlt: '板倉キャンパス',
	isDefault: false,
	value: '板倉'
};

export const 川越: ImageSelectChoiceParams = {
	bottomText: '川越キャンパス',
	imageUrl: 'images/images/KAWAGOE.webp',
	imageAlt: '川越キャンパス',
	isDefault: false,
	value: '川越'
};

export const オンライン: ImageSelectChoiceParams = {
	bottomText: 'オンライン',
	imageUrl: 'images/images/ONLINE.webp',
	imageAlt: 'オンライン',
	isDefault: false,
	value: 'ONLINE'
};

export const campusImageSelectChoices = [
	new ImageSelectChoice(未選択),
	new ImageSelectChoice(白山),
	new ImageSelectChoice(INIAD),
	new ImageSelectChoice(WELLB),
	new ImageSelectChoice(板倉),
	new ImageSelectChoice(川越)
	// new ImageSelectChoice(オンライン),
];

export const campusImageSelectParams = {
	label: 'キャンパス選択',
	altText: 'キャンパス選択',
	choices: campusImageSelectChoices,
	default: 未選択,
	description: [],
	isRequired: true
};

export const 電話番号params: TextInputParams = {
	size: 'medium',
	length: 4,
	label: '電話番号',
	description: ['携帯電話等、日中に連絡のとれる番号を入力ください'],
	altText: '電話番号の入力',
	placeholder: '',
	trailText: '',
	isUpper: false,
	isRequired: true
};
//EndImageSelectParams

//CheckboxParams
//受講

/***END PARAMS***/

/***CONSTRUCTING INPUT DATA****/
const campusData = {
	キャンパス: new ImageSelectInput(campusImageSelectParams),
	学籍番号: new SingleTextInput(validate学籍番号, 学籍番号Data),
	大学メール: new DoubleTextInput(validateSchoolEmail, 大学メールData),
	すでに: new CheckboxInput(
		'受講経験',
		['Toyo Achieve Englishで受講したことあります。', 'またはレベルチェックを完了しました。'],
		false
	)
};

const personalData = {
	氏名: new SingleTextInput(validateIsRequired, 氏名Data),
	フリガナ: new SingleTextInput(validateフリガナデータ, フリガナData),
	英字名First: new SingleTextInput(validate英字名, 英字名FirstData),
	英文字Last: new SingleTextInput(validate英字名, 英字名LastData),
	性別: new RadioInput(性別Data)
};

const contactData = {
	個人メール: new DoubleTextInput(validatePersonalEmail, 個人メールData),
	電話番号: new PhoneInput(電話番号params)
};

/***END CONSTRUCTING INPUT DATA***/

/*** FORMAT DATA***/
const campusFormat: FormFormatParams = {
	id: 'campus',
	heading: '大学情報',
	subheading: '',
	description: ['通うキャンパスや学籍番号などの情報を入力してください']
};

const personalFormat: FormFormatParams = {
	id: 'personal',
	heading: '個人情報',
	subheading: '',
	description: ['下記の個人情報を入力してください。']
};

const contactFormat: FormFormatParams = {
	id: 'contact',
	heading: '連絡情報',
	subheading: '',
	description: ['下記の連絡情報を入力してください。']
};

// const agreeFormat: FormFormatParams = {
//   heading: "連絡情報",
//   subheading: "",
//   description: ["下記の事項を承諾のうえ、全項目にチェックを入れてください。", "※必ず全てのボックスをチェックしてください。"]
// }
/*** FORMAT DATA ***/

export const campus = new SubformData(campusData, campusFormat);
export const personal = new SubformData(personalData, personalFormat);
export const contact = new SubformData(contactData, contactFormat);
// export const agree = new SubformData(agreeData, agreeFormat);
