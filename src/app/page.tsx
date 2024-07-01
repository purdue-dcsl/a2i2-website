"use client";

import "./globals.css"
import Image from 'next/image'
import { useEffect, useState } from 'react'

import Home from "./pages/home"
import Research from "./pages/research"
import Team from "./pages/team"
import Software from "./pages/software"
import News from "./pages/news"

import { useTheme } from "./ThemeContext";

export default function MainPage() {
  const [show, setShow] = useState('home');
  const [logo, setLogo] = useState('/favicon.ico');
  const { mode } = useTheme();

  function changeShow(layout: string) {
    setShow(layout);
  }

  let content;

  if (show === 'home') {
    content = <Home />;
  } else if (show === 'research') {
    content = <Research />;
  } else if (show === 'team') {
    content = <Team />;
  } else if (show === 'software') {
    content = <Software />;
  } else if (show === 'news') {
    content = <News />;
  }

  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  })

  useEffect(() => {
    function setSize() {
      setDimensions({
        width: 400,
        height: 500,
      });
    }
    setSize();

  }, []);

  useEffect(() => {
    if (mode === "dark") {
      setLogo('/favicon.ico');
    } else {
      setLogo('/favicon-light.ico');
    }
  }, [mode]);

  return (
    <>
      <main className="flex min-h-screen w-screen flex-col items-center justify-stretch">
        <div className="p-12 hero w-screen lg:p-24 md:p-18">
          {/*<p className="font-extralight">Assured Autonomy Innovation Institute</p>*/}
          <div className="w-full flex h-40 md:h-60 lg:h-80">
            <h1 className="font-bold text-left w-3/4 mr-3 text-xl md:text-5xl lg:text-7xl">
              Assured Autonomy Innovation Institute (A2I2) <span className="accent">@ Purdue</span>
            </h1>
            <div className="w-1/4 overflow-visible translate-y-16 md:translate-y-8 lg:transform-none scale-150 md:scale-110">
              <Image src={logo} alt="A2I2 Logo" width={dimensions.width} height={dimensions.height} />
            </div>
          </div>
        </div>
        <div className="grid grid-flow-col w-11/12 md:w-3/4 justify-stretch mt-6 tabSelector p-2 z-40">
          <button className={show === 'home' ? 'border-b-4 tabButton md:p-3 tabButtonSelected' : 'border-b-4 tabButton md:p-3'} onClick={() => changeShow('home')}>
            <p className="text-center">Home</p>
          </button>
          <button className={show === 'research' ? 'border-b-4 tabButton md:p-3 tabButtonSelected' : 'border-b-4 tabButton md:p-3'} onClick={() => changeShow('research')}>
            <p className="text-center">Research</p>
          </button>
          <button className={show === 'team' ? 'border-b-4 tabButton md:p-3 tabButtonSelected' : 'border-b-4 tabButton md:p-3'} onClick={() => changeShow('team')}>
            <p className="text-center">Team</p>
          </button>
          <button className={show === 'software' ? 'border-b-4 tabButton md:p-3 tabButtonSelected' : 'border-b-4 tabButton md:p-3'} onClick={() => changeShow('software')}>
            <p className="text-center">Software/Datasets</p>
          </button>
          <button className={show === 'news' ? 'border-b-4 tabButton md:p-3 tabButtonSelected' : 'border-b-4 tabButton md:p-3'} onClick={() => changeShow('news')}>
            <p className="text-center">News</p>
          </button>
        </div>
        {content}
      </main>
    </>
  )
}
