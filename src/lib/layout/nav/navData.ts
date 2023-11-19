export type NavButton = {
	url: string;
	text: string;
};

export const navButtons: NavButton[] = [
	{
		url: '/campus',
		text: 'キャンパスの紹介・費用'
	},
	{
		url: '/course',
		text: 'コースの紹介'
	},
	{
		url: '/faq',
		text: 'よくある質問'
	},
	{
		url: '/contact',
		text: 'お問い合わせ'
	}
];
