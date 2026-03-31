import { icons } from "../assets/assets";
import { useFormContext } from "../context/FormProvider";

import Button from "./Button";

const Form = () => {
    const { state, handleSubmit, handleChange } = useFormContext();
    return (
        <form
            onSubmit={handleSubmit}
            className=" rounded-3xl border-0 shadow-2xl p-5 mx-5 md:mx-17"
        >
            <div className="flex flex-col md:flex-row">
                <div className="bg-emerald-500 text-white rounded-3xl p-10">
                    <div className="w-full mb-6">
                        <h3 className="font-bold mb-3">Contact Information</h3>
                        <p className="opacity-85">
                            I'll create high-quality linkable content and build.
                        </p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-row items-center gap-5">
                            <icons.phone className="" />
                            +917981901713
                        </div>
                        <div className="flex flex-row items-center gap-5">
                            <icons.email />
                            veerabramhachary2003@gmail.com
                        </div>
                        <div className="flex flex-row items-center gap-5">
                            <icons.location />
                            Hyderabad, INDIA
                        </div>
                    </div>
                </div>
                <div className=" flex-1 p-10">
                    <div className="flex justify-between mb-5 gap-3 flex-col md:flex-row">
                        <div className="flex flex-col group">
                            <label
                                htmlFor="name"
                                className="text-gray-500 group-focus-within:text-emerald-500"
                            >
                                Your Name:
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="border-b-2 border-gray-400 focus:border-emerald-500  placeholder:text-gray-500 outline-0 bg-transparent"
                                name="name"
                                value={state.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="flex flex-col group">
                            <label
                                htmlFor="email"
                                className="text-gray-500 group-focus-within:text-emerald-500"
                            >
                                Your Email:
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="peer border-b-2 border-gray-400 focus:border-emerald-500  placeholder:text-gray-500 outline-0 bg-transparent"
                                name="email"
                                value={state.email}
                                required
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="group flex flex-col mb-5">
                        <label
                            htmlFor="subject"
                            className="text-gray-500 group-focus-within:text-emerald-500"
                        >
                            Your subject:
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your subject"
                            className="border-b-2 border-gray-400 focus:border-emerald-500 placeholder:text-gray-500 outline-0 bg-transparent w-full"
                            name="subject"
                            value={state.subject}
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div className="group mb-5">
                        <label
                            htmlFor="Message"
                            className="text-gray-500 group-focus-within:text-emerald-500"
                        >
                            Message:
                        </label>
                        <textarea
                            placeholder="Write here your message"
                            className="border-b-2 border-gray-400 focus:border-emerald-500 placeholder:text-gray-500 outline-0 bg-transparent w-full"
                            name="message"
                            value={state.message}
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <Button
                        type="submit"
                        text="Send Message"
                        style="bg-emerald-500 text-white hover:bg-emerald-600"
                        isSubmitting={state.isSubmitting}
                    />
                </div>
            </div>
        </form>
    );
};
export default Form;
