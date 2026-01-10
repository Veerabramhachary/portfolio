import { MdMenu, MdEmail, MdLocationCity } from "react-icons/md";
import { IoChatbubbleSharp } from "react-icons/io5";
import { PiFileHtmlLight, PiPhoneCall } from "react-icons/pi";
import {
    DiCss3Full,
    DiJavascript,
    DiMongodb,
    DiNodejs,
    DiReact,
} from "react-icons/di";
import { SiExpress, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { GiTBrick } from "react-icons/gi";
import { FiFigma } from "react-icons/fi";

export const icons = {
    menu: MdMenu,
    chat: IoChatbubbleSharp,
    phone: PiPhoneCall,
    email: MdEmail,
    location: MdLocationCity,
    html5: PiFileHtmlLight,
    css3: DiCss3Full,
    js: DiJavascript,
    react: DiReact,
    ts: SiTypescript,
    nextjs: TbBrandNextjs,
    tc: SiTailwindcss,
    vite: SiVite,
    git: GiTBrick,
    figma: FiFigma,
    mondb: DiMongodb,
    node: DiNodejs,
    express: SiExpress,
};

export const navLink = [
    { page: "Home", targetId: "home" },
    { page: "Project", targetId: "projects" },
    { page: "About", targetId: "about" },
    { page: "Skills", targetId: "skills" },
];

export const skills = [
    {
        category: "Frontend",
        items: [
            { name: "HTML5", icon: icons.html5 },
            { name: "CSS3", icon: icons.css3 },
            { name: "JAVASCRIPT", icon: icons.js },
            { name: "TYPESCRIPT", icon: icons.ts },
        ],
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: icons.node },
            { name: "Express", icon: icons.express },
            { name: "MongoDb", icon: icons.mondb },
        ],
    },
    {
        category: "Frameworks",
        items: [
            { name: "React", icon: icons.react },
            { name: "Next.js", icon: icons.nextjs },
            { name: "Tailwind css", icon: icons.tc },
        ],
    },
    {
        category: "Tools & Others",
        items: [
            { name: "vite", icon: icons.vite },
            { name: "Git / GitHub", icon: icons.git },
            { name: "Figma", icon: icons.figma },
        ],
    },
];

export const projects = [
    { name: "", description: "", link: "", image: ""},
    { name: "", description: "", link: "", image: "" },
    { name: "", description: "", link: "", image: "" }
]