"use client";

import "./globals.css"


export default function Home() {

    return (
      <div className="p-3 md:p-12 w-screen lg:p-24 md:p-18">
        <div className="flex flex-col md:flex-row justify-between">
          <img src='bagchi-battlefield.jpg' alt="Battlefield Image" className="mb-5 md:mb-0 md:w-1/4 md:mr-6 lg:mr-10 object-cover" />
          <p className="leading-relaxed description-clamp-1 text-xl md:text-3xl">
          Assured autonomy is rapidly gaining traction in U.S. Department of Defense (DOD) circles. The term broadly relates to how to put security into autonomous operations. Assurance will encourage people to adopt autonomous systems, and reduce societal harm from insecure autonomous systems.
          <br />
          <br />
          <br />
          The term broadly relates to how to put security into autonomous operations. Assurance will encourage people to adopt autonomous systems, and reduce societal harm from insecure autonomous systems.
          </p>
        </div>
        <div className="mt-12 md:mt-24 lg:px-36">
          <p className="leading-relaxed description-clamp-2 text-lg">
            The battlefield of the near and the far future will involve autonomous operations among multiple cyber, physical, and kinetic assets,
            together with interactions with humans. Such autonomous operation will  rely on a pipeline of machine learning (ML) algorithms executing
            in real-time on a distributed set of heterogeneous platforms, both stationary and maneuverable. The algorithms will have to deal with
            both adversarial control and data planes.
          </p>
        </div>
        <div className="mt-12 md:mt-24 lg:px-36">
          <p className="leading-relaxed description-clamp-2 text-lg">
            Our Institute is designing secure algorithms that can provide probabilistic guarantees on security and latency, under powerful,
            rigorously quantified adversary models, moving away from the trend of one-off security solutions for specific attack vectors.
            We are developing a robust, scalable, and usable software suite that can execute on today&apos;s standard and custom execution platforms
            plus on ARL CISD&apos;s (Computational and Information Sciences Directorate) autonomous battlefield testbed.
          </p>
        </div>
      </div>
    )
};
