import React, { useState, useEffect } from "react";
import * as jsPDF from "jspdf";

function usePdf() {
  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("dataUrls"));
    const newPdfs = data.map((d) => ({
      id: d.id,
      ...d.datauser,
      ...d.igduplicate,
    }));
    setPdfs(newPdfs);
  }, []);
  return pdfs;
}

const ExportPdf = () => {
  const pdfs = usePdf();

  const exportPdf = () => {
    //console.log(pdfs);
    const name = "POLRES TABALONG POLDA KALSEL";
    const lMargin = 10;
    const rMargin = 15;
    const pdfInMM = 330;
    const paragraphAwal =
      "Mohon ijin Jenderal, melaporkan kegiatan Pelaksanaan *Sosisalisasi melalui Media Elektronik dalam penerimaan terpadu anggota Polri T.A. 2020 di Wilayah Hukum Polres Tabalong* sbb:";
    const dmy = new Date();
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const tanggal =
      dmy.getDate() + " " + months[dmy.getMonth()] + " " + dmy.getFullYear();
    const hasil = pdfs.map((pdf) => pdf.id);
    const doc = new jsPDF({
      unit: "mm",
      orientation: "p",
      format: "a4",
      lineHeight: 1.2,
    });

    const lines = doc.splitTextToSize(
      paragraphAwal,
      pdfInMM - lMargin - rMargin
    );

    // (10(makin ke kiri), 100(makin kebawah))
    doc.setFontSize(12);

    doc.text(name, 10, 20);
    doc.setFontSize(10);
    doc.text("Kepada Yth. : Kapolda Kalsel.", 10, 30);
    doc.text("Dari : Kapolres Tabalong.", 10, 35);
    doc.text("Tembusan : Yth.", 10, 45);
    doc.text("1. Waka Polda Kalsel.", 10, 50);
    doc.text("2. Irwasda Polda Kalsel.", 10, 55);
    doc.text("3. Karo SDM Polda Kalsel.", 10, 60);
    doc.text("4. PJU Polda Kalsel.", 10, 65);
    doc.text("Assalamu'alaikum warohmatullohi wabarokatuh.", 10, 80);
    doc.text("Salam Bahagia.", 10, 85);
    doc.text(lMargin, 95, lines);
    doc.text("*WAKTU:*", 10, 110);
    doc.text("*" + tanggal + "*", 10, 115);
    doc.text("*KONTEN & POSTINGAN:*", 10, 125);
    doc.text("- INSTAGRAM : 1 Postingan", 10, 130);
    doc.text("- FACEBOOK : 0 Postingan", 10, 135);
    doc.text("- TWITTER : 0 Postingan", 10, 140);
    doc.text("- MEME : 0 Konten", 10, 145);
    doc.text("- VIDEO : 0 Konten", 10, 150);

    doc.addPage();
    doc.text("*INSTAGRAM : 1 Postingan*", 10, 30);
    doc.text("1.", 10, 35);
    doc.setTextColor(6, 69, 173);
    doc.textWithLink(
      "https://www.instagram.com/p/CACSuOgA98E/?igshid=1b3jsbor75bcu",
      15,
      35,
      { url: "https://www.instagram.com/p/CACSuOgA98E/?igshid=1b3jsbor75bcu" }
    );

    doc.save("instagram_links_auto_generate.pdf");
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
