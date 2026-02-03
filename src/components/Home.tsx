"use client";

export function Homepage() {
  return (
    <div className="bg-gradient-to-b from-knbs-50 to-white min-h-[70vh]">
      <div className="max-w-5xl mx-auto px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-knbs-800 mb-6">
            Statistical Quality & Metadata
          </h1>
          <p className="text-xl text-knbs-700 leading-relaxed max-w-3xl mx-auto">
            Welcome to the Kenya National Bureau of Statistics comprehensive
            platform for statistical quality assurance and metadata management.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm border border-knbs-200 p-6">
              <h2 className="text-2xl font-semibold text-knbs-800 mb-4">
                Platform Overview
              </h2>
              <p className="text-knbs-700 leading-relaxed">
                This unified digital ecosystem serves Kenya's National
                Statistical System by providing centralized access to quality
                frameworks, statistical standards, classifications, and metadata
                documentation. The platform is designed for data producers,
                researchers, and policymakers who require reliable, structured,
                and standardized statistical information.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-knbs-200 p-6">
              <h2 className="text-2xl font-semibold text-knbs-800 mb-4">
                Metadata & Documentation
              </h2>
              <p className="text-knbs-700 leading-relaxed">
                The platform provides comprehensive metadata systems ensuring
                data discoverability and understanding. This includes detailed
                quality assessments for major products like Poverty & Inequality
                Reports and Consumer Price Index, an integrated Statistical
                Dictionary for terms and concepts, and both national and
                international statistical classifications with standardized
                reference codes and codelists.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm border border-knbs-200 p-6">
              <h2 className="text-2xl font-semibold text-knbs-800 mb-4">
                Quality Frameworks
              </h2>
              <p className="text-knbs-700 leading-relaxed">
                Access comprehensive quality assurance frameworks that ensure
                statistical integrity and reliability. This includes the Kenya
                Statistical Quality Assurance Framework (KeSQAF) with 19
                principles across 4 levels (A, B, C, D), the Kenya Statistical
                Code of Practice (KeSCoP) with 3 pillars and 12 principles for
                best practices, and the Kenya Statistical Production Manual
                (KSPM) providing planning guidelines, methodologies, and
                production standards.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-knbs-200 p-6">
              <h2 className="text-2xl font-semibold text-knbs-800 mb-4">
                Key Features
              </h2>
              <p className="text-knbs-700 leading-relaxed">
                The platform offers intelligent search and discovery
                capabilities, seamless navigation between statistical reports,
                intuitive user interface design, and comprehensive
                documentation. Features include dynamic product switching,
                advanced filtering options, and responsive design that works
                across all devices and screen sizes.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-gradient-to-r from-knbs-500 to-knbs-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-semibold mb-4">Trust & Standards</h2>
          <p className="text-knbs-100 leading-relaxed max-w-4xl mx-auto">
            All statistical information on this platform undergoes rigorous
            quality checks following international standards and best practices.
            Data is officially verified and validated by KNBS experts, ensuring
            reliability for policy and research decisions. Information is
            organized with clear metadata and documentation, making it easy to
            discover, understand, and analyze.
          </p>
        </div>
      </div>
    </div>
  );
}

// Also export as Home for compatibility
export const Home = Homepage;
