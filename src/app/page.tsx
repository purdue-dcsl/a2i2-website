"use client";

import "./globals.css"
import Image from 'next/image'
import { useEffect, useState } from 'react'

import Home from "./home"
import Research from "./research"
import Footer from "./footer"
import Team from "./team"
import Software from "./software"
import News from "./news"

export default function MainPage() {
  const [show, setShow] = useState('home');

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
              <Image src="/homepage-design.png" alt="" width={dimensions.width} height={dimensions.height}/>
              {/* <Stage width={dimensions.width} height={dimensions.height}>
                <Layer>
                  <Line closed points={[100, 300, 0, 150, 100, 0, 200, 150]}
                        fill="#cfb991"
                        shadowColor="black"
                        shadowBlur={10}
                        shadowOpacity={0.6} />
                  <Line closed points={[50, 150, 0, 75, 50, 0, 100, 75]}
                        fill="#daaa00"
                        shadowColor="black"
                        shadowBlur={10}
                        shadowOpacity={0.6} />
                  <Line closed points={[200, 250, 150, 175, 200, 100, 250, 175]}
                        fill="#555960"
                        shadowColor="black"
                        shadowBlur={10}
                        shadowOpacity={0.6} />
                </Layer>
              </Stage> */}
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
      <Footer />
    </>
  )
}
