import { QuartoDocument } from "../../components/docs/QuartoDocument";
import { QUARTO_DOCS } from "../../lib/docs";

export function Kspm() {
  return (
    <QuartoDocument
      doc={QUARTO_DOCS.kspm}
      footerNote="Statistical Production Model"
    />
  );
}
