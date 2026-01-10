import Form from "../components/Form";
import FormProvider from "../context/FormProvider";

const Contact = () => {
    return (
        <div
            className="h-screen flex justify-center flex-col items-center px-5 md:px-10 lg:px-12 xl:px-15"
            id="contact"
        >
            <div className="flex items-center flex-col mb-10 text-center">
                <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl ">
                    Get In Touch
                </h1>
                <p className="opacity-60 text-[1.0343rem]">
                    I'll create high quality linkable content and build at least
                    20 hight-authority links to each asset, paving the way for
                    you rankings, improve brand.
                </p>
            </div>
            <div>
                <FormProvider>
                    <Form />
                </FormProvider>
            </div>
        </div>
    );
};
export default Contact;

// background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);
