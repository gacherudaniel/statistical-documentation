import { QuartoDocument } from "../../components/docs/QuartoDocument";
import { QUARTO_DOCS } from "../../lib/docs";

export function CodeOfPractice() {
  return (
    <QuartoDocument
      doc={QUARTO_DOCS.kescop}
      footerNote="Statistics Code of Practice"
    />
  );
}
