import {
  BookOpen,
  Target,
  Shield,
  FileText,
  Award,
  TrendingUp,
  BarChart3,
} from "lucide-react";

export function IntroSection() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-knbs-600 mb-6">
        Kenya Statistical Code of Practice (KeSCoP)
      </h1>

      {/* Main Introduction */}
      <div className="bg-gradient-to-r from-blue-50 to-knbs-50 border-l-4 border-knbs-500 p-6 mb-8 rounded-r-lg">
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          The Kenya Statistics Code of Practice (KeSCoP) is a{" "}
          <strong>technical and regulatory instrument</strong> that aims to
          contribute to the continuous improvement of statistical processes and
          outputs. It provides producers of official statistics with detailed
          practices they must commit to on statistical quality, when producing
          and releasing Official Statistics.
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          It also provides producers of non-official statistics with a framework
          they can voluntarily comply with to produce credible statistics that
          can be used for official reporting where official statistics are not
          available.
        </p>
      </div>

      {/* Foundation Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Award className="text-knbs-500" size={28} />
          Foundation
        </h2>
        <div className="bg-white border-2 border-knbs-200 rounded-lg p-6 mb-4">
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            The KeSCoP is drawn from the{" "}
            <strong>four levels and 19 Quality Principles</strong> and
            requirements as outlined in the Kenya Statistical Quality Assurance
            Framework (KeSQAF). KeSCoP is anchored on three pillars namely;{" "}
            <span className="text-knbs-600 font-semibold">Quality</span>,{" "}
            <span className="text-knbs-600 font-semibold">Trustworthiness</span>
            {" and "}
            <span className="text-knbs-600 font-semibold">Progressiveness</span>
            based on KeSQAF.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Each pillar contains <strong>values and commitments</strong> that
            producers of statistics should commit to. Fulfilment of these
            commitments will lead to a well-coordinated NSS with clearly defined
            roles. Therefore, the KeSCoP will rely heavily on the implementation
            of the KeSQAF framework, especially for monitoring and evaluation
            purposes.
          </p>
        </div>
        <div className="bg-knbs-50 border border-knbs-300 rounded-lg p-4">
          <p className="text-xs text-knbs-700 font-medium flex items-center gap-2">
            <BarChart3 size={16} className="text-knbs-600" />
            Note: The indicators for measuring the success of implementation
            of KeSCoP are in Annex 1.
          </p>
        </div>
      </div>

      {/* Three Pillars */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Three Pillars</h2>
        <p className="text-gray-700 mb-6">
          The statistics code of practice is anchored on three pillars with
          associated values. <strong> Pillars</strong> are fundamental rules or
          ideas that govern the thinking or behaviour in the generation of
          statistics, while <strong>values</strong> are guiding principles
          adopted by members of the NSS to achieve the pillars. Each value has{" "}
          <strong>commitments</strong> which are replicable actions based on
          proven experience with good results, contributing to the improvement
          of statistical processes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-knbs-50 to-white border-2 border-knbs-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-knbs-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                <Shield size={24} />
              </div>
              <h3 className="text-lg font-bold text-knbs-600">Pillar 1</h3>
            </div>
            <h4 className="font-bold text-gray-900 mb-2 text-lg">Quality</h4>
            <p className="text-sm text-gray-700">
              Adherence to professional standards, competency requirements, and
              best practices in statistical production.
            </p>
          </div>

          <div className="bg-gradient-to-br from-knbs-50 to-white border-2 border-knbs-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-knbs-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                <Target size={24} />
              </div>
              <h3 className="text-lg font-bold text-knbs-600">Pillar 2</h3>
            </div>
            <h4 className="font-bold text-gray-900 mb-2 text-lg">
              Trustworthiness
            </h4>
            <p className="text-sm text-gray-700">
              Independence from political and external influence, ensuring
              objectivity and credibility in statistical outputs.
            </p>
          </div>

          <div className="bg-gradient-to-br from-knbs-50 to-white border-2 border-knbs-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-knbs-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-lg font-bold text-knbs-600">Pillar 3</h3>
            </div>
            <h4 className="font-bold text-gray-900 mb-2 text-lg">
              Progressiveness
            </h4>
            <p className="text-sm text-gray-700">
              Innovation, continuous improvement, and adaptation to emerging
              technologies and user needs.
            </p>
          </div>
        </div>
      </div>

      {/* Legal Mandate */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <FileText className="text-knbs-500" size={28} />
          Legal Mandate
        </h2>
        <div className="bg-gray-50 border-l-4 border-gray-400 rounded-r-lg p-6">
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            The <strong>Statistics Act (Cap. 112)</strong> gives the Kenya National
            Bureau of Statistics (KNBS) the role of coordinating and supervising
            all official statistical programmes undertaken within the NSS. The
            act inter alia mandates the Bureau to establish standards and ensure
            the use of best practices and methods in the production and
            dissemination of statistical information across NSS.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            The Bureau as the coordinating body, presents KeSCoP to producers
            and users of statistics in order to improve the quality of the
            processes and production of statistics within the NSS. Adherence to
            the code of practice will improve the quality and credibility of
            statistics produced within the NSS, as well as enable the statistics
            to be designated as <strong>Official Statistics</strong>.
          </p>
        </div>
      </div>

      {/* Purpose and Benefits */}
      <div className="bg-gradient-to-br from-gray-50 to-knbs-50 border-2 border-knbs-200 rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <BookOpen className="text-knbs-500" size={24} />
          Purpose and Benefits
        </h2>
        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
          KeSCoP serves multiple critical functions in Kenya's statistical
          ecosystem:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-knbs-200 rounded-lg p-4">
            <h3 className="font-semibold text-knbs-600 mb-3 text-sm">
              For NSS Members
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-knbs-500 font-bold mt-1">•</span>
                <span>
                  Establishes common standards and expectations for all NSS
                  members
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-knbs-500 font-bold mt-1">•</span>
                <span>
                  Ensures quality, reliability, and comparability of statistical
                  products
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-knbs-500 font-bold mt-1">•</span>
                <span>
                  Enables statistics to be designated as Official Statistics
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-knbs-200 rounded-lg p-4">
            <h3 className="font-semibold text-knbs-600 mb-3 text-sm">
              For Non-NSS Producers
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-knbs-500 font-bold mt-1">•</span>
                <span>
                  Provides a framework for voluntary compliance to produce
                  credible statistics
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-knbs-500 font-bold mt-1">•</span>
                <span>
                  Enables statistics to be used for official reporting where
                  gaps exist
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-knbs-500 font-bold mt-1">•</span>
                <span>
                  Improves quality of statistics produced for official reporting
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 bg-knbs-100 border border-knbs-300 rounded-lg p-4">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>For Users:</strong> Compliance with KeSCoP gives users of
            statistics confidence that published statistics are of{" "}
            <span className="text-knbs-700 font-semibold">high quality</span>,
            have{" "}
            <span className="text-knbs-700 font-semibold">public trust</span>,
            and are produced by institutions and people that are{" "}
            <span className="text-knbs-700 font-semibold">progressive</span>.
          </p>
        </div>
      </div>

      {/* Additional Context */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-gray-700 leading-relaxed">
          <strong>Alignment with International Best Practices:</strong> KeSCoP
          aligns Kenya's statistical system with international best practices,
          promoting innovation and continuous improvement in statistical
          practices while building public trust and confidence in official
          statistics.
        </p>
      </div>
    </div>
  );
}
