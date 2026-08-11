export function Footer() {
  return (
    <footer className="bg-knbs-600 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-semibold mb-4 text-white text-lg">
              About KNBS
            </h3>
            <p className="text-knbs-100 text-sm leading-relaxed mb-4">
              Kenya National Bureau of Statistics is the principal government
              agency responsible for collecting, analyzing and disseminating
              statistical information.
            </p>
            <p className="text-knbs-200 text-xs">
              Providing quality statistical information for evidence-based
              decision making.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-knbs-100">
              <li>
                <a
                  href="https://www.knbs.or.ke/all-reports/"
                  className="hover:text-white transition-colors duration-200"
                >
                  Publications & Reports
                </a>
              </li>
              <li>
                <a
                  href="https://kenya.opendataforafrica.org/"
                  className="hover:text-white transition-colors duration-200"
                >
                  Data Portal
                </a>
              </li>
              <li>
                <a
                  href="https://www.knbs.or.ke/surveys/"
                  className="hover:text-white transition-colors duration-200"
                >
                  Surveys & Census
                </a>
              </li>
              <li>
                <a
                  href="https://www.knbs.or.ke/contacts/"
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Quality Framework */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-lg">
              Quality Framework
            </h4>
            <ul className="space-y-2 text-sm text-knbs-100">
              <li>
                <a
                  href="/quality/code-of-practice"
                  className="hover:text-white transition-colors duration-200"
                >
                  Code of Practice
                </a>
              </li>
              <li>
                <a
                  href="/quality/kesqaf"
                  className="hover:text-white transition-colors duration-200"
                >
                  KeSQAF
                </a>
              </li>
              <li>
                <a
                  href="/quality/kspm"
                  className="hover:text-white transition-colors duration-200"
                >
                  KSPM
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-lg">Resources</h4>
            <ul className="space-y-2 text-sm text-knbs-100 mb-4">
              <li>
                <a
                  href="/metadata"
                  className="hover:text-white transition-colors duration-200"
                >
                  Metadata
                </a>
              </li>
              <li>
                <a
                  href="/metadata/classification"
                  className="hover:text-white transition-colors duration-200"
                >
                  Classifications
                </a>
              </li>
              <li>
                <a
                  href="/metadata/compendium"
                  className="hover:text-white transition-colors duration-200"
                >
                  Compendium
                </a>
              </li>
              <li>
                <a
                  href="/metadata/quality-reports"
                  className="hover:text-white transition-colors duration-200"
                >
                  Quality Reports
                </a>
              </li>
            </ul>

            {/* Contact Info */}
            <div className="text-xs text-knbs-200">
              <p className="mb-1">P.O. Box 30266-00100</p>
              <p className="mb-1">Nairobi, Kenya</p>
              <p>info@knbs.or.ke</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-knbs-700 pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-sm text-knbs-200">
              <p className="text-center lg:text-left">
                &copy; 2026 Kenya National Bureau of Statistics. All rights
                reserved.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex gap-4 text-sm">
                <a
                  href="#"
                  className="text-knbs-200 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-knbs-200 hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </div>

              <div className="flex gap-4 border-l border-knbs-700 pl-6">
                <a
                  href="https://x.com/KNBStats"
                  className="text-knbs-200 hover:text-white transition-colors duration-200"
                  aria-label="Follow us on X (Twitter)"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/company/kenya-national-bureau-of-statistics"
                  className="text-knbs-200 hover:text-white transition-colors duration-200"
                  aria-label="Connect with us on LinkedIn"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com/KenyaNBS"
                  className="text-knbs-200 hover:text-white transition-colors duration-200"
                  aria-label="Like us on Facebook"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
