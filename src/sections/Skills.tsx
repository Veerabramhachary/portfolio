import { skills } from "../assets/assets";
const Skills = () => {
    return (
        <div
            id="skills"
            className="w-full h-screen flex justify-center flex-col gap-6 px-5 md:px-10 lg:px-12 xl:px-15"
        >
            <h1 className="font-bold text-6xl md:text-7xl lg:text-8xl">
                Skills<span className="text-emerald-600">.</span>
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-flow-col">
                {skills.map((item, index) => (
                    <div key={index} className="flex flex-col">
                        <h2 className="text-[20px] md:text-2xl lg:text-3xl xl:text-4xl">
                            {item.category}
                        </h2>
                        <div className="py-5">
                            {item.items.map((skill, idx) => {
                                const Icon = skill.icon;
                                return (
                                    <div key={idx} className="flex gap-3 px-2 text-[16px] md:text-[20px] lg:text-2xl items-center mb-3">
                                        <Icon />
                                        <span className="text-emerald-500">{skill.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* 
        <div className="flex justify-between">
            <div className="flex flex-col">
                <h3 className="text-[20px] md:text-3xl lg:text-4xl xl:text-5xl">Frontend</h3>
            </div>
            <div>
                <h3 className="text-[20px] md:text-3xl lg:text-4xl xl:text-5xl">Backend</h3>
            </div>
            <div>
                <h3 className="text-[20px] md:text-3xl lg:text-4xl xl:text-5xl">Frameworks/Library</h3>
            </div>
        </div> */}
        </div>
    );
};
export default Skills;
