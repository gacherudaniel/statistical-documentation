// src/components/products/sections/CPITimeliness.tsx
import type { SectionKey } from "../../QualityReport";
import { SectionHeader } from "../../sections/SectionHeader";
import { SubSection } from "../../sections/SubSection";
import { Calendar } from "lucide-react";

interface TimelinessProps {
  isOpen: boolean;
  onToggle: (id: SectionKey) => void;
}

export function Timeliness({ isOpen, onToggle }: TimelinessProps) {
  return (
    <div
      id="section-timeliness"
      className="bg-white rounded-lg shadow-sm border mb-4 overflow-hidden scroll-mt-6"
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
          <SubSection code="B.4.1" title="Publication Schedule">
            <div className="space-y-4">
              <div className="bg-knbs-50 border-l-4 border-knbs-500 p-4">
                <div className="flex items-start gap-3">
                  <Calendar className="text-knbs-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-knbs-700 mb-2">
                      Monthly Release
                    </h4>
                    <p className="text-sm text-knbs-600 leading-relaxed">
                      CPI is published on the <strong>last working day</strong>{" "}
                      of each month, covering price movements for that reference
                      month.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  2025 Release Calendar
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
                          Reference Month
                        </th>
                        <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
                          Collection Period
                        </th>
                        <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
                          Publication Date
                        </th>
                        <th className="px-4 py-2 text-center font-semibold text-gray-700 border-b">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2">January 2025</td>
                        <td className="px-4 py-2">1-15 Jan</td>
                        <td className="px-4 py-2">31 January 2025</td>
                        <td className="px-4 py-2 text-center">
                          <span className="inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-700">
                            Published
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2">February 2025</td>
                        <td className="px-4 py-2">1-15 Feb</td>
                        <td className="px-4 py-2">28 February 2025</td>
                        <td className="px-4 py-2 text-center">
                          <span className="inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-700">
                            Published
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2">March 2025</td>
                        <td className="px-4 py-2">1-15 Mar</td>
                        <td className="px-4 py-2">31 March 2025</td>
                        <td className="px-4 py-2 text-center">
                          <span className="inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-700">
                            Published
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2">April 2025</td>
                        <td className="px-4 py-2">1-15 Apr</td>
                        <td className="px-4 py-2">30 April 2025</td>
                        <td className="px-4 py-2 text-center">
                          <span className="inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-700">
                            Published
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2">May 2025</td>
                        <td className="px-4 py-2">1-15 May</td>
                        <td className="px-4 py-2">30 May 2025</td>
                        <td className="px-4 py-2 text-center">
                          <span className="inline-block px-2 py-1 text-xs rounded bg-amber-100 text-amber-700">
                            Scheduled
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2">June 2025</td>
                        <td className="px-4 py-2">1-15 Jun</td>
                        <td className="px-4 py-2">30 June 2025</td>
                        <td className="px-4 py-2 text-center">
                          <span className="inline-block px-2 py-1 text-xs rounded bg-gray-100 text-gray-600">
                            Planned
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </SubSection>

          <SubSection code="B.4.2" title="Punctuality">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                KNBS maintains a strong track record of punctual CPI releases:
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded border border-green-200">
                  <p className="text-xs text-green-600 uppercase mb-1">
                    On-time Releases (2024)
                  </p>
                  <p className="text-3xl font-bold text-green-700">12/12</p>
                  <p className="text-xs text-green-600 mt-1">
                    100% punctuality
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <p className="text-xs text-blue-600 uppercase mb-1">
                    Average Lead Time
                  </p>
                  <p className="text-3xl font-bold text-blue-700">25</p>
                  <p className="text-xs text-blue-600 mt-1">
                    Days from month end
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded border border-purple-200">
                  <p className="text-xs text-purple-600 uppercase mb-1">
                    Pre-announcement
                  </p>
                  <p className="text-3xl font-bold text-purple-700">1 Yr</p>
                  <p className="text-xs text-purple-600 mt-1">
                    Advance calendar
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Release Time
                </h4>
                <p className="text-sm text-gray-700">
                  CPI press release is published at{" "}
                  <strong className="text-knbs-600">9:00 AM EAT</strong> on the
                  scheduled date, ensuring simultaneous access for all users.
                </p>
              </div>
            </div>
          </SubSection>

          <SubSection code="B.4.3" title="Preliminary vs Final Data">
            <div className="space-y-3">
              <div className="bg-knbs-50 border-l-4 border-knbs-500 p-4">
                <h4 className="font-semibold text-knbs-700 mb-2">
                  Final Data Only
                </h4>
                <p className="text-sm text-knbs-600 leading-relaxed">
                  KNBS publishes <strong>final CPI figures only</strong>. No
                  preliminary or flash estimates are released. This ensures
                  maximum accuracy and reliability.
                </p>
              </div>

              <p className="text-sm text-gray-700">
                All quality assurance procedures are completed before
                publication, eliminating the need for routine revisions.
              </p>
            </div>
          </SubSection>
        </div>
      )}
    </div>
  );
}
