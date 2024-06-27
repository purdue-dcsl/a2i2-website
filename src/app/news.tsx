"use client";

import "./globals.css"

export default function News() {

    return (
        <div className="p-6 pt-0 w-screen lg:p-24 lg:pt-0 md:p-12 md:pt-0">
            <div className="flex flex-wrap w-full mt-6">
                <div className="lg:w-1/3 md:w-1/2 w-full hover:scale-105 transition-all">
                    <a href="https://arxiv.org/abs/2309.01281" target="_blank" rel="noopener noreferrer" className="flex flex-col p-3 m-3 border">
                        <img src="/gametheory-distsystems-vision.jpg" className="w-full object-cover h-48" />
                        <p className="pt-4 font-normal text-xs">A2I2 researchers from Purdue and ARL lead a vision paper on game theory and distributed systems security to appear in IEEE Security and Privacy Magazine. </p>
                        <p className="pt-1 text-sm">purdue.edu • Nov 2023</p>

                    </a>
            </div>
            <div className="flex flex-wrap w-full mt-6">
                <div className="lg:w-1/3 md:w-1/2 w-full hover:scale-105 transition-all">
                    <a href="https://engineering.purdue.edu/grandchallenges" target="_blank" rel="noopener noreferrer" className="flex flex-col p-3 m-3 border">
                        <img src="/news2.jpg" className="w-full object-cover h-48" />
                        <p className="pt-4 font-normal text-xs">ARL personnel play a leading role in the Grand Challenges in Resilience Workshop organized at Purdue November 13-15. ARL Branch Chief, Dr. Priya Narayanan, addressed the audience and ARL researcher, Dr. Peng Wang, judged the student poster competition. </p>
                        <p className="pt-1 text-sm">purdue.edu • Nov 2023</p>

                    </a>
                </div>
                <div className="lg:w-1/3 md:w-1/2 w-full hover:scale-105 transition-all">
                    <a href="https://medium.com/purdue-engineering/assured-autonomy-what-from-where-how-and-what-next-661a5d521b58" target="_blank" rel="noopener noreferrer" className="flex flex-col p-3 m-3 border">
                        <img src="/news1.png" className="w-full object-cover h-48" />
                        <p className="pt-4 font-bold text-2xl">Assured autonomy: What, from where, how, and what next?</p>
                        <p className="pt-1 text-sm">medium.com • Aug 2023</p>

                    </a>
                </div>
            </div>
        </div>
    )
}
