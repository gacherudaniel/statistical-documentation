import { ExternalLink, Book, Download } from "lucide-react";

export function Compendium() {
  const quartoBookUrl = "https://gacherudaniel.github.io/Compendium/";
  const pdfDownloadUrl =
    "https://www.knbs.or.ke/wp-content/uploads/2023/09/Kenya-Compendium-Concepts-Definitions.pdf"; // Path to your PDF document

  return (
    <div className="max-w-none mx-auto bg-gradient-to-b from-amber-50 to-orange-50 min-h-screen">
      {/* E-book Header */}
      <div className="bg-gradient-to-r from-amber-800 to-orange-900 text-white shadow-lg">
        <div className="px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                <Book className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-serif font-bold">
                  Kenya Compendium of Concepts and Definitions
                </h1>
                <p className="text-amber-100 text-sm font-medium mt-1">
                  Statistical Dictionary • Digital Edition • Kenya National
                  Bureau of Statistics
                </p>
              </div>
            </div>

            {/* E-book Controls */}
            <div className="flex items-center gap-3">
              <a
                href={pdfDownloadUrl}
                download="Compendium.pdf"
                className="flex items-center gap-2 bg-knbs-600 hover:bg-knbs-700 px-4 py-2 rounded-lg transition-colors text-sm font-medium backdrop-blur-sm"
              >
                <Download size={16} />
                <span className="hidden md:inline">View PDF</span>
              </a>
              <a
                href={quartoBookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors text-sm font-medium backdrop-blur-sm"
              >
                <ExternalLink size={16} />
                <span className="hidden md:inline">Full Screen</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* E-book Content Container */}
      <div className="relative">
        {/* Paper-like background with subtle texture */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-cream-50 to-amber-50 opacity-80"></div>

        {/* Book Shadow Effect */}
        <div className="relative max-w-7xl mx-auto px-4 py-6">
          <div
            className="bg-white rounded-2xl shadow-2xl border border-amber-200 overflow-hidden"
            style={{
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Book Spine Visual Effect */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-amber-600 to-orange-700 opacity-60"></div>
              <div className="absolute left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-orange-500 opacity-40"></div>
            </div>

            {/* Page Content */}
            <div className="relative ml-6 bg-white">
              <iframe
                src={quartoBookUrl}
                className="w-full border-0 bg-white"
                style={{
                  height: "calc(100vh - 200px)",
                  minHeight: "1000px",
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                }}
                title="Compendium Digital Book"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-downloads"
              />
            </div>
          </div>

          {/* Book Pages Shadow Effect */}
          <div className="absolute -bottom-2 left-8 right-8 h-4 bg-gradient-to-r from-transparent via-amber-900/20 to-transparent blur-sm rounded-full"></div>
          <div className="absolute -bottom-1 left-10 right-10 h-3 bg-gradient-to-r from-transparent via-amber-800/15 to-transparent blur-sm rounded-full"></div>
        </div>
      </div>

      {/* E-book Footer */}
      <div className="bg-gradient-to-r from-amber-800 to-orange-900 text-white py-3 px-8">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <span className="text-amber-200">
              Kenya National Bureau of Statistics
            </span>
            <span className="text-amber-300">•</span>
            <span className="text-amber-200">
              Compendium of Concepts and Definitions
            </span>
          </div>
          <div className="flex items-center gap-2 text-amber-200">
            <span>Digital Edition</span>
            <span>•</span>
            <span>Interactive Format</span>
          </div>
        </div>
      </div>
    </div>
  );
}
