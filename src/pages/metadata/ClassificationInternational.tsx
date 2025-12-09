import {
  ExternalLink,
  BookOpen,
  FileText,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

interface Classification {
  name: string;
  acronym: string;
  description: string;
  link?: string;
  version?: string;
}

interface ClassificationCategory {
  title: string;
  icon: typeof BookOpen;
  classifications: Classification[];
}

export function ClassificationInternational() {
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
          name: "International Standard Industrial Classification of All Economic Activities",
          acronym: "ISIC",
          description:
            "A standard classification of productive economic activities. ISIC provides a comprehensive framework for the collection and presentation of economic statistics according to such activities.",
          version: "Rev. 4",
          link: "https://unstats.un.org/unsd/classifications/Econ/ISIC",
        },
        {
          name: "Central Product Classification",
          acronym: "CPC",
          description:
            "Provides a complete range of categories for all products (goods and services) that can be the object of domestic or international transactions.",
          version: "Ver. 2.1",
          link: "https://unstats.un.org/unsd/classifications/Econ/CPC",
        },
        {
          name: "Classification of Individual Consumption According to Purpose",
          acronym: "COICOP",
          description:
            "A reference classification of individual consumption expenditures incurred by households, non-profit institutions serving households (NPISHs), and general government.",
          version: "2018",
          link: "https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/COICOP_2018_pre_edited_white_cover_version_2018_12_26.pdf",
        },
        {
          name: "Harmonized Commodity Description and Coding System",
          acronym: "HS",
          description:
            "An international nomenclature for the classification of products developed by the World Customs Organization (WCO). It is used by customs authorities around the world.",
          version: "2022",
          link: "https://www.wcoomd.org/en/topics/nomenclature/instrument-and-tools/hs-nomenclature-2022-edition.aspx",
        },
      ],
    },
    {
      title: "Social Classifications",
      icon: FileText,
      classifications: [
        {
          name: "International Standard Classification of Education",
          acronym: "ISCED",
          description:
            "The reference international classification for organizing education programmes and related qualifications by levels and fields.",
          version: "2011",
          link: "https://www.uis.unesco.org/en/methods-and-tools/isced",
        },
        {
          name: "International Standard Classification of Occupations",
          acronym: "ISCO",
          description:
            "A tool for organizing jobs into a clearly defined set of groups according to the tasks and duties undertaken in the job.",
          version: "ISCO-08",
          link: "https://ilostat.ilo.org/methods/concepts-and-definitions/classification-occupation/",
        },
        {
          name: "International Classification of Status in Employment",
          acronym: "ICSE",
          description:
            "Provides a framework for organizing information on jobs held by persons into meaningful, homogeneous groups based on their type of explicit or implicit contract of employment.",
          version: "ICSE-18",
          link: "https://ilostat.ilo.org/methods/concepts-and-definitions/classification-status-at-work/",
        },
        {
          name: "International Classification of Functioning, Disability and Health",
          acronym: "ICF",
          description:
            "A classification of health and health-related domains that describe body functions and structures, activities and participation.",
          link: "https://www.who.int/classifications/international-classification-of-functioning-disability-and-health",
        },
      ],
    },
    {
      title: "Geographic Classifications",
      icon: BookOpen,
      classifications: [
        {
          name: "Standard Country or Area Codes for Statistical Use",
          acronym: "M49",
          description:
            "A standard for area codes used by the United Nations for statistical purposes, developed and maintained by the United Nations Statistics Division.",
          link: "https://unstats.un.org/unsd/methodology/m49/",
        },
        {
          name: "International Standard Industrial Classification by Region",
          acronym: "ISO 3166",
          description:
            "Codes for the representation of names of countries and their subdivisions. It defines codes for countries, dependent territories, and special areas of geographical interest.",
          link: "https://www.iso.org/iso-3166-country-codes.html",
        },
      ],
    },
    {
      title: "Other International Classifications",
      icon: FileText,
      classifications: [
        {
          name: "Classification of the Functions of Government",
          acronym: "COFOG",
          description:
            "A detailed classification of the functions, or socioeconomic objectives, that general government units aim to achieve through various kinds of expenditure.",
          link: "https://unstats.un.org/unsd/classifications/cofog/revision",
        },
        {
          name: "Balance of Payments and International Investment Position Manual",
          acronym: "BPM6",
          description:
            "Provides standards for concepts, definitions, classifications, and conventions for compiling balance of payments and international investment position statistics.",
          version: "6th Edition",
          link: "https://www.imf.org/external/pubs/ft/bop/2007/bopman6.htm",
        },
        {
          name: "System of National Accounts",
          acronym: "SNA",
          description:
            "The internationally agreed standard set of recommendations on how to compile measures of economic activity in accordance with strict accounting conventions.",
          version: "2008",
          link: "https://unstats.un.org/unsd/nationalaccount/sna.asp",
        },
        {
          name: "International Classification of Activities for Time-Use Statistics 2016",
          acronym: "ICATUS 2016",
          description:
            "A framework for the production of health accounts and provides a standard for reporting expenditure on health both internationally and nationally.",
          link: "https://unstats.un.org/unsd/classifications/Family/Detail/2083",
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h1 className="text-2xl font-bold text-knbs-600 mb-4">
          International Classifications
        </h1>
        <p className="text-gray-700 mb-4">
          The Kenya National Bureau of Statistics (KNBS) adopts and implements
          various international classification systems to ensure comparability
          and consistency of statistical data with international standards.
          These classifications facilitate international comparisons and
          harmonization of statistical practices.
        </p>
        <div className="bg-knbs-50 border-l-4 border-knbs-500 p-4 rounded">
          <p className="text-sm text-gray-700">
            <strong className="text-knbs-700">Note:</strong> These international
            classifications are maintained by various international
            organizations including the United Nations Statistics Division
            (UNSD), International Labour Organization (ILO), UNESCO, World
            Health Organization (WHO), and International Monetary Fund (IMF).
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
                {category.classifications.length} classifications
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
                        <p className="text-sm font-medium text-knbs-600 mb-2">
                          {classification.acronym}
                        </p>
                      </div>
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
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {classification.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Additional Resources */}
      <div className="bg-gradient-to-br from-knbs-50 to-knbs-100 rounded-lg shadow-sm border border-knbs-200 p-6">
        <h2 className="text-xl font-bold text-knbs-800 mb-4">
          Additional Resources
        </h2>
        <div className="space-y-3">
          <a
            href="https://unstats.un.org/unsd/classifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-knbs-700 hover:text-knbs-800 font-medium"
          >
            <ExternalLink className="w-4 h-4" />
            UN Statistics Division - Classifications Registry
          </a>
          <a
            href="https://www.ilo.org/public/english/bureau/stat/class/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-knbs-700 hover:text-knbs-800 font-medium"
          >
            <ExternalLink className="w-4 h-4" />
            ILO - International Classifications
          </a>
          <a
            href="https://www.who.int/standards/classifications"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-knbs-700 hover:text-knbs-800 font-medium"
          >
            <ExternalLink className="w-4 h-4" />
            WHO - International Classifications
          </a>
        </div>
      </div>
    </div>
  );
}
