"use client";

import "./globals.css"

export default function Team() {

    return (
        <div className="p-3 md:p-12 w-screen lg:p-20">
            <div className="flex flex-wrap justify-around">
                <div className="grid flex-col w-72 mb-5 place-content-center">
                    <img src='/saurabhbagchi.jpg' className="rounded-full drop-shadow-lg m-5 w-52 h-52 object-cover" />
                    <p className="text-center text text-2xl">Saurabh Bagchi</p>
                    <p className="text-center accent text-base">Distributed systems<br />System security and reliability</p>
                    <a className="rounded-full contact-button text-base mt-2 w-9 h-9 text-center place-self-center hover:bg-gray-300"
                        href="mailto:sbagchi@purdue.edu" target="_blank" rel="noopener noreferrer">
                        <span className="grid h-full w-full place-content-center"><img src="/mail.svg" /></span>
                    </a>
                </div>
                <div className="grid flex-col w-72 mb-5 place-content-center">
                    <img src='/somalichaterji.png' className="rounded-full drop-shadow-lg m-5 w-52 h-52 object-cover" />
                    <p className="text-center text text-2xl">Somali Chaterji</p>
                    <p className="text-center accent text-base">Distributed testbeds of<br />embedded & edge<br />Approximate computing</p>
                    <a className="rounded-full contact-button text-base mt-2 w-9 h-9 text-center place-self-center hover:bg-gray-300"
                        href="mailto:schaterji@purdue.edu" target="_blank" rel="noopener noreferrer">
                        <span className="grid h-full w-full place-content-center"><img src="/mail.svg" /></span>
                    </a>
                </div>
                <div className="grid flex-col w-72 mb-5 place-content-center">
                    <img src='/mungchiang.jpg' className="rounded-full drop-shadow-lg m-5 w-52 h-52 object-cover" />
                    <p className="text-center text text-2xl">Mung Chiang</p>
                    <p className="text-center accent text-base">Edge computing<br />Network optimization</p>
                    <a className="rounded-full contact-button text-base mt-2 w-9 h-9 text-center place-self-center hover:bg-gray-300"
                        href="mailto:chiang@purdue.edu" target="_blank" rel="noopener noreferrer">
                        <span className="grid h-full w-full place-content-center"><img src="/mail.svg" /></span>
                    </a>
                </div>
                <div className="grid flex-col w-72 mb-5 place-content-center">
                    <img src='/kwangtaikkim.jpg' className="rounded-full drop-shadow-lg m-5 w-52 h-52 object-cover" />
                    <p className="text-center text text-2xl">Kwang Taik Kim</p>
                    <p className="text-center accent text-base">Edge computing<br />NextG wireless</p>
                    <a className="rounded-full contact-button text-base mt-2 w-9 h-9 text-center place-self-center hover:bg-gray-300"
                        href="mailto:kimkt@purdue.edu" target="_blank" rel="noopener noreferrer">
                        <span className="grid h-full w-full place-content-center"><img src="/mail.svg" /></span>
                    </a>
                </div>
                <div className="grid flex-col w-72 mb-5 place-content-center">
                    <img src='/davidinouye.jpg' className="rounded-full drop-shadow-lg m-5 w-52 h-52 object-cover" />
                    <p className="text-center text text-2xl">David Inouye</p>
                    <p className="text-center accent text-base">Interpretable ML<br />Probabilistic models</p>
                    <a className="rounded-full contact-button text-base mt-2 w-9 h-9 text-center place-self-center hover:bg-gray-300"
                        href="mailto:dinouye@purdue.edu" target="_blank" rel="noopener noreferrer">
                        <span className="grid h-full w-full place-content-center"><img src="/mail.svg" /></span>
                    </a>
                </div>
                <div className="grid flex-col w-72 mb-5 place-content-center">
                    <img src='/prateekmittal.jpg' className="rounded-full drop-shadow-lg m-5 w-52 h-52 object-cover" />
                    <p className="text-center text text-2xl">Prateek Mittal</p>
                    <p className="text-center accent text-base">Security & privacy of ML<br />Security & privacy of<br />networked systems</p>
                    <a className="rounded-full contact-button text-base mt-2 w-9 h-9 text-center place-self-center hover:bg-gray-300"
                        href="mailto:pmittal@princeton.edu" target="_blank" rel="noopener noreferrer">
                        <span className="grid h-full w-full place-content-center"><img src="/mail.svg" /></span>
                    </a>
                </div>
                <div className="grid flex-col w-72 mb-5 place-content-center">
                    <img src='/yinli.jpg' className="rounded-full drop-shadow-lg m-5 w-52 h-52 object-cover" />
                    <p className="text-center text text-2xl">Yin Li</p>
                    <p className="text-center accent text-base">Computer vision,<br />Automated image & video analysis</p>
                    <a className="rounded-full contact-button text-base mt-2 w-9 h-9 text-center place-self-center hover:bg-gray-300"
                        href="mailto:yin.li@wisc.edu" target="_blank" rel="noopener noreferrer">
                        <span className="grid h-full w-full place-content-center"><img src="/mail.svg" /></span>
                    </a>
                </div>
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
            </div>
        </div>
    )
}