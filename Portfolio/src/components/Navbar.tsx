// import React from "react";
// import { Container } from "lucide-react";

// const Navbar = () => {
//   return (
//     <div className="flex justify-center md:justify-between items-center p-4 fixed top-0 left-0 right-0 z-20 bg-white px-[8%] py-[10px] h-[50px] shadow-sm">
//       <a href="#" className="flex items-center font-bold text-3xl md:text-xl">
//         <Container className="mr-2" /> Falilath
//         <span className="text-accent">KORA GUERRA</span>
//       </a>

//       <ul className="hidden md:flex space-x-4">
//         <li>
//           <a href="#" className="btn btn-sm btn-ghost">
//             Home
//           </a>
//         </li>
//         <li>
//           <a href="#" className="btn btn-sm btn-ghost">
//             About
//           </a>
//         </li>
//         <li>
//           <a href="#" className="btn btn-sm btn-ghost">
//             Skills
//           </a>
//         </li>
//         <li>
//           <a href="#" className="btn btn-sm btn-ghost">
//             Projects
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Container, Menu, X } from "lucide-react";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const navItems = ["Home", "About", "Skills", "Projects"];

  return (
    <>
      {/* Barre de navigation principale */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-md px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-2xl font-extrabold text-gray-900 hover:scale-105 transition-transform"
        >
          <Container className="text-accent w-8 h-8" />
          <span>Falilath</span>
          <span className="text-accent">KORA GUERRA</span>
        </a>

        {/* Liens desktop */}
        <nav>
          <ul className="hidden md:flex gap-8 text-md font-medium items-center">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative inline-block py-1 text-gray-700 hover:text-accent transition-all group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-accent transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bouton menu mobile */}
        <button
          className="md:hidden text-accent"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          {sidebarOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </header>

      {/* Sidebar mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-40 transform transition-transform duration-300 md:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col pt-24 px-6 gap-4 text-gray-800 font-medium h-full overflow-y-auto">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={`#${item.toLowerCase()}`}
              onClick={() => setSidebarOpen(false)}
              className="hover:text-accent transition"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
