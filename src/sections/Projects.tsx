import { projects } from "../assets/assets";
import Button from "../components/Button";

const Projects = () => {
    return (
        <div
            className="w-full flex items-center justify-center flex-col gap-6 px-5 md:px-10 lg:px-12 xl:px-15 my-10"
            id="projects"
        >
            <h1 className="font-bold text-6xl md:text-7xl lg:text-8xl mt-20 t">
                Projects
            </h1>
            <div className="w-full rounded-lg shadow-md">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={"flex p-4 items-center gap-10"}
                        style={{ flexDirection: window.innerWidth >= 768 ? project.direction_row : project.direction_col}}
                    >
                        <div className="w-full flex flex-col gap-3">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl">
                                {project.name}
                            </h1>
                            <div className="flex flex-row gap-2 my-4 flex-wrap">
                                {project.skills.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="px-3 py-2 bg-gray-200 rounded-lg"
                                    >
                                        <li className="list-none text-[13px] md:text-[16px]">{skill}</li>
                                    </div>
                                ))}
                            </div>
                            <p>{project.description}</p>
                            <div className="flex flex-row gap-5">
                                <Button
                                    type="button"
                                    text="Live"
                                    style="bg-emerald-600  text-[16px] text-white"
                                    url={project.link}
                                />
                                <Button
                                    type="button"
                                    text="Repo"
                                    style="bg-emerald-600  text-[16px] text-white"
                                    url={project.repo}
                                />
                            </div>
                        </div>
                        <div className="w-full h-full flex justify-center items-center p-6">
                            <img src={project.image} className="bg-cover" alt="" />
                        </div>
                    </div>
                ))}
            </div>

            <p className="text-lg md:text-xl lg:text-2xl">Coming Soon...</p>
        </div>
    );
};
export default Projects;
