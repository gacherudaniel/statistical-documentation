import {
  ExternalLink,
  BookOpen,
  FileText,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import kesicPdf from "../../assets/KESIC.pdf";

interface Classification {
  name: string;
  acronym: string;
  description: string;
  link?: string;
  version?: string;
  downloadLink?: string;
  basedOn?: string;
}

interface ClassificationCategory {
  title: string;
  icon: typeof BookOpen;
  classifications: Classification[];
}

export function ClassificationNational() {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(
    new Set()
  );

  const toggleSection = (index: number) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedSections(newExpanded);
  };

  const categories: ClassificationCategory[] = [
    {
      title: "Economic Classifications",
      icon: BookOpen,
      classifications: [
        {
          name: "Kenya Standard Industrial Classification",
          acronym: "KESIC",
          description:
            "KESIC is Kenya's national standard for classifying economic activities. It provides a comprehensive framework for organizing and presenting economic data according to the type of productive activity undertaken by enterprises, establishments, and other statistical units. KESIC is essential for economic statistics, national accounts, business registers, and economic surveys.",
          version: "Rev. 1 (2023)",
          basedOn: "ISIC Rev. 4",
          link: "https://kesic.labourmarket.go.ke/kesic-classic-segments/",
          downloadLink: kesicPdf,
        },
      ],
    },
    {
      title: "Social Classifications",
      icon: FileText,
      classifications: [
        {
          name: "Kenya Standard Classification of Occupations",
          acronym: "KESCO",
          description:
            "KESCO is Kenya's national standard for classifying occupations. It organizes jobs into clearly defined groups according to the tasks and duties undertaken. KESCO is used in labor force surveys, population censuses, employment statistics, and human resource management. The classification facilitates the collection, compilation, and analysis of occupation statistics in a consistent manner.",
          version: "2022",
          basedOn: "ISCO-08",
          link: "https://labourmarket.go.ke/media/resources/KENYA_STANDARD_CLASSIFICATION_OF_OCCUPATIONS_KeSCO-2022.pdf",
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h1 className="text-2xl font-bold text-knbs-600 mb-4">
          National Classifications
        </h1>
        <p className="text-gray-700 mb-4">
          The Kenya National Bureau of Statistics (KNBS) develops and maintains
          national classification systems adapted to Kenya's statistical needs
          while ensuring alignment with international standards. These
          classifications provide standardized frameworks for organizing,
          collecting, and presenting statistical data across the National
          Statistical System.
        </p>
        <div className="bg-knbs-50 border-l-4 border-knbs-500 p-4 rounded">
          <p className="text-sm text-gray-700">
            <strong className="text-knbs-700">Note:</strong> Kenya's national
            classifications are developed based on international standards
            (ISIC, ISCO) but adapted to reflect the country's economic
            structure, labor market characteristics, and statistical priorities.
            They are regularly updated to maintain relevance and comparability.
          </p>
        </div>
      </div>

      {/* Classification Categories */}
      {categories.map((category, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-sm border">
          {/* Collapsible Header */}
          <button
            onClick={() => toggleSection(idx)}
            className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-knbs-100 rounded-lg">
                <category.icon className="w-6 h-6 text-knbs-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">
                {category.title}
              </h2>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded">
                {category.classifications.length}{" "}
                {category.classifications.length === 1
                  ? "classification"
                  : "classifications"}
              </span>
            </div>
            {expandedSections.has(idx) ? (
              <ChevronDown className="w-5 h-5 text-knbs-600" />
            ) : (
              <ChevronRight className="w-5 h-5 text-gray-400" />
            )}
          </button>

          {/* Collapsible Content */}
          {expandedSections.has(idx) && (
            <div className="px-6 pb-6 space-y-6 border-t">
              <div className="pt-6 space-y-6">
                {category.classifications.map((classification, classIdx) => (
                  <div
                    key={classIdx}
                    className="border border-gray-200 rounded-lg p-5 hover:border-knbs-300 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h3 className="text-lg font-semibold text-gray-800">
                            {classification.name}
                          </h3>
                          {classification.version && (
                            <span className="px-2 py-1 bg-knbs-100 text-knbs-700 text-xs font-medium rounded">
                              {classification.version}
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-medium text-knbs-600 mb-3">
                          {classification.acronym}
                        </p>
                        {classification.basedOn && (
                          <div className="mb-3">
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                              <BookOpen className="w-3 h-3" />
                              Based on: {classification.basedOn}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex gap-2">
                        {classification.downloadLink && (
                          <a
                            href={classification.downloadLink}
                            className="flex items-center gap-1 px-3 py-2 bg-knbs-500 text-white text-sm font-medium rounded hover:bg-knbs-600 transition-colors whitespace-nowrap"
                          >
                            View PDF
                            <FileText className="w-4 h-4" />
                          </a>
                        )}
                        {classification.link && (
                          <a
                            href={classification.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-3 py-2 bg-knbs-600 text-white text-sm font-medium rounded hover:bg-knbs-700 transition-colors whitespace-nowrap"
                          >
                            View
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {classification.description}
                    </p>

                    {/* Key Features Section */}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h4 className="text-sm font-semibold text-gray-800 mb-3">
                        Key Features:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {classification.acronym === "KESIC" && (
                          <>
                            <div className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-knbs-500 rounded-full mt-1.5 flex-shrink-0"></span>
                              <p className="text-xs text-gray-700">
                                Hierarchical structure with sections, divisions,
                                groups, and classes
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-knbs-500 rounded-full mt-1.5 flex-shrink-0"></span>
                              <p className="text-xs text-gray-700">
                                Adapted to Kenya's economic structure and
                                priorities
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-knbs-500 rounded-full mt-1.5 flex-shrink-0"></span>
                              <p className="text-xs text-gray-700">
                                Used for business registers and economic surveys
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-knbs-500 rounded-full mt-1.5 flex-shrink-0"></span>
                              <p className="text-xs text-gray-700">
                                Facilitates international data comparability
                              </p>
                            </div>
                          </>
                        )}
                        {classification.acronym === "KESCO" && (
                          <>
                            <div className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-knbs-500 rounded-full mt-1.5 flex-shrink-0"></span>
                              <p className="text-xs text-gray-700">
                                Four-level hierarchical structure (major groups
                                to unit groups)
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-knbs-500 rounded-full mt-1.5 flex-shrink-0"></span>
                              <p className="text-xs text-gray-700">
                                Reflects Kenya's labor market and occupational
                                landscape
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-knbs-500 rounded-full mt-1.5 flex-shrink-0"></span>
                              <p className="text-xs text-gray-700">
                                Used in census, labor force surveys, and
                                employment data
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-knbs-500 rounded-full mt-1.5 flex-shrink-0"></span>
                              <p className="text-xs text-gray-700">
                                Enables international occupation statistics
                                comparison
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Usage and Implementation */}
      <div className="bg-gradient-to-br from-knbs-50 to-knbs-100 rounded-lg shadow-sm border border-knbs-200 p-6">
        <h2 className="text-xl font-bold text-knbs-800 mb-4">
          Usage and Implementation
        </h2>
        <div className="space-y-4">
          <div className="bg-white rounded p-4 border border-knbs-200">
            <h3 className="font-semibold text-knbs-700 mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Mandatory Use
            </h3>
            <p className="text-sm text-gray-700">
              All government agencies and organizations producing official
              statistics under the National Statistical System are required to
              use these national classifications for consistency and
              comparability of data.
            </p>
          </div>
          <div className="bg-white rounded p-4 border border-knbs-200">
            <h3 className="font-semibold text-knbs-700 mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Training and Support
            </h3>
            <p className="text-sm text-gray-700">
              KNBS provides training, guidance, and technical support to
              statistical units and data producers on the correct application of
              national classifications in their statistical activities.
            </p>
          </div>
          <div className="bg-white rounded p-4 border border-knbs-200">
            <h3 className="font-semibold text-knbs-700 mb-2 flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Updates and Revisions
            </h3>
            <p className="text-sm text-gray-700">
              Classifications are periodically reviewed and updated to reflect
              changes in the economy, labor market, and international standards.
              Users are notified of revisions and provided with correspondence
              tables.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Need Assistance?
        </h2>
        <p className="text-gray-700 mb-4">
          For questions, clarifications, or technical assistance regarding
          Kenya's national classifications, please contact:
        </p>
        <div className="bg-knbs-50 border-l-4 border-knbs-500 p-4 rounded">
          <p className="text-sm text-gray-700">
            <strong className="text-knbs-700">
              Statistical Methods and Standards Section
            </strong>
            <br />
            Kenya National Bureau of Statistics
            <br />
            Email:{" "}
            <a
              href="mailto:standards@knbs.or.ke"
              className="text-knbs-600 hover:underline"
            >
              standards@knbs.or.ke
            </a>
            <br />
            Phone: +254 20 317 583
          </p>
        </div>
      </div>
    </div>
  );
}
