export function TopHeader() {
  return (
    <div className="bg-knbs-600 text-white">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 py-2 flex items-center justify-between text-xs">
        <div className="flex items-center gap-4">
          
          <a href="https://www.knbs.or.ke" className="hover:text-knbs-200">
              <span>Kenya National Bureau of Statistics</span>
            </a>
          <span className="text-knbs-300">|</span>
          <span>Statistical Quality Assurance</span>
          <span className="text-knbs-300">|</span>
           <a href="https://www.knbs.or.ke/knbs-downloads/" className="hover:text-knbs-200">
              Download
            </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.knbs.or.ke/contacts/" className="hover:text-knbs-200">
            Contact
          </a>
          <a href="https://www.knbs.or.ke/resource-centre/#" className="hover:text-knbs-200">
            Library
          </a>
        </div>
      </div>
    </div>
  );
}
