"use client";

import Image from "next/image";

export default function InstrukcjePage() {
  return (
    <div
      className="min-h-screen bg-[#041A14] text-white font-sans flex justify-center px-4 py-10 md:px-10"
    >
      <div className="w-full max-w-5xl space-y-12">

        {/* MENU INSTRUKCJI */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
          <a
            href="#jak-odebrac"
            className="px-4 py-2 bg-[#0B3D2E]/60 rounded-lg hover:bg-[#22FF88]/20 transition font-semibold text-sm md:text-base"
          >
            Jak odebrać bonusy
          </a>
          <a
            href="#odpowiedzialna-gra"
            className="px-4 py-2 bg-[#0B3D2E]/60 rounded-lg hover:bg-[#22FF88]/20 transition font-semibold text-sm md:text-base"
          >
            Odpowiedzialna gra
          </a>
        </nav>

        {/* JAK ODEBRAC BONUSY */}
        <section
          id="jak-odebrac"
          className="bg-[#0B3D2E]/40 rounded-2xl border border-[#22FF88]/20 p-6 space-y-6"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
            Jak odebrać bonusy na WYNS
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-200">
            <li>
              Kliknij <strong>"Odbierz bonus"</strong> na banerze Wyns.
              <div className="flex justify-center mt-2">
                <Image
                  src="/Screen1.png"
                  alt="Screen 1"
                  width={250}
                  height={150}
                  className="rounded-lg w-[80%] max-w-xs md:max-w-[250px] h-auto"
                />
              </div>
            </li>
            <li>
              Wybierz z listy interesujący Cię bonus.
              <div className="flex justify-center mt-2">
                <Image
                  src="/Screen2.png"
                  alt="Screen 2"
                  width={250}
                  height={150}
                  className="rounded-lg w-[80%] max-w-xs md:max-w-[250px] h-auto"
                />
              </div>
            </li>
            <li>
              Dokończ rejestrację, wpisując wymagane dane. Po udanej rejestracji zostaniesz przeniesiony do okna wpłat — wybierz metodę płatności i ciesz się bonusem 100% oraz darmowymi spinami!
              <div className="flex justify-center mt-2">
                <Image
                  src="/Screen3.png"
                  alt="Screen 3"
                  width={250}
                  height={150}
                  className="rounded-lg w-[80%] max-w-xs md:max-w-[250px] h-auto"
                />
              </div>
            </li>
          </ol>
        </section>

        {/* ODPOWIEDZIALNA GRA */}
        <section
          id="odpowiedzialna-gra"
          className="bg-[#0B3D2E]/40 rounded-2xl border border-[#22FF88]/20 p-6 space-y-4"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
            Odpowiedzialna gra
          </h2>
          <p className="text-gray-200 text-sm md:text-base">
            Hazard online to przede wszystkim rozrywka, a nie sposób na szybki zarobek. Oto kilka zasad, które pomogą Ci czerpać frajdę i unikać problemów:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-200 text-sm md:text-base">
            <li><strong>Ustal limity finansowe:</strong> nigdy nie graj pieniędzmi, których brakuje na codzienne wydatki.</li>
            <li><strong>Ustal limity czasowe:</strong> krótsze sesje pozwalają zachować kontrolę i świeży umysł.</li>
            <li><strong>Nie graj pod wpływem emocji:</strong> stres, złość czy alkohol wpływają na decyzje – rób przerwy.</li>
            <li><strong>Gra dla zabawy:</strong> traktuj bonusy i wygrane jako dodatek, a nie pewny dochód.</li>
            <li><strong>Monitoruj swoje zachowania:</strong> jeśli zauważysz przesadę lub silne emocje, zrób krok wstecz i odpocznij.</li>
          </ul>
          <p className="text-gray-200 text-sm md:text-base">
            Świadome podejście pozwala cieszyć się grą i uniknąć przykrych niespodzianek. Graj odpowiedzialnie!
          </p>
        </section>

      </div>
    </div>
  );
}
