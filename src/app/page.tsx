"use client";

import "./globals.css"
import { Stage, Layer, Line } from 'react-konva';
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  })

  useEffect(() => {
    function setSize() {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
    }
    setSize();

  }, []);


  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-between">
      <div className="p-12 hero w-screen rounded-b-3xl md:rounded-b-xxl lg:p-24 md:p-18">
        <div className="w-full flex h-40 md:h-60 lg:h-80">
          <h1 className="font-bold text-left w-3/4 mr-1.5">
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
      <div>
        <p>askjdslkdjsl</p>
      </div>
    </main>
  )
}
