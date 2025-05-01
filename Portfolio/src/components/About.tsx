// import Title from "./Title";
// import img from "../assets/My_Pic-removebg-preview (1).png";
// import { FolderKanban, FolderCode, ShieldQuestion } from "lucide-react";

// const aboutSections = [
//   {
//     id: 1,
//     title: "Digital & Agile Project Manager",
//     description: [
//       "Detail-driven and highly organized project management",
//       "Certified in Agile methodologies with a strong focus on adaptability and iterative delivery",
//       "Passionate about education, digital transformation, inclusion, and cybersecurity",
//       "Bridging teams and technology to deliver impactful and user-centered solutions",
//     ],
//     icon: <FolderKanban className="text-accent scale-150" />,
//   },
//   {
//     id: 2,
//     title: "MERN Stack Developer",
//     description: [
//       "Specialized in the MERN stack (MongoDB, Express.js, React.js, Node.js)",
//       "Strong expertise in frontend (HTML, CSS, JavaScript, Tailwind, Figma)",
//       "Backend development with Node.js and Python",
//       "Efficient API building and database management",
//     ],
//     icon: <FolderCode className="text-accent scale-150" />,
//   },
//   {
//     id: 3,
//     title: "More",
//     description: [
//       "Data analysis skills (Power BI, Excel, Python)",
//       "Project management tools (Trello, Jira, Microsoft Project)",
//       "Collaborative communication (Slack, Google Workspace, GitHub)",
//       "Cybersecurity awareness with Wireshark",
//       "Continuous learning and innovation mindset",
//     ],
//     icon: <ShieldQuestion className="text-accent scale-150" />,
//   },
// ];

// const About = () => {
//   return (
//     <div className="bg-base-300 p-10 mb-10 md:mb-32">
//       <Title title="About" />
//       <div className="md:h-screen flex justify-center items-center">
//         <div className="hidden md:block">
//           <img src={img} alt="" className="w-100 object-cover rounded-xl" />
//         </div>

//         <div className="md:ml-4 space-y-4">
//           {aboutSections.map((section) => (
//             <div
//               key={section.id}
//               className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl"
//             >
//               <div className="mb-2 md:mb-0">{section.icon}</div>

//               <div className="md:ml-4 text-center md:text-left">
//                 <h2 className="text-xl font-bold mb-1">{section.title}</h2>
//                 <p className="text-sm">{section.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

// import Title from "./Title";
// import { useState } from "react";
// import img from "../assets/My_Pic-removebg-preview (1).png";
// import { FolderKanban, FolderCode, ShieldQuestion } from "lucide-react";

// const aboutSections = [
//   {
//     id: 1,
//     title: "Digital & Agile Project Manager",
//     description: [
//       "Detail-driven and highly organized project management",
//       "Certified in Agile methodologies with a strong focus on adaptability and iterative delivery",
//       "Passionate about education, digital transformation, inclusion, and cybersecurity",
//       "Bridging teams and technology to deliver impactful and user-centered solutions",
//     ],
//     icon: <FolderKanban className="text-accent scale-150" />,
//   },
//   {
//     id: 2,
//     title: "MERN Stack Developer",
//     description: [
//       "Specialized in the MERN stack (MongoDB, Express.js, React.js, Node.js)",
//       "Strong expertise in frontend (HTML, CSS, JavaScript, Tailwind, Figma)",
//       "Backend development with Node.js and Python",
//       "Efficient API building and database management",
//     ],
//     icon: <FolderCode className="text-accent scale-150" />,
//   },
//   {
//     id: 3,
//     title: "More",
//     description: [
//       "Data analysis skills (Power BI, Excel, Python)",
//       "Project management tools (Trello, Jira, Microsoft Project)",
//       "Collaborative communication (Slack, Google Workspace, GitHub)",
//       "Cybersecurity awareness with Wireshark",
//       "Continuous learning and innovation mindset",
//     ],
//     icon: <ShieldQuestion className="text-accent scale-150" />,
//   },
// ];

