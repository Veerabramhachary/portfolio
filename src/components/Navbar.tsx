import { useState } from "react";
import { icons, navLink } from "../assets/assets";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const submitHandler = (targetId: string) => {
        const el = document.getElementById(targetId);
        el?.classList.add("active")
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const menuHandler = (targetId:string) => {
        const el = document.getElementById(targetId);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
        setOpen(!open);
    }
    return (
        <nav className="fixed top-0 left-0 z-50 w-full backdrop-blur-md px-5 md:px-10 lg:px-12 xl:px-15">
            <div className="w-full mx-auto flex flex-row justify-between items-center pt-3 pb-4">
                <h2 className="font-bold md:text-3xl 2xl:text-4xl">
                    <a href="/">Veera</a>
                </h2>
                <ul className="hidden md:flex gap-6 justify-between items-center">
                    {navLink.map((item, index) => (
                        <li className="font-semibold text-[20px]" key={index}>
                            <button className="cursor-pointer uppercase hover:text-emerald-600 active:text-emerald-600"
                                onClick={() => submitHandler(item.targetId)}
                            >
                                {item.page}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-4">
                    <icons.chat onClick={()=> submitHandler("contact")} className="hidden md:block w-10 h-10 cursor-pointer"/>
                    <icons.menu className="md:hidden w-7 h-7 cursor-pointer" onClick={()=> setOpen(!open)}/>
                </div>
                <div className={`md:hidden absolute right-0 top-0  font-semibold ${open ? 'w-full transition-all ease-in':"hidden"}`}>
                    <ul className="w-full bg-emerald-500 flex h-screen flex-col pt-3.5 gap-5 justify-start items-center">
                        {navLink.map((item, index)=> (
                            <button onClick={()=>menuHandler(item.targetId)} key={index} className="cursor-pointer uppercase">{item.page}</button>
                        ))}
                        <button className="cursor-pointer uppercase" onClick={()=> menuHandler("contact")}>Contact</button>
                        <hr />
                        <button className="cursor-pointer uppercase" onClick={()=>setOpen(false)}>Close</button>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
