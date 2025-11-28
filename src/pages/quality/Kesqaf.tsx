import { ExternalLink } from "lucide-react";

export function Kesqaf() {
  const quartoBookUrl = "http://localhost:6919/"; // Change to your KeSQAF Quarto server port

  return (
    <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
      {/* Minimal Header Bar */}
      <div className="bg-knbs-600 text-white px-6 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold">
            Kenya Statistical Quality Assurance Framework (KeSQAF)
          </h1>
          <p className="text-xs text-knbs-100 mt-0.5">
            Comprehensive framework for quality assurance across Kenya's
            National Statistical System
          </p>
        </div>
        <a
          href={quartoBookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:bg-knbs-700 px-3 py-1.5 rounded transition-colors text-sm"
        >
          <ExternalLink size={16} />
          <span className="hidden md:inline">Open in new tab</span>
        </a>
      </div>

      {/* Full-height iframe with maximum space */}
      <iframe
        src={quartoBookUrl}
        className="w-full border-0"
        style={{ height: "calc(100vh - 280px)", minHeight: "600px" }}
        title="KeSQAF Documentation"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-downloads"
      />
    </div>
  );
}
