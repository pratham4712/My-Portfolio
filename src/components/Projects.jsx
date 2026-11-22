import React from 'react'
import Topbar from './Topbar'
import FooterOne from './FooterOne'

const birdFeeder = [
  { imgSrc: "/images/bf1.jpeg" },
  { imgSrc: "/images/bf2.jpeg" },
  { imgSrc: "/images/bf3.jpeg" },
  { imgSrc: "/images/bf4.jpeg" },
]

const chapatiBox = [
  { imgSrc: "/images/cb1.jpeg" },
  { imgSrc: "/images/cb2.jpeg" },
  { imgSrc: "/images/cb3.jpeg" },
  { imgSrc: "/images/cb4.jpeg" }
]

const teaGlasses = [
  { imgSrc: "/images/tg1.jpeg" },
  { imgSrc: "/images/tg2.jpeg" },
  { imgSrc: "/images/tg3.jpeg" },
  { imgSrc: "/images/tg4.jpeg" }
]

const Projects = () => {
  return (
    <> 
    <Topbar />
    <section className="p-6 bg-slate-950">    
      <h1 className="text-3xl p-8 font-bold text-center text-white">My Work</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
        {birdFeeder.map((bf, i) => (

          <div key={i} className="">
            <img src={bf.imgSrc} alt="" className="w-full h-full object-cover rounded-lg hover:shadow-2xl"/>
          </div>
        ))}

        {chapatiBox.map((cb, i) => (

          <div key={i} className="">
            <img src={cb.imgSrc} alt="" className="w-full h-full object-cover rounded-lg hover:shadow-2xl"/>
          </div>
        ))}

        {teaGlasses.map((tg, i) => (
          
          <div key={i} className="">
            <img src={tg.imgSrc} alt="" className="w-full h-full object-cover rounded-lg hover:shadow-2xl"/>
          </div>
        ))}
      </div>
    </section>
    <FooterOne />
  </>
  );
};


export default Projects