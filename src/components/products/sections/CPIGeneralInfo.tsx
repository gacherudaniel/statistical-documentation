// src/components/products/sections/CPIGeneralInfo.tsx
import { SubSection } from "../../sections/SubSection";
import { TableRow } from "../../sections/TableRow";
import { SectionHeader } from "../../sections/SectionHeader";
import type { SectionKey } from "../../QualityReport";

interface GeneralInfoProps {
  isOpen: boolean;
  onToggle: (id: SectionKey) => void;
}

export function GeneralInfo({ isOpen, onToggle }: GeneralInfoProps) {
  return (
    <div
      id="section-general"
      className="bg-white rounded-lg shadow-sm border mb-4 overflow-hidden scroll-mt-6"
    >
      <SectionHeader
        id="general"
        number="A"
        title="General Information"
        isOpen={isOpen}
        onToggle={onToggle}
      />
      {isOpen && (
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
                  value="Consumer Price Index (CPI)"
                />
                <TableRow
                  label="Subject Area (Subdomain)"
                  value="Price indices"
                />
                <TableRow label="Statistical Area (Domain)" value="Prices" />
              </tbody>
            </table>
          </SubSection>

          <SubSection code="A.2" title="Producing Institution">
            <table className="w-full border border-gray-200 rounded">
              <tbody>
                <TableRow
                  label="Organization"
                  value="Kenya National Bureau of Statistics (KNBS)"
                />
                <TableRow
                  label="Division/Department"
                  value="Prices and Trade Statistics"
                />
                <TableRow label="Contact Email" value="prices@knbs.or.ke" />
                <TableRow label="Website" value="www.knbs.or.ke" />
              </tbody>
            </table>
          </SubSection>

          <SubSection code="A.3" title="Legal and Policy Framework">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Legal Authority
                </h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  The production of the Consumer Price Index is mandated under
                  the <strong>Statistics Act No. 4 of 2006</strong> which
                  provides KNBS with the legal authority to collect, compile,
                  analyze, and disseminate statistical information.
                </p>
              </div>

              <div className="bg-knbs-50 border-l-4 border-knbs-500 p-4">
                <h4 className="font-semibold text-knbs-700 mb-2">
                  International Standards
                </h4>
                <p className="text-sm text-knbs-600 leading-relaxed">
                  CPI compilation follows the{" "}
                  <strong>
                    Consumer Price Index Manual: Theory and Practice (2004)
                  </strong>{" "}
                  published by ILO, IMF, OECD, UNECE, Eurostat, and World Bank.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Key Legislation
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Statistics Act No. 4 of 2006</li>
                  <li>Constitution of Kenya, 2010 (Article 10)</li>
                  <li>Data Protection Act, 2019</li>
                </ul>
              </div>
            </div>
          </SubSection>

          <SubSection code="A.4" title="Confidentiality and Data Protection">
            <div className="space-y-3">
              <p className="text-gray-700 leading-relaxed">
                Price data collected from outlets is treated as confidential in
                accordance with Section 28 of the Statistics Act. Individual
                price quotations are not disclosed. Only aggregate indices are
                published.
              </p>

              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Data Security Measures
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Secure data storage with access controls</li>
                  <li>Encrypted data transmission from field devices</li>
                  <li>Regular data backup procedures</li>
                  <li>Staff bound by confidentiality agreements</li>
                </ul>
              </div>
            </div>
          </SubSection>
        </div>
      )}
    </div>
  );
}
