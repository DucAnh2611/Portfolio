
import React from "react";

export default function EachExp({...props}) {
    return (
        <div
        className="h-fit w-full block">

            <div>
                <p>{props.timeline}</p>
                <p>{props.header}</p>
            </div>

            <div>
                <p>{props.content}</p>
            </div>

        </div>
    )
}