// export default function About() {
//   const [openSection, setOpenSection] = useState(null);

//   const toggleSection = (id) => {
//     setOpenSection(openSection === id ? null : id);
//   };

//   return (
//     <div className="bg-base-300 p-10 mb-10 md:mb-32">
//       <Title title="About" />
//       <div className="md:h-screen flex justify-center items-center gap-10">
//         <div className="hidden md:block">
//           <img
//             src={img}
//             alt="Profile"
//             className="w-100 object-cover rounded-xl"
//           />
//         </div>
//         <div className="space-y-8">
//           {aboutSections.map((section) => (
//             <div
//               key={section.id}
//               className="relative flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-100 shadow-xl justify-between"
//             >
//               <div>
//                 <div className="flex items-center gap-4">
//                   {section.icon}
//                   <h2 className="text-xl font-semibold">{section.title}</h2>
//                 </div>
//                 {/* Partie visible en permanence */}
//                 <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
//                   <li>{section.description[0]}</li>{" "}
//                   {/* Premier élément toujours visible */}
//                   {/* Partie cachée */}
//                   {openSection === section.id &&
//                     section.description
//                       .slice(1)
//                       .map((point, index) => <li key={index}>{point}</li>)}
//                 </ul>
//               </div>
//               {/* Bouton en bas à droite */}
//               <div className="mt-4 flex justify-end">
//                 <button
//                   onClick={() => toggleSection(section.id)}
//                   className="text-accent underline hover:text-accent-dark transition"
//                 >
//                   {openSection === section.id ? "Hide details" : "Show more"}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import Title from "./Title";
import img from "../assets/My_Pic-removebg-preview (1).png";
import { FolderKanban, FolderCode, ShieldQuestion } from "lucide-react";

const aboutSections = [
  {
    id: 1,
    title: "Digital & Agile Project Manager",
    description: [
      "Detail-driven and highly organized project management.",
      "Certified in Agile methodologies with a strong focus on adaptability and iterative delivery.",
      "Passionate about education, digital transformation, inclusion, and cybersecurity.",
      "Bridging teams and technology to deliver impactful and user-centered solutions.",
    ],
    icon: <FolderKanban className="text-accent scale-150" />,
  },
  {
    id: 2,
    title: "MERN Stack Developer",
    description: [
      "Specialized in the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Strong expertise in frontend (HTML, CSS, JavaScript, Tailwind, Figma).",
      "Backend development with Node.js and Python.",
      "Efficient API building and database management.",
    ],
    icon: <FolderCode className="text-accent scale-150" />,
  },
  {
    id: 3,
    title: "More",
    description: [
      "Data analysis skills (Power BI, Excel, Python).",
      "Project management tools (Trello, Jira, Microsoft Project).",
      "Collaborative communication (Slack, Google Workspace, GitHub).",
      "Cybersecurity awareness with Wireshark.",
      "Continuous learning and innovation mindset.",
    ],
    icon: <ShieldQuestion className="text-accent scale-150" />,
  },
];

export default function About() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (id: number) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="bg-base-300 p-10 mb-10 scroll-mt-24" id="about">
      <Title title="About" />
      <div className="md:h-screen flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="hidden md:block">
          <img
            src={img}
            alt="Profile"
            className="w-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-8">
          {aboutSections.map((section) => (
            <div
              key={section.id}
              className="relative flex flex-col justify-between bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  {section.icon}
                  <h2 className="text-2xl font-bold text-gray-800">
                    {section.title}
                  </h2>
                </div>
                {/* Partie visible en permanence */}
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>{section.description[0]}</li>
                  {/* Partie cachée */}
                  {openSection === section.id &&
                    section.description
                      .slice(1)
                      .map((point, index) => <li key={index}>{point}</li>)}
                </ul>
              </div>
              {/* Bouton en bas à droite */}
              <div className="mt-1 flex justify-end">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-dark transition"
                >
                  {openSection === section.id ? "Hide details" : "Show more"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
