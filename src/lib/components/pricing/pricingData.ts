export type StayFee = {
	name: string;
	amount: number;
};

export type RoomFees = {
	name: string;
	stay: StayFee[];
};

export type CourseFees = {
	name: string;
	description: string[];
	rooms: RoomFees[];
};

export class CampusFees {
	name: string;
	courses: CourseFees[];

	constructor(name: string, data: CourseFees[]) {
		this.name = name;
		this.courses = data;
	}

	getDefaultCourse() {
		return this.courses[0];
	}

	getDefaultRoom(course: CourseFees) {
		return course.rooms[0];
	}

	getDefaultStay(room: RoomFees) {
		return room.stay[0];
	}

	getCourse(course: string) {
		for (let i = 0; i < this.courses.length; i++) {
			if (course === this.courses[i].name) {
				return this.courses[i];
			}
		}
	}

	getRoom(course: CourseFees, room: string) {
		for (let i = 0; i < course.rooms.length; i++) {
			if (room === course.rooms[i].name) {
				return course.rooms[i];
			}
		}
	}

	getStay(room: RoomFees, stay: string) {
		for (let i = 0; i < room.stay.length; i++) {
			if (stay === room.stay[i].name) {
				return room.stay[i];
			}
		}
	}

	getFee(course: string, room: string, stay: string) {
		const courseData = this.getCourse(course);
		console.log(courseData, room);
		const roomData = this.getRoom(courseData!, room);
		const stayData = this.getStay(roomData!, stay);

		return stayData?.amount;
	}
}

