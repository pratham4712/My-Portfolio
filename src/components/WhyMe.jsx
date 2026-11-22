import {
  Lightbulb,
  Sparkles,
  Target,
  Palette,
  Handshake,
  Eye,
  Clock,
  Layers,
  MessageCircle,
  Paintbrush
} from "lucide-react";

const cards = [
  {
    id: 1,
    icon: <Lightbulb size={30} className="text-amber-400" />,
    title: "Creative & Unique Designs",
    desc: "I create eye-catching designs that stand out and make your brand memorable."
  },
  {
    id: 2,
    icon: <Sparkles size={30} className="text-violet-400" />,
    title: "Attention to Detail",
    desc: "I focus on every element, from typography and colors to spacing and composition."
  },
  {
    id: 3,
    icon: <Target size={30} className="text-cyan-400" />,
    title: "Understanding Brand Identity",
    desc: "I design visuals that reflect your brand's personality, values, and vision."
  },
  {
    id: 4,
    icon: <Palette size={30} className="text-pink-400" />,
    title: "Client-Focused Approach",
    desc: "Your ideas and requirements are my priority. I turn your vision into reality."
  },
  {
    id: 5,
    icon: <Handshake size={30} className="text-emerald-400" />,
    title: "Modern Design Trends",
    desc: "I stay updated with the latest design trends while maintaining timeless creativity."
  },
  {
    id: 6,
    icon: <Eye size={30} className="text-blue-400" />,
    title: "Quality Over Quantity",
    desc: "I believe in delivering polished, meaningful, and high-quality designs."
  },
  {
    id: 7,
    icon: <Clock size={30} className="text-orange-400" />,
    title: "On-Time Delivery",
    desc: "I value your time and work hard to meet deadlines without compromising quality."
  },
  {
    id: 8,
    icon: <Layers size={30} className="text-fuchsia-400" />,
    title: "Versatile Design Skills",
    desc: "From logos and branding to social media posts, banners, and marketing materials, I can handle different design needs."
  },
  {
    id: 9,
    icon: <MessageCircle size={30} className="text-sky-400" />,
    title: "Problem-Solving Mindset",
    desc: "don't just make things look attractive; I create designs that communicate messages effectively."
  },
  {
    id: 10,
    icon: <Paintbrush size={30} className="text-rose-400" />,
    title: "Passion for Creativity",
    desc: "I genuinely love designing and put dedication, enthusiasm, and creativity into every project."
  },
];

export default function WhyMe() {
  return (
    <section className="bg-zinc-950 px-6 py-12 space-y-6 flex flex-col items-center" style={{fontFamily:"'DM Sans',sans-serif"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Fraunces:wght@700;900&display=swap');
      .ff{font-family:'Fraunces',serif}@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
      .fu{animation:fadeUp .6s ease forwards}
      .card:hover { transform: rotate(-5deg); }
      .icon{transition:transform .3s}`}</style>

      {/* Heading */}
      <h2 className="fu ff text-4xl md:text-5xl font-black text-white text-center">Why Choose <span className="text-amber-400">Me</span> Over Others</h2>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((c, i) => (

          <div key={i} className="rounded-md border border-blue-500 p-4 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-amber-400/10 backdrop-blur-sm">
            <div className="">{c.icon}</div>
            <h3 className="ff text-white font-bold text-lg leading-snug my-2">{c.title}</h3>
            <p className="text-white/45 text-sm leading-relaxed">{c.desc}</p>
            <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-amber-400/0 to-transparent group-hover:via-amber-400/40 transition-all duration-500"/>
          </div>
        ))}
      </div>
    </section>
  );
}