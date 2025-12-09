import { SubSection } from "../common/SubSection";
import { SectionHeader } from "../common/SectionHeader";
import type { SectionKey } from "../QualityReport";

interface RelevanceProps {
  isOpen: boolean;
  onToggle: (id: SectionKey) => void;
}

export function Relevance({ isOpen, onToggle }: RelevanceProps) {
  return (
    <div
      id="section-relevance"
      className="bg-white rounded-lg shadow-sm border mb-4 overflow-hidden scroll-mt-6"
    >
      <SectionHeader
        id="relevance"
        number="B.1"
        title="Relevance"
        isOpen={isOpen}
        onToggle={onToggle}
      />
      {isOpen && (
        <div className="p-6 space-y-6">
          {/* Introduction */}
          <p className="text-gray-700 italic">
            Relevance is the degree to which statistical information meets the
            real or perceived needs of clients.
          </p>

          {/* B.1.1 Objective of the statistics */}
          <SubSection code="B.1.1" title="Objective of the statistics">
            <div className="space-y-4">
              <div>
                <p className="mb-3 text-gray-700">
                  <span className="font-semibold">i.</span> Poverty statistics
                  produced by the Bureau are used for evidence-based planning,
                  monitoring living standards, and allocating national
                  resources.
                </p>
                <p className="mb-3 text-gray-700">
                  <span className="font-semibold">ii.</span> The population of
                  interest is the whole population of Kenya in terms of
                  households and individuals.
                </p>
                <p className="mb-4 text-gray-700">
                  <span className="font-semibold">iii.</span> The statistics are
                  produced to measure the common class of poverty measures that
                  is the Foster, Greer and Thorbecke (usually referred to as
                  FGT) indexes. These include the poverty headcount index,
                  poverty gap index and severity of poverty. The statistics also
                  produce measures of inequality.
                </p>
              </div>

              {/* FGT Measures */}
              <div className="ml-8 space-y-3">
                <div className="flex gap-3">
                  <span className="font-semibold text-knbs-600 flex-shrink-0">
                    a.
                  </span>
                  <p className="text-gray-700">
                    The <strong>poverty headcount index</strong> measures the
                    incidence of poverty. In other words, it measures the
                    proportion of the population that cannot afford to purchase
                    the basic basket of goods as measured by the food and
                    overall poverty lines.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-knbs-600 flex-shrink-0">
                    b.
                  </span>
                  <p className="text-gray-700">
                    The <strong>poverty gap index</strong> measures the depth of
                    poverty. In other words, it provides information on how much
                    poorer the poor people are relative to the poverty line.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-knbs-600 flex-shrink-0">
                    c.
                  </span>
                  <p className="text-gray-700">
                    The <strong>poverty severity index</strong> is a measure to
                    assess how poor the poor are.
                  </p>
                </div>
              </div>
            </div>
          </SubSection>

          {/* B.1.2 Use of the Statistics */}
          <SubSection code="B.1.2" title="Use of the Statistics">
            <p className="mb-4 text-gray-700">
              The data is a crucial component used in national account
              statistics to estimate private consumption. Poverty statistics are
              widely used by various government ministries, departments,
              agencies and counties. Academia, international bodies and other
              non-state actors.
            </p>

            {/* Users Table */}
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">
                Table 1: Users of the Statistics by Type and Use
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-knbs-50">
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">
                        S.No
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">
                        User
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">
                        Type of Measure
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">
                        Uses
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">
                        1
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">
                        Policymakers
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">
                        Headcount ratio
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">
                        Encourages a policymaker with a limited budget to
                        prioritize the marginally poor instead of the severely
                        poor
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">
                        2
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">
                        State Department for Social Security and Protection
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">
                        Headcount ratio
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">
                        For Social protection programmes
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">
                        3
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">
                        Commission on Revenue Allocation
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">
                        Headcount ratio
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">
                        To allocate national resources appropriately
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">
                        4
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">
                        World Bank
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">
                        Headcount ratio, poverty gap, severity and Inequality
                        measures
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">
                        Monitoring progress towards achieving SDGs target 1.1,
                        target 10.1 and target 10.3
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">
                        5
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">
                        Researchers
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">
                        Headcount ratio, poverty gap, severity and Inequality
                        measures
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">
                        Research purposes
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </SubSection>
        </div>
      )}
    </div>
  );
}
