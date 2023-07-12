
import React from "react";
import { ReactComponent as MyLogo} from "../../Image/SVG/logo_ducanh.svg";
import PartNav from "./Part/Part";

export default function Navigation(){
    return (
        <nav 
        className="h-24 w-screen overflow-hidden flex justify-between items-center z-[2]
        box-border px-40 mx-auto my-0 border-b border-white sticky top-0 backdrop-blur-sm bg-black bg-opacity-50">

            <div className="h-full w-fit flex items-center justify-start">
                <a className="h-fit w-fit text-white" href="/"><MyLogo className="h-10"/></a>
            </div>

            <div className="h-full w-fit flex items-center justify-between">

                <PartNav href="/#experiences" content="Experiences"/>
                <PartNav href="/#skills" content="Skills"/>
                <PartNav href="/#projects" content="Projects"/>
                <PartNav href="/cv" content="My CV"/>

            </div>

            <div className="h-full w-fit px-10 grid place-items-center">
                <a href="/#sendmeanemail" 
                className="px-7 py-3 bg-yellow-sec rounded-2xl text-black font-bold duration-300 hover:cursor-pointer hover:bg-yellow hover:shadow-yellow-sec hover:shadow-center-l">Contact Me</a>
            </div>

        </nav>
    )
}