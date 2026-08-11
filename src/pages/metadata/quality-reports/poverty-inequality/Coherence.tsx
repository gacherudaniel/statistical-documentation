import { AlertTriangle } from "lucide-react";
import type { SectionKey } from "../QualityReport";
import { SectionHeader } from "../common/SectionHeader";

interface CoherenceProps {
  isOpen: boolean;
  onToggle: (id: SectionKey) => void;
}

export function Coherence({ isOpen, onToggle }: CoherenceProps) {
  return (
    <div
      id="section-coherence"
      className="bg-white rounded-lg shadow-sm border mb-8 overflow-hidden scroll-mt-6"
    >
      <SectionHeader
        id="coherence"
        number="B.6"
        title="Coherence and Comparability"
        isOpen={isOpen}
        onToggle={onToggle}
      />
      {isOpen && (
        <div className="p-6 space-y-6">
          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-gray-700 italic">
              Coherence is the adequacy of statistics to be combined in
              different ways and for different uses. Consistency refers to
              statistics having logical and numerical coherence.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-4">
            <p className="leading-relaxed text-gray-700">
              The statistics are usually reported at the national level, in
              rural & urban residences and counties. In 2015/2016 reporting was
              done in 3 categories (rural, core-urban and peri-urban) for the
              residence domain. Therefore, residence estimate statistics may not
              be comparable with 2021 reports which adopted 2 categories; urban
              and rural.
            </p>

            {/* Reporting Levels Summary */}
            <div className="bg-knbs-50 border border-knbs-200 rounded-lg p-4">
              <h4 className="font-semibold text-knbs-700 mb-3">
                Current Reporting Levels:
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-knbs-500 mt-1">•</span>
                  <span>
                    <strong>National level</strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-knbs-500 mt-1">•</span>
                  <span>
                    <strong>Residence:</strong> Rural & Urban
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-knbs-500 mt-1">•</span>
                  <span>
                    <strong>Counties</strong>
                  </span>
                </li>
              </ul>
            </div>

            {/* Comparability Warning */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-4">
              <h5 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                <AlertTriangle className="text-amber-700" size={18} />
                Comparability Note
              </h5>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-amber-800 leading-relaxed mb-2">
                    <strong>2015/2016 Survey:</strong> Reporting used{" "}
                    <strong>3 categories</strong> for residence domain:
                  </p>
                  <ul className="text-sm text-amber-800 space-y-1 ml-4">
                    <li className="flex items-start gap-2">
                      <span>1.</span>
                      <span>Rural</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>2.</span>
                      <span>Core-urban</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>3.</span>
                      <span>Peri-urban</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-3 border-t border-amber-200">
                  <p className="text-sm text-amber-900 leading-relaxed">
                    <strong>2021 Survey:</strong> Adopted{" "}
                    <strong>2 categories</strong> only: <em>Urban</em> and{" "}
                    <em>Rural</em>
                  </p>
                </div>

                <div className="pt-3 border-t border-amber-200">
                  <p className="text-sm text-amber-900 leading-relaxed font-medium">
                    <strong>Impact:</strong> Residence estimate statistics may{" "}
                    <strong>not be comparable</strong> between 2015/2016 and
                    2021 reports due to different categorization methods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
