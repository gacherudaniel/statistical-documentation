import { QuartoDocument } from "../../components/docs/QuartoDocument";
import { QUARTO_DOCS } from "../../lib/docs";

export function Kesqaf() {
  return (
    <QuartoDocument
      doc={QUARTO_DOCS.kesqaf}
      footerNote="Statistical Quality Assurance Framework"
    />
  );
}
