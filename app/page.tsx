import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-zinc-800">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white"/>
            <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {["Product", "Teams", "Resources", "Community", "Support", "Enterprise", "Pricing"].map((link) => (
            <Link
              key={link}
              href="#"
              className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-[13px] font-medium text-zinc-300 hover:text-white transition-colors">
            Log in
          </Link>
          <Link
            href="#"
            className="text-[13px] font-medium bg-white text-black px-4 py-1.5 rounded-full hover:bg-zinc-200 transition-colors"
          >
            Sign up
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1800px] mx-auto">
        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
          
          {/* Item 1: Typography Heavy */}
          <div className="break-inside-avoid rounded-2xl overflow-hidden relative bg-[#f4f4f0] text-black p-8 h-[400px] flex flex-col justify-between group cursor-pointer">
             <div>
               <h2 className="text-4xl font-serif leading-tight mb-4 tracking-tight">Act now, live longer</h2>
               <p className="text-sm opacity-60 leading-relaxed">In one day, we collect over 1,000 data points to uncover hidden risks and deliver personalized insights to optimize your long-term health.</p>
             </div>
             <button className="bg-black text-white text-xs font-medium px-5 py-2.5 rounded-full self-start group-hover:scale-105 transition-transform">Join Biograph</button>
          </div>

          {/* Item 2: Image */}
          <div className="break-inside-avoid rounded-2xl overflow-hidden relative h-[500px] group cursor-pointer">
            <Image src="https://picsum.photos/seed/bento1/800/1000" alt="Grid item" fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

          {/* Item 3: Bold Color */}
          <div className="break-inside-avoid rounded-2xl overflow-hidden relative bg-[#ff4d00] text-white p-8 h-[350px] flex flex-col justify-between group cursor-pointer">
             <div>
               <div className="text-sm font-bold mb-8 tracking-tight">Haptic</div>
               <h2 className="text-3xl font-medium leading-tight tracking-tight">We help ambitious teams turn bold visions into lasting impact.</h2>
             </div>
             <div className="flex justify-between items-end">
               <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                 <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
               </div>
               <button className="bg-white text-black text-xs font-medium px-4 py-2 rounded-full group-hover:scale-105 transition-transform">Book a Call</button>
             </div>
          </div>

          {/* Item 4: Image */}
          <div className="break-inside-avoid rounded-2xl overflow-hidden relative h-[600px] group cursor-pointer">
            <Image src="https://picsum.photos/seed/bento2/800/1200" alt="Grid item" fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-6 left-6 right-6">
               <h3 className="text-2xl font-serif mb-2">A Present Force</h3>
               <p className="text-sm text-zinc-300">Female founded, independent design studio.</p>
            </div>
          </div>

          {/* Item 5: Brutalist Typography */}
          <div className="break-inside-avoid rounded-2xl overflow-hidden relative bg-[#0055ff] text-white p-8 h-[450px] flex flex-col justify-between group cursor-pointer">
             <div className="flex justify-between items-center text-xs font-bold tracking-widest uppercase mb-4">
                <span>Page Break</span>
                <span>Retreats</span>
             </div>
             <h2 className="text-5xl font-black uppercase leading-[0.9] text-center my-auto tracking-tighter">Novel<br/>Reading<br/>Retreats</h2>
             <div className="text-center text-xs font-bold tracking-widest uppercase">Read Together</div>
          </div>

          {/* Item 6: Image */}
          <div className="break-inside-avoid rounded-2xl overflow-hidden relative h-[300px] group cursor-pointer">
            <Image src="https://picsum.photos/seed/bento3/800/600" alt="Grid item" fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
          </div>

          {/* Item 7: Dark UI Card */}
          <div className="break-inside-avoid rounded-2xl overflow-hidden relative bg-[#111] border border-white/10 text-white p-8 h-[550px] flex flex-col group cursor-pointer hover:border-white/20 transition-colors">
            <div className="flex justify-between items-center mb-8">
              <div className="text-sm font-medium flex items-center gap-2">
                <div className="w-4 h-4 bg-white rounded-full"></div>
                Cartesia
              </div>
              <button className="text-xs font-medium bg-white text-black px-3 py-1.5 rounded-full">Start for free</button>
            </div>
            <h2 className="text-3xl font-medium mb-4 tracking-tight leading-tight">The fastest, ultra-realistic voice AI platform</h2>
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed">Powered by high performance State Space Model technology. Purpose-built for developers.</p>
            <div className="mt-auto bg-zinc-900/50 rounded-xl p-4 border border-white/5 flex items-center gap-4 backdrop-blur-md">
               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-inner"></div>
               <div>
                 <div className="text-sm font-medium">Sophie</div>
                 <div className="text-xs text-zinc-500">Voice Assistant</div>
               </div>
            </div>
          </div>

          {/* Item 8: Image */}
          <div className="break-inside-avoid rounded-2xl overflow-hidden relative h-[400px] group cursor-pointer">
            <Image src="https://picsum.photos/seed/bento4/800/800" alt="Grid item" fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
          </div>

          {/* Item 9: High Contrast Typography */}
          <div className="break-inside-avoid rounded-2xl overflow-hidden relative bg-[#e5ff00] text-black p-8 h-[350px] flex flex-col justify-center items-center text-center group cursor-pointer">
             <h2 className="text-3xl font-black uppercase leading-[1.1] mb-6 tracking-tighter">Page Break is a new weekend reading retreat hosted in New York.</h2>
             <p className="text-xs font-bold uppercase tracking-widest border-t border-black/20 pt-4 w-full">Page by page, together.</p>
          </div>

          {/* Item 10: Image */}
          <div className="break-inside-avoid rounded-2xl overflow-hidden relative h-[500px] group cursor-pointer">
            <Image src="https://picsum.photos/seed/bento5/800/1000" alt="Grid item" fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
          </div>

          {/* Item 11: Tech UI */}
          <div className="break-inside-avoid rounded-2xl overflow-hidden relative bg-[#0a0f0d] border border-white/10 text-white p-8 h-[450px] flex flex-col group cursor-pointer hover:border-white/20 transition-colors">
             <div className="text-sm font-medium text-emerald-400 mb-auto">sonar</div>
             <h2 className="text-3xl font-medium mb-4 tracking-tight leading-tight">Build with the best AI answer engine.</h2>
             <p className="text-sm text-zinc-400 mb-8 leading-relaxed">Power your products with the fastest, cheapest grounded search APIs out there.</p>
             <div className="flex gap-3">
               <button className="bg-white text-black text-xs font-medium px-4 py-2 rounded-full">Start Building</button>
               <button className="bg-zinc-800 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-zinc-700 transition-colors">Developer Docs</button>
             </div>
          </div>

          {/* Item 12: Image */}
          <div className="break-inside-avoid rounded-2xl overflow-hidden relative h-[300px] group cursor-pointer">
            <Image src="https://picsum.photos/seed/bento6/800/600" alt="Grid item" fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
          </div>

          {/* Item 13: Minimalist UI */}
          <div className="break-inside-avoid rounded-2xl overflow-hidden relative bg-[#111] text-white p-8 h-[400px] flex flex-col items-center justify-center text-center group cursor-pointer">
             <div className="text-xs text-zinc-500 mb-6 uppercase tracking-widest font-medium">Tiempo</div>
             <h2 className="text-2xl font-medium mb-10 tracking-tight">A simple and delightful workout tracker for Apple Watch.</h2>
             <div className="w-32 h-40 bg-black rounded-[2.5rem] border-[6px] border-zinc-800 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden">
                <div className="text-xs text-zinc-500 mb-1">Total</div>
                <div className="text-2xl font-bold tracking-tighter">0:01</div>
                <div className="text-[10px] text-red-500 mt-1 flex items-center gap-1">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  116
                </div>
             </div>
          </div>

          {/* Item 14: Image */}
          <div className="break-inside-avoid rounded-2xl overflow-hidden relative h-[550px] group cursor-pointer">
            <Image src="https://picsum.photos/seed/bento7/800/1100" alt="Grid item" fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
          </div>

          {/* Item 15: Clean Typography */}
          <div className="break-inside-avoid rounded-2xl overflow-hidden relative bg-[#fcfcfc] text-black p-8 h-[350px] flex flex-col group cursor-pointer">
             <h2 className="text-4xl font-serif mb-4 tracking-tight">The new standard in compliance</h2>
             <p className="text-sm text-zinc-600 mb-auto leading-relaxed">Meet the modern platform that accelerates business onboarding, automates manual work and grows revenue.</p>
             <button className="bg-black text-white text-xs font-medium px-5 py-2.5 rounded-full self-start group-hover:scale-105 transition-transform">Get started</button>
          </div>
        </div>

        {/* Logos Section */}
        <div className="mt-32 mb-10 border-t border-white/5 pt-16">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 opacity-40 hover:opacity-100 transition-opacity duration-500">
             <div className="text-xl font-bold tracking-tighter flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"/></svg>
                BIRD
             </div>
             <div className="text-xl font-bold tracking-tight cursor-pointer hover:text-white transition-colors">Cal.com</div>
             <div className="text-xl font-bold tracking-tight cursor-pointer hover:text-white transition-colors">ElevenLabs</div>
             <div className="text-xl font-bold tracking-tight cursor-pointer hover:text-white transition-colors">Dribbble</div>
             <div className="text-xl font-bold tracking-tight cursor-pointer hover:text-white transition-colors">miro</div>
             <div className="text-xl font-bold tracking-tight cursor-pointer hover:text-white transition-colors">perplexity</div>
             <div className="text-xl font-bold tracking-tight cursor-pointer hover:text-white transition-colors">DOORDASH</div>
             <div className="text-xl font-bold tracking-tight cursor-pointer hover:text-white transition-colors">mixpanel</div>
          </div>
        </div>
      </main>
    </div>
  );
}
