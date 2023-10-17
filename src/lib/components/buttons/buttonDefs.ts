export type ButtonFunction = () => void;

export type ContactType = "phone" | "mail"

export type ColorButtonParams = {
    color: string;
    link: string | null;
    function: ButtonFunction | null;
};

export type ContactButtonParams = {
    color: string;
    link: string;
    type: ContactType
}