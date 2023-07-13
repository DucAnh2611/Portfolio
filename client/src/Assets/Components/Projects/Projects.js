
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faBrands from "@fortawesome/free-brands-svg-icons";
import insta from "../../Image/isntagram.jpg";
import drvi from "../../Image/drivingbike.jpg";
import scr from "../../Image/Scramble.jpg";
import vege from "../../Image/vegetable.jpg";
import portfo from "../../Image/portfolio.jpg";
import React from "react";
const projectList = require("../../../profile.json").projects;
const ListImage = {
    "ins" : insta,
    "drv": drvi,
    "wrd": scr,
    "vgtw": vege,
    "pf": portfo
}


export default function Projects(){
    return (
        <div
        className="h-fit w-4/5 grid grid-cols-3 gap-10"
        >

        {
            projectList.map(e => (
                <div 
                className="w-full h-[42rem] bg-white rounded-[30px] overflow-hidden flex flex-col justify-start relative"
                key={e.name}>

                    <div
                    className="h-56 w-full overflow-hidden border-b border-black"
                    >
                        <img 
                        className="h-full w-full object-cover"
                        src={ListImage[e.src]} alt="project"></img>
                    </div>

                    <div
                    className="h-fit w-full flex flex-wrap gap-2 box-border px-10 my-5 items-start justify-start"
                    >
                        {
                        Object.keys(e.tags).map(el => (
                            e.tags[el].map(tag => {
                                let bg = el === "tech" ? "bg-yellow" : "bg-blue";
                                let tx = el === "tech" ? "text-yellow" : "text-blue";
                                return ( 
                                <div
                                className={`px-3 py-1 ${tx} ${bg} bg-opacity-30 font-bold text-sm tracking-wider`}
                                >
                                    <p>{tag}</p>
                                </div>
                                )

                            })
                        ))
                    }
                    </div>

                    <div
                    className="h-fit w-full flex flex-col gap-2 box-border px-10 items-start"
                    >
                        <p
                        className="h-fit w-full text-2xl font-bold text-left"
                        >{e.name}</p>
                        <p
                        className="h-fit w-full text-lg text-left break-words"
                        >{e.detail}</p>
                    </div>

                    <div
                    className="h-fit w-full flex flex-row gap-10 box-border px-10 items-center justify-start my-10 absolute bottom-0"
                    >
                        <a
                        href={e.github}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white border-[3px] rounded-xl py-3 px-10 font-medium duration-300 hover:bg-white-sec hover:scale-105"
                        >Details</a>
                    </div>

                </div>
            ))
        }

        </div>
    )
}