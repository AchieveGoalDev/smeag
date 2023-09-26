export type ButtonFunction = () => void;

export type ColorButtonParams = {
    color: string;
    link: string | null;
    function: ButtonFunction | null;
};