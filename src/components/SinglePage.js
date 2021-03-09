import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import './SinglePage.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default function SinglePage(props) {
  
  const { pdf } = props;

  return (
    <>
      <div class="pdf">
      <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
      >
        <Page pageNumber={1} />
      </Document>
      </div>
    </>
  );
}