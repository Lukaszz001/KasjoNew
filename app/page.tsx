"use client";

import { useState } from "react";
import Image from "next/image";
import { Home as HomeIcon, Gift, BookOpen, Users, Play } from "lucide-react";

// ---------------- Page ----------------
export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText("KASJO");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const menuItems = [
    { name: "Home", href: "#home", icon: <HomeIcon className="w-5 h-5 min-w-[20px]" /> },
    { name: "Bonusy", href: "#bonusy", icon: <Gift className="w-5 h-5 min-w-[20px]" /> },
    { name: "Instrukcje", href: "/instrukcje", icon: <BookOpen className="w-5 h-5 min-w-[20px]" /> },
    { name: "Discord", href: "/discord", icon: <Users className="w-5 h-5 min-w-[20px]" /> },
  ];

  // ---------------- Sidebar ----------------
  const Sidebar = () => (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-3 bg-[#22FF88] rounded shadow-lg hover:scale-105 transition-transform"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-[#041A14] rounded"></span>
          <span className="block w-6 h-0.5 bg-[#041A14] rounded"></span>
          <span className="block w-6 h-0.5 bg-[#041A14] rounded"></span>
        </div>
      </button>

      <nav
        className={`bg-[#0B3D2E] text-white w-64 fixed top-0 left-0 h-screen z-40 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 md:flex md:flex-col shadow-lg`}
      >
        <ul className="flex flex-col p-6 gap-2 font-sans">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#22FF88]/20 hover:shadow-[0_0_10px_rgba(34,255,136,0.3)] transition-all duration-200"
                onClick={() => setSidebarOpen(false)}
              >
                {item.icon}
                <span className="font-semibold">{item.name}</span>
              </a>

              {item.name === "Home" && (
                <a
                  href="https://kick.com/donkasjo"
                  target="_blank"
                  className="flex items-center gap-2 ml-3 mt-1 p-2 rounded-lg hover:bg-[#22FF88]/20 hover:shadow-[0_0_8px_rgba(34,255,136,0.25)] transition-all duration-200 font-semibold"
                >
                  <Play className="w-4 h-4 min-w-[16px]" />
                  Kick
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );

  // ---------------- Banner ----------------
  const Banner = () => (
    <div className="relative w-full h-[60vh] md:h-[800px] bg-[#041A14] rounded-2xl shadow-lg overflow-hidden">
      <img
        src="/kasjobaner.png"
        alt="Baner"
        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
      />
      <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-[#041A14] to-transparent rounded-t-2xl z-10"></div>
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#041A14] to-transparent rounded-b-2xl z-10"></div>

      {/* DESKTOP */}
      <div className="hidden md:flex absolute left-10 top-1/3 flex-col gap-6 text-white max-w-lg z-20 font-sans">
        <h1 className="text-4xl font-bold leading-snug">
          Dołącz do społeczności <span className="block">Don Kasjo!</span>
        </h1>
        <p className="text-lg">
          Oglądaj streamy, korzystaj z dedykowanych bonusów oraz zgarniaj BLIKI za aktywność!
        </p>

        <div className="flex gap-3 mt-4">
          <a
            href="#bonusy"
            className="bg-[#22FF88] text-[#041A14] font-semibold px-6 py-3 rounded hover:bg-[#0B3D2E] transition text-center"
          >
            Przeglądaj bonusy
          </a>
          <a
            href="https://kick.com/donkasjo"
            target="_blank"
            className="bg-[#22FF88] text-[#041A14] font-semibold px-6 py-3 rounded hover:bg-[#0B3D2E] transition text-center"
          >
            Oglądaj na Kick - codziennie o 19
          </a>
        </div>
      </div>
    </div>
  );

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

      <main className="flex-1 md:ml-64 bg-gradient-to-b from-[#06251C] to-[#041A14] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <Banner />

        {/* MOBILE – TEKST I PRZYCISKI POD BANEREM */}
        <div className="md:hidden flex flex-col items-center text-center mt-4 px-5 mb-12">
          <h1 className="text-3xl font-bold leading-snug text-white">
            Dołącz do społeczności <span className="block">Don Kasjo!</span>
          </h1>
          <p className="text-sm text-white mt-2">
            Oglądaj streamy, korzystaj z dedykowanych bonusów oraz zgarniaj BLIKI za aktywność!
          </p>

          <div className="flex flex-col gap-3 mt-4 w-full max-w-xs">
            <a
              href="#bonusy"
              className="bg-[#22FF88] text-[#041A14] font-semibold px-6 py-3 rounded hover:bg-[#0B3D2E] transition text-center"
            >
              Przeglądaj bonusy
            </a>
            <a
              href="https://kick.com/donkasjo"
              target="_blank"
              className="bg-[#22FF88] text-[#041A14] font-semibold px-6 py-3 rounded hover:bg-[#0B3D2E] transition text-center"
            >
              Oglądaj na Kick - codziennie o 19
            </a>
          </div>
        </div>

        <div className="h-16 md:h-24" /> {/* odstęp przed sekcją bonusów */}

        {/* BONUSY */}
        <section id="bonusy" className="py-24 px-4 md:px-10">
         

  {/* ========================= */}
{/* LuckyFruits – PREMIUM TOP #1 + NEON */}
<div className="relative w-full max-w-6xl mx-auto mb-8">
  <div
    className="bg-gradient-to-br from-[#0B3D2E] via-[#0F5132] to-[#07251D] 
    border border-[#22FF88]/20 rounded-2xl 
    flex flex-col md:flex-row items-center gap-6 p-5 md:p-6 
    transition-all duration-300 
    hover:shadow-[0_0_40px_rgba(34,255,136,0.35)] 
    hover:-translate-y-1 
    relative
    animate-pulsePremium"
  >

    {/* Premium Badge */}
    <div className="absolute -top-5 left-6 px-5 py-2 rounded-full 
      bg-gradient-to-r from-[#22FF88] via-[#c6ff00] to-[#22FF88]
      text-black text-xs font-extrabold tracking-wider uppercase
      shadow-[0_0_25px_rgba(34,255,136,0.6)]
      border border-white/30">
      ⭐ TOP #1
    </div>

    {/* Logo */}
    <div className="bg-[#041A14]/80 backdrop-blur-sm p-4 rounded-xl flex-shrink-0">
      <img
        src="/fruits.png"
        alt="LuckyFruits"
        className="w-[130px] md:w-[150px] h-auto object-contain"
      />
    </div>

    {/* Text */}
    <div className="flex-1 text-center md:text-left">
      <h3 className="text-base md:text-lg font-bold mb-3 whitespace-nowrap">
        100% BONUS POWITALNY + 100FS
      </h3>

      <ul className="space-y-1 text-sm md:text-base text-gray-200">
        <li>• Bonus powitalny 100% do 1500 PLN</li>
        <li>• 200 darmowych spinów</li>
        <li>• Pakiet powitalny do 4000 PLN</li>
      </ul>
    </div>

    {/* CTA */}
    <div className="w-full md:w-auto flex flex-col gap-2">
      <a
        href="https://affitrck2.com/C.ashx?btag=a_386b_11c_&affid=183&siteid=386&adid=11&c="
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          (window as any).gtag?.("event", "external_click", {
            link_url: "https://affitrck2.com/C.ashx?btag=a_386b_11c_&affid=183&siteid=386&adid=11&c=",
            banner: "LuckyFruits",
          })
        }
        className="block w-full md:w-[220px] bg-[#22FF88] text-black font-bold px-8 py-3 rounded-lg text-center transition 
        hover:shadow-[0_0_35px_rgba(34,255,136,0.65)] 
        hover:-translate-y-0.5"
      >
        Odbierz bonus
      </a>
    </div>
  </div>
</div>


{/* ========================= */}
{/* Slotuna – BEZ PODŚWIETLENIA */}
{/* ========================= */}

<div className="relative w-full max-w-6xl mx-auto">
  <div
    className="bg-gradient-to-br from-[#0B3D2E] to-[#07251D] 
    border border-[#22FF88]/15 rounded-2xl 
    flex flex-col md:flex-row items-center gap-6 p-5 md:p-6 
    transition-all duration-300"
  >
    <div className="bg-[#041A14]/80 backdrop-blur-sm p-4 rounded-xl flex-shrink-0">
      <img
        src="/slotuna.png"
        alt="Slotuna"
        className="w-[130px] md:w-[150px] h-auto object-contain"
      />
    </div>

    <div className="flex-1 text-center md:text-left">
      <h3 className="text-base md:text-lg font-bold mb-3 whitespace-nowrap">
        100% BONUS POWITALNY + 200FS
      </h3>

      <ul className="space-y-1 text-sm md:text-base text-gray-200">
        <li>• Bonus powitalny 100% do 2250 PLN</li>
        <li>• 200 darmowych spinów</li>
        <li>• 1 darmowy Bonus Crab</li>
      </ul>
    </div>

    <div className="w-full md:w-auto flex flex-col gap-2">
      <a
        href="https://sltna.pclira.com/?mid=349639_2019132"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          (window as any).gtag?.("event", "external_click", {
            link_url: "https://sltna.pclira.com/?mid=349639_2019132",
            banner: "Slotuna",
          })
        }
        className="block bg-[#22FF88] text-black font-bold px-8 py-3 rounded-lg text-center transition hover:shadow-[0_0_25px_rgba(34,255,136,0.55)] hover:-translate-y-0.5"
      >
        Odbierz bonus
      </a>

      <div className="mt-3 text-center text-white font-bold text-sm md:text-base">
        Wypłacone w lutym: 166 095 PLN
      </div>
    </div>
  </div>
</div>

<div className="h-10" />




{/* Punter */}

<div
  className="w-full max-w-6xl mx-auto bg-gradient-to-br from-[#0B3D2E] to-[#07251D] border border-[#22FF88]/15 rounded-2xl flex flex-col md:flex-row items-center gap-6 p-5 md:p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,255,136,0.15)] hover:-translate-y-1"
>
  <div className="bg-[#041A14]/80 backdrop-blur-sm p-4 rounded-xl flex-shrink-0">
    <img
      src="/punter.png"
      alt="Punter"
      className="w-[130px] md:w-[150px] h-auto object-contain"
    />
  </div>

  <div className="flex-1 text-center md:text-left">
    <h3 className="text-base md:text-lg font-bold mb-3 whitespace-nowrap">
      100% BONUS POWITALNY + 200 FS
    </h3>
    <ul className="space-y-1 text-sm md:text-base text-gray-200">
      <li>• Bonus powitalny 100% aż do 2250 PLN</li>
      <li>• 200 darmowych spinów</li>
    </ul>
  </div>

  <div className="w-full md:w-auto flex flex-col gap-2">
    <a
      href="https://mrp.naralvin.com/?mid=357160_2060521"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        (window as any).gtag?.("event", "external_click", {
          link_url: "https://mrp.naralvin.com/?mid=357160_2060521",
          banner: "Punter",
        })
      }
      className="block bg-[#22FF88] text-black font-bold px-8 py-3 rounded-lg text-center transition hover:shadow-[0_0_25px_rgba(34,255,136,0.55)] hover:-translate-y-0.5"
    >
      Odbierz bonus
    </a>
  </div>
</div>

<div className="h-10" />

          
          {/* SPINLINE */}
<div
  className="w-full max-w-6xl mx-auto bg-gradient-to-br from-[#0B3D2E] to-[#07251D] border border-[#22FF88]/15 rounded-2xl flex flex-col md:flex-row items-center gap-6 p-5 md:p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,255,136,0.15)] hover:-translate-y-1"
>
  <div className="bg-[#041A14]/80 backdrop-blur-sm p-4 rounded-xl flex-shrink-0">
    <img
      src="/spinline.png"
      alt="Spinline Casino"
      className="w-[130px] md:w-[150px] h-auto object-contain"
    />
  </div>

  <div className="flex-1 text-center md:text-left">
    <h3 className="text-base md:text-lg font-bold mb-3 whitespace-nowrap">
      120% BONUS POWITALNY + 200FS
    </h3>
    <ul className="space-y-1 text-sm md:text-base text-gray-200">
      <li>• Bonus powitalny 120% do 1450 PLN</li>
      <li>• Rozbudowany pakiet powitalny aż do 6600 PLN</li>
      <li>• 200 darmowych spinów</li>
    </ul>
  </div>

  <div className="w-full md:w-auto flex flex-col gap-2">
    <a
      href="https://spln.plfexa.com/?mid=351895_2045808"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        (window as any).gtag?.("event", "external_click", {
          link_url: "https://spln.plfexa.com/?mid=351895_2045808",
          banner: "Spinline",
        })
      }
      className="block bg-[#22FF88] text-black font-bold px-8 py-3 rounded-lg text-center transition hover:shadow-[0_0_25px_rgba(34,255,136,0.55)] hover:-translate-y-0.5"
    >
      Odbierz bonus
    </a>

    <button
      onClick={() => {
        copyCode(); // Twoja funkcja kopiowania
        (window as any).gtag?.("event", "copy_code", {
          code: "KASJO",
          banner: "Spinline",
        });
      }}
      className="relative block bg-[#22FF88] text-black font-bold px-8 py-3 rounded-lg text-center transition hover:shadow-[0_0_25px_rgba(34,255,136,0.55)] hover:-translate-y-0.5"
    >
      Kod: KASJO
      {copied && (
        <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          Skopiowano!
        </span>
      )}
    </button>

    <span className="text-xs text-gray-300 mt-1 text-center block">
      Kliknij, aby skopiować
    </span>
  </div>
</div>

<div className="h-10" />

          {/* StoneVegas */}

<div
  className="w-full max-w-6xl mx-auto bg-gradient-to-br from-[#0B3D2E] to-[#07251D] border border-[#22FF88]/15 rounded-2xl flex flex-col md:flex-row items-center gap-6 p-5 md:p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,255,136,0.15)] hover:-translate-y-1"
>
  <div className="bg-[#041A14]/80 backdrop-blur-sm p-4 rounded-xl flex-shrink-0">
    <img
      src="/stonevegas.png"
      alt="StoneVegas"
      className="w-[130px] md:w-[150px] h-auto object-contain"
    />
  </div>

  <div className="flex-1 text-center md:text-left">
    <h3 className="text-base md:text-lg font-bold mb-3 whitespace-nowrap">
      120% BONUS POWITALNY + 250FS
    </h3>

    <ul className="space-y-1 text-sm md:text-base text-gray-200">
      <li>• Bonus powitalny 120% do 2200 PLN</li>
      <li>• 250 darmowych spinów</li>
    </ul>
  </div>

  <div className="w-full md:w-auto flex flex-col gap-2">
    <a
      href="https://stnvgs.plfexa.com/?mid=351895_2045796"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        (window as any).gtag?.("event", "external_click", {
          link_url: "https://stnvgs.plfexa.com/?mid=351895_2045796",
          banner: "StoneVegas",
        })
      }
      className="block bg-[#22FF88] text-black font-bold px-8 py-3 rounded-lg text-center transition hover:shadow-[0_0_25px_rgba(34,255,136,0.55)] hover:-translate-y-0.5"
    >
      Odbierz bonus
    </a>

    <button
      onClick={() => {
        copyCode();
        (window as any).gtag?.("event", "copy_code", {
          code: "KASJO",
          banner: "StoneVegas",
        });
      }}
      className="relative block bg-[#22FF88] text-black font-bold px-8 py-3 rounded-lg text-center transition hover:shadow-[0_0_25px_rgba(34,255,136,0.55)] hover:-translate-y-0.5"
    >
      Kod: KASJO
      {copied && (
        <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          Skopiowano!
        </span>
      )}
    </button>

    <span className="text-xs text-gray-300 mt-1 text-center block">
      Kliknij, aby skopiować
    </span>
  </div>
</div>


      <div className="h-10" />



          {/* COMING SOON */}
          <div className="w-full max-w-6xl mx-auto bg-gradient-to-br from-[#0B3D2E] to-[#07251D] border border-[#22FF88]/15 rounded-2xl flex flex-col md:flex-row items-center gap-6 p-5 md:p-6 relative">
            <div className="flex flex-col md:flex-row items-center gap-6 w-full filter blur-sm select-none pointer-events-none">
              <div className="bg-[#041A14]/80 backdrop-blur-sm p-4 rounded-xl flex-shrink-0 w-[150px] h-[150px] flex items-center justify-center">
                <img
                  src="/legiano.png"
                  alt="Placeholder Logo"
                  className="w-full h-full object-contain"
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

              <div className="w-full md:w-auto flex justify-center md:justify-end">
                <button
                  disabled
                  className="block bg-[#22FF88]/30 text-black font-bold px-8 py-3 rounded-lg cursor-not-allowed"
                >
                  Odbierz bonus
                </button>
              </div>
            </div>

            <span className="absolute text-[#22FF88] text-3xl font-bold uppercase tracking-wider rotate-6 pointer-events-none left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:left-[62%] md:translate-x-0">
              COMING SOON...
            </span>
          </div>
        </section>

        {/* 🔥 GLOW DIVIDER */}
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
