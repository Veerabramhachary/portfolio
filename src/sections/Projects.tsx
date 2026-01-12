import { projects } from "../assets/assets";

const Projects = () => {
    return (
        <div
            className="w-full flex items-center justify-center flex-col gap-6 px-5 md:px-10 lg:px-12 xl:px-15 my-10"
            id="projects"
        >
            {/* Removed the trailing 't' in className */}
            <h1 className="font-bold text-6xl md:text-7xl lg:text-8xl mt-20">
                Projects
            </h1>

            <div className="w-full rounded-lg shadow-md flex flex-col gap-10">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`flex p-4 items-center gap-10 flex-col ${
                            project.direction_row === 'row-reverse' ? 'md:flex-row-reverse' : 'md:flex-row'
                        }`}
                    >
                        {/* Text Content */}
                        <div className="w-full flex flex-col gap-3">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                                {project.name}
                            </h1>
                            <div className="flex flex-row gap-2 my-4 flex-wrap">
                                {project.skills.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="px-3 py-2 bg-gray-100 rounded-lg border border-gray-200"
                                    >
                                        <span className="text-[13px] md:text-[16px] text-gray-700">
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-row gap-5 mt-4">
                                <button type="button" onClick={() => window.open(project.link, "_blank")} className="bg-emerald-600 px-6 py-2 rounded text-white" >Live</button>
                                <button type="button" onClick={() => window.open(project.repo, "_blank")} className="bg-slate-800 px-6 py-2 rounded text-white">Repo</button>
                            </div>
                        </div>

                        {/* Image Content */}
                        <div className="w-full h-full flex justify-center items-center p-6">
                            <img
                                src={project.image}
                                className="rounded-xl object-cover w-full h-auto shadow-sm"
                                alt={project.name}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <p className="text-lg md:text-xl lg:text-2xl mt-10 italic text-gray-400">
                Coming Soon...
            </p>
        </div>
    );
};

export default Projects;