// import React from "react";
// import { Mail } from "lucide-react";
// import img from "../assets/My_Pic-removebg-preview (1).png";

// const Home = () => {
//   return (
//     <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
//       <div className="flex flex-col">
//         <h1 className="text-5xl md:text-4xl font-bold text-center md:text-left mt-4 md:mt-0">
//           Digital Project Manager & MERN Stack Developer, I'm <br />
//           <span className="text-accent">Falilath KORA GUERRA</span>
//         </h1>
//         <p className="my-4 text-md text-center md:text-left">
//           Passionate about education, inclusion, and digital transformation.{" "}
//           <br />
//           Detail-oriented, organized, and adaptable — I turn ideas into
//           impactful and practical solutions.
//         </p>
//         <a href="" className="btn btn-accent md:w-fit">
//           <Mail w-5 h-5 />
//           Contact me
//         </a>
//       </div>

//       <div className="md:ml-60">
//         <img
//           src={img}
//           alt=""
//           className="w-120 h-130 md:h-100 object-cover border-5 border-accent shadow-xl"
//           style={{
//             borderRadius: "0% 100% 0% 100% / 100% 0% 100% 0%",
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;

import { Mail } from "lucide-react";
import img from "../assets/My_Pic-removebg-preview (1).png";

const Home = () => {
  return (
    <div
      className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 p-3 md:my-32 my-10 scroll-mt-24"
      id="home"
    >
      {/* Texte Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in-down">
          Digital Project Manager & MERN Stack Developer
          <br />
          <span className="text-accent">I'm Falilath KORA GUERRA</span>
        </h1>

        <p className="text-md md:text-lg text-gray-600 max-w-md animate-fade-in">
          Passionate about education, inclusion, and digital transformation.
          <br />
          Detail-oriented, organized, and adaptable — I turn ideas into
          impactful and practical solutions.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-3">
          <a
            href="mailto:falilathkguerra.gpn01@gmail.com?subject=Demande%20de%20contact&body=Bonjour%20Falilath%2C%0A%0AJe%20souhaite%20entrer%20en%20contact%20avec%20vous%20concernant%20vos%20compétences%20en%20gestion%20de%20projets%20digitaux%20et%20développement%20web.%0A%0AMerci%20!"
            className="flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white rounded-full shadow-md transition transform hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white rounded-full shadow-md transition transform hover:scale-105"
          >
            Voir mon CV
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center md:justify-end">
        <img
          src={img}
          alt="Falilath Kora Guerra"
          className="w-72 md:w-96 h-auto object-cover shadow-2xl border-4 border-accent animate-fade-in-up"
          style={{
            borderRadius: "0% 100% 0% 100% / 100% 0% 100% 0%",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
