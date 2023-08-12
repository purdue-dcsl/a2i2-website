"use client";

import "./globals.css"


export default function Research() {

    return (
        <div className="p-6 pt-0 w-screen lg:p-24 lg:pt-0 md:p-12 md:pt-0">
            <div className="flex flex-row justify-between">
                <img src='/ancient-stone-column-dark.png' className="w-1/3" />
                <img src='/ancient-stone-column-dark.png' className="w-1/3" />
                <img src='/ancient-stone-column-dark.png' className="w-1/3" />
            </div>
            <div className="flex flex-row justify-around">
                <p className="w-1/3 px-5 text-center font-extrabold research-pillars-clamp"><span className="accent">Robust</span> adversarial algorithms</p>
                <p className="w-1/3 px-5 text-center font-extrabold research-pillars-clamp"><span className="accent">Interpretable</span> algorithms aiding the trust of the warfighter on the results of the autonomous algorithms</p>
                <p className="w-1/3 px-5 text-center font-extrabold research-pillars-clamp"><span className="accent">Secure</span>, distributed execution of the autonomy pipeline among multiple platforms</p>
            </div>
            <p className="mt-6 md:mt-16 description-clamp-2">The research contributions in these three pillars will combine to achieve the end deliverable of secure-by-design autonomous
                algorithms that can operate under the constraints, and uncertainties, of a battlefield environment.
                The instantiation will be in a prototype software system called <b>SCRAMBLE </b>
                (<b>S</b>e<b>C</b>ure <b>R</b>eal-time Decision-Making for the <b>A</b>utono<b>M</b>ous <b>B</b>att<b>LE</b>field).
            </p>
        </div>
    )
}