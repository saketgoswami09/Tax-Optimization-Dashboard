import { HelpCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0">
      <div className="m-auto p-4 h-14 flex items-center justify-between ">
        <a>
          <span className="text-[#0052FE] font-bold text-3xl">Koin</span>
          <span className="text-[#F7931A] font-bold text-3xl">X</span>
        </a>
        <a href="#" className="flex gap-1 text-[#3B82F6]">
          <HelpCircle />
          <span>How it works?</span>
        </a>
      </div>
    </header>
  );
}
