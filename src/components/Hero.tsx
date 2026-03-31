import { useEffect, useState } from "react";
import Button from "./Button";

const Hero = () => {

    const words =["Front-end", "Back-end", "Full-stack"];
    const [index, setIndex] = useState(0);
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            setIndex((prev)=> (prev+1) % words.length)
        }, 5000)
        return ()=> clearInterval(interval)
    },[])
    return (
        <div className="w-full h-screen flex justify-center md:justify-between md:flex-row flex-col-reverse items-center gap-10">
            <div>
                <p className="font-semibold text-[1.2rem] md:text-2xl lg:text-3xl">
                    Hey, I'm Veera👋
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold leading-tight ">
                    <span className="text-emerald-600 animate-fadeSlide"key={words[index]}>{words[index]}</span>
                </h1>
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4">
                    Developer
                </h1>
                <p className="font-light text-gray-500">
                    I'm a frontend developer based in india, I'll help you{" "}
                    <br  className="hidden md:inline"/>
                    build beautiful websites your users will love.
                </p>
                <div className="flex flex-row gap-4">
                    <Button
                        type="button"
                        text="Get In Touch"
                        style="bg-black text-white"
                        url="contact"
                    />
                    <Button
                        type="button"
                        text="Browse Projects"
                        style="bg-gray-300 hover:text-white hover:bg-emerald-600"
                        url="projects"
                    />
                </div>
            </div>
            <div>
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-md xl:h-[28rem] 2xl:w-[32rem] 2xl:h-[32rem] bg-amber-200 rounded-full p-8">
                    <div className="w-full h-full bg-emerald-200 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};
export default Hero;