"use client";

import "./globals.css"

export default function News() {

    return (
        <div className="p-6 pt-0 w-screen lg:p-24 lg:pt-0 md:p-12 md:pt-0">
            <div className="flex flex-wrap w-full mt-6">
                <div className="lg:w-1/3 md:w-1/2 w-full hover:scale-105 transition-all">
                    <a href="https://medium.com/purdue-engineering/assured-autonomy-what-from-where-how-and-what-next-661a5d521b58" target="_blank" rel="noopener noreferrer" className="flex flex-col p-3 m-3 border">
                        <img src="/news1.png" className="w-full object-contain" />
                        <p className="pt-4 font-bold text-2xl">Assured autonomy: What, from where, how, and what next?</p>
                        <p className="pt-1 text-sm">medium.com • Aug 21</p>

                    </a>
                </div>
            </div>
        </div>
    )
}