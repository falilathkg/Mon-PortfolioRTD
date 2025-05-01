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

import { Container } from "lucide-react";

const Navbar = () => {
  return (
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

      {/* Navigation Links */}
      <nav>
        <ul className="hidden md:flex gap-8 text-md font-medium items-center">
          {["Home", "About", "Skills", "Projects"].map((item, idx) => (
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
    </header>
  );
};

export default Navbar;
