import React from "react";

const ExportPdf = () => {
  const exportPdf = () => {
    console.log("Export Success!");
  };

  return (
    <div>
      <button
        className="btn btn-primary btn-block my-2 my-sm-0"
        onClick={() => exportPdf()}
      >
        Export Pdf
      </button>
    </div>
  );
};

export default ExportPdf;
