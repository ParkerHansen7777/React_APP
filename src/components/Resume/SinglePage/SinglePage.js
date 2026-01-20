import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default function SinglePage(props) {
  
  const { pdf } = props;

  return (
    <>
      <div className="pdf-container">
        <Document
          file={pdf}
          options={{ workerSrc: "/pdf.worker.js" }}
        >
          <Page pageNumber={1} scale={1.6}renderAnnotationLayer={false} renderTextLayer={false}/>
        </Document>
      </div>
    </>
  );
}