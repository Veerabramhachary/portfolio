import { createContext } from "react";
export type FormContextType = {
    state: {
        name:string;
        email: string;
        message: string;
        subject:string,
        isSubmitting: boolean
    };
    handleChange: (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleSubmit: (e: React.FormEvent) => void
}
export const FormContext = createContext<FormContextType | null>(null);
