import type { TextInputParams, RadioInputParams } from './typeDefs';

import { SingleTextInput, PhoneInput, RadioInput } from './typeDefs';

import { validateIsRequired, validateフリガナデータ } from './validatorDefs';

const 氏名Data: TextInputParams = {
	size: 'medium',
	isRequired: true,
	label: '氏名',
	description: [''],
	altText: '氏名の入力',
	placeholder: '例：山田　太郎',
	length: 100,
	isUpper: false,
	trailText: ''
};

const フリガナData: TextInputParams = {
	size: 'medium',
	isRequired: true,
	label: 'フリガナ',
	description: [''],
	altText: '氏名の入力',
	placeholder: '例：ヤマダ　タロウ',
	length: 100,
	isUpper: false,
	trailText: ''
};

const 電話番号params: TextInputParams = {
	size: 'medium',
	length: 4,
	label: '電話番号',
	description: [''],
	altText: '電話番号の入力',
	placeholder: '',
	trailText: '',
	isUpper: false,
	isRequired: true
};

export const 性別Data: RadioInputParams = {
	isRequired: true,
	label: '性別',
	altText: '留学予定の方の性別',
	choices: ['男性', '女性'],
	description: ['男性', '女性'],
	trailText: ''
};

export const 希望キャンパスData: RadioInputParams = {
	isRequired: false,
	label: '希望キャンパス名',
	altText: '希望キャンパスの入力',
	choices: ['キャピタルキャンパス', 'エンカントキャンパス', '未決定'],
	description: ['キャピタルキャンパス', 'エンカントキャンパス', '未決定'],
	trailText: ''
};

//TODO Create general email validator and add email to form
//TODO Create select input and add to form
//TODO Create date select and add to form
export const formData = {
	氏名: new SingleTextInput(validateIsRequired, 氏名Data),
	フリガナ: new SingleTextInput(validateフリガナデータ, フリガナData),
	//email goes here
	電話番号: new PhoneInput(電話番号params),
	性別: new RadioInput(性別Data),
	希望キャンパス: new RadioInput(希望キャンパスData)
	//course select goes here
	//room type select
	//date select goes here
	//stay length select goes here
};
