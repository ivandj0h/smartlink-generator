import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import * as jsPDF from "jspdf";

function usePdf() {
  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
    //   const data = JSON.parse(localStorage.getItem("dataUrls"));
    //   const newPdfs = data.map((d) => ({
    //     id: d.id,
    //     ...d.datauser,
    //     ...d.igduplicate,
    //   }));
    //   setPdfs(newPdfs);
    // }, []);
    // return pdfs;

    const unsubscribe = firebase
      .firestore()
      .collection("urls")
      .onSnapshot((snapshot) => {
        const newUrl = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPdfs(newUrl);
      });
    return () => unsubscribe();
  }, []);

  return pdfs;
}

const ExportPdf = () => {
  const pdfs = usePdf();

  const makeid = (length) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  //console.log(pdfs);

  //const x = pdfs.map((pd) => pd.datauser.id);

  const exportPdf = () => {
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

    let links = [
      "https://instagram.com/p/h22fJdbDKYAzOkR6",
      "https://instagram.com/p/h5lRvm2BINhq1s26",
      "https://instagram.com/p/bgchFY81GDXM6Ja6",
      "https://instagram.com/p/sFGh4jnBzpJPpX26",
    ];

    let links2 = "https://www.instagram.com/p/CAwTjhXgBnm/?igshid=evuxeyfsxxd6";
    let i;
    for (i = 0; i < links.length; i++) {
      let newLink = {
        url: links2 + links[i].split("/p/").pop(),
      };

      doc.setTextColor(6, 69, 173);
      doc.text(10, 35 + i * 5, i + 1 + ". " + newLink.url);
    }
    // doc.text("1.", 10, 35);
    // doc.setTextColor(6, 69, 173);
    // doc.textWithLink("https://instagram.com/p/hHIBdChV0Z9gHOA6", 15, 35, {
    //   url: "https://www.instagram.com/p/CAwTjhXgBnm/?igshid=evuxeyfsxxd6",);

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
