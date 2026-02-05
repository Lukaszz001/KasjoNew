import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "Discord — Turbo Familia",
  description: "Dołącz do Discorda Turbo Familia",
};

export default function DiscordPage() {
  return (
    <div
      className="flex min-h-screen text-white font-sans"
      style={{
        backgroundColor: "#041A14",
        backgroundImage: "url('/dark-matter.png')",
        backgroundRepeat: "repeat",
      }}
    >
      <Sidebar />

      <main className="flex-1 md:ml-64 flex items-center justify-center px-4">
        <div
          className="
            w-full
            max-w-4xl
            bg-gradient-to-br from-[#0B3D2E] to-[#07251D]
            border border-[#22FF88]/20
            rounded-2xl
            p-8 md:p-12
            text-center
            shadow-[0_0_40px_rgba(0,0,0,0.4)]
          "
        >
          {/* Tytuł */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            DISCORD TURBO FAMILIA
          </h1>

          {/* Lista */}
          <div className="text-left max-w-xl mx-auto mb-10">
            <p className="font-semibold mb-3">Co znajdziesz na Discordzie:</p>

            <ul className="space-y-2 text-gray-200">
              <li>🎰 Kasyna i bonusy</li>
              <li>⚽ Zakłady bukmacherskie</li>
              <li>💸 Konkursy</li>
              <li>💬 Luźny czat</li>
            </ul>
          </div>

          {/* CTA */}
          <a
            href="https://discord.gg/turbofamilia"
            target="_blank"
            className="
              inline-flex
              items-center
              gap-3
              bg-[#22FF88]
              text-black
              font-bold
              px-10
              py-4
              rounded-xl
              text-lg
              transition
              hover:shadow-[0_0_25px_rgba(34,255,136,0.6)]
              hover:-translate-y-1
            "
          >
            <img
              src="/discord-icon.png"
              alt="Discord"
              className="w-10 h-10"
            />
            DOŁĄCZ DO TURBO FAMILII
          </a>
        </div>
      </main>
    </div>
  );
}
