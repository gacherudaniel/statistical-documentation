import type { SectionKey } from "../QualityReport";
import { SectionHeader } from "../common/SectionHeader";
import { SubSection } from "../common/SubSection";
import { TableRow } from "../common/TableRow";
import { ExternalLink, Calendar, Clock } from "lucide-react";

interface TimelinessProps {
  isOpen: boolean;
  onToggle: (id: SectionKey) => void;
}

export function Timeliness({ isOpen, onToggle }: TimelinessProps) {
  return (
    <div
      id="section-timeliness"
      className="bg-white rounded-lg lg:rounded-xl shadow-sm lg:shadow-lg border border-gray-200 mb-4 lg:mb-8 overflow-hidden scroll-mt-6 transition-all duration-200 hover:shadow-lg lg:hover:shadow-xl"
    >
      <SectionHeader
        id="timeliness"
        number="B.4"
        title="Timeliness and Punctuality"
        isOpen={isOpen}
        onToggle={onToggle}
      />
      {isOpen && (
        <div>
          <SubSection code="B.4" title="Overview">
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-knbs-50 border border-knbs-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="text-knbs-600" size={20} />
                    <h5 className="font-semibold text-knbs-700">Timeliness</h5>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Pertains to the length of time between data availability and
                    the event or phenomenon they describe. This references both
                    the timeliness of <strong>source data</strong> and the
                    timeliness of <strong>output</strong>.
                  </p>
                </div>

                <div className="bg-knbs-50 border border-knbs-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="text-knbs-600" size={20} />
                    <h5 className="font-semibold text-knbs-700">Punctuality</h5>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    The time lag between the <strong>actual delivery</strong> of
                    the data and the <strong>target date</strong> when it should
                    have been delivered.
                  </p>
                </div>
              </div>
            </div>
          </SubSection>

          <SubSection code="B.4.1" title="Data Collection and Release Schedule">
            <div className="space-y-4">
              <div className="bg-gray-50 border border-gray-200 rounded p-4">
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  The report covers statistics for data collected during the
                  year <strong>2021</strong>.
                </p>

                <table className="w-full border border-gray-200 rounded overflow-hidden">
                  <tbody>
                    <TableRow label="Reference Period" value="2021" />
                    <TableRow
                      label="Data Collection Schedule"
                      value="Quarterly (2nd and 3rd months of each quarter)"
                    />
                    <TableRow
                      label="Scheduled Release"
                      value="Within six months after data collection"
                    />
                    <TableRow label="Production Frequency" value="Annual" />
                  </tbody>
                </table>
              </div>

              <div className="bg-knbs-50 border-l-4 border-knbs-500 p-4">
                <h5 className="font-medium text-knbs-700 mb-2 flex items-center gap-2">
                  <Calendar size={16} />
                  Release Calendar
                </h5>
                <p className="text-sm text-gray-700 leading-relaxed mb-2">
                  The scheduled release date is within six months after data
                  collection as per the advance release calendar:
                </p>
                <a
                  href="https://www.knbs.or.ke/release-calendar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-knbs-600 hover:text-knbs-700 text-sm flex items-center gap-2 hover:underline font-medium"
                >
                  <ExternalLink size={14} />
                  KNBS Advance Release Calendar 2021/22 FY - Kenya National
                  Bureau of Statistics
                </a>
              </div>

              <div className="grid md:grid-cols-4 gap-3">
                <div className="bg-white border border-knbs-200 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500 uppercase mb-1">
                    Quarter 1
                  </p>
                  <p className="text-sm font-semibold text-knbs-600">
                    Feb & Mar
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Collection months
                  </p>
                </div>
                <div className="bg-white border border-knbs-200 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500 uppercase mb-1">
                    Quarter 2
                  </p>
                  <p className="text-sm font-semibold text-knbs-600">
                    May & Jun
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Collection months
                  </p>
                </div>
                <div className="bg-white border border-knbs-200 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500 uppercase mb-1">
                    Quarter 3
                  </p>
                  <p className="text-sm font-semibold text-knbs-600">
                    Aug & Sep
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Collection months
                  </p>
                </div>
                <div className="bg-white border border-knbs-200 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500 uppercase mb-1">
                    Quarter 4
                  </p>
                  <p className="text-sm font-semibold text-knbs-600">
                    Nov & Dec
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Collection months
                  </p>
                </div>
              </div>
            </div>
          </SubSection>
        </div>
      )}
    </div>
  );
}
