"use client";

import { useState } from "react";
import { Home as HomeIcon, Gift, BookOpen, Users, Play } from "lucide-react";

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
          RANKING KASYN ONLINE - LUTY 2026
        </h1>
        <p className="text-lg">
          Sprawdź zestawienie popularnych kasyn online i zobacz, które platformy wyróżniają się bonusami, ofertą oraz wygodą użytkowania.
        </p>
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

        {/* MOBILE – TEKST POD BANEREM */}
        <div className="md:hidden flex flex-col items-center text-center mt-4 px-5 mb-12">
          <h1 className="text-3xl font-bold leading-snug text-white">
            RANKING KASYN ONLINE - LUTY 2026
          </h1>
          <p className="text-sm text-white mt-2">
            Sprawdź zestawienie popularnych kasyn online i zobacz, które platformy wyróżniają się bonusami, ofertą oraz wygodą użytkowania.
          </p>
        </div>

        <div className="h-8 md:h-12" /> {/* odstęp przed sekcją bonusów */}

        {/* BONUSY / RANKING */}
        <section id="bonusy" className="py-24 px-4 md:px-10 space-y-10">

          {/* Wyns */}
          <div className="relative w-full max-w-6xl mx-auto bg-gradient-to-br from-[#0B3D2E] to-[#07251D] border border-[#22FF88]/15 rounded-2xl flex flex-col md:flex-row items-center gap-6 p-5 md:p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,255,136,0.15)] hover:-translate-y-1">

            {/* Naklejka ranking */}
            <div className="absolute -top-4 -left-4 bg-yellow-400 text-black font-bold px-3 py-1 rounded-full shadow-lg text-sm md:text-base z-30 hover:animate-pulse">
  1
</div>

            <div className="bg-[#041A14]/80 backdrop-blur-sm p-4 rounded-xl flex-shrink-0">
              <img src="/wyns.png" alt="Wyns Casino" className="w-[130px] md:w-[150px] h-auto object-contain"/>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-base md:text-lg font-bold mb-3 whitespace-nowrap">
                100% BONUS OD DEPOZYTU + 200FS
              </h3>
              <ul className="space-y-1 text-sm md:text-base text-gray-200">
                <li>• Dostępny bonus powitalny do 2250 PLN</li>
                <li>• Duży wybór dostawców slotów</li>
                <li>• Nowoczesna i intuicyjna platforma</li>
              </ul>
            </div>

            <div className="w-full md:w-auto">
              <a
                href="https://bit.ly/DonKasjoWyns"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  (window as any).gtag?.("event", "external_click", {
                    link_url: "https://bit.ly/DonKasjoWyns",
                    banner: "Wyns2",
                  })
                }
                className="block bg-[#22FF88] text-black font-bold px-8 py-3 rounded-lg text-center transition hover:shadow-[0_0_25px_rgba(34,255,136,0.55)] hover:-translate-y-0.5"
              >
                Sprawdź
              </a>
            </div>
          </div>
          
{/* Neon glow pod banerem 1 */}
<div className="absolute inset-0 -z-10 rounded-2xl shadow-[0_0_25px_10px_rgba(255,223,0,0.6)]"></div>
          
          {/* Slotuna */}
          <div className="relative w-full max-w-6xl mx-auto bg-gradient-to-br from-[#0B3D2E] to-[#07251D] border border-[#22FF88]/15 rounded-2xl flex flex-col md:flex-row items-center gap-6 p-5 md:p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,255,136,0.15)] hover:-translate-y-1">

            <div className="absolute -top-4 -left-4 bg-gray-300 text-black font-bold px-3 py-1 rounded-full shadow-lg text-sm md:text-base z-30 hover:animate-pulse">
  2
</div>

            <div className="bg-[#041A14]/80 backdrop-blur-sm p-4 rounded-xl flex-shrink-0">
              <img src="/slotuna.png" alt="Slotuna" className="w-[130px] md:w-[150px] h-auto object-contain"/>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-base md:text-lg font-bold mb-3 whitespace-nowrap">
                100% BONUS POWITALNY + 200FS
              </h3>
              <ul className="space-y-1 text-sm md:text-base text-gray-200">
                <li>• Dostępny bonus powitalny do 2250 PLN</li>
                <li>• Duży wybór slotów i gier live</li>
                <li>• Szybki proces rejestracji</li>
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
                    banner: "Slotuna2",
                  })
                }
                className="block bg-[#22FF88] text-black font-bold px-8 py-3 rounded-lg text-center transition hover:shadow-[0_0_25px_rgba(34,255,136,0.55)] hover:-translate-y-0.5"
              >
                Sprawdź
              </a>

              <button
                onClick={() => {
                  copyCode();
                  (window as any).gtag?.("event", "copy_code", {
                    code: "KASJO",
                    banner: "Slotuna2",
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

          {/* SpinBetter */}
          <div className="relative w-full max-w-6xl mx-auto bg-gradient-to-br from-[#0B3D2E] to-[#07251D] border border-[#22FF88]/15 rounded-2xl flex flex-col md:flex-row items-center gap-6 p-5 md:p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,255,136,0.15)] hover:-translate-y-1">

            <div className="absolute -top-4 -left-4 bg-[#CD7F32] text-black font-bold px-3 py-1 rounded-full shadow-lg text-sm md:text-base z-30 hover:animate-pulse">
  3
</div>

            <div className="bg-[#041A14]/80 backdrop-blur-sm p-4 rounded-xl flex-shrink-0">
              <img src="/spinbetter.png" alt="Spinbetter" className="w-[130px] md:w-[150px] h-auto object-contain"/>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-base md:text-lg font-bold mb-3 whitespace-nowrap">
                100% BONUS POWITALNY + 150FS
              </h3>
              <ul className="space-y-1 text-sm md:text-base text-gray-200">
                <li>• Dostępny bonus powitalny do 1275 PLN</li>
                 <li>• Setki gier od znanych dostawców</li>
                <li>• Wygodna aplikacja mobilna</li>
              </ul>
            </div>

            <div className="w-full md:w-auto flex flex-col gap-2">
              <a
                href="https://redirspinner.com/2u7A?p=%2Fregistration%2F"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  (window as any).gtag?.("event", "external_click", {
                    link_url: "https://redirspinner.com/2u7A?p=%2Fregistration%2F",
                    banner: "SpinBetter2",
                  })
                }
                className="block bg-[#22FF88] text-black font-bold px-8 py-3 rounded-lg text-center transition hover:shadow-[0_0_25px_rgba(34,255,136,0.55)] hover:-translate-y-0.5"
              >
                Sprawdź
              </a>

              <button
                onClick={() => {
                  copyCode();
                  (window as any).gtag?.("event", "copy_code", {
                    code: "KASJO",
                    banner: "SpinBetter2",
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

        </section>
      </main>
    </div>
  );
}

{/* Disclaimer na dole strony */}
<footer className="text-xs text-gray-400 text-center py-6 px-4 md:px-10">
  Ta strona prezentuje informacje o ekskluzywnych kasynach i zawiera linki afiliacyjne przeznaczone wyłącznie
  dla osób w regionach, gdzie hazard online jest legalny.
  <br />
  Użytkownicy są odpowiedzialni za zgodność z lokalnymi przepisami. Nie wspieramy nielegalnych form hazardu.
</footer>

