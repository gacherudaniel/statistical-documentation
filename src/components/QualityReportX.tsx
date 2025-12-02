import { useState } from "react";
import type { ReactNode } from "react";
import {
  ChevronDown,
  ChevronRight,
  FileText,
  Download,
  Printer,
  Share2,
  Home,
  ExternalLink,
  Info,
  BookOpen,
} from "lucide-react";

type SectionKey =
  | "general"
  | "quality"
  | "relevance"
  | "methodology"
  | "accuracy"
  | "timeliness"
  | "accessibility"
  | "coherence"
  | "references";

interface SectionHeaderProps {
  id: SectionKey;
  number: string;
  title: string;
  isOpen: boolean;
  onToggle: (id: SectionKey) => void;
}

interface SubSectionProps {
  code: string;
  title: string;
  children: ReactNode;
}

interface TableRowProps {
  label: string;
  value: string;
}

const SectionHeader = ({
  id,
  number,
  title,
  isOpen,
  onToggle,
}: SectionHeaderProps) => (
  <button
    onClick={() => onToggle(id)}
    className="w-full flex items-center gap-3 py-3 px-4 bg-gradient-to-r from-teal-700 to-teal-600 text-white font-medium hover:from-teal-800 hover:to-teal-700 transition-all"
  >
    {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
    <span className="text-sm">
      {number}. {title}
    </span>
  </button>
);

const SubSection = ({ code, title, children }: SubSectionProps) => (
  <div className="border-b border-gray-200 last:border-b-0">
    <div className="grid grid-cols-12 min-h-12">
      <div className="col-span-3 bg-gray-50 px-4 py-3 border-r border-gray-200">
        <span className="text-xs text-teal-700 font-medium">{code}</span>
        <p className="text-sm font-medium text-gray-700">{title}</p>
      </div>
      <div className="col-span-9 px-4 py-3 text-sm text-gray-700">
        {children}
      </div>
    </div>
  </div>
);

const TableRow = ({ label, value }: TableRowProps) => (
  <tr className="border-b border-gray-200">
    <td className="py-2 px-3 bg-gray-50 text-sm font-medium text-gray-700 w-1/3">
      {label}
    </td>
    <td className="py-2 px-3 text-sm text-gray-700">{value}</td>
  </tr>
);

const NAV_ITEMS: Array<{ id: SectionKey; label: string }> = [
  { id: "general", label: "A. General Information" },
  { id: "quality", label: "B. Quality Declaration" },
  { id: "relevance", label: "B.1 Relevance" },
  { id: "methodology", label: "B.2 Methodological Soundness" },
  { id: "accuracy", label: "B.3 Accuracy & Reliability" },
  { id: "timeliness", label: "B.4 Timeliness & Punctuality" },
  { id: "accessibility", label: "B.5 Accessibility & Clarity" },
  { id: "coherence", label: "B.6 Coherence & Comparability" },
  { id: "references", label: "References" },
];

export default function KNBSQualityReport() {
  const [expandedSections, setExpandedSections] = useState<
    Record<SectionKey, boolean>
  >({
    general: true,
    quality: true,
    relevance: false,
    methodology: false,
    accuracy: false,
    timeliness: false,
    accessibility: false,
    coherence: false,
    references: false,
  });

  const toggleSection = (id: SectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Header Bar */}
      <div className="bg-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <span>Kenya National Bureau of Statistics</span>
            <span className="text-teal-300">|</span>
            <span>Statistical Quality Assurance</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-teal-200">
              Contact
            </a>
            <a href="#" className="hover:text-teal-200">
              Help
            </a>
            <a href="#" className="hover:text-teal-200">
              Login
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-teal-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                KNBS
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">
                  Quality Reports Portal
                </h1>
                <p className="text-sm text-gray-500">
                  Kenya Statistical Quality Assurance Framework (KeSQAF)
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 px-3 py-2 text-sm border rounded hover:bg-gray-50">
                <Download size={14} /> PDF
              </button>
              <button className="flex items-center gap-1 px-3 py-2 text-sm border rounded hover:bg-gray-50">
                <Printer size={14} /> Print
              </button>
              <button className="flex items-center gap-1 px-3 py-2 text-sm border rounded hover:bg-gray-50">
                <Share2 size={14} /> Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Home size={14} />
            <span></span>
            <a href="#" className="text-teal-700 hover:underline">
              Quality Reports
            </a>
            <span>/</span>
            <a href="#" className="text-teal-700 hover:underline">
              Living Conditions
            </a>
            <span>/</span>
            <span className="text-gray-800">
              Poverty and Inequality Statistics
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar - Navigation */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden sticky top-4">
              <div className="bg-teal-700 text-white px-4 py-3">
                <h3 className="font-medium text-sm">Contents</h3>
              </div>
              <nav className="p-2">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => toggleSection(item.id)}
                    className={`w-full text-left px-3 py-2 text-xs rounded hover:bg-teal-50 ${
                      expandedSections[item.id]
                        ? "bg-teal-50 text-teal-800 font-medium"
                        : "text-gray-600"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-9">
            {/* Report Title Card */}
            <div className="bg-white rounded-lg shadow-sm border mb-6 overflow-hidden">
              <div className="bg-gradient-to-r from-teal-700 to-teal-600 text-white p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <FileText size={20} />
                      <span className="text-teal-200 text-sm">
                        Quality Report
                      </span>
                    </div>
                    <h1 className="text-2xl font-bold mb-2">
                      Poverty and Inequality Statistics
                    </h1>
                    <p className="text-teal-100 text-sm">
                      Living Conditions and Poverty | Income and Consumption
                      Cross-cutting Statistics
                    </p>
                  </div>
                  <div className="bg-white/20 px-3 py-1 rounded text-sm">
                    KeSQAF Compliant
                  </div>
                </div>
              </div>

              {/* Quick Info Bar */}
              <div className="grid grid-cols-4 border-b">
                <div className="p-4 border-r">
                  <p className="text-xs text-gray-500">Reference Year</p>
                  <p className="font-semibold text-gray-800">2021</p>
                </div>
                <div className="p-4 border-r">
                  <p className="text-xs text-gray-500">Producer</p>
                  <p className="font-semibold text-gray-800">KNBS</p>
                </div>
                <div className="p-4 border-r">
                  <p className="text-xs text-gray-500">Last Updated</p>
                  <p className="font-semibold text-gray-800">2022</p>
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-500">Framework</p>
                  <p className="font-semibold text-gray-800">KeSQAF</p>
                </div>
              </div>

              {/* Abstract */}
              <div className="p-4 bg-blue-50 border-b">
                <div className="flex gap-2">
                  <Info
                    size={16}
                    className="text-blue-600 mt-0.5 flex-shrink-0"
                  />
                  <p className="text-sm text-gray-700">
                    This Quality report provides assurance of the quality of
                    Poverty and Inequality statistics regarding the quality
                    dimensions of relevance, accuracy, reliability, timeliness,
                    punctuality, accessibility, clarity, coherence,
                    comparability, consistency, methodological soundness and
                    integrity as outlined in the Kenya Statistical Quality
                    Assurance Framework (KeSQAF).
                  </p>
                </div>
              </div>
            </div>

            {/* Section A: General Information */}
            <div className="bg-white rounded-lg shadow-sm border mb-4 overflow-hidden">
              <SectionHeader
                id="general"
                number="A"
                title="General Information"
                isOpen={expandedSections.general}
                onToggle={toggleSection}
              />
              {expandedSections.general && (
                <div>
                  <SubSection code="A.1" title="Statistical Classification">
                    <p className="mb-3">
                      Classification based on the Classification of Statistical
                      Activities, Version 2.0 (CSA 2.0)
                    </p>
                    <table className="w-full border border-gray-200 rounded">
                      <tbody>
                        <TableRow
                          label="Statistical Product"
                          value="Poverty and Inequality Statistics"
                        />
                        <TableRow
                          label="Subject Area (Subdomain)"
                          value="Living conditions and poverty"
                        />
                        <TableRow
                          label="Statistical Area (Domain)"
                          value="Income and Consumption Cross-cutting statistics"
                        />
                      </tbody>
                    </table>
                    <p className="mt-3 text-sm text-gray-600">
                      This publication covers statistics on household income and
                      expenditures from the household or individual viewpoint,
                      including distribution of incomes, in-kind income, income
                      transfers received and paid, income or expenditure-based
                      measures of poverty, consumer protection, consumption
                      patterns, consumer goods and durables, household wealth
                      and debts.
                    </p>
                  </SubSection>

                  <SubSection code="A.2" title="Producing Institution">
                    <p>
                      <strong>Kenya National Bureau of Statistics</strong> in
                      collaboration with support from the World Bank, Poverty
                      and Global Practice Kenya Office
                    </p>
                  </SubSection>

                  <SubSection code="A.3" title="Legal Framework">
                    <p>
                      The statistics are produced under the{" "}
                      <a href="#" className="text-teal-700 hover:underline">
                        Statistics Act, 2006
                      </a>
                    </p>
                  </SubSection>

                  <SubSection
                    code="A.4"
                    title="Confidentiality & Data Security"
                  >
                    <p className="mb-2">
                      The Statistics Act, 2006 guarantees the confidentiality of
                      data collected which is exclusively for statistical
                      purposes.
                    </p>
                    <p className="mb-2">
                      All data providers are informed of the safeguards in place
                      to protect their personal information as per the{" "}
                      <strong>Data Protection Act 2019</strong>.
                    </p>
                    <p>
                      Measures are in place to safeguard personal data
                      throughout the statistical production, storage,
                      dissemination and disposal.
                    </p>
                  </SubSection>
                </div>
              )}
            </div>

            {/* Section B.1: Relevance */}
            <div className="bg-white rounded-lg shadow-sm border mb-4 overflow-hidden">
              <SectionHeader
                id="relevance"
                number="B.1"
                title="Relevance"
                isOpen={expandedSections.relevance}
                onToggle={toggleSection}
              />
              {expandedSections.relevance && (
                <div>
                  <SubSection code="B.1.1" title="Objective of the Statistics">
                    <p className="mb-3">
                      Poverty statistics produced by the Bureau are used for:
                    </p>
                    <ul className="list-disc list-inside space-y-1 mb-3">
                      <li>Evidence-based planning</li>
                      <li>Monitoring living standards</li>
                      <li>Allocating national resources</li>
                    </ul>
                    <p className="mb-3">
                      <strong>Population of Interest:</strong> The whole
                      population of Kenya in terms of households and
                      individuals.
                    </p>
                    <p className="mb-2">
                      <strong>Measures Produced (FGT Indexes):</strong>
                    </p>
                    <div className="bg-gray-50 p-3 rounded space-y-2">
                      <p>
                        <strong>Poverty Headcount Index:</strong> Measures the
                        incidence of poverty - the proportion of the population
                        that cannot afford to purchase the basic basket of
                        goods.
                      </p>
                      <p>
                        <strong>Poverty Gap Index:</strong> Measures the depth
                        of poverty - how much poorer the poor people are
                        relative to the poverty line.
                      </p>
                      <p>
                        <strong>Poverty Severity Index:</strong> A measure to
                        assess how poor the poor are.
                      </p>
                    </div>
                  </SubSection>

                  <SubSection code="B.1.2" title="Use of the Statistics">
                    <p className="mb-3">
                      The data is a crucial component used in national account
                      statistics to estimate private consumption.
                    </p>
                    <table className="w-full border border-gray-200 rounded text-xs">
                      <thead className="bg-teal-50">
                        <tr>
                          <th className="py-2 px-3 text-left border-b">User</th>
                          <th className="py-2 px-3 text-left border-b">
                            Type of Measure
                          </th>
                          <th className="py-2 px-3 text-left border-b">Uses</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 px-3">Policymakers</td>
                          <td className="py-2 px-3">Headcount ratio</td>
                          <td className="py-2 px-3">
                            Prioritize marginally poor vs severely poor
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-3">
                            State Dept. Social Security
                          </td>
                          <td className="py-2 px-3">Headcount ratio</td>
                          <td className="py-2 px-3">
                            Social protection programmes
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-3">
                            Commission on Revenue Allocation
                          </td>
                          <td className="py-2 px-3">Headcount ratio</td>
                          <td className="py-2 px-3">
                            Allocate national resources
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-3">World Bank</td>
                          <td className="py-2 px-3">
                            All measures + Inequality
                          </td>
                          <td className="py-2 px-3">
                            Monitoring SDGs (1.1, 10.1, 10.3)
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3">Researchers</td>
                          <td className="py-2 px-3">
                            All measures + Inequality
                          </td>
                          <td className="py-2 px-3">Research purposes</td>
                        </tr>
                      </tbody>
                    </table>
                  </SubSection>
                </div>
              )}
            </div>

            {/* Section B.2: Methodological Soundness */}
            <div className="bg-white rounded-lg shadow-sm border mb-4 overflow-hidden">
              <SectionHeader
                id="methodology"
                number="B.2"
                title="Methodological Soundness"
                isOpen={expandedSections.methodology}
                onToggle={toggleSection}
              />
              {expandedSections.methodology && (
                <div>
                  <SubSection code="B.2.1" title="International Standards">
                    <p className="mb-3">
                      The methodology complies with relevant international
                      standards and guidelines from the World Bank Group:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        <strong>Deaton & Zaidi (2002):</strong> Guidelines for
                        Constructing Consumption Aggregates for Welfare Analysis
                      </li>
                      <li>
                        <strong>Mancini & Vecchi (2022):</strong> On the
                        Construction of a Consumption Aggregate for Inequality
                        and Poverty Analysis
                      </li>
                      <li>
                        <strong>East Africa Community:</strong> Guidelines on
                        poverty statistics
                      </li>
                    </ul>
                  </SubSection>
                  <SubSection code="B.2.2" title="Dissemination Timeline">
                    <div className="bg-amber-50 border border-amber-200 rounded p-3">
                      <p className="text-sm">
                        <strong>Note:</strong> Guidelines state that
                        dissemination should be done within six months after
                        data collection completion. This is usually not
                        achieved. For most intended purposes, the quality is
                        still sufficient, but if the intended use is
                        time-sensitive, this might affect the decision-making
                        process.
                      </p>
                    </div>
                  </SubSection>
                </div>
              )}
            </div>

            {/* Section B.3: Accuracy and Reliability */}
            <div className="bg-white rounded-lg shadow-sm border mb-4 overflow-hidden">
              <SectionHeader
                id="accuracy"
                number="B.3"
                title="Accuracy and Reliability"
                isOpen={expandedSections.accuracy}
                onToggle={toggleSection}
              />
              {expandedSections.accuracy && (
                <div>
                  <SubSection code="B.3.1" title="Sampling Error">
                    <p className="mb-3">
                      The sample is drawn from the{" "}
                      <strong>
                        Kenya Household Master Sample Frame (K-HMSF)
                      </strong>{" "}
                      developed from the 2019 Kenya Population and Housing
                      Census (KPHC).
                    </p>
                    <div className="bg-gray-50 p-3 rounded mb-3">
                      <p className="text-sm mb-2">
                        <strong>Frame Composition:</strong>
                      </p>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>
                          10,000 clusters selected with Probability Proportional
                          to Size
                        </li>
                        <li>Approximately 128,000 Enumeration Areas (EAs)</li>
                        <li>
                          92 sampling strata (urban and rural in 45 counties +
                          Nairobi and Mombasa)
                        </li>
                        <li>
                          4 sub-samples (C1, C2, C3, C4) of 2,500 clusters each
                        </li>
                        <li>
                          16 households per cluster using systematic sampling
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm text-gray-600">
                      The frame should be updated 6 months after development.
                      Coverage issues are minimized through EA maps and
                      assistance from village elders.
                    </p>
                  </SubSection>

                  <SubSection code="B.3.2" title="Non-Sampling Errors">
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium text-gray-800 mb-1">
                          Measurement Error
                        </p>
                        <p className="text-sm">
                          The survey questionnaire contains many modules which
                          might lead to respondent fatigue. Interviewers are
                          trained to mitigate this. Some questions require
                          recall which could lead to telescoping errors.
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 mb-1">
                          Non-response
                        </p>
                        <p className="text-sm">
                          Response rate: <strong>86.8%</strong> (Non-response:
                          13.2%). Data were weighted and extrapolated to
                          minimize effects.
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 mb-1">
                          Data Processing
                        </p>
                        <p className="text-sm">
                          CAPI questionnaire with inbuilt validation checks.
                          Real-time data relay to central server. Quality
                          assurance via dashboard monitoring. Stata used for
                          cleaning. GitHub for version control.
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 mb-1">
                          Modelling Assumptions
                        </p>
                        <p className="text-sm">
                          Rent imputed for urban households using hedonic
                          regression. Outliers handled by applying cut-offs at 2
                          standard deviations from mean, replaced by median
                          value.
                        </p>
                      </div>
                    </div>
                  </SubSection>
                </div>
              )}
            </div>

            {/* Section B.4: Timeliness */}
            <div className="bg-white rounded-lg shadow-sm border mb-4 overflow-hidden">
              <SectionHeader
                id="timeliness"
                number="B.4"
                title="Timeliness and Punctuality"
                isOpen={expandedSections.timeliness}
                onToggle={toggleSection}
              />
              {expandedSections.timeliness && (
                <SubSection code="B.4.1" title="Release Schedule">
                  <table className="w-full border border-gray-200 rounded">
                    <tbody>
                      <TableRow label="Reference Period" value="2021" />
                      <TableRow
                        label="Data Collection"
                        value="Quarterly (2nd and 3rd months of each quarter)"
                      />
                      <TableRow
                        label="Scheduled Release"
                        value="Within six months after data collection"
                      />
                      <TableRow label="Frequency" value="Annual" />
                      <TableRow
                        label="Release Calendar"
                        value="KNBS Advance Release Calendar 2021/22 FY"
                      />
                    </tbody>
                  </table>
                </SubSection>
              )}
            </div>

            {/* Section B.5: Accessibility */}
            <div className="bg-white rounded-lg shadow-sm border mb-4 overflow-hidden">
              <SectionHeader
                id="accessibility"
                number="B.5"
                title="Accessibility and Clarity"
                isOpen={expandedSections.accessibility}
                onToggle={toggleSection}
              />
              {expandedSections.accessibility && (
                <SubSection code="B.5.1" title="Dissemination Channels">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-teal-100 rounded flex items-center justify-center flex-shrink-0">
                        <FileText size={16} className="text-teal-700" />
                      </div>
                      <div>
                        <p className="font-medium">PDF Report</p>
                        <p className="text-sm text-gray-600">
                          Available on KNBS Website (Publications section)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-teal-100 rounded flex items-center justify-center flex-shrink-0">
                        <BookOpen size={16} className="text-teal-700" />
                      </div>
                      <div>
                        <p className="font-medium">Hard Copies</p>
                        <p className="text-sm text-gray-600">
                          KNBS library and all KNBS county offices
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-teal-100 rounded flex items-center justify-center flex-shrink-0">
                        <ExternalLink size={16} className="text-teal-700" />
                      </div>
                      <div>
                        <p className="font-medium">Microdata & Metadata</p>
                        <p className="text-sm text-gray-600">
                          Kenya National Data Archives (KeNADA)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-gray-50 rounded">
                    <p className="text-sm">
                      <strong>Additional Information:</strong> Written request
                      to the Director General or via email to{" "}
                      <a
                        href="mailto:datarequest@knbs.or.ke"
                        className="text-teal-700"
                      >
                        info@knbs.or.ke
                      </a>
                    </p>
                  </div>
                </SubSection>
              )}
            </div>

            {/* Section B.6: Coherence */}
            <div className="bg-white rounded-lg shadow-sm border mb-4 overflow-hidden">
              <SectionHeader
                id="coherence"
                number="B.6"
                title="Coherence and Comparability"
                isOpen={expandedSections.coherence}
                onToggle={toggleSection}
              />
              {expandedSections.coherence && (
                <SubSection code="B.6.1" title="Comparability">
                  <p className="mb-3">Statistics are reported at:</p>
                  <ul className="list-disc list-inside mb-3">
                    <li>National level</li>
                    <li>Rural & Urban residences</li>
                    <li>Counties</li>
                  </ul>
                  <div className="bg-amber-50 border border-amber-200 rounded p-3">
                    <p className="text-sm">
                      <strong>Comparability Note:</strong> In 2015/2016,
                      reporting was done in 3 categories (rural, core-urban,
                      peri-urban) for residence domain. The 2021 reports adopted
                      2 categories (urban and rural). Therefore, residence
                      estimate statistics may not be directly comparable between
                      these periods.
                    </p>
                  </div>
                </SubSection>
              )}
            </div>

            {/* References */}
            <div className="bg-white rounded-lg shadow-sm border mb-4 overflow-hidden">
              <SectionHeader
                id="references"
                number=""
                title="References"
                isOpen={expandedSections.references}
                onToggle={toggleSection}
              />
              {expandedSections.references && (
                <div className="p-4">
                  <ul className="space-y-2 text-sm">
                    <li>
                      Deaton, A. & Zaidi, S. (2002).{" "}
                      <em>
                        Guidelines for Constructing Consumption Aggregates for
                        Welfare Analysis.
                      </em>{" "}
                      World Bank Publications. Working Paper no. 135.
                    </li>
                    <li>
                      Kenya National Bureau of Statistics. (2022).{" "}
                      <em>
                        Kenya Statistical Quality Assurance Framework (KeSQAF).
                      </em>{" "}
                      Nairobi: Kenya
                    </li>
                    <li>
                      Mancini, G. & Vecchi, G. (2022).{" "}
                      <em>
                        On the Construction of a Consumption Aggregate for
                        Inequality and Poverty Analysis.
                      </em>{" "}
                      Washington, D.C.: World Bank Group.
                    </li>
                    <li>
                      National Council for Law Reporting. (2019).{" "}
                      <em>Data Protection Act, 2019.</em> Government Printer:
                      Kenya
                    </li>
                    <li>
                      National Council for Law Reporting. (2006).{" "}
                      <em>Statistics Act, CAP 112.</em> Government Printer:
                      Kenya
                    </li>
                    <li>
                      United Nations Statistics Division. (2024).{" "}
                      <em>
                        Classification of Statistical Activities (CSA), version
                        2.
                      </em>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-teal-800 text-white mt-8">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-medium mb-2">
                Kenya National Bureau of Statistics
              </h4>
              <p className="text-teal-200">
                Real Towers, P.O. Box 30266-00100, Nairobi
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Contact</h4>
              <p className="text-teal-200">info@knbs.or.ke</p>
              <p className="text-teal-200">+254 20 317 583</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Quick Links</h4>
              <a href="#" className="block text-teal-200 hover:text-white">
                Publications
              </a>
              <a href="#" className="block text-teal-200 hover:text-white">
                KeNADA
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
