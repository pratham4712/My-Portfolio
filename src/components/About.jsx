import React from 'react'
import Topbar from './Topbar'
import FooterOne from './FooterOne' 
import MissionServices from './MissionServices';

const goals = [
  { icon: "🎨", text: "Continue creating innovative and visually stunning designs that help brands stand out and communicate effectively." },
  { icon: "✨", text: "Transform ideas into meaningful visual experiences and help businesses build memorable brand identities." },
  { icon: "🚀", text: "Contribute to a more creative world by using design to inspire people, empower businesses, and communicate powerful messages." },
];

const paragraphs = [  
  {
    p1:[`My passion for graphic design began during my early years when I became fascinated by how colors, shapes, 
    and visual elements could communicate ideas and tell powerful stories. This curiosity gradually evolved into a
    deep passion for creativity, visual storytelling, and design — exploring design tools, experimenting with 
    different styles, creating unique concepts, and transforming ideas into meaningful and visually appealing designs.`],
    p2:[`Throughout my creative journey, I have worked on diverse graphic design projects — from eye-catching social media 
    creatives and brand identities to engaging marketing materials, logos, and digital illustrations. Each project has been
    an opportunity to explore new ideas, refine my design skills, and transform creative visions into 
    visually compelling designs that communicate effectively, capture attention, and leave a lasting impression.`],
    p3:[`What sets me apart as a Graphic Designer is my passion for creativity, attention to detail, and commitment to 
    delivering high-quality designs. I continuously explore new design trends, techniques, and creative tools to 
    ensure my work remains fresh, innovative, and impactful. I believe every design should tell a story, communicate a 
    clear message, and create a lasting impression. I also value strong client relationships built on trust, transparency, 
    collaboration, and a shared vision.`]
  },
]

const About = () => {
  return ( 
    <div> 
    <Topbar /> 
      <section className="px-8 py-12 bg-slate-950 text-white" style={{fontFamily:"'DM Sans',sans-serif"}}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Fraunces:wght@800;900&display=swap');
        .ff{font-family:'Fraunces',serif}@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
        .fu{animation:fadeUp .7s ease forwards}.d1{animation-delay:.1s;opacity:0}.d2{animation-delay:.2s;opacity:0}.d3{animation-delay:.3s;opacity:0}`}</style>

        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center">
            <p className="fu text-lg tracking-[.3em] uppercase text-amber-400">Who I Am</p>
            <h1 className="fu d1 ff text-5xl md:text-6xl font-black">About <span className="text-amber-400">Me</span></h1>
          </div>
 
          {/* Intro card */}
          <div className="fu d2 rounded-2xl border border-white/8 bg-white/3 p-8 text-white/60 leading-relaxed text-[18px]">
            I'm <strong className="text-white">Pratham Bais, a Graphic Designer</strong> creative thinker, and passionate 
            visual storyteller dedicated to transforming ideas into impactful designs. From the very beginning, my journey 
            has been driven by a simple yet powerful belief: <strong className="text-amber-400">great design is more than 
            just aesthetics; it's about communicating ideas, building identities, and creating 
            meaningful connections.</strong> Through creativity, innovation, and attention to detail, I strive to bring 
            every vision to life and make a lasting impression through my work.
          </div>

          {/* Story paragraphs */}
          <div className="">
            {paragraphs.map((para, idx) => (

              <div key={idx} className="text-white/50 leading-relaxed text-[18px] space-y-6">
                <p className="">{para.p1}</p>
                <p className="">{para.p2}</p>
                <p className="">{para.p3}</p>
              </div>
            ))}
          </div>

          {/* Goals */}
          <div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 space-y-6">
            <p className="ff text-white text-2xl text-center">Looking forward, my goal remains steadfast</p>
            
            <div className="grid md:grid-cols-3 gap-4">
              {goals.map(({icon,text})=>(

                <div key={text} className="rounded-xl border border-white/8 bg-white/3 p-4 flex flex-col gap-3 hover:border-amber-400/30 hover:bg-white/6 transition-all duration-200">
                  <span className="flex flex-col items-center text-2xl">{icon}</span>
                  <p className="text-white/60 leading-relaxed text-center">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <p className="text-center text-white/40 leading-relaxed">
            If you believe in the power of creativity to inspire, communicate, and make a lasting
            impression, — <a href="#" className="text-amber-400 hover:underline font-medium">Let's create something meaningful together</a>
          </p>
        </div>
      </section>  
      <MissionServices/>
    <FooterOne/>
    </div>
  )
}

export default About