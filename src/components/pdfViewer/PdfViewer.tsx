import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { pdfjs } from "react-pdf";

type PdfViewerProps = {
  pdfUrl: string;
  onClose: () => void;
};

const PdfViewer = (p: PdfViewerProps) => {
  return (
    <div className="pdf-overlay">
      <button
        onClick={p.onClose}
        style={{ position: "absolute", top: 20, right: 20 }}
      >
        Close
      </button>
      <div style={{ height: "80vh", overflowY: "auto" }}>
        <Worker
          workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}
        >
          <Viewer fileUrl={p.pdfUrl} />
        </Worker>
      </div>
    </div>
  );
};

export default PdfViewer;
