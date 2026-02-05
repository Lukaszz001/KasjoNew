"use client";
import { useState } from "react";
import { Home, Gift, BookOpen, Users, Play } from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home", icon: <Home className="w-5 h-5 min-w-[20px]" /> },
    { name: "Bonusy", href: "#bonusy", icon: <Gift className="w-5 h-5 min-w-[20px]" /> },
    { name: "Instrukcje", href: "/instrukcje", icon: <BookOpen className="w-5 h-5 min-w-[20px]" /> },
    { name: "Discord", href: "/discord", icon: <Users className="w-5 h-5 min-w-[20px]" /> },
  ];

  return (
    <>
      {/* Hamburger mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-3 bg-[#22FF88] rounded shadow-lg hover:scale-105 transition-transform"
        onClick={() => setOpen(!open)}
      >
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-[#041A14] rounded"></span>
          <span className="block w-6 h-0.5 bg-[#041A14] rounded"></span>
          <span className="block w-6 h-0.5 bg-[#041A14] rounded"></span>
        </div>
      </button>

      {/* Fixed Sidebar */}
      <nav
        className={`bg-[#0B3D2E] text-white w-64 fixed top-0 left-0 h-screen z-40 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 md:flex md:flex-col shadow-lg`}
      >
        <ul className="flex flex-col p-6 gap-2 font-sans">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#22FF88]/20 hover:shadow-[0_0_10px_rgba(34,255,136,0.3)] transition-all duration-200"
                onClick={() => setOpen(false)}
              >
                {item.icon}
                <span className="font-semibold">{item.name}</span>
              </a>

              {/* Pod Home dodatkowy przycisk Kick */}
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
};

export default Sidebar;
