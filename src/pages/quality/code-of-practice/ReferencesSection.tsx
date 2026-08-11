import { BookOpen, ExternalLink } from "lucide-react";

export function ReferencesSection() {
  const references = [
    {
      title: "Statistical Act, 2006",
      author: "Government of Kenya (GoK)",
      year: "2006",
      description: "Legal framework governing statistical production in Kenya",
      url: "https://www.knbs.or.ke/wp-content/uploads/2020/12/Statistics-Act-4-of-2006-Revised-Edition-2019.pdf"
    },
    {
      title: "Kenya Statistical Quality Assurance Framework (KeSQAF)",
      author: "Kenya National Bureau of Statistics (KNBS)",
      year: "2022",
      description: "Comprehensive framework for quality assurance in NSS",
      url: "https://gacherudaniel.github.io/KESQAF/"
    },
    {
      title:
        "The Handbook on Management and Organization of National Statistical Systems",
      author:
        "United Nations Department of Economic and Social Affairs (UNDESA)",
      year: "2022",
      description: "International guidance on NSS management and organization",
      url: "https://unstats.un.org/capacity-development/handbook/index.cshtml"
    },
  ];

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <BookOpen className="text-knbs-500" size={28} />
        <h1 className="text-3xl font-bold text-knbs-600">References</h1>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
        <p className="text-sm text-gray-700 leading-relaxed">
          The Kenya Statistical Code of Practice (KeSCoP) is based on
          international best practices and national legislative frameworks. The
          following references provide the foundation for the principles and
          practices outlined in this document.
        </p>
      </div>

      <div className="space-y-4">
        {references.map((ref, index) => (
          <div
            key={index}
            className="bg-white border-l-4 border-knbs-500 rounded-r-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {ref.url ? (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-knbs-600 transition-colors"
                    >
                      {ref.title}
                    </a>
                  ) : (
                    ref.title
                  )}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">{ref.author}</span> (
                  {ref.year})
                </p>
                <p className="text-sm text-gray-700">{ref.description}</p>
              </div>
              {ref.url && (
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-knbs-500 hover:text-knbs-600 transition-colors flex-shrink-0"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gray-50 border rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Related Documents
        </h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-knbs-500 font-bold">•</span>
            <span>
              Kenya Strategy for the Development of Statistics (KSDS) IV
              2023-2027
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-knbs-500 font-bold">•</span>
            <span>Data Protection Act, 2019</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-knbs-500 font-bold">•</span>
            <span>UN Fundamental Principles of Official Statistics</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-knbs-500 font-bold">•</span>
            <span>African Charter on Statistics</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-knbs-500 font-bold">•</span>
            <span>Generic National Quality Assurance Framework (GNQAF)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
