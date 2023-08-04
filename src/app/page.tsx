"use client";

import "./globals.css"
import { Stage, Layer, Line } from 'react-konva';
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, HashRouter } from "react-router-dom";

import Home from "./home"
import Research from "./research"

export default function MainPage() {
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
      <HashRouter>
        <div className="flex flex-row w-screen justify-around mt-10">
          <Link to="/"><p>Home</p></Link>
          <Link to="/research"><p>Our Research</p></Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
        </Routes>
      </HashRouter>
    </main>
  )
}
