"use client";

import "./globals.css"

export default function Footer() {

    return (
        <div className="p-6 w-screen lg:p-18 md:p-12 footer">
            <p className="footerText text-center ">Copyright © 2023 <b className="accent">Purdue</b></p>
            <p className="footerText text-center"><b className="accent">Contact:</b> helloworld@purdue.edu</p>
        </div>
    )
}