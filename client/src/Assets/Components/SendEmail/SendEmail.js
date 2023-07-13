
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faBrands from "@fortawesome/free-brands-svg-icons";

export default function SendEmail() {

    const [email, SetEmail] = useState("");
    const [name, SetName] = useState("");
    const [message, SetMessage] = useState("");

    return (
        <section
        className="h-fit w-4/5 block"
        >

            <div 
            className="h-[20rem] w-full flex justify-between gap-10 items-start"
            >

                <div
                className="h-fit w-2/5 flex flex-col gap-5"
                >
                    
                    <div 
                    className="h-fit w-full flex flex-col"
                    >
                        <label for="name"
                        className="h-10 w-full text-left text-xl italic"
                        >Name</label>

                        <input id="name" type="text"
                        onChange={e => SetName(e.target.value)}
                        value={name}
                        placeholder="Your Name"
                        className="h-12 w-full text-ellipsis focus:outline-none box-border px-5 text-black"
                        />
                    </div>

                    <div
                    className="h-fit w-full flex flex-col"
                    >
                        <label for="email"
                        className="h-10 w-full text-left text-xl italic"
                        >Email</label>

                        <input id="email" type="email"
                        onChange={e => SetEmail(e.target.value)}
                        value={email}
                        placeholder="Your Email"
                        className="h-12 w-full text-ellipsis focus:outline-none box-border px-5 text-black"
                        />
                    </div>

                </div>

                <div
                className="h-fit w-3/5"
                >

                    <div
                    className="h-fit w-full flex flex-col"
                    >
                        <label for="message"
                        className="h-10 w-full text-left text-xl italic"
                        >Message</label>
                        
                        <textarea id="message"
                        onChange={e => SetMessage(e.target.value)}
                        value={message}
                        placeholder="Message"
                        className="h-64 w-full resize-none text-ellipsis focus:outline-none box-border px-5 py-5 text-black"
                        />
                    </div>

                </div>

            </div>

            <div
            className="h-fit w-full flex justify-between items-center"
            >

                <div className="w-fit flex flex-row gap-5 my-10">
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

                <div className="w-fit flex flex-row gap-5 my-10">
                    <a 
                    href={`mailto:${"ddanh2611@gmail.com"}?subject=${encodeURIComponent(`${name} want to contact with you`)}&body=${encodeURIComponent(`This is mail from ${email}, ${message}`)}`}
                    className="px-10 py-4 bg-yellow-sec rounded-2xl text-black font-bold text-lg duration-300 cursor-pointer hover:bg-yellow hover:shadow-center-l hover:shadow-yellow">Send email</a>
                </div>

            </div>

        </section>
    )
}