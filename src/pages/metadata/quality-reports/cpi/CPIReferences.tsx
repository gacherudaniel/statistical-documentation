// src/components/products/sections/CPIReferences.tsx
import type { SectionKey } from "../QualityReport";
import { SectionHeader } from "../common/SectionHeader";
import { ExternalLink } from "lucide-react";

interface ReferencesProps {
  isOpen: boolean;
  onToggle: (id: SectionKey) => void;
}

export function References({ isOpen, onToggle }: ReferencesProps) {
  return (
    <div
      id="section-references"
      className="bg-white rounded-lg shadow-sm border mb-4 overflow-hidden scroll-mt-6"
    >
      <SectionHeader
        id="references"
        number=""
        title="References"
        isOpen={isOpen}
        onToggle={onToggle}
      />
      {isOpen && (
        <div className="p-6">
          <div className="space-y-4">
            <div className="border-l-4 border-knbs-500 pl-4 py-2">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                International Labour Organization, International Monetary Fund,
                Organisation for Economic Co-operation and Development, United
                Nations Economic Commission for Europe, Eurostat, & World Bank.
                (2004).{" "}
                <em>Consumer Price Index Manual: Theory and Practice.</em>{" "}
                Geneva: ILO Publications.
              </p>
              <a
                href="https://www.ilo.org/wcmsp5/groups/public/---dgreports/---stat/documents/presentation/wcms_331153.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-knbs-600 hover:text-knbs-700 text-xs flex items-center gap-1 hover:underline"
              >
                <ExternalLink size={12} />
                https://www.ilo.org/wcmsp5/groups/public/---dgreports/---stat/documents/presentation/wcms_331153.pdf
              </a>
            </div>

            <div className="border-l-4 border-knbs-500 pl-4 py-2">
              <p className="text-sm text-gray-700 leading-relaxed">
                Kenya National Bureau of Statistics. (2012).{" "}
                <em>
                  The Kenya Consumer Price Index 2009: Concepts, Sources and
                  Methodology.
                </em>{" "}
                Nairobi: KNBS.
              </p>
            </div>

            <div className="border-l-4 border-knbs-500 pl-4 py-2">
              <p className="text-sm text-gray-700 leading-relaxed">
                Kenya National Bureau of Statistics. (2022).{" "}
                <em>Kenya Statistical Quality Assurance Framework (KeSQAF).</em>{" "}
                Nairobi: KNBS.
              </p>
            </div>

            <div className="border-l-4 border-knbs-500 pl-4 py-2">
              <p className="text-sm text-gray-700 leading-relaxed">
                Kenya National Bureau of Statistics. (2007).{" "}
                <em>
                  Kenya Integrated Household Budget Survey (KIHBS) 2005/06.
                </em>{" "}
                Nairobi: KNBS.
              </p>
            </div>

            <div className="border-l-4 border-knbs-500 pl-4 py-2">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                United Nations Statistics Division. (2018).{" "}
                <em>
                  Classification of Individual Consumption According to Purpose
                  (COICOP) 2018.
                </em>{" "}
                New York: United Nations.
              </p>
              <a
                href="https://unstats.un.org/unsd/classifications/Family/Detail/4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-knbs-600 hover:text-knbs-700 text-xs flex items-center gap-1 hover:underline"
              >
                <ExternalLink size={12} />
                https://unstats.un.org/unsd/classifications/Family/Detail/4
              </a>
            </div>

            <div className="border-l-4 border-knbs-500 pl-4 py-2">
              <p className="text-sm text-gray-700 leading-relaxed">
                International Monetary Fund. (2021).{" "}
                <em>
                  Special Data Dissemination Standard (SDDS): Guide for
                  Subscribers and Users.
                </em>{" "}
                Washington, D.C.: IMF.
              </p>
            </div>

            <div className="border-l-4 border-knbs-500 pl-4 py-2">
              <p className="text-sm text-gray-700 leading-relaxed">
                National Council for Law Reporting. (2006).{" "}
                <em>Statistics Act, CAP 112.</em> Government Printer: Kenya.
              </p>
            </div>

            <div className="border-l-4 border-knbs-500 pl-4 py-2">
              <p className="text-sm text-gray-700 leading-relaxed">
                National Council for Law Reporting. (2019).{" "}
                <em>Data Protection Act, 2019.</em> Government Printer: Kenya.
              </p>
            </div>

            <div className="border-l-4 border-knbs-500 pl-4 py-2">
              <p className="text-sm text-gray-700 leading-relaxed">
                East African Community. (2018).{" "}
                <em>
                  EAC Guidelines on Harmonization of Consumer Price Indices.
                </em>{" "}
                Arusha: EAC Secretariat.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="bg-knbs-50 p-4 rounded">
              <h5 className="font-semibold text-knbs-700 mb-2">
                Additional Resources
              </h5>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                For more information on Kenya's Consumer Price Index, visit:
              </p>
              <div className="space-y-2">
                <a
                  href="https://www.knbs.or.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-knbs-600 hover:text-knbs-700 text-sm flex items-center gap-2 hover:underline"
                >
                  <ExternalLink size={14} />
                  Kenya National Bureau of Statistics
                </a>
                <a
                  href="https://www.knbs.or.ke/consumer-price-indices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-knbs-600 hover:text-knbs-700 text-sm flex items-center gap-2 hover:underline"
                >
                  <ExternalLink size={14} />
                  CPI Data and Publications
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500">
              Kenya CPI Quality Report | Page {new Date().getFullYear()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