const capitalCourses: CourseFees[] = [
	{
		name: 'ESL①一般英会話',
		description: [
			'早朝授業×80分、マンツーマン×4コマ、 1：4クラス×2コマ、グループ×4コマ、夜間授業×90分',
			'入学条件：特になし。初日のレベルチェックテストを基に英語レベルに合ったクラスに分かれます。'
		],
		rooms: [
			{
				name: '1人',
				stay: [
					{
						name: '1週間',
						amount: 102600
					},
					{
						name: '2週間',
						amount: 148200
					},
					{
						name: '3週間',
						amount: 193800
					},
					{
						name: '4週間',
						amount: 228000
					},
					{
						name: '8週間',
						amount: 456000
					},
					{
						name: '12週間',
						amount: 684000
					},
					{
						name: '24週間',
						amount: 1368000
					}
				]
			},
			{
				name: '2人',
				stay: [
					{
						name: '1週間',
						amount: 95400
					},
					{
						name: '2週間',
						amount: 137800
					},
					{
						name: '3週間',
						amount: 180200
					},
					{
						name: '4週間',
						amount: 212000
					},
					{
						name: '8週間',
						amount: 424000
					},
					{
						name: '12週間',
						amount: 636000
					},
					{
						name: '24週間',
						amount: 1272000
					}
				]
			},
			{
				name: '3人',
				stay: [
					{
						name: '1週間',
						amount: 89600
					},
					{
						name: '2週間',
						amount: 129400
					},
					{
						name: '3週間',
						amount: 169200
					},
					{
						name: '4週間',
						amount: 199000
					},
					{
						name: '8週間',
						amount: 398000
					},
					{
						name: '12週間',
						amount: 597000
					},
					{
						name: '24週間',
						amount: 1194000
					}
				]
			},
			{
				name: '4人',
				stay: [
					{
						name: '1週間',
						amount: 84600
					},
					{
						name: '2週間',
						amount: 122200
					},
					{
						name: '3週間',
						amount: 159800
					},
					{
						name: '4週間',
						amount: 188000
					},
					{
						name: '8週間',
						amount: 376000
					},
					{
						name: '12週間',
						amount: 564000
					},
					{
						name: '24週間',
						amount: 1128000
					}
				]
			}
		]
	},
	{
		name: 'ESL②一般英会話',
		description: [
			'早朝授業×80分、マンツーマン×6コマ、 1：4×2コマ、グループ×2コマ、夜間授業×90分',
			'入学条件：特になし。初日のレベルチェックテストを基に英語レベルに合ったクラスに分かれます。'
		],
		rooms: [
			{
				name: '1人',
				stay: [
					{
						name: '1週間',
						amount: 116100
					},
					{
						name: '2週間',
						amount: 167700
					},
					{
						name: '3週間',
						amount: 219300
					},
					{
						name: '4週間',
						amount: 258000
					},
					{
						name: '8週間',
						amount: 516000
					},
					{
						name: '12週間',
						amount: 774000
					},
					{
						name: '24週間',
						amount: 1548000
					}
				]
			},
			{
				name: '2人',
				stay: [
					{
						name: '1週間',
						amount: 108900
					},
					{
						name: '2週間',
						amount: 157300
					},
					{
						name: '3週間',
						amount: 205700
					},
					{
						name: '4週間',
						amount: 242000
					},
					{
						name: '8週間',
						amount: 484000
					},
					{
						name: '12週間',
						amount: 726000
					},
					{
						name: '24週間',
						amount: 1452000
					}
				]
			},
			{
				name: '3人',
				stay: [
					{
						name: '1週間',
						amount: 103100
					},
					{
						name: '2週間',
						amount: 148900
					},
					{
						name: '3週間',
						amount: 194700
					},
					{
						name: '4週間',
						amount: 229000
					},
					{
						name: '8週間',
						amount: 458000
					},
					{
						name: '12週間',
						amount: 687000
					},
					{
						name: '24週間',
						amount: 1374000
					}
				]
			},
			{
				name: '4人',
				stay: [
					{
						name: '1週間',
						amount: 98100
					},
					{
						name: '2週間',
						amount: 141700
					},
					{
						name: '3週間',
						amount: 185300
					},
					{
						name: '4週間',
						amount: 218000
					},
					{
						name: '8週間',
						amount: 436000
					},
					{
						name: '12週間',
						amount: 654000
					},
					{
						name: '24週間',
						amount: 1308000
					}
				]
			}
		]
	},
	{
		name: 'TOEIC-Preコース',
		description: [
			'早朝授業×80分、マンツーマン×4コマ、1:4×2コマ、グループ×4コマ、夜間授業×90分',
			'入学条件：特になし。これからTOEICを学ぶ初心者向けのコース。'
		],
		rooms: [
			{
				name: '1人',
				stay: [
					{
						name: '1週間',
						amount: 108500
					},
					{
						name: '2週間',
						amount: 156700
					},
					{
						name: '3週間',
						amount: 204900
					},
					{
						name: '4週間',
						amount: 241000
					},
					{
						name: '8週間',
						amount: 482000
					},
					{
						name: '12週間',
						amount: 723000
					},
					{
						name: '24週間',
						amount: 1446000
					}
				]
			},
			{
				name: '2人',
				stay: [
					{
						name: '1週間',
						amount: 101300
					},
					{
						name: '2週間',
						amount: 146300
					},
					{
						name: '3週間',
						amount: 191300
					},
					{
						name: '4週間',
						amount: 225000
					},
					{
						name: '8週間',
						amount: 450000
					},
					{
						name: '12週間',
						amount: 675000
					},
					{
						name: '24週間',
						amount: 1350000
					}
				]
			},
			{
				name: '3人',
				stay: [
					{
						name: '1週間',
						amount: 95400
					},
					{
						name: '2週間',
						amount: 137800
					},
					{
						name: '3週間',
						amount: 180200
					},
					{
						name: '4週間',
						amount: 212000
					},
					{
						name: '8週間',
						amount: 424000
					},
					{
						name: '12週間',
						amount: 636000
					},
					{
						name: '24週間',
						amount: 1272000
					}
				]
			},
			{
				name: '4人',
				stay: [
					{
						name: '1週間',
						amount: 90500
					},
					{
						name: '2週間',
						amount: 130700
					},
					{
						name: '3週間',
						amount: 170900
					},
					{
						name: '4週間',
						amount: 201000
					},
					{
						name: '8週間',
						amount: 402000
					},
					{
						name: '12週間',
						amount: 603000
					},
					{
						name: '24週間',
						amount: 1206000
					}
				]
			}
		]
	},
	{
		name: 'TOEIC 600/700/800/900コース',
		description: [
			'早朝授業×80分、マンツーマン×4コマ、1:4×2コマ、グループ×4コマ、夜間授業×90分',
			'TOEICの目標スコアを達成したい方向けのコース。',
			'入学条件のスコアは過去2年以内に取得した公式試験の点数、もしくは入学時のレベルチェックテストの点数により判断されます。',
			'【入学条件】',
			'TOEIC600：IELTS3.5/TOEFL40/TOEIC490以上',
			'TOEIC700：IELTS5.0/TOEFL60/TOEIC680以上',
			'TOEIC800：IELTS6.0/TOEFL80/TOEIC800以上',
			'TOEIC900：TOEIC800以上のみ'
		],
		rooms: [
			{
				name: '1人',
				stay: [
					{
						name: '1週間',
						amount: 112500
					},
					{
						name: '2週間',
						amount: 162500
					},
					{
						name: '3週間',
						amount: 212500
					},
					{
						name: '4週間',
						amount: 250000
					},
					{
						name: '8週間',
						amount: 500000
					},
					{
						name: '12週間',
						amount: 750000
					},
					{
						name: '24週間',
						amount: 1500000
					}
				]
			},
			{
				name: '2人',
				stay: [
					{
						name: '1週間',
						amount: 105300
					},
					{
						name: '2週間',
						amount: 152100
					},
					{
						name: '3週間',
						amount: 198900
					},
					{
						name: '4週間',
						amount: 234000
					},
					{
						name: '8週間',
						amount: 468000
					},
					{
						name: '12週間',
						amount: 702000
					},
					{
						name: '24週間',
						amount: 1404000
					}
				]
			},
			{
				name: '3人',
				stay: [
					{
						name: '1週間',
						amount: 99500
					},
					{
						name: '2週間',
						amount: 143700
					},
					{
						name: '3週間',
						amount: 187900
					},
					{
						name: '4週間',
						amount: 221000
					},
					{
						name: '8週間',
						amount: 442000
					},
					{
						name: '12週間',
						amount: 663000
					},
					{
						name: '24週間',
						amount: 1326000
					}
				]
			},
			{
				name: '4人',
				stay: [
					{
						name: '1週間',
						amount: 94500
					},
					{
						name: '2週間',
						amount: 136500
					},
					{
						name: '3週間',
						amount: 178500
					},
					{
						name: '4週間',
						amount: 210000
					},
					{
						name: '8週間',
						amount: 420000
					},
					{
						name: '12週間',
						amount: 630000
					},
					{
						name: '24週間',
						amount: 1206000
					}
				]
			}
		]
	},
	{
		name: 'TOEIC-Preコース',
		description: [
			'早朝授業×80分、マンツーマン×4コマ、1:4×2コマ、グループ×4コマ、夜間授業×90分',
			'入学条件：特になし。これからTOEICを学ぶ初心者向けのコース。'
		],
		rooms: [
			{
				name: '1人',
				stay: [
					{
						name: '1週間',
						amount: 108500
					},
					{
						name: '2週間',
						amount: 156700
					},
					{
						name: '3週間',
						amount: 204900
					},
					{
						name: '4週間',
						amount: 241000
					},
					{
						name: '8週間',
						amount: 482000
					},
					{
						name: '12週間',
						amount: 723000
					},
					{
						name: '24週間',
						amount: 1446000
					}
				]
			},
			{
				name: '2人',
				stay: [
					{
						name: '1週間',
						amount: 101300
					},
					{
						name: '2週間',
						amount: 146300
					},
					{
						name: '3週間',
						amount: 191300
					},
					{
						name: '4週間',
						amount: 225000
					},
					{
						name: '8週間',
						amount: 450000
					},
					{
						name: '12週間',
						amount: 675000
					},
					{
						name: '24週間',
						amount: 1350000
					}
				]
			},
			{
				name: '3人',
				stay: [
					{
						name: '1週間',
						amount: 95400
					},
					{
						name: '2週間',
						amount: 137800
					},
					{
						name: '3週間',
						amount: 180200
					},
					{
						name: '4週間',
						amount: 212000
					},
					{
						name: '8週間',
						amount: 424000
					},
					{
						name: '12週間',
						amount: 636000
					},
					{
						name: '24週間',
						amount: 1272000
					}
				]
			},
			{
				name: '4人',
				stay: [
					{
						name: '1週間',
						amount: 90500
					},
					{
						name: '2週間',
						amount: 130700
					},
					{
						name: '3週間',
						amount: 170900
					},
					{
						name: '4週間',
						amount: 201000
					},
					{
						name: '8週間',
						amount: 402000
					},
					{
						name: '12週間',
						amount: 603000
					},
					{
						name: '24週間',
						amount: 1206000
					}
				]
			}
		]
	},
];

