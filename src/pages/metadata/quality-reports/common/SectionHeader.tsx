import { ChevronDown, ChevronRight } from "lucide-react";
import type { SectionKey } from "../QualityReport";

interface SectionHeaderProps {
  id: SectionKey;
  number: string;
  title: string;
  isOpen: boolean;
  onToggle: (id: SectionKey) => void;
}

export function SectionHeader({
  id,
  number,
  title,
  isOpen,
  onToggle,
}: SectionHeaderProps) {
  return (
    <button
      onClick={() => onToggle(id)}
      className="w-full flex items-center gap-3 py-4 px-4 lg:px-6 bg-gradient-to-r from-knbs-500 to-knbs-400 text-white font-medium hover:from-knbs-600 hover:to-knbs-500 transition-all touch-manipulation min-h-[56px]"
    >
      {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
      <span className="text-sm lg:text-base font-medium">
        {number && `${number}. `}
        {title}
      </span>
    </button>
  );
}
