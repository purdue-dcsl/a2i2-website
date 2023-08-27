"use client";

import "./globals.css"


export default function Home() {

    return (
      <div className="p-3 md:p-12 w-screen lg:p-24 md:p-18">
        <div className="flex flex-row justify-between">
          <img src="https://www.purdue.edu/purdue/images/audience/about-banner.jpg" className="w-1/4 mr-3 md:mr-6 lg:mr-10 object-contain" />
          <p className="leading-relaxed description-clamp-1">
          The term broadly relates to how to put security into autonomous operations. Assurance will encourage people to adopt autonomous systems, and reduce societal harm from insecure autonomous systems.
          </p>
        </div>
        <div className="mt-24 lg:px-36">
          <p className="leading-relaxed description-clamp-2">
          Purdue's Army Artificial Intelligence Innovation Institute (A2I2) (2020-2025), falls within the Army Research Lab's broader A2I2 program.
          It is supported by Army Research Lab under Contract No. W911NF-2020.
          </p>
        </div>
        <div className="mt-24 lg:px-36">
          <p className="leading-relaxed description-clamp-2">
            The battlefield of the near and the far future will involve autonomous operations among multiple cyber, physical, and kinetic assets,
            together with interactions with humans. Such autonomous operation will  rely on a pipeline of machine learning (ML) algorithms executing
            in real-time on a distributed set of heterogeneous platforms, both stationary and maneuverable. The algorithms will have to deal with
            both adversarial control and data planes.
          </p>
        </div>
        <div className="mt-24 lg:px-36">
          <p className="leading-relaxed description-clamp-2">
            Our Institute is designing secure algorithms that can provide probabilistic guarantees on security and latency, under powerful,
            rigorously quantified adversary models, moving away from the trend of one-off security solutions for specific attack vectors.
            We are developing a robust, scalable, and usable software suite that can execute on today's standard and custom execution platforms
            plus on ARL CISD's (Computational and Information Sciences Directorate) autonomous battlefield testbed.
          </p>
        </div>
      </div>
    )
};