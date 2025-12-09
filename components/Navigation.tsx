import React from 'react';
import { NavLink } from '../types';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const links: NavLink[] = [
  { label: 'Work', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Navigation: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center text-white mix-blend-difference"
    >
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-[#5862ec] rounded-sm flex items-center justify-center mix-blend-multiply">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 122.88 122.88"
              width="20"
              height="20"
              aria-hidden="true"
              focusable="false"
              className="w-5 h-5 text-white"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M62.43,122.88h-1.98c0-16.15-6.04-30.27-18.11-42.34C30.27,68.47,16.16,62.43,0,62.43v-1.98 c16.16,0,30.27-6.04,42.34-18.14C54.41,30.21,60.45,16.1,60.45,0h1.98c0,16.15,6.04,30.27,18.11,42.34 c12.07,12.07,26.18,18.11,42.34,18.11v1.98c-16.15,0-30.27,6.04-42.34,18.11C68.47,92.61,62.43,106.72,62.43,122.88L62.43,122.88z"
              />
            </svg>
        </div>
        {/* <span className="font-bold text-xl tracking-tighter">R</span> */}
      </div>

      <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest">
        {links.map((link) => (
          <a key={link.label} href={link.href} className="hover:text-[#5862ec] transition-colors">
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button className="md:hidden text-white">
            <Menu className="w-6 h-6" />
        </button>
        <button className="hidden md:block px-6 py-2 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#5862ec] hover:border-[#5862ec] hover:text-black transition-all">
            Book Call
        </button>
      </div>
    </motion.nav>
  );
};

export default Navigation;