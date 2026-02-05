import React from "react";

const Banner = () => {
  return (
    <>
      {/* Baner */}
      <div className="relative w-full h-[60vh] md:h-[800px] bg-[#041A14] overflow-hidden rounded-2xl shadow-lg">
        {/* Tło banera */}
        <img
          src="/kasjobaner.png"
          alt="Baner"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />

        {/* Gradient wtopienia krawędzi */}
        <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-[#041A14] to-transparent rounded-t-2xl"></div>
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#041A14] to-transparent rounded-b-2xl"></div>

        {/* Tekst + przyciski Desktop */}
        <div className="hidden md:flex absolute left-10 top-1/3 flex-col gap-6 text-white max-w-lg z-10 font-sans">
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

      {/* Tekst + przyciski Mobile – pod banerem */}
      <div className="md:hidden mt-4 px-5 font-sans text-white flex flex-col gap-4 max-w-lg mx-auto">
        <h1 className="text-3xl font-bold leading-snug text-center">
          Dołącz do społeczności <span className="block">Don Kasjo!</span>
        </h1>
        <p className="text-sm text-center">
          Oglądaj streamy, korzystaj z dedykowanych bonusów oraz zgarniaj BLIKI za aktywność!
        </p>

        <div className="flex flex-col gap-3 mt-4">
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
    </>
  );
};

export default Banner;
