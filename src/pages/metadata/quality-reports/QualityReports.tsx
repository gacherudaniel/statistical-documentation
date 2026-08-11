import QualityReport from "./QualityReport";

interface QualityReportsProps {
  selectedProduct?: string;
  onProductChange?: (productId: string) => void;
}

export function QualityReports({
  selectedProduct = "poverty-inequality",
  onProductChange,
}: QualityReportsProps) {
  return (
    <QualityReport
      initialProductId={selectedProduct}
      onProductChange={onProductChange}
    />
  );
}
