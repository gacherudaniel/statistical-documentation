import QualityReport from "./QualityReport";

interface QualityReportsProps {
  selectedProduct?: string;
}

export function QualityReports({
  selectedProduct = "poverty-inequality",
}: QualityReportsProps) {
  return <QualityReport initialProductId={selectedProduct} />;
}
