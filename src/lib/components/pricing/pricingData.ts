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
			}
		]
	}
];

export const capitalFees = new CampusFees('キャピタル', capitalCourses);
