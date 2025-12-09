import { SubSection } from "../common/SubSection";
import { TableRow } from "../common/TableRow";
import { SectionHeader } from "../common/SectionHeader";
import {
  FileText,
  ExternalLink,
  Building2,
  Shield,
  Lock,
  Users,
  BarChart3,
} from "lucide-react";
import type { SectionKey } from "../QualityReport";
import type { Product } from "../products";

interface GeneralInfoProps {
  isOpen: boolean;
  onToggle: (id: SectionKey) => void;
  selectedProduct?: Product;
}

export function GeneralInfo({
  isOpen,
  onToggle,
  selectedProduct,
}: GeneralInfoProps) {
  return (
    <div
      id="section-general"
      className="bg-white rounded-xl shadow-lg border border-gray-200 mb-6 overflow-hidden scroll-mt-6 transition-all duration-200 hover:shadow-xl"
    >
      <SectionHeader
        id="general"
        number="A"
        title="General Information"
        isOpen={isOpen}
        onToggle={onToggle}
      />
      {isOpen && (
        <div className="divide-y divide-gray-100">
          <SubSection code="A.1" title="Statistical Classification">
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-knbs-50 to-knbs-100 p-4 rounded-lg border border-knbs-200">
                <p className="text-gray-700 leading-relaxed font-medium">
                  The classification used is based on the Classification of
                  Statistical Activities, Version 2.0(CSA 2.0)<sup>2</sup>.
                </p>
              </div>

              <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-100">
                    <TableRow
                      label="A.1.1 Statistical Product"
                      value="Poverty and Inequality statistics"
                    />
                    <TableRow
                      label="A.1.2 Subject Area (Subdomain)"
                      value="Living conditions and poverty"
                    />
                    <TableRow
                      label="A.1.3 Statistical Area (Statistical Domain)"
                      value="Income and Consumption Cross-cutting statistics"
                    />
                  </tbody>
                </table>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-gray-700 leading-relaxed text-sm">
                  This publication covers statistics on household income and
                  expenditures from the household or individual viewpoint (all
                  types of income and expenditure), including topics like
                  distribution of incomes, in-kind income, income transfers
                  received and paid, income or expenditure-based measures of
                  poverty, consumer protection, consumption patterns, consumer
                  goods and durables, household wealth and debts.
                </p>
              </div>
            </div>
          </SubSection>

          <SubSection code="A.2" title="Name of Producing Institution">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-knbs-100 rounded-lg">
                  <Building2 className="w-6 h-6 text-knbs-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Producing Institution
                </h4>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-knbs-100 rounded-lg mt-1">
                    <Users className="w-5 h-5 text-knbs-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      Kenya National Bureau of Statistics in collaboration with
                      support from the World Bank, Poverty and global practice
                      Kenya office
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SubSection>

          <SubSection code="A.3" title="Legal Framework">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-knbs-100 rounded-lg mt-1">
                  <Shield className="w-5 h-5 text-knbs-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-lg">
                    Legal Authority
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    The statistics are produced under the{" "}
                    <span className="font-semibold text-gray-900 bg-knbs-100 px-2 py-1 rounded">
                      Statistics Act, 2006
                    </span>
                    <sup>3</sup>
                  </p>
                </div>
              </div>
            </div>
          </SubSection>

          <SubSection code="A.4" title="Confidentiality and Data Security">
            <div className="space-y-6">
              <div className="bg-knbs-50 border border-knbs-200 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-knbs-100 rounded-lg mt-1">
                    <Lock className="w-5 h-5 text-knbs-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-knbs-800 mb-2 text-lg">
                      Data Confidentiality
                    </h4>
                    <p className="text-knbs-700 leading-relaxed mb-3">
                      The Statistics Act, 2006 guarantees the confidentiality of
                      data collected which is exclusively for statistical
                      purposes. All data providers are informed of the
                      safeguards in place to protect their personal information
                      as per the Data Protection Act 2019
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-knbs-100 rounded-lg">
                    <Shield className="w-5 h-5 text-knbs-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-lg">
                    Data Protection Measures
                  </h4>
                </div>
                <div className="bg-knbs-50 p-4 rounded-lg border border-knbs-200">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-knbs-100 rounded-lg mt-1">
                      <BarChart3 className="w-5 h-5 text-knbs-600" />
                    </div>
                    <p className="text-knbs-700 leading-relaxed font-medium">
                      Measures are in place to safeguard personal data
                      throughout the statistical production, storage,
                      dissemination and disposal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SubSection>

          {/* Publication Links Section */}
          {selectedProduct?.publicationLinks &&
            selectedProduct.publicationLinks.length > 0 && (
              <div className="pt-6 px-6 pb-6 bg-gradient-to-r from-gray-50 to-knbs-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-knbs-100 rounded-lg">
                    <FileText className="w-5 h-5 text-knbs-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 uppercase tracking-wide">
                    Related Publications
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {selectedProduct.publicationLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-knbs-700 font-semibold rounded-lg border-2 border-knbs-200 hover:bg-knbs-50 hover:border-knbs-400 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}

          {/* References Section */}
          <div className="pt-6 px-6 pb-6 bg-gray-50">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-knbs-100 rounded-lg">
                <FileText className="w-5 h-5 text-knbs-600" />
              </div>
              <h4 className="font-semibold text-gray-800 text-lg">
                References
              </h4>
            </div>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-700">
                  <sup className="font-semibold text-knbs-600">1</sup>{" "}
                  <a
                    href="https://www.knbs.or.ke/wp-content/uploads/2023/09/Kenya-Statistical-Quality-Assurance-Framework-Booklet.pdf"
                    className="text-knbs-600 hover:text-knbs-700 font-medium hover:underline transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kenya Statistical Quality Assessment Framework (KeSQAF)
                  </a>
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-700">
                  <sup className="font-semibold text-knbs-600">2</sup>{" "}
                  <a
                    href="https://unstats.un.org/unsd/classifications/CSA2/CSA2_22Dec2023.pdf"
                    className="text-knbs-600 hover:text-knbs-700 font-medium hover:underline transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Classification of Statistical Activities, Version 2.0 (CSA
                    2.0)
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