const encantoCourses: CourseFees[] = [
	{
		name: 'ESL①一般英会話コース',
		description: [
			'早朝授業×80分、マンツーマン×4コマ、 1：4クラス×2コマ、グループ×4コマ、夜間授業×90分',
			'入学条件：特になし。初日のレベルチェックテストを基に英語レベルに合ったクラスに分かれます。',
		],
		rooms: [
			{
				name: '3人',
				stay: [
					{
						name: '1週間',
						amount: 99550
					},
					{
						name: '2週間',
						amount: 141350
					},
					{
						name: '3週間',
						amount: 187150
					},
					{
						name: '4週間',
						amount: 223000
					},
					{
						name: '8週間',
						amount: 446000
					},
					{
						name: '12週間',
						amount: 669000
					},
					{
						name: '24週間',
						amount: 1338000
					}
				]
			},
		]
	},
	{
		name: 'ESL②一般英会話コース',
		description: [
			'早朝授業×80分、マンツーマン×6コマ、 1：4×2コマ、グループ×2コマ、夜間授業×90分',
			'入学条件：特になし。初日のレベルチェックテストを基に英語レベルに合ったクラスに分かれます。',
		],
		rooms: [
			{
				name: '3人',
				stay: [
					{
						name: '1週間',
						amount: 109050
					},
					{
						name: '2週間',
						amount: 160850
					},
					{
						name: '3週間',
						amount: 212650
					},
					{
						name: '4週間',
						amount: 253000
					},
					{
						name: '8週間',
						amount: 506000
					},
					{
						name: '12週間',
						amount: 759000
					},
					{
						name: '24週間',
						amount: 1518000
					}
				]
			},
		]
	},
]

export const encantoFees = new CampusFees("エンカント", encantoCourses)
export const capitalFees = new CampusFees('キャピタル', capitalCourses);
