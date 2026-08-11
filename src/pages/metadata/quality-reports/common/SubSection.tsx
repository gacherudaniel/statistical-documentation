import type { ReactNode } from "react";

interface SubSectionProps {
  code: string;
  title: string;
  children: ReactNode;
}

export function SubSection({ code, title, children }: SubSectionProps) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <div className="flex flex-col lg:grid lg:grid-cols-12 min-h-12">
        <div className="lg:col-span-3 bg-gray-50 px-4 lg:px-5 py-3 lg:py-4 border-b lg:border-b-0 lg:border-r border-gray-200">
          <span className="text-xs text-knbs-700 font-medium">{code}</span>
          <p className="text-sm font-medium text-gray-700 mt-1">{title}</p>
        </div>
        <div className="lg:col-span-9 px-4 lg:px-6 py-4 text-sm lg:text-base text-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
}
