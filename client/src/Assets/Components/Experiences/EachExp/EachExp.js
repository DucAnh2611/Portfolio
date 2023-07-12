
import React from "react";

export default function EachExp({...props}) {
    return (
        <div 
        className="flex flex-row h-fit w-full relative">

            <div
            className="w-1/6 before:border-l-2 before:border-white before:absolute before:content-['_'] before:h-full">
                <p
                className="z-[1] relative w-full text-left text-base my-2 italic
                before:absolute before:h-[2rem] before:w-[2rem] before:rounded-full before:bg-yellow-sec before:box-border
                before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:border-[5px] before:border-black"
                >{new Date(props.timeline).toLocaleDateString()}</p>
            </div>

            <div
            className="h-fit w-5/6 block">

                <div className="h-10 w-full block">
                    <p
                    className="h-full w-full text-left text-3xl text-yellow font-bold"
                    >{props.header}</p>
                </div>

                <div className="h-fit w-full py-5">
                    <p
                    className="text-xl break-words text-justify"
                    >{props.content}</p>
                </div>

            </div>      

        </div>
    )
}