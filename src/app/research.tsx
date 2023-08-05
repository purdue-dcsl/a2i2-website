"use client";

import "./globals.css"

import { useEffect, useState } from 'react'

export default function Research() {
    const [column, setImage] = useState({src: "/ancient-stone-column.png", hash: Date.now()});
    useEffect(() => {
        const theme = document.documentElement.getAttribute("data-theme");
        if (theme === "dark") {
            setImage({src: "/ancient-stone-column.png", hash: Date.now()});
        }
        else {
            setImage({src: "/ancient-stone-column-dark.png", hash: Date.now()});
        }
    }, []);

    return (
        <div className="p-12 w-screen lg:p-24 md:p-18">
            <div className="flex flex-row">
                <img src={`${column.src}?${column.hash}`} className="w-1/3" />
            </div>
            <p>kajskdjskjd</p>
        </div>
    )
}