// import { Mail, Linkedin, Facebook } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-base-200 py-8 mt-16">
//       <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
//         {/* Left side - Name and copyright */}
//         <div className="text-center md:text-left mb-4 md:mb-0">
//           <h2 className="text-xl font-bold text-accent">
//             Falilath KORA GUERRA
//           </h2>
//           <p className="text-sm text-gray-600 mt-2">
//             © 2025 All rights reserved.
//           </p>
//         </div>

//         {/* Right side - Social links */}
//         <div className="flex space-x-6">
//           {/* LinkedIn */}
//           <a
//             href="https://www.linkedin.com/in/ton-profil"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-600 hover:text-accent transition-colors"
//           >
//             <Linkedin size={28} />
//           </a>

//           {/* Facebook */}
//           <a
//             href="https://www.facebook.com/ton-profil"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-600 hover:text-accent transition-colors"
//           >
//             <Facebook size={28} />
//           </a>

//           {/* Email */}
//           <a
//             href="mailto:falilathkguerra.gpn01@gmail.com"
//             className="text-gray-600 hover:text-accent transition-colors"
//           >
//             <Mail size={28} />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import { Mail, Linkedin, Facebook } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-base-300 py-6 mt-16">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
//         {/* Nom */}
//         <div className="text-center md:text-left mb-4 md:mb-0">
//           <h1 className="text-lg font-bold text-gray-700">
//             Falilath <span className="text-accent">KORA GUERRA</span>
//           </h1>
//         </div>

//         {/* Réseaux Sociaux */}
//         <div className="flex space-x-6">
//           <a
//             href="https://www.linkedin.com/in/falilathkoraguerra-pm"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-600 hover:text-accent transition"
//           >
//             <Linkedin size={24} />
//           </a>
//           <a
//             href="https://www.facebook.com/falilath.kguerra.5"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-600 hover:text-accent transition"
//           >
//             <Facebook size={24} />
//           </a>
//           <a
//             href="mailto:falilathkguerra.gpn01@gmail.com"
//             className="text-gray-600 hover:text-accent transition"
//           >
//             <Mail size={24} />
//           </a>
//         </div>
//       </div>

//       {/* Petite ligne en bas */}
//       <div className="text-center text-xs text-gray-500 mt-4">
//         © 2025 Falilath Kora Guerra - All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Mail, Linkedin, Facebook, Twitter } from "lucide-react";
const footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center p-10 mt-10">
      <aside>
        <p className="font-bold">
          <span>Falilath</span>
          <span className="text-accent">KORA GUERRA</span>
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://x.com/FalilathG?t=vFGAD-7TqicQ3sz0gJXK-g&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-accent transition"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/falilathkoraguerra-pm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-accent transition"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.facebook.com/falilath.kguerra.5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-accent transition"
          >
            <Facebook size={24} />
          </a>
          <a
            href="mailto:falilathkguerra.gpn01@gmail.com"
            className="text-gray-600 hover:text-accent transition"
          >
            <Mail size={24} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default footer;
