"use client";

import "./globals.css"
import { Stage, Layer, Line } from 'react-konva';
import { useEffect, useState } from 'react'

import Home from "./home"
import Research from "./research"
import Footer from "./footer"
import Team from "./team"

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
  }

  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  })

  useEffect(() => {
    function setSize() {
        setDimensions({
          width: 250,
          height: 300,
        });
    }
    setSize();

  }, []);


  return (
    <>
      <main className="flex min-h-screen w-screen flex-col items-center justify-stretch">
        <div className="p-12 hero w-screen lg:p-24 md:p-18">
          <p className="font-extralight">Assured Autonomy Innovation Institute</p>
          <div className="w-full flex h-40 md:h-60 lg:h-80">
            <h1 className="font-bold text-left w-3/4 mr-3">
              Assured autonomy is rapidly gaining traction in U.S. Department of Defense (DOD) circles.
            </h1>
            <div className="w-1/4 overflow-visible scale-30 -translate-y-8 md:scale-75 md:transform-none lg:scale-100 lg:transform-none">
              <Stage width={dimensions.width} height={dimensions.height}>
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
              </Stage>
            </div>
          </div>
        </div>
        <div className="grid grid-flow-col w-5/6 md:w-3/4 justify-stretch mt-6 tabSelector p-2">
          <button className={show === 'home' ? 'border-b-4 tabButton md:p-3 tabButtonSelected' : 'border-b-4 tabButton md:p-3'} onClick={() => changeShow('home')}>
            <p className="text-center">Home</p>
          </button>
          <button className={show === 'research' ? 'border-b-4 tabButton md:p-3 tabButtonSelected' : 'border-b-4 tabButton md:p-3'} onClick={() => changeShow('research')}>
            <p className="text-center">Research</p>
          </button>
          <button className={show === 'team' ? 'border-b-4 tabButton md:p-3 tabButtonSelected' : 'border-b-4 tabButton md:p-3'} onClick={() => changeShow('team')}>
            <p className="text-center">Team</p>
          </button>
          {/* Add other tabs here */}
        </div>
        {content}
      </main>
      <Footer />
    </>
  )
}
