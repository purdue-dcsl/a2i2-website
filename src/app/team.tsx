"use client";

import "./globals.css"

export default function Team() {

    return (
        <div className="p-3 md:p-12 w-screen lg:p-20">
            <div className="flex flex-wrap justify-around">
                <div className="grid flex-col w-72 mb-5 place-content-center">
                    <a href="https://bagchi.github.io/" target="_blank" rel="noopener noreferrer"><img src='/saurabhbagchi.jpg' className="rounded-full drop-shadow-lg m-5 w-52 h-52 object-cover" /></a>
                    <p className="text-center text text-2xl">Saurabh Bagchi</p>
                    <p className="text-center accent text-base">Distributed systems<br />System security and reliability</p>
                    <a className="rounded-full contact-button text-base mt-2 w-9 h-9 text-center place-self-center hover:bg-gray-300"
                        href="mailto:sbagchi@purdue.edu" target="_blank" rel="noopener noreferrer">
                        <span className="grid h-full w-full place-content-center"><img src="/mail.svg" /></span>
                    </a>
                </div>
                <div className="grid flex-col w-72 mb-5 place-content-center">
                    <a href="https://schaterji.io/" target="_blank" rel="noopener noreferrer"><img src='/somalichaterji.png' className="rounded-full drop-shadow-lg m-5 w-52 h-52 object-cover" /></a>
                    <p className="text-center text text-2xl">Somali Chaterji</p>
                    <p className="text-center accent text-base">Distributed testbeds of<br />embedded & edge<br />Approximate computing</p>
                    <a className="rounded-full contact-button text-base mt-2 w-9 h-9 text-center place-self-center hover:bg-gray-300"
                        href="mailto:schaterji@purdue.edu" target="_blank" rel="noopener noreferrer">
                        <span className="grid h-full w-full place-content-center"><img src="/mail.svg" /></span>
                    </a>
                </div>
                <div className="grid flex-col w-72 mb-5 place-content-center">
                    <a href="https://www.purdue.edu/president/about/mung-chiang/" target="_blank" rel="noopener noreferrer"><img src='/mungchiang.jpg' className="rounded-full drop-shadow-lg m-5 w-52 h-52 object-cover" /></a>
                    <p className="text-center text text-2xl">Mung Chiang</p>
                    <p className="text-center accent text-base">Edge computing<br />Network optimization</p>
                    <a className="rounded-full contact-button text-base mt-2 w-9 h-9 text-center place-self-center hover:bg-gray-300"
                        href="mailto:chiang@purdue.edu" target="_blank" rel="noopener noreferrer">
                        <span className="grid h-full w-full place-content-center"><img src="/mail.svg" /></span>
                    </a>
                </div>
                <div className="grid flex-col w-72 mb-5 place-content-center">
                    <a href="https://kimkt.com/" target="_blank" rel="noopener noreferrer"><img src='/kwangtaikkim.jpg' className="rounded-full drop-shadow-lg m-5 w-52 h-52 object-cover" /></a>
                    <p className="text-center text text-2xl">Kwang Taik Kim</p>
                    <p className="text-center accent text-base">Edge computing<br />NextG wireless</p>
                    <a className="rounded-full contact-button text-base mt-2 w-9 h-9 text-center place-self-center hover:bg-gray-300"
                        href="mailto:kimkt@purdue.edu" target="_blank" rel="noopener noreferrer">
                        <span className="grid h-full w-full place-content-center"><img src="/mail.svg" /></span>
                    </a>
                </div>
                <div className="grid flex-col w-72 mb-5 place-content-center">
                    <a href="https://www.davidinouye.com/" target="_blank" rel="noopener noreferrer"><img src='/davidinouye.jpg' className="rounded-full drop-shadow-lg m-5 w-52 h-52 object-cover" /></a>
                    <p className="text-center text text-2xl">David Inouye</p>
                    <p className="text-center accent text-base">Interpretable ML<br />Probabilistic models</p>
                    <a className="rounded-full contact-button text-base mt-2 w-9 h-9 text-center place-self-center hover:bg-gray-300"
                        href="mailto:dinouye@purdue.edu" target="_blank" rel="noopener noreferrer">
                        <span className="grid h-full w-full place-content-center"><img src="/mail.svg" /></span>
                    </a>
                </div>
                <div className="grid flex-col w-72 mb-5 place-content-center">
                    <a href="https://www.princeton.edu/~pmittal/" target="_blank" rel="noopener noreferrer"><img src='/prateekmittal.jpg' className="rounded-full drop-shadow-lg m-5 w-52 h-52 object-cover" /></a>
                    <p className="text-center text text-2xl">Prateek Mittal</p>
                    <p className="text-center text text-xs">Princeton University</p>
                    <p className="text-center accent text-base">Security & privacy of ML<br />Security & privacy of<br />networked systems</p>
                    <a className="rounded-full contact-button text-base mt-2 w-9 h-9 text-center place-self-center hover:bg-gray-300"
                        href="mailto:pmittal@princeton.edu" target="_blank" rel="noopener noreferrer">
                        <span className="grid h-full w-full place-content-center"><img src="/mail.svg" /></span>
                    </a>
                </div>
                <div className="grid flex-col w-72 mb-5 place-content-center">
                    <a href="https://www.biostat.wisc.edu/~yli/" target="_blank" rel="noopener noreferrer"><img src='/yinli.jpg' className="rounded-full drop-shadow-lg m-5 w-52 h-52 object-cover" /></a>
                    <p className="text-center text text-2xl">Yin Li</p>
                    <p className="text-center text text-xs">University of Wisconsin at Madison</p>
                    <p className="text-center accent text-base">Computer vision,<br />Automated image & video analysis</p>
                    <a className="rounded-full contact-button text-base mt-2 w-9 h-9 text-center place-self-center hover:bg-gray-300"
                        href="mailto:yin.li@wisc.edu" target="_blank" rel="noopener noreferrer">
                        <span className="grid h-full w-full place-content-center"><img src="/mail.svg" /></span>
                    </a>
                </div>
            </div>


            <h1 className="text-2xl font-bold border-b-4 border-yellow-500 w-fit">Army Research Laboratory (ARL)</h1>
            <div className="flex flex-wrap justify-around">
                <div className="grid flex-col w-72 mb-5 place-content-center">
                    <img src='/pengwang.jpg' className="rounded-full drop-shadow-lg m-5 w-52 h-52 object-cover" />
                    <p className="text-center text text-2xl">Peng Wang</p>
                    <p className="text-center accent text-base">Edge Computing<br />Network Optimization</p>
                    <div className="flex flex-row place-content-center gap-2">
                        <a className="rounded-full contact-button text-base mt-2 w-9 h-9 text-center place-self-center hover:bg-gray-300"
                            href="./bios/pengwang.html" target="_blank" rel="noopener noreferrer">
                            <span className="grid h-full w-full place-content-center"><img src="/user.svg" /></span>
                        </a>
                        <a className="rounded-full contact-button text-base mt-2 w-9 h-9 text-center place-self-center hover:bg-gray-300"
                            href="mailto:peng.wang2.civ@army.mil" target="_blank" rel="noopener noreferrer">
                            <span className="grid h-full w-full place-content-center"><img src="/mail.svg" /></span>
                        </a>
                    </div>
                </div>
                <div className="grid flex-col w-72 mb-5 place-content-center">
                    <img src='/jameshare.jpg' className="rounded-full drop-shadow-lg m-5 w-52 h-52 object-cover" />
                    <p className="text-center text text-2xl">Zach Hare</p>
                    <p className="text-center accent text-base">Statistical Inference<br />Uncertainty analysis<br />Reinforcement learning</p>
                    <div className="flex flex-row place-content-center gap-2">
                        <a className="rounded-full contact-button text-base mt-2 w-9 h-9 text-center place-self-center hover:bg-gray-300"
                            href="./bios/zachhare.html" target="_blank" rel="noopener noreferrer">
                            <span className="grid h-full w-full place-content-center"><img src="/user.svg" /></span>
                        </a>
                        <a className="rounded-full contact-button text-base mt-2 w-9 h-9 text-center place-self-center hover:bg-gray-300"
                            href="mailto:james.z.hare.civ@army.mil" target="_blank" rel="noopener noreferrer">
                            <span className="grid h-full w-full place-content-center"><img src="/mail.svg" /></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}