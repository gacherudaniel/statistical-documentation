export function Footer() {
  return (
    <div className="bg-knbs-600 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-8 mb-6">
          <div>
            <h4 className="font-medium mb-3">About KNBS</h4>
            <p className="text-sm text-knbs-100">
              Kenya National Bureau of Statistics is the principal Government
              agency responsible for collecting, analyzing and disseminating
              statistical data in Kenya.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-knbs-100">
              <li>
                <a href="https://www.knbs.or.ke/all-reports/" className="hover:text-white">
                  Publications
                </a>
              </li>
              <li>
                <a href="https://www.knbs.or.ke/portals/" className="hover:text-white">
                  Data Portal
                </a>
              </li>
              <li>
                <a href="https://www.knbs.or.ke/contacts/" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-knbs-100">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Data Protection
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-knbs-500 pt-4 text-center text-sm text-knbs-100">
          <p>
            &copy; 2025 Kenya National Bureau of Statistics. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
