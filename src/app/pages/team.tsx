"use client";

import "../globals.css"
import Image from "next/image";

export default function Team() {

    return (
        <div className="p-3 md:p-12 w-screen lg:p-20">
            <div className="flex flex-wrap justify-around">
                <div className="grid flex-col w-72 mb-5 place-content-center">
                    <a href="https://bagchi.github.io/" target="_blank" rel="noopener noreferrer">
                        <div className="drop-shadow-lg m-5 w-52 h-52">
                            <Image src='/pictures/saurabhbagchi.jpg' alt="Saurabh Bagchi" className="rounded-full object-cover" fill />
                        </div>
                    </a>
                    <p className="text-center text text-2xl">Saurabh Bagchi</p>
                    <p className="text-center accent text-base">Distributed systems<br />System security and reliability</p>
                    <a className="rounded-full contact-button text-base mt-2 w-9 h-9 text-center place-self-center hover:bg-gray-300"
                        href="mailto:sbagchi@purdue.edu" target="_blank" rel="noopener noreferrer">
                        <span className="grid h-full w-full place-content-center p-2"><Image src="/mail.svg" alt="Mail" width={240} height={240} /></span>
                    </a>
                </div>
                <div className="grid flex-col w-72 mb-5 place-content-center">
                    <a href="https://schaterji.io/" target="_blank" rel="noopener noreferrer">
                        <div className="drop-shadow-lg m-5 w-52 h-52">
                            <Image src='/pictures/somalichaterji.png' alt="Somali Chaterji" className="rounded-full object-cover" fill />
                        </div>
                    </a>
                    <p className="text-center text text-2xl">Somali Chaterji</p>
                    <p className="text-center accent text-base">Distributed testbeds of<br />embedded & edge<br />Approximate computing</p>
                    <a className="rounded-full contact-button text-base mt-2 w-9 h-9 text-center place-self-center hover:bg-gray-300"
                        href="mailto:schaterji@purdue.edu" target="_blank" rel="noopener noreferrer">
                        <span className="grid h-full w-full place-content-center p-2"><Image src="/mail.svg" alt="Mail" width={240} height={240} /></span>
                    </a>
                </div>
                <div className="grid flex-col w-72 mb-5 place-content-center">
                    <a href="https://www.purdue.edu/president/about/mung-chiang/" target="_blank" rel="noopener noreferrer">
                        <div className="drop-shadow-lg m-5 w-52 h-52">
                            <Image src='/pictures/mungchiang.jpg' alt="Mung Chiang" className="rounded-full object-cover" fill />
                        </div>
                    </a>
                    <p className="text-center text text-2xl">Mung Chiang</p>
                    <p className="text-center accent text-base">Edge computing<br />Network optimization</p>
                    <a className="rounded-full contact-button text-base mt-2 w-9 h-9 text-center place-self-center hover:bg-gray-300"
                        href="mailto:chiang@purdue.edu" target="_blank" rel="noopener noreferrer">
                        <span className="grid h-full w-full place-content-center p-2"><Image src="/mail.svg" alt="Mail" width={240} height={240} /></span>
                    </a>
                </div>
                <div className="grid flex-col w-72 mb-5 place-content-center">
                    <a href="https://kimkt.com/" target="_blank" rel="noopener noreferrer">
                        <div className="drop-shadow-lg m-5 w-52 h-52">
                            <Image src='/pictures/kwangtaikkim.jpg' alt="Kwang Taik Kim" className="rounded-full object-cover" fill />
                        </div>
                    </a>
                    <p className="text-center text text-2xl">Kwang Taik Kim</p>
                    <p className="text-center accent text-base">Edge computing<br />NextG wireless</p>
                    <a className="rounded-full contact-button text-base mt-2 w-9 h-9 text-center place-self-center hover:bg-gray-300"
                        href="mailto:kimkt@purdue.edu" target="_blank" rel="noopener noreferrer">
                        <span className="grid h-full w-full place-content-center p-2"><Image src="/mail.svg" alt="Mail" width={240} height={240} /></span>
                    </a>
                </div>
                <div className="grid flex-col w-72 mb-5 place-content-center">
                    <a href="https://www.davidinouye.com/" target="_blank" rel="noopener noreferrer">
                        <div className="drop-shadow-lg m-5 w-52 h-52">
                            <Image src='/pictures/davidinouye.jpg' alt="David Inouye" className="rounded-full object-cover" fill />
                        </div>
                    </a>
                    <p className="text-center text text-2xl">David Inouye</p>
                    <p className="text-center accent text-base">Interpretable ML<br />Probabilistic models</p>
                    <a className="rounded-full contact-button text-base mt-2 w-9 h-9 text-center place-self-center hover:bg-gray-300"
                        href="mailto:dinouye@purdue.edu" target="_blank" rel="noopener noreferrer">
                        <span className="grid h-full w-full place-content-center p-2"><Image src="/mail.svg" alt="Mail" width={240} height={240} /></span>
                    </a>
                </div>
                <div className="grid flex-col w-72 mb-5 place-content-center">
                    <a href="https://www.princeton.edu/~pmittal/" target="_blank" rel="noopener noreferrer">
                        <div className="drop-shadow-lg m-5 w-52 h-52">
                            <Image src='/pictures/prateekmittal.jpg' alt="Prateek Mittal" className="rounded-full object-cover" fill />
                        </div>
                    </a>
                    <p className="text-center text text-2xl">Prateek Mittal</p>
                    <p className="text-center text text-xs">Princeton University</p>
                    <p className="text-center accent text-base">Security & privacy of ML<br />Security & privacy of<br />networked systems</p>
                    <a className="rounded-full contact-button text-base mt-2 w-9 h-9 text-center place-self-center hover:bg-gray-300"
                        href="mailto:pmittal@princeton.edu" target="_blank" rel="noopener noreferrer">
                        <span className="grid h-full w-full place-content-center p-2"><Image src="/mail.svg" alt="Mail" width={240} height={240} /></span>
                    </a>
                </div>
                <div className="grid flex-col w-72 mb-5 place-content-center">
                    <a href="https://www.biostat.wisc.edu/~yli/" target="_blank" rel="noopener noreferrer">
                        <div className="drop-shadow-lg m-5 w-52 h-52">
                            <Image src='/pictures/yinli.jpg' alt="Yin Li" className="rounded-full object-cover" fill />
                        </div>
                    </a>
                    <p className="text-center text text-2xl">Yin Li</p>
                    <p className="text-center text text-xs">University of Wisconsin at Madison</p>
                    <p className="text-center accent text-base">Computer vision,<br />Automated image & video analysis</p>
                    <a className="rounded-full contact-button text-base mt-2 w-9 h-9 text-center place-self-center hover:bg-gray-300"
                        href="mailto:yin.li@wisc.edu" target="_blank" rel="noopener noreferrer">
                        <span className="grid h-full w-full place-content-center p-2"><Image src="/mail.svg" alt="Mail" width={240} height={240} /></span>
                    </a>
                </div>
            </div>


            <h1 className="text-2xl font-bold border-b-4 border-yellow-500 w-fit">Army Research Laboratory (ARL)</h1>
            <div className="flex flex-wrap justify-around">
                <div className="grid flex-col w-72 mb-5 place-content-center">
                    <div className="drop-shadow-lg m-5 w-52 h-52">
                        <Image src='/pictures/pengwang.jpg' alt="Peng Wang" className="rounded-full object-cover" fill />
                    </div>
                    <p className="text-center text text-2xl">Peng Wang</p>
                    <p className="text-center accent text-base">Edge Computing<br />Network Optimization</p>
                    <div className="flex flex-row place-content-center gap-2">
                        <a className="rounded-full contact-button text-base mt-2 w-9 h-9 text-center place-self-center hover:bg-gray-300"
                            href="./bios/pengwang.html" target="_blank" rel="noopener noreferrer">
                            <span className="grid h-full w-full place-content-center p-2"><Image src="/user.svg" alt="User" width={240} height={240} /></span>
                        </a>
                    </div>
                </div>
                <div className="grid flex-col w-72 mb-5 place-content-center">
                    <div className="drop-shadow-lg m-5 w-52 h-52">
                        <Image src='/pictures/jameshare.jpg' alt="Zach Hare" className="rounded-full object-cover" fill />
                    </div>
                    <p className="text-center text text-2xl">Zach Hare</p>
                    <p className="text-center accent text-base">Statistical Inference<br />Uncertainty analysis<br />Reinforcement learning</p>
                    <div className="flex flex-row place-content-center gap-2">
                        <a className="rounded-full contact-button text-base mt-2 w-9 h-9 text-center place-self-center hover:bg-gray-300"
                            href="./bios/zachhare.html" target="_blank" rel="noopener noreferrer">
                            <span className="grid h-full w-full place-content-center p-2"><Image src="/user.svg" alt="User" width={240} height={240} /></span>
                        </a>
                    </div>
                </div>
                <div className="grid flex-col w-72 mb-5 place-content-center">
                    <div className="drop-shadow-lg m-5 w-52 h-52">
                        <Image src='/pictures/kevinchan.jpg' alt="Kevin Chan" className="rounded-full object-cover" fill />
                    </div>
                    <p className="text-center text text-2xl">Kevin Chan</p>
                    <p className="text-center accent text-base">Edge computing<br />Wireless networks</p>
                    <div className="flex flex-row place-content-center gap-2">
                        <a className="rounded-full contact-button text-base mt-2 w-9 h-9 text-center place-self-center hover:bg-gray-300"
                            href="./bios/kevinchan.html" target="_blank" rel="noopener noreferrer">
                            <span className="grid h-full w-full place-content-center p-2"><Image src="/user.svg" alt="User" width={240} height={240} /></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}