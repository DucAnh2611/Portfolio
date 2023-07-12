
import React, { useEffect } from "react";
import SectionWithHeader from "../../Components/SectionWithHeader/SectionWithHeader";
import * as faBrands from "@fortawesome/free-brands-svg-icons";
import Experiences from "../../Components/Experiences/Experiences";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myPic from "../../Image/ducanh.jpg";
import Skills from "../../Components/Skills/Skills";

export default function HomePage() {
    useEffect(()=>{
        document.title = 'My Portfolio'
    }, [])
    return (

        <main className="h-fit w-screen py-60 block">

            <header className="box-border px-96 flex items-center justify-between gap-10 relative 
            before:bg-[url('./Assets/Image/SVG/logo_ducanh.svg')] before:absolute before:top-1/2 before:left-0 before:content-['_']
            before:h-[60rem] before:w-[60rem] before:bg-no-repeat before:opacity-20 before:translate-x-0 before:-translate-y-1/2 before:z-0">

                <div className="block w-2/3 h-fit z-[1]">
                    <p className="w-full text-left text-4xl my-10 font-normal">Hello, I'm Front-end Developer</p>
                    <h1 className="w-full text-left text-8xl font-bold flex flex-wrap gap-5">I can write <p className="text-blue">clean</p> and <p className="text-blue">high-quality</p> code</h1>
                    <div className="w-full flex flex-row gap-5 my-10">
                        <a 
                        className="h-fit w-fit duration-300 hover:text-yellow-sec hover:scale-110"
                        href="https://github.com/DucAnh2611?tab=repositories" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faBrands.faGithub} className="h-10 w-auto"/></a>
                        <a 
                        className="h-fit w-fit duration-300 hover:text-yellow-sec hover:scale-110"
                        href="https://www.facebook.com/DucAnh.2611.02/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faBrands.faFacebook} className="h-10 w-auto"/></a>
                        <a 
                        className="h-fit w-fit duration-300 hover:text-yellow-sec hover:scale-110"
                        href="https://www.linkedin.com/in/dd-anhh-53398827a/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faBrands.faLinkedin} className="h-10 w-auto"/></a>
                    </div>
                </div>

                <div className="w-1/3 h-fit grid place-items-center">

                    <div className="h-fit w-fit rounded-xl overflow-hidden border-5 border-yellow-sec shadow-[50px_35px_10px_#FFC60B]">
                        <img 
                        className="h-auto w-[20rem]"
                        src={myPic}
                        alt="me"/>
                    </div>

                </div>

            </header>

            <SectionWithHeader header="Experiences" content={<Experiences/>} bgColor={"black"} txtColor={"white"}/>
            <SectionWithHeader header="Skills" content={<Skills/>} bgColor={"black"} txtColor={"white"}/>
            <SectionWithHeader header="Projects" content={<></>} bgColor={"yellow-sec"} txtColor={"black"}/>
            <SectionWithHeader header="Send me an email" content={<></>} bgColor={"black"} txtColor={"white"}/>
        </main>

    )
}
