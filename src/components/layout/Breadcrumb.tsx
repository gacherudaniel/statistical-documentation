import { Home, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BreadcrumbProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

interface BreadcrumbItem {
  label: string;
  path?: string;
}

export function Breadcrumb({ currentPath, onNavigate }: BreadcrumbProps) {
  const navigate = useNavigate();

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [
      { label: "Home", path: "/" }, // Home page
    ];

    // Quality section
    if (currentPath.startsWith("/quality/")) {
      breadcrumbs.push({ label: "Quality" });

      if (currentPath === "/quality/kesqaf") {
        breadcrumbs.push({ label: "KeSQAF" });
      } else if (currentPath === "/quality/kspm") {
        breadcrumbs.push({ label: "KSPM" });
      } else if (currentPath === "/quality/code-of-practice") {
        breadcrumbs.push({ label: "Code of Practice" });
      }
    }

    // Metadata section
    else if (currentPath.startsWith("/metadata/")) {
      breadcrumbs.push({ label: "Metadata" });

      if (currentPath === "/metadata/quality-reports") {
        breadcrumbs.push({ label: "Quality Reports" });
      } else if (currentPath === "/metadata/codelists") {
        breadcrumbs.push({ label: "Codelists" });
      } else if (currentPath === "/metadata/classification/national") {
        breadcrumbs.push({ label: "Classifications", path: "/metadata/classification/national" });
        breadcrumbs.push({ label: "National" });
      } else if (currentPath === "/metadata/classification/international") {
        breadcrumbs.push({ label: "Classifications", path: "/metadata/classification/international" });
        breadcrumbs.push({ label: "International" });
      } else if (currentPath === "/metadata/compendium") {
        breadcrumbs.push({ label: "Compendium" });
      }
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div className="bg-white border-b">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 py-2">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Home size={14} className="text-knbs-500" />

          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              <ChevronRight size={14} />
              {crumb.path && index < breadcrumbs.length - 1 ? (
                <button
                  onClick={() =>
                    crumb.path === "/" ? navigate("/") : onNavigate(crumb.path!)
                  }
                  className="text-knbs-600 hover:underline hover:text-knbs-700 transition-colors"
                >
                  {crumb.label}
                </button>
              ) : (
                <span
                  className={
                    index === breadcrumbs.length - 1
                      ? "text-gray-800 font-medium"
                      : ""
                  }
                >
                  {crumb.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
