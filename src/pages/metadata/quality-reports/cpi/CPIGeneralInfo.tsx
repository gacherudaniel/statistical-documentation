// src/components/products/sections/CPIGeneralInfo.tsx
import { SubSection } from "../common/SubSection";
import { TableRow } from "../common/TableRow";
import { SectionHeader } from "../common/SectionHeader";
import {
  FileText,
  ExternalLink,
  Building2,
  Mail,
  Globe,
  Shield,
  Lock,
  Database,
  Wifi,
  HardDrive,
  FileCheck,
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
  const legislationItems = [
    "Statistics Act No. 4 of 2006",
    "Constitution of Kenya, 2010 (Article 10)",
    "Data Protection Act, 2019",
  ];

  const securityMeasures = [
    {
      icon: Database,
      text: "Secure data storage with access controls",
      color: "text-knbs-600",
    },
    {
      icon: Wifi,
      text: "Encrypted data transmission from field devices",
      color: "text-knbs-600",
    },
    {
      icon: HardDrive,
      text: "Regular data backup procedures",
      color: "text-knbs-600",
    },
    {
      icon: FileCheck,
      text: "Staff bound by confidentiality agreements",
      color: "text-knbs-600",
    },
  ];

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
            <div className="bg-gradient-to-r from-knbs-50 to-knbs-100 p-4 rounded-lg border border-knbs-200 mb-4">
              <p className="text-gray-700 leading-relaxed font-medium">
                Classification based on the Classification of Statistical
                Activities, Version 2.0 (CSA 2.0)
              </p>
            </div>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
              <table className="w-full">
                <tbody className="divide-y divide-gray-100">
                  <TableRow
                    label="Statistical Product"
                    value="Consumer Price Index (CPI)"
                  />
                  <TableRow
                    label="Subject Area (Subdomain)"
                    value="Price indices"
                  />
                  <TableRow label="Statistical Area (Domain)" value="Prices" />
                </tbody>
              </table>
            </div>
          </SubSection>

          <SubSection code="A.2" title="Producing Institution">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-knbs-100 rounded-lg">
                  <Building2 className="w-6 h-6 text-knbs-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Kenya National Bureau of Statistics
                </h4>
              </div>

              <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm bg-white">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-100">
                    <TableRow
                      label="Organization"
                      value="Kenya National Bureau of Statistics (KNBS)"
                    />
                    <TableRow
                      label="Division/Department"
                      value="Prices and Trade Statistics"
                    />
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-sm font-medium text-gray-600 bg-gray-50 w-1/3">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-gray-500" />
                          Contact Email
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">
                        <a
                          href="mailto:prices@knbs.or.ke"
                          className="text-knbs-600 hover:text-knbs-700 font-medium hover:underline transition-colors"
                        >
                          prices@knbs.or.ke
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-sm font-medium text-gray-600 bg-gray-50 w-1/3">
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-gray-500" />
                          Website
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">
                        <a
                          href="https://www.knbs.or.ke"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-knbs-600 hover:text-knbs-700 font-medium hover:underline transition-colors"
                        >
                          www.knbs.or.ke
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </SubSection>

          <SubSection code="A.3" title="Legal and Policy Framework">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-knbs-100 rounded-lg mt-1">
                    <Shield className="w-5 h-5 text-knbs-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">
                      Legal Authority
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      The production of the Consumer Price Index is mandated
                      under the{" "}
                      <span className="font-semibold text-gray-900 bg-knbs-100 px-2 py-1 rounded">
                        Statistics Act (Cap. 112)
                      </span>{" "}
                      which provides KNBS with the legal authority to collect,
                      compile, analyze, and disseminate statistical information.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-knbs-50 to-knbs-100 border-l-4 border-knbs-500 p-6 rounded-r-lg shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-knbs-200 rounded-lg mt-1">
                    <Globe className="w-5 h-5 text-knbs-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-knbs-700 mb-3 text-lg">
                      International Standards
                    </h4>
                    <p className="text-knbs-600 leading-relaxed">
                      CPI compilation follows the{" "}
                      <span className="font-semibold text-knbs-700 bg-white px-2 py-1 rounded shadow-sm">
                        Consumer Price Index Manual: Theory and Practice (2004)
                      </span>{" "}
                      published by ILO, IMF, OECD, UNECE, Eurostat, and World
                      Bank.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-4 text-lg flex items-center gap-2">
                  <FileText className="w-5 h-5 text-gray-600" />
                  Key Legislation
                </h4>
                <div className="grid gap-3">
                  {legislationItems.map((law, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-2 h-2 bg-knbs-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">{law}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SubSection>

          <SubSection code="A.4" title="Confidentiality and Data Protection">
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
                    <p className="text-knbs-700 leading-relaxed">
                      Price data collected from outlets is treated as
                      confidential in accordance with Section 28 of the
                      Statistics Act. Individual price quotations are not
                      disclosed. Only aggregate indices are published.
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
                    Data Security Measures
                  </h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {securityMeasures.map((measure, index) => {
                    const IconComponent = measure.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                      >
                        <div className="p-2 bg-knbs-50 rounded-lg border border-knbs-200 flex-shrink-0">
                          <IconComponent
                            className={`w-5 h-5 ${measure.color}`}
                          />
                        </div>
                        <span className="text-gray-700 font-medium leading-relaxed">
                          {measure.text}
                        </span>
                      </div>
                    );
                  })}
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
        </div>
      )}
    </div>
  );
}
