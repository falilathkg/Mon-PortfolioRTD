import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">Menu</h2>
        <button onClick={onClose}>
          <X className="w-6 h-6 text-gray-700" />
        </button>
      </div>
      <nav className="flex flex-col p-4 space-y-4">
        <a href="#home" onClick={onClose}>
          Accueil
        </a>
        <a href="#about" onClick={onClose}>
          À propos
        </a>
        <a href="#projects" onClick={onClose}>
          Projets
        </a>
        <a href="#contact" onClick={onClose}>
          Contact
        </a>
      </nav>
    </div>
  );
}
