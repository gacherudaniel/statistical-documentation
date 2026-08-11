import knbsLogo from "../../assets/knbs-logo.png"; // Update the filename to match your logo

export function MainHeader() {
  return (
    <div className="bg-white border-b shadow-sm">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
            <img
              src={knbsLogo}
              alt="KNBS Logo"
              className="w-18 h-18 object-contain"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-knbs-600">
              Statistical Quality & Metadata
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
