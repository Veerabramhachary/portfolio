import { projects } from "../assets/assets";

const Projects = () => {
    return (
        <div
            className="w-full flex items-center justify-center flex-col gap-6 px-5 md:px-10 lg:px-12 xl:px-15 my-10"
            id="projects"
        >
            <h1 className="font-bold text-6xl md:text-7xl lg:text-8xl">
                Projects
            </h1>
            {/* projects will be added later using mapping */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="w-full h-64 bg-gray-200 rounded-lg shadow-md flex flex-col items-center justify-center"
                    >
                        <h2 className="text-2xl font-semibold">
                            {project.name}
                        </h2>
                        <p className="text-lg">{project.description}</p>
                    </div>
                ))}
            </div>

            <p className="text-lg md:text-xl lg:text-2xl">Coming Soon...</p>
        </div>
    );
};
export default Projects;
