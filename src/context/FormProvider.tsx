import { useContext, useEffect, useReducer } from "react";
import { formReducer, initialState } from "./formStore";
import { FormContext, FormContextType } from "./FormContext";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer, Flip, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(formReducer, initialState);

    // Inistialize EmailJs with public Key

    useEffect(() => {
        emailjs.init("tTgffSxsvwDBVpnul");
    }, []);

    // form data handle change

    const handleChange: FormContextType["handleChange"] = (e) => {
        const { name, value } = e.target;
        dispatch({ type: "UPDATE_FIELD", payload: { name, value } });
    };
    //form data handle submit
    const handleSubmit: FormContextType["handleSubmit"] = async (e) => {
        e.preventDefault();

        toast.promise(
            sendEmail(),
            {
                pending: "Sending message...",
                success: "Message send successfully! 🎉",
                error: "Failed to send message",
            },
            {
                position: "top-right",
                transition: Flip,
            }
        );

        dispatch({ type: "START_SUBMIT" });

        async function sendEmail() {
            try {
                const response = await emailjs.send(
                    "service_6aql16b",
                    "template_2f6j85k",
                    {
                        name: state.name,
                        email: state.email,
                        subject: state.subject,
                        message: state.message,
                    }
                );

                console.log("✔️ Email sent!", response.status);
                dispatch({ type: "RESET_FORM" });
            } catch (error) {
                console.log(error);
            } finally {
                dispatch({ type: "END_SUBMIT" });
            }
        }
    };

    const value: FormContextType = { state, handleChange };

    return (
        <FormContext.Provider value={value}>
            {children}
            {/* Toast container */}
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                limit={1}
                theme="colored"
            />
        </FormContext.Provider>
    );
};

export const useFormContext = () => {
    const ctx = useContext(FormContext);
    if (!ctx) {
        throw new Error("useFormContext must be used inside FormProvider");
    }
    return ctx;
};

export default FormProvider;
