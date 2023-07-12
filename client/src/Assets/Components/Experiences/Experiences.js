
import React, { useState } from "react";
import EachExp from "./EachExp/EachExp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
const experiences = require("../../../profile.json").experiences

export default function Experiences() {

    const [showFull, SetShowFull] = useState(false);

    return (
        <div className="h-fit w-4/5 flex flex-col">
            {
                experiences.filter((_, idx) => idx < 3).map(e => (
                    <EachExp key={e.name} timeline={e.time} header={e.name} content={e.detail}/>
                ))
            }
            {
                experiences.length > 3

                ? showFull 

                    ? experiences.filter((_, idx) => idx >=3).map(e => (
                        <EachExp key={e.name} timeline={e.time} header={e.name} content={e.detail}/>
                    ))
                    : (<div className="w-full h-fit bg-black-sec duration-300 bg-opacity-50 cursor-pointer hover:bg-opacity-100 my-5">
                        <button 
                        className="py-5 font-thin text-lg text-center text-yellow"
                        onClick={ () => SetShowFull(true)}><FontAwesomeIcon icon={fa.faAngleDoubleDown} className="mx-2"/>Show more</button>
                    </div>)

                : <></>
            }
        </div>
    )
}