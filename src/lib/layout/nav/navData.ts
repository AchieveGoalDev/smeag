export type NavButton = {
	url: string;
	text: string;
	icon: string;
};

export const navButtons: NavButton[] = [
	{
		url: '/campus',
		text: 'キャンパスの紹介・費用',
		icon: 'fa6-solid:school'
	},
	{
		url: '/course',
		text: 'コースの紹介',
		icon: 'streamline:class-lesson-solid'
	},
	{
		url: '/faq',
		text: 'よくある質問',
		icon: 'wpf:faq'
	},
	{
		url: '/contact',
		text: 'お問い合わせ',
		icon: 'grommet-icons:contact'
	}
];
