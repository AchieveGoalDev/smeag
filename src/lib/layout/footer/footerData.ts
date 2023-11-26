import type { NavButton } from "../nav/navData";
import { navButtons } from "../nav/navData";

export type LinkParams = {
    text: string;
    url: string;
};


export type FooterLinksParams = {
    links: NavButton[];
    title: string;
    icon: string;
};

// const courseLinkList: LinkParams[] = [
//     {
//         text: "一般会話",
//         url: "#"
//     },
//     {
//         text: "IELTS",
//         url: "#"
//     },
//     {
//         text: "TOEIC",
//         url: "#"
//     },
//     {
//         text: "TOEFL",
//         url: "#"
//     },
//     {
//         text: "ファミリー",
//         url: "#"
//     },
//     {
//         text: "Business",
//         url: "#"
//     }
// ]

export const courseLinks: FooterLinksParams = {
    title: "コース紹介",
    icon: "ph:book-fill",
    links: navButtons
}