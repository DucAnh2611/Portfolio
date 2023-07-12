
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faSolid from "@fortawesome/free-solid-svg-icons"
import React from "react";

export default function SectionWithHeader({header, content, bgColor, txtColor, nextColor}) {
    return (
        <section 
        id={header.replace(/\s/g, "").toLowerCase()} 
        className={`h-fit w-screen bg-${bgColor} text-${txtColor} py-40 px-40 flex flex-col 
        items-center justify-center border-b gap-20`}>

            <div className={`h-fit w-4/5 py-10 text-5xl font-medium tracking-wider flex items-center justify-center gap-5`}>
                <span className={`text-yellow`}><FontAwesomeIcon icon={faSolid.faAngleLeft}/></span>
                <h1 className="h-fit w-fit">{header}</h1>
                <span className={`text-yellow`}><FontAwesomeIcon icon={faSolid.faAngleRight}/></span>
            </div>

            {content}

        </section>
    )
}