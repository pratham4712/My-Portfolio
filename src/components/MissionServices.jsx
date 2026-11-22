const missions = [
  { icon: "🎨", text: "Create impactful visual experiences" },
  { icon: "✨", text: "Build memorable brand identities" },
  { icon: "💡", text: "Turn imagination into reality" },
  { icon: "🚀", text: "Elevate brands through creativity" },
];

const services = [ 
  { 
    icon: "🎨", title: "Brand Identity & Design", 
    items: ["Logo Design & Brand Identity", "Business Cards & Stationery Design", "Brand Guidelines & Visual Consistency"]
  },
  { 
    icon: "📱", title: "Digital & Social Media Design", 
    items: ["Social Media Posts & Banners", "Website & App Graphics", "Advertisements & Promotional Creatives"] 
  },
  { 
    icon: "🖨️", title: "Print & Marketing Design", 
    items: ["Brochures, Flyers & Posters", "Packaging & Product Design", "Banners, Business & Marketing Materials"] 
  },
];

export default function MissionServices() {
  return (
    <section className="bg-slate-950 px-8 py-12 space-y-8" style={{fontFamily:"'DM Sans',sans-serif"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Fraunces:wght@800;900&display=swap');
      .ff{font-family:'Fraunces',serif}@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
      .fu{animation:fadeUp .6s ease forwards}`}</style>
 
      {/* MISSION */}
      <div className="space-y-6"> 
        <div className="text-center space-y-3">
          <p className="fu text-xs tracking-[.3em] uppercase text-amber-400">Purpose & Direction</p>
          <h2 className="fu ff text-4xl md:text-5xl text-white">My <span className="text-amber-400">Mission</span></h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {missions.map(({icon,text},i)=>(
            <div key={i} className="rounded-xl border border-white/8 space-y-2 p-4 hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{icon}</div>
              <p className="text-white/70 text-sm leading-relaxed group-hover:text-white transition-colors">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-16"><div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"/></div>

      {/* SERVICES */}
      <div className="space-y-6">
        <div className="text-center space-y-3">
          <p className="text-xs tracking-[.3em] uppercase text-amber-400">What I Offer</p>
          <h2 className="ff text-4xl md:text-5xl text-white">My <span className="text-amber-400">Services</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map(({icon,title,items},i)=>(

            <div key={i} className="group rounded-2xl border border-white/8 p-5 hover:border-amber-400/40 hover:bg-white/6 hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{icon}</div>
              <h3 className="ff text-white text-xl font-black my-3">{title}</h3>
              <ul className="space-y-3">
                {items.map(item=>(
                  <li key={item} className="flex items-start gap-3 text-white/50 text-sm group-hover:text-white/70 transition-colors">
                    <span className="text-amber-400 mt-0.5">✦</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}