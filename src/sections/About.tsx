const About = () => {
    return (
        <div
            className="w-full h-screen flex justify-center gap-6 flex-col px-5 md:px-10 lg:px-12 xl:px-15"
            id="about"
        >
            <h1 className="font-bold text-6xl md:text-7xl lg:text-8xl">
                About me<span className="text-emerald-600">.</span>
            </h1>
            <div className="flex flex-col gap-7">
                <div className="w-full">
                    <div className="flex items-stretch space-x-3 gap-2.5">
                        <span className="bg-emerald-600">.</span>
                        <p className="text-4xl ">
                            Developing beautiful and functional websites is what
                            I love doing, and that's why i give my all in every
                            new challenge.
                        </p>
                    </div>
                </div>
                <div>
                    <h3 className="font-bold">Social Media</h3>
                    <p><a href="https://linkedin.com/">LinkedIn</a></p>
                </div>
                <div className="w-full flex flex-row gap-5">
                    <div>
                        <h3>My Stack.</h3>
                        <div className="bg-gray-300  rounded"></div>
                    </div>
                    <div className="flex-1">
                        <h3>My Special Place</h3>
                        <div className="bg-gray-300 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;
