import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { UserButton } from "@clerk/react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
        <Link to="/">
            <p className="inline-flex flex-col justify-center rounded-2xl border border-cyan-400/20 bg-linear-to-br from-zinc-950 via-zinc-900 to-black px-6 py-3 text-center shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/10 cursor-pointer">
              <span className="text-2xl font-semibold tracking-[0.18em] uppercase text-white">
                Silver<span className="text-cyan-400">Crest</span>
              </span>
              <span className="mt-1 text-[11px] font-medium tracking-[0.35em] uppercase text-zinc-400">
                Hotel Booking
              </span>
            </p>
        </Link>
        <UserButton/>
    </div>
  );
};

export default Navbar;
