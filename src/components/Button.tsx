import { useFormStatus } from "react-dom";

export type buttonTypes = {
    text: string;
    style: string;
    type: string;
    url?: string;
    isSubmitting?: boolean;
};
const Button = ({
    type,
    text,
    style,
    url,
    isSubmitting =false
}: buttonTypes) => {
    const setUrl = (seturl?: string) => {
        if (!seturl) return;
        const el = document.getElementById(seturl);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const { pending } = useFormStatus();
    // using isSubmitting || pending
    const disabled = pending || isSubmitting;
    const buttonText = disabled ? "Sending" : text;
    return (
        <button
            onClick={() => setUrl(url)}
            type={type as "button" | "submit" | "reset"} // Type assertion
            disabled={disabled}
            className={`rounded-lg py-3 px-5 px-auto border-0 shadow-lg mt-5 font-bold cursor-pointer text-[12px] ${style}`}
        >
            {buttonText}
        </button>
    );
};
export default Button;
