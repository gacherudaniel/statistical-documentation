import { ExternalLink, FileText } from "lucide-react";
import { PRODUCTS } from "../products";

interface ReportTitleCardProps {
  onProductChange: (productId: string) => void;
  selectedProductId?: string;
}

export function ReportTitleCard({
  onProductChange,
  selectedProductId,
}: ReportTitleCardProps) {
  const selectedProduct = PRODUCTS.find(
    (product) => product.id === selectedProductId
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <p className="text-xs text-gray-500 uppercase mb-2">Product</p>
          <div className="relative">
            <select
              value={selectedProductId}
              onChange={(e) => onProductChange(e.target.value)}
              className="w-full text-left text-lg font-semibold text-gray-800 hover:text-knbs-600 transition-colors flex items-center justify-between gap-2 p-2 rounded hover:bg-gray-50"
            >
              {PRODUCTS.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <p className="text-xs text-gray-500 uppercase">Status</p>
          <p
            className={`text-lg font-semibold ${
              selectedProduct?.status === "Published"
                ? "text-knbs-700"
                : selectedProduct?.status === "In Progress"
                ? "text-amber-600"
                : "text-gray-600"
            }`}
          >
            {selectedProduct?.status}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500 uppercase">Reference Period</p>
          <p className="text-lg font-semibold text-gray-800">
            {selectedProduct?.referencePeriod}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500 uppercase">Last Updated</p>
          <p className="text-lg font-semibold text-gray-800">
            {selectedProduct?.lastUpdated}
          </p>
        </div>
      </div>

      {/* Publication Links Section */}
      {selectedProduct?.publicationLinks &&
        selectedProduct.publicationLinks.length > 0 && (
          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-4 h-4 text-knbs-600" />
              <p className="text-xs text-gray-500 uppercase font-semibold">
                Related Publications
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedProduct.publicationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-knbs-50 text-knbs-700 text-sm font-medium rounded-lg border border-knbs-200 hover:bg-knbs-100 hover:border-knbs-300 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
    </div>
  );
}
