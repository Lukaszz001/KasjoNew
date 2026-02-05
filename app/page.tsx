import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";
import Image from "next/image";

export const metadata = {
  title: "Don Kasjo — Bonusy, Streamy, Społeczność",
  description: "Bonusy kasynowe, streamy i społeczność Don Kasjo",
};

export default function Home() {
  return (
    <div
      className="flex min-h-screen text-white font-sans relative"
      style={{
        backgroundColor: "#041A14",
        backgroundImage: "url('/dark-matter.png')",
        backgroundRepeat: "repeat",
      }}
    >
      <Sidebar />

      <main
        className="
          flex-1 
          md:ml-64
          bg-gradient-to-b from-[#06251C] to-[#041A14]
          shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
        "
      >
        <Banner />

        <div className="h-16 md:h-24" />

        {/* BONUSY */}
        <section id="bonusy" className="py-24 px-4 md:px-10">
          <h2 className="text-3xl font-bold mb-10">Bonusy</h2>

          {/* ACTIVE BANNER */}
          <div className="w-full max-w-6xl mx-auto bg-gradient-to-br from-[#0B3D2E] to-[#07251D] border border-[#22FF88]/15 rounded-2xl flex flex-col md:flex-row items-center gap-6 p-5 md:p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,255,136,0.15)] hover:-translate-y-1">
            
            <div className="bg-[#041A14]/80 backdrop-blur-sm p-4 rounded-xl flex-shrink-0">
              <img
                src="/wyns.png"
                alt="Wyns Casino"
                className="w-[130px] md:w-[150px] h-auto object-contain"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-base md:text-lg font-bold mb-3 whitespace-nowrap">
                100% BONUS OD DEPOZYTU + 200FS
              </h3>

              <ul className="space-y-1 text-sm md:text-base text-gray-200">
                <li>• Bonus powitalny 100% do 2250 PLN</li>
                <li>• Bonus na Sport 100% do 450 PLN</li>
                <li>• 200 darmowych spinów</li>
              </ul>
            </div>

            <div className="w-full md:w-auto">
              <a
                href="https://bit.ly/DonKasjoWyns"
                target="_blank"
                className="block bg-[#22FF88] text-black font-bold px-8 py-3 rounded-lg text-center transition hover:shadow-[0_0_25px_rgba(34,255,136,0.55)]"
              >
                Odbierz bonus
              </a>
            </div>
          </div>

          {/* ODSTĘP między bannerami */}
          <div className="h-8" />

          {/* COMING SOON */}
<div
  className="w-full max-w-6xl mx-auto bg-gradient-to-br from-[#0B3D2E] to-[#07251D] border border-[#22FF88]/15 rounded-2xl flex flex-col md:flex-row items-center gap-6 p-5 md:p-6 relative"
>
  {/* BLURRED WRAPPER — zachowuje rozmiary */}
  <div className="flex flex-col md:flex-row items-center gap-6 w-full filter blur-sm select-none pointer-events-none">

    {/* LOGO — kwadratowa ramka taka sama jak w aktywnym banerze */}
    <div className="bg-[#041A14]/80 backdrop-blur-sm p-4 rounded-xl flex-shrink-0 w-[150px] h-[150px] flex items-center justify-center">
      <img
        src="/legiano.png"
        alt="Placeholder Logo"
        className="w-full h-full object-contain"
      />
    </div>

    {/* ŚRODEK */}
    <div className="flex-1 text-center md:text-left">
      <h3 className="text-base md:text-lg font-bold mb-3 whitespace-nowrap">
        100% BONUS OD DEPOZYTU + 200FS
      </h3>
      <ul className="space-y-1 text-sm md:text-base text-gray-200">
        <li>• Bonus powitalny 100% do 2250 PLN</li>
        <li>• Bonus na Sport 100% do 450 PLN</li>
        <li>• 200 darmowych spinów</li>
      </ul>
    </div>

    {/* PRAWA STRONA — przycisk wycentrowany na mobile */}
    <div className="w-full md:w-auto flex justify-center md:justify-end">
      <button
        disabled
        className="block bg-[#22FF88]/30 text-black font-bold px-8 py-3 rounded-lg cursor-not-allowed"
      >
        Odbierz bonus
      </button>
    </div>
  </div>

  {/* NAPIS COMING SOON — NAD BLUREM, responsywnie na środku */}
  <span
    className="absolute text-[#22FF88] text-3xl font-bold uppercase tracking-wider rotate-6 pointer-events-none left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:left-[62%] md:translate-x-0"
  >
    COMING SOON...
  </span>
</div>



        </section>

        {/* 🔥 GLOW DIVIDER (vibe 15k) */}
        <div className="relative h-24">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-[#22FF88]/40 to-transparent blur-sm" />
          </div>
        </div>

        {/* FOOTER */}
        <footer className="w-full max-w-7xl mx-auto text-center text-sm text-gray-400 pb-12 px-4">
          
          <div className="flex justify-center gap-5 mb-6">
            
            <a href="https://kick.com/donkasjo" target="_blank" className="group inline-flex w-10 h-10 items-center justify-center rounded-full bg-[#1eea5c]/10 hover:bg-[#1eea5c]/20 transition hover:shadow-[0_0_12px_rgba(30,234,92,0.45)]">
              <Image src="/kick-logo.svg" alt="Kick" width={20} height={20}/>
            </a>

            <a href="https://www.instagram.com/kingdonkasjo/" target="_blank" className="group inline-flex w-10 h-10 items-center justify-center rounded-full bg-gradient-to-tr from-[#a8002f] to-[#ff0055] hover:scale-105 transition hover:shadow-[0_0_14px_rgba(255,0,85,0.45)]">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <rect width="18" height="18" x="3" y="3" rx="5" stroke="white" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/>
                <circle cx="17" cy="7" r="1.2" fill="white"/>
              </svg>
            </a>

            <a href="https://x.com/don_kasjo" target="_blank" className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition">
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M17.53 6.47L12 10.94 6.47 6.47 10.94 12l-4.47 4.47L12 13.06l4.47 4.47L13.06 12z"/>
              </svg>
            </a>

            <a href="https://www.youtube.com/@DonKasjoKrol" target="_blank" className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-[#ff0000]/15 hover:bg-[#ff0000]/25 transition">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <rect x="3" y="6" width="18" height="12" rx="4" fill="#ff0000"/>
                <polygon points="10,9 16,12 10,15" fill="white"/>
              </svg>
            </a>

          </div>

          <p className="leading-relaxed text-gray-500 max-w-3xl mx-auto">
            Ta strona prezentuje informacje o ekskluzywnych kasynach i zawiera linki afiliacyjne przeznaczone wyłącznie dla osób w regionach, gdzie hazard online jest legalny.
            <br />
            Użytkownicy są odpowiedzialni za zgodność z lokalnymi przepisami. Nie wspieramy nielegalnych form hazardu.
            <br />
            <span className="text-gray-600">
              &copy; {new Date().getFullYear()} Don Kasjo
            </span>
          </p>
        </footer>

      </main>
    </div>
  );
}