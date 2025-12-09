import type { SectionKey } from "../QualityReport";
import { SectionHeader } from "../common/SectionHeader";
import { SubSection } from "../common/SubSection";
import {
  ExternalLink,
  FileText,
  Building2,
  Database,
  Mail,
  Globe,
  Archive,
  Send,
  Download,
} from "lucide-react";

interface AccessibilityProps {
  isOpen: boolean;
  onToggle: (id: SectionKey) => void;
}

export function Accessibility({ isOpen, onToggle }: AccessibilityProps) {
  return (
    <div
      id="section-accessibility"
      className="bg-white rounded-lg shadow-sm border mb-4 overflow-hidden scroll-mt-6"
    >
      <SectionHeader
        id="accessibility"
        number="B.5"
        title="Accessibility and Clarity"
        isOpen={isOpen}
        onToggle={onToggle}
      />
      {isOpen && (
        <div>
          <SubSection code="B.5" title="Overview">
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-knbs-50 border border-knbs-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="text-knbs-600" size={20} />
                    <h5 className="font-semibold text-knbs-700">
                      Accessibility
                    </h5>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Refers to the <strong>ease and conditions</strong> under
                    which statistical information can be obtained.
                  </p>
                </div>

                <div className="bg-knbs-50 border border-knbs-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Database className="text-knbs-600" size={20} />
                    <h5 className="font-semibold text-knbs-700">Clarity</h5>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    The extent to which easily comprehensible{" "}
                    <strong>metadata</strong> are available, necessary to give a
                    full understanding of statistical data.
                  </p>
                </div>
              </div>
            </div>
          </SubSection>

          <SubSection code="B.5.1" title="Dissemination Channels">
            <div className="space-y-6">
              {/* Online Access */}
              <div>
                <h5 className="font-medium text-knbs-700 mb-3 flex items-center gap-2">
                  <span className="bg-knbs-100 p-1.5 rounded">
                    <Globe className="text-knbs-600" size={16} />
                  </span>
                  Online Resources
                </h5>

                <div className="space-y-3">
                  <div className="bg-white border border-knbs-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-knbs-100 p-2 rounded">
                        <FileText className="text-knbs-600" size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-800 mb-2">
                          Official Publications (PDF)
                        </p>
                        <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                          The report is published as a soft copy in PDF format
                          and is available on the KNBS Website.
                        </p>
                        <a
                          href="https://www.knbs.or.ke/publications"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-knbs-600 hover:text-knbs-700 text-sm flex items-center gap-2 hover:underline font-medium"
                        >
                          <ExternalLink size={14} />
                          Publications - Kenya National Bureau of Statistics
                          (knbs.or.ke)
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-knbs-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-knbs-100 p-2 rounded">
                        <Database className="text-knbs-600" size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-800 mb-2">
                          Kenya National Data Archives (KeNADA)
                        </p>
                        <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                          The metadata and anonymized microdata is uploaded to
                          KeNADA for research and analytical purposes.
                        </p>
                        <a
                          href="https://statistics.knbs.or.ke/nada"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-knbs-600 hover:text-knbs-700 text-sm flex items-center gap-2 hover:underline font-medium"
                        >
                          <ExternalLink size={14} />
                          Home - KeNADA (knbs.or.ke)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Physical Access */}
              <div>
                <h5 className="font-medium text-knbs-700 mb-3 flex items-center gap-2">
                  <span className="bg-knbs-100 p-1.5 rounded">
                    <Archive className="text-knbs-600" size={16} />
                  </span>
                  Physical Access Points
                </h5>

                <div className="bg-gradient-to-br from-knbs-50 to-white border border-knbs-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    Hard copies of the report can be accessed from:
                  </p>

                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-3 bg-white p-3 rounded border border-knbs-100">
                      <Building2
                        className="text-knbs-500 flex-shrink-0 mt-0.5"
                        size={18}
                      />
                      <div>
                        <p className="font-medium text-gray-800 text-sm">
                          KNBS Library
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          Main office reference collection
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-white p-3 rounded border border-knbs-100">
                      <Building2
                        className="text-knbs-500 flex-shrink-0 mt-0.5"
                        size={18}
                      />
                      <div>
                        <p className="font-medium text-gray-800 text-sm">
                          County Offices
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          All 47 KNBS county offices nationwide
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h5 className="font-medium text-knbs-700 mb-3 flex items-center gap-2">
                  <span className="bg-knbs-100 p-1.5 rounded">
                    <Send className="text-knbs-600" size={16} />
                  </span>
                  Request Additional Information
                </h5>

                <div className="bg-knbs-50 border-l-4 border-knbs-500 p-4">
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    Additional information can be accessed through a written
                    request to the Director General or via email:
                  </p>

                  <div className="bg-white rounded-lg p-4 border border-knbs-200">
                    <div className="flex items-center gap-3">
                      <div className="bg-knbs-100 p-2 rounded">
                        <Mail className="text-knbs-600" size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">
                          Data Requests
                        </p>
                        <a
                          href="mailto:datarequest@knbs.or.ke"
                          className="text-knbs-600 hover:text-knbs-700 font-medium hover:underline"
                        >
                          datarequest@knbs.or.ke
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 bg-amber-50 border border-amber-200 rounded p-3">
                    <p className="text-xs text-amber-800 leading-relaxed">
                      <strong>Note:</strong> Written requests to the Director
                      General should be submitted through official channels and
                      include purpose of use and intended application of the
                      data.
                    </p>
                  </div>
                </div>
              </div>

              {/* Summary Card */}
              <div className="bg-gradient-to-r from-knbs-500 to-knbs-400 text-white rounded-lg p-4">
                <h5 className="font-semibold mb-3">Quick Access Summary</h5>
                <div className="grid md:grid-cols-3 gap-3 text-sm">
                  <div className="bg-white/10 rounded p-3 flex items-start gap-2">
                    <FileText className="text-white/80 mt-0.5" size={14} />
                    <div>
                      <p className="font-medium mb-1">PDF Reports</p>
                      <p className="text-xs opacity-90">KNBS Website</p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded p-3 flex items-start gap-2">
                    <Download className="text-white/80 mt-0.5" size={14} />
                    <div>
                      <p className="font-medium mb-1">Microdata</p>
                      <p className="text-xs opacity-90">KeNADA Portal</p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded p-3 flex items-start gap-2">
                    <Archive className="text-white/80 mt-0.5" size={14} />
                    <div>
                      <p className="font-medium mb-1">Hard Copies</p>
                      <p className="text-xs opacity-90">
                        Library & County Offices
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SubSection>
        </div>
      )}
    </div>
  );
}
