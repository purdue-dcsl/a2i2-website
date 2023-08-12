"use client";

import "./globals.css"
import { Mail } from 'react-feather';

export default function Team() {

    return (
        <div className="p-3 md:p-12 w-screen lg:p-24 md:p-18">
            <div className="flex flex-wrap justify-around">
                <div className="flex flex-col w-72 mb-5 place-content-center">
                    <img src='/stone-column.png' className="rounded-full drop-shadow-lg m-5" />
                    <p className="text-center text text-2xl">Name Name</p>
                    <p className="text-center accent text-base">expertise goes here</p>
                    <a className="rounded-full contact-button text-base mt-2 w-9 h-9 text-center place-self-center hover:bg-gray-300"
                        href="" target="_blank" rel="noopener noreferrer">
                        <span className="grid h-full w-full place-content-center"><Mail color="black" size={22} /></span>
                    </a>
                </div>
            </div>
        </div>
    )
}