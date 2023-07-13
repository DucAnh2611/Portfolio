
import React, { useState } from "react";

export default function EachSkills({title, content}){
    
    const [dict, SetDict] = useState({
        "1": "Novice",
        "2": "Beginner",
        "3": "Competent",
        "4": "Proficient",
        "5": "Expert"
    });

    return (
        <div 
        className="block h-fit w-full overflow-hidden"
        >

            <div
            className="h-fit py-5 w-fit border-b border-yellow-sec"
            >
                <h1
                className="text-4xl text-left font-medium tracking-wider"
                >{title}</h1>
            </div>

            <div className="h-fit w-full grid grid-cols-2 gap-5 place-items-start my-10">

                {
                    content.map(e => (

                        <div
                        className="h-[7rem] w-5/6 overflow-hidden flex items-center gap-10 bg-black-sec bg-opacity-20 rounded-2xl box-border px-10"
                        >

                            <div
                            className="flex flex-row items-center gap-5 w-1/3 overflow-hidden"
                            >
                                <img
                                className="h-auto w-1/5 rounded-md"
                                src={e.icon} alt="Tech"/>
                                <p
                                className="text-lg w-4/5 text-left"
                                >{e.name}</p>
                            </div> 

                            <div
                            className="relative w-2/3"
                            >

                                <div className="grid justify-items-start grid-cols-5 w-full absolute top-1/2 left-0 -translate-y-1/2 gap-2">
                                    {
                                        new Array(5).fill('').map((_, idx) => <div
                                        className={`bg-white w-full h-5 rounded-md relative group-hover:scale-125`}
                                        >
                                            <p
                                            className="absolute hidden top-[-30px] left-1/2 -translate-x-1/2"
                                            >{dict[idx+1]}</p>
                                        </div>)
                                    }                                    
                                </div>

                                <div className="grid justify-items-start grid-cols-5 w-full absolute top-1/2 left-0 -translate-y-1/2 gap-2">
                                    {
                                        new Array(Math.ceil(e.level)).fill('').map((_, idx) => {
                                            return(
                                                <div
                                                style={{
                                                    width: e.level > (idx +1)
                                                    ? "100%" 
                                                    : `${ Math.round(100 + (e.level - (idx+1))*100) }%` 
                                                }}
                                                className={`bg-yellow h-5 rounded-md relative duration-300 group-hover:scale-125 group hover:scale-110`}
                                                >
                                                    <p
                                                    className="absolute hidden top-[-30px] left-1/2 -translate-x-1/2 group-hover:block"
                                                    >{dict[idx+1]}</p>
                                                </div>                                                
                                            )

                                        })
                                    }                                    
                                </div>

                            </div>     

                        </div>

                    ))
                }

            </div>

        </div>
    )
}