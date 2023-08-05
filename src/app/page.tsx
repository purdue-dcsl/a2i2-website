"use client";

import "./globals.css"
import { Stage, Layer, Line } from 'react-konva';
import { useEffect, useState } from 'react'
import { Routes, Route, Link, HashRouter } from "react-router-dom";

import Home from "./home"
import Research from "./research"
import Footer from "./footer"

export default function MainPage() {
  const [show, setShow] = useState([true, false, false, false, false]);
  const tab1 = "border-b-4 tabButton md:p-3 " + (show[0] ? "tabButtonSelected" : "");
  const tab2 = show[1] ? "tabButtonSelected border-b-4 tabButton md:p-3" : "border-b-4 tabButton md:p-3";
  const tab3 = show[2] ? "tabButtonSelected border-b-4 tabButton md:p-3" : "border-b-4 tabButton md:p-3";
  const tab4 = show[3] ? "tabButtonSelected border-b-4 tabButton md:p-3" : "border-b-4 tabButton md:p-3";
  const tab5 = show[4] ? "tabButtonSelected border-b-4 tabButton md:p-3" : "border-b-4 tabButton md:p-3";

  function changeShow(i: number) {
    setShow(show=>show.map(function(_, index) { return index === i; }));
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
        <HashRouter>
          <div className="grid grid-flow-col w-5/6 md:w-3/4 justify-stretch mt-6 tabSelector p-2">
            <Link to="/" className={tab1} onClick={() => changeShow(0)}><p className="text-center">Home</p></Link>
            <Link to="/research" className={tab2} onClick={() => changeShow(1)}><p className="text-center">Research</p></Link>
            <Link to="/team" className={tab3} onClick={() => changeShow(2)}><p className="text-center">Team</p></Link>
            <Link to="/publications" className={tab4} onClick={() => changeShow(3)}><p className="text-center">Publications</p></Link>
            <Link to="/press" className={tab5} onClick={() => changeShow(4)}><p className="text-center">Press</p></Link>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
          </Routes>
        </HashRouter>
      </main>
      <Footer />
    </>
  )
}
