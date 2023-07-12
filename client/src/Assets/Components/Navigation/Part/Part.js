
import React from "react";

export default function PartNav({href, content}) {
    return (
        <a 
        href={href}
        className="h-full px-10 grid place-items-center text-lg tracking-wide font-thin duration-300 hover:text-yellow-sec">{content}</a>
    )
}