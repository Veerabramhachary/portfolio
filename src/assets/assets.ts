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
import e_commerce from "./ecommerce-Macbook-Air-screenshot.png";

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
type typeProject = {
    name: string;
    description: string;
    link: string;
    repo: string;
    image: string;
    direction_row: string;
    direction_col: string;
    skills: string[];
};

export const projects: typeProject[] = [
    {
        name: "Forever",
        description: "E-commerce website used react and node.js",
        link: "",
        repo: "https://github.com/veerabramhachary/Forever-ecommerce",
        image: e_commerce,
        direction_row: "row-reverse",
        direction_col: "column-reverse",
        skills: ["React", "Node.js", "Express", "MongoDb", "Tailwind css"]
    },
];
