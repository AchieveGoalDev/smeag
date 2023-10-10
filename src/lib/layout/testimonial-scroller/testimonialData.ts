export class Testimonial {
	name: string;
	text: string;
	image: string;

	constructor(name: string, text: string, image: string) {
		this.name = name;
		this.text = text;
		this.image = image;
	}
}

export const testimonials: Testimonial[] = [
	new Testimonial('高橋良佳', 'dummy', 'dummy'),
	new Testimonial('小山美紀', 'dummy', 'dummy'),
	new Testimonial('萩原有希', 'dummy', 'dummy'),
	new Testimonial('尾前武', 'dummy', 'dummy'),
	new Testimonial('Yoshi', 'dummy', 'dummy'),
	new Testimonial('川端康治', 'dummy', 'dummy'),
	new Testimonial('日向大青', 'dummy', 'dummy'),
	new Testimonial('宇梶憲市郎', 'dummy', 'dummy')
];
