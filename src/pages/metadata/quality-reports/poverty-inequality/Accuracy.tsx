import { AlertTriangle, Info, Calendar, BarChart, ClipboardList, Settings, GitBranch, Calculator } from "lucide-react";
import type { SectionKey } from "../QualityReport";
import { SectionHeader } from "../common/SectionHeader";
import { SubSection } from "../common/SubSection";

interface AccuracyProps {
  isOpen: boolean;
  onToggle: (id: SectionKey) => void;
}

export function Accuracy({ isOpen, onToggle }: AccuracyProps) {
  return (
    <div
      id="section-accuracy"
      className="bg-white rounded-lg shadow-sm border mb-8 overflow-hidden scroll-mt-6"
    >
      <SectionHeader
        id="accuracy"
        number="B.3"
        title="Accuracy and Reliability"
        isOpen={isOpen}
        onToggle={onToggle}
      />
      {isOpen && (
        <div>
          <SubSection code="B.3" title="Overview">
            <div className="space-y-4">
              <p className="leading-relaxed">
                <strong className="text-knbs-600">Accuracy</strong> refers to
                the closeness of computations or estimates to the unknown exact
                or true values that the statistics were intended to measure.{" "}
                <strong className="text-knbs-600">Reliability</strong> is
                closely associated with accuracy and speaks of the closeness of
                the initial estimated value to the subsequent estimated value.
              </p>
            </div>
          </SubSection>

          <SubSection code="B.3.1" title="Sampling Error">
            <div className="space-y-4">
              <div className="bg-knbs-50 border-l-4 border-knbs-500 p-4">
                <h4 className="font-semibold text-knbs-700 mb-2">
                  Sampling Framework
                </h4>
                <p className="text-sm text-knbs-600 leading-relaxed">
                  The sample is drawn from the{" "}
                  <strong>Kenya Household Master Sample Frame (K-HMSF)</strong>
                  developed from the 2019 Kenya Population and Housing Census
                  (KPHC).
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  Frame Composition
                </h4>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-4 rounded border border-gray-200">
                    <p className="text-xs text-gray-500 uppercase mb-1">
                      Total Clusters
                    </p>
                    <p className="text-2xl font-bold text-knbs-600">10,000</p>
                    <p className="text-xs text-gray-600 mt-1">
                      Selected from ~128,000 EAs
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded border border-gray-200">
                    <p className="text-xs text-gray-500 uppercase mb-1">
                      Sampling Strata
                    </p>
                    <p className="text-2xl font-bold text-knbs-600">92</p>
                    <p className="text-xs text-gray-600 mt-1">
                      Urban & rural strata
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-700">
                  The K-HMSF is composed of 10,000 clusters selected with{" "}
                  <strong>Probability Proportional to Size (PPS)</strong> using
                  the number of households as the measure of size from
                  approximately 128,000 Enumeration Areas (EAs). An Enumeration
                  Area is the smallest geographical unit created during
                  cartographic mapping that precedes a Population and Housing
                  Census.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  Stratification Design
                </h4>
                <p className="leading-relaxed mb-3">
                  The frame was stratified into 92 sampling strata consisting
                  of:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                  <li className="leading-relaxed">
                    Urban and rural strata in 45 counties
                  </li>
                  <li className="leading-relaxed">
                    Nairobi and Mombasa counties (purely urban)
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-3 italic">
                  Counties formed the 1st level of stratification.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                <h4 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                  <AlertTriangle className="text-amber-700" size={18} />
                  Coverage Considerations
                </h4>
                <p className="text-sm text-amber-800 leading-relaxed mb-3">
                  Coverage issues in the frame may arise due to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-sm text-amber-800">
                  <li>
                    <strong>Under-coverage:</strong> Failure to list all
                    households in the EA
                  </li>
                  <li>
                    <strong>Over-coverage:</strong> Including households from
                    neighboring EAs
                  </li>
                </ul>
                <div className="mt-3 pt-3 border-t border-amber-200">
                  <p className="text-sm text-amber-900 leading-relaxed">
                    <strong>Mitigation measures:</strong> Household listing
                    teams are provided with EA maps showing boundaries and
                    accompanied by village elders conversant with the EAs to
                    assist in identifying EA boundaries.
                  </p>
                </div>
                <p className="text-xs text-amber-700 mt-3 font-medium flex items-center gap-2">
                  <Calendar className="text-amber-600" size={14} />
                  The frame should be updated 6 months after development.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  Sub-Sample Structure
                </h4>
                <p className="leading-relaxed mb-4">
                  The frame is divided into four sub-samples, each serving as an
                  independent sample frame:
                </p>
                <div className="grid grid-cols-4 gap-3 mb-4">
                  {["C1", "C2", "C3", "C4"].map((subsample) => (
                    <div
                      key={subsample}
                      className="bg-knbs-50 border border-knbs-200 rounded p-3 text-center"
                    >
                      <p className="text-lg font-bold text-knbs-600">
                        {subsample}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        2,500 clusters
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 italic flex items-center gap-2">
                  <Info className="text-knbs-500" size={16} />
                  Two or more sub-samples can be combined when a larger
                  sample size is required.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  Sampling Methodology
                </h4>
                <div className="space-y-4">
                  <div className="border border-knbs-200 bg-knbs-50 rounded p-4">
                    <h5 className="font-medium text-knbs-600 mb-2">
                      Primary Sampling Units (PSU)
                    </h5>
                    <p className="text-sm leading-relaxed text-gray-700">
                      The PSUs are the clusters. Clusters are selected
                      independently from each of the 92 strata in the K-HMSF
                      frame. All required clusters for the entire year are
                      selected systematically with equal probability.
                    </p>
                  </div>

                  <div className="border border-knbs-200 bg-knbs-50 rounded p-4">
                    <h5 className="font-medium text-knbs-600 mb-2">
                      Household Selection
                    </h5>
                    <p className="text-sm leading-relaxed text-gray-700 mb-3">
                      A simple systematic sampling method (with a random start)
                      is applied to obtain a random sample of{" "}
                      <strong>16 households per cluster</strong> from the list
                      of all households in each cluster.
                    </p>
                    <div className="bg-white border border-knbs-100 p-3 rounded">
                      <p className="text-xs text-gray-600">
                        <strong>Key characteristics:</strong>
                      </p>
                      <ul className="text-xs text-gray-700 list-disc list-inside mt-2 space-y-1">
                        <li>Units sampled without replacement</li>
                        <li>Only preselected units visited for interviews</li>
                        <li>
                          Selected clusters randomized systematically into four
                          quarters
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SubSection>

          <SubSection code="B.3.2" title="Non-Sampling Errors">
            <div className="space-y-6">
              {/* Measurement Error */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <BarChart className="text-knbs-500" size={20} />
                  Measurement Error
                </h4>

                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <p className="text-sm text-red-800 leading-relaxed">
                      <strong>Challenge:</strong> The survey questionnaire is
                      long because it contains many modules which might lead to
                      respondent fatigue.
                    </p>
                    <p className="text-sm text-red-800 leading-relaxed mt-2">
                      <strong>Mitigation:</strong> Interviewers are trained to
                      minimize measurement errors that might occur due to
                      respondent fatigue.
                    </p>
                  </div>

                  <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                    <h5 className="font-medium text-orange-900 mb-2">
                      Telescoping Errors
                    </h5>
                    <p className="text-sm text-orange-800 leading-relaxed">
                      Some questions require the respondent to recall
                      information which could lead to
                      <strong> telescoping errors</strong> (when survey
                      respondents misdate events from outside the reference
                      period and include them in their recall).
                    </p>
                  </div>

                  <div className="border border-knbs-200 bg-knbs-50 rounded p-4">
                    <h5 className="font-medium text-knbs-700 mb-2 flex items-center gap-2">
                      <span>✓</span> Quality Assurance Measures
                    </h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-knbs-500 mt-1">•</span>
                        <span>
                          Collected data is validated by{" "}
                          <strong>
                            inbuilt checks in the Computer Assisted Personal
                            Interviews (CAPI)
                          </strong>{" "}
                          questionnaire
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-knbs-500 mt-1">•</span>
                        <span>
                          Data monitored daily by the data quality team using
                          external software
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-knbs-500 mt-1">•</span>
                        <span>
                          Error reports shared with field teams for immediate
                          correction
                        </span>
                      </li>
                    </ul>
                    <div className="mt-3 pt-3 border-t border-knbs-200">
                      <p className="text-xs text-gray-600 italic">
                        CAPI is a face-to-face data collection method in which
                        the interviewer uses a tablet, mobile phone or computer
                        to record answers given during the interview.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Non-response */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <ClipboardList className="text-knbs-500" size={20} />
                  Non-Response
                </h4>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gradient-to-br from-knbs-50 to-knbs-100 p-4 rounded-lg border border-knbs-200">
                    <p className="text-xs text-knbs-700 uppercase mb-1">
                      Response Rate
                    </p>
                    <p className="text-3xl font-bold text-knbs-600">86.8%</p>
                    <p className="text-xs text-knbs-600 mt-1">
                      Sufficient for good results
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-200">
                    <p className="text-xs text-gray-700 uppercase mb-1">
                      Non-Response Rate
                    </p>
                    <p className="text-3xl font-bold text-gray-700">13.2%</p>
                    <p className="text-xs text-gray-600 mt-1">
                      Managed through weighting
                    </p>
                  </div>
                </div>

                <div className="bg-knbs-50 border border-knbs-200 rounded p-4">
                  <h5 className="font-medium text-knbs-700 mb-3">
                    Mitigation Strategy
                  </h5>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    To minimize the effects of non-response, data were{" "}
                    <strong>weighted and extrapolated</strong> to the whole
                    population.
                  </p>

                  <div className="grid md:grid-cols-2 gap-3 mt-3">
                    <div className="bg-white p-3 rounded border border-knbs-200">
                      <p className="text-xs font-semibold text-knbs-700 mb-2">
                        ✓ Eligible Household
                      </p>
                      <p className="text-xs text-gray-700">
                        Dwelling found to be occupied (even if no interview was
                        undertaken)
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded border border-knbs-200">
                      <p className="text-xs font-semibold text-knbs-700 mb-2">
                        ✗ Ineligible Household
                      </p>
                      <p className="text-xs text-gray-700">
                        Dwelling found vacant, not traced, or converted to
                        non-residential use
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Processing */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Settings className="text-knbs-500" size={20} />
                  Data Processing
                </h4>

                <div className="space-y-4">
                  <div className="border border-knbs-200 bg-knbs-50 rounded-lg p-4">
                    <h5 className="font-medium text-knbs-700 mb-3">
                      Processing Workflow
                    </h5>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="bg-knbs-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                          1
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-knbs-700 text-sm">
                            Questionnaire Programming
                          </p>
                          <p className="text-xs text-gray-700 mt-1">
                            Consistency and validation checks included in CAPI
                            questionnaire to ensure high-quality data collection
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="bg-knbs-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                          2
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-knbs-700 text-sm">
                            Real-Time Monitoring
                          </p>
                          <p className="text-xs text-gray-700 mt-1">
                            Data relayed to central server where quality
                            assurance coordinators monitor via dashboard;
                            questionnaires with issues returned for household
                            re-visits
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="bg-knbs-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                          3
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-knbs-700 text-sm">
                            Data Cleaning
                          </p>
                          <p className="text-xs text-gray-700 mt-1">
                            Initial basic cleaning and editing done using Stata
                            statistical package
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-knbs-200">
                      <p className="text-xs text-gray-700 leading-relaxed">
                        This standard procedure ensures errors are not
                        introduced in data processing steps.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-800 text-white rounded-lg p-4">
                    <h5 className="font-medium mb-2 flex items-center gap-2">
                      <GitBranch className="text-white" size={18} />
                      Version Control with GitHub
                    </h5>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      The data processing team uses <strong>GitHub</strong> for
                      version control, ensuring the team works on updated
                      do-files at all times.
                    </p>
                    <div className="mt-3 bg-gray-700 rounded p-3">
                      <p className="text-xs text-gray-400 italic">
                        GitHub is a distributed version-control platform where
                        users can collaborate on or adopt open-source code
                        projects, fork code, share ideas and more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modelling Assumptions */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Calculator className="text-knbs-500" size={20} />
                  Modelling
                  Assumptions
                </h4>

                <div className="space-y-4">
                  <div className="border border-knbs-200 bg-knbs-50 rounded p-4">
                    <h5 className="font-medium text-knbs-700 mb-2">
                      Rent Imputation
                    </h5>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      While compiling the consumption aggregate, rent is imputed
                      for urban households using{" "}
                      <strong>hedonic regression</strong> based on household
                      characteristics.
                    </p>
                  </div>

                  <div className="border border-knbs-200 bg-knbs-50 rounded p-4">
                    <h5 className="font-medium text-knbs-700 mb-2">
                      Outlier Management
                    </h5>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                      To handle outliers and avoid skewness, we apply cut-offs
                      to a transformed variable at the item level:
                    </p>
                    <div className="bg-white border border-knbs-200 rounded p-3">
                      <p className="text-sm text-gray-800 font-mono">
                        <strong>Rule:</strong> Any value not within{" "}
                        <span className="text-knbs-600 font-bold">
                          2 standard deviations
                        </span>{" "}
                        of the mean is replaced by the median value.
                      </p>
                    </div>
                    <p className="text-xs text-gray-600 mt-3 italic">
                      This approach ensures data quality while preserving
                      statistical validity.
                    </p>
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
