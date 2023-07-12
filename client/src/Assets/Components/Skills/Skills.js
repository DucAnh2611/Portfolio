
import React from "react";
import EachSkills from "./EachSkills/EachSkills";
const Skill = require("../../../profile.json").skills;

export default function Skills(){
    return (

        <div className="w-4/5 h-fit block">

            {
                Skill.map(e => <EachSkills title={e.name} content={e.content} />)
            }

        </div>

    )
}