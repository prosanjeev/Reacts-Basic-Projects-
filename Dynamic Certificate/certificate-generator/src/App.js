import React, { useEffect, useState } from 'react';
import { PDFViewer, PDFDownloadLink, Page, Text, View } from '@react-pdf-viewer/react-pdf';
import { Document, pdf } from 'react-pdf';

const CustomizedCertificate = ({ studentDetails, courseDetails, date }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfBytes, setPdfBytes] = useState(null);

  useEffect(() => {
    const generatePdf = async () => {
      const pdfDoc = pdf();
      const page = pdfDoc.addPage();

      const { width, height } = page.getSize();
      const fontSize = 15;

      const drawText = (text, x, y) => {
        page.drawText(text, { x, y, font: 'Helvetica', fontSize, color: [0, 0, 0] });
      };

      drawText('Certificate of Completion', width / 2 - 100, height - 50);
      drawText('------------------------------------', width / 2 - 100, height - 60);

      drawText(`Student Name: ${studentDetails.name}`, 50, height - 100);
      drawText(`Roll Number: ${studentDetails.rollNumber}`, 50, height - 120);

      drawText('has successfully completed the course', 50, height - 160);

      drawText(`Course: ${courseDetails.courseName}`, 50, height - 200);
      drawText(`Duration: ${courseDetails.duration}`, 50, height - 220);

      drawText(`on ${date}`, 50, height - 260);
      drawText('------------------------------------', width / 2 - 100, 50);

      drawText(courseDetails.instituteName, 50, 20);

      const pdfBytes = await pdfDoc.save();
      setPdfBytes(pdfBytes);
    };

    generatePdf();
  }, [studentDetails, courseDetails, date]);

  return (
    <div>
      <PDFViewer width="600" height="800">
        <Document file={{ data: pdfBytes }}>
          <Page pageNumber={pageNumber} />
        </Document>
      </PDFViewer>

      {pdfBytes && (
        <PDFDownloadLink document={<Document file={{ data: pdfBytes }} />} fileName="certificate.pdf">
          {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
      )}
    </div>
  );
};

const App = () => {
  const studentDetails = { name: 'John Doe', rollNumber: '123' };
  const courseDetails = { courseName: 'React.js Mastery', duration: '8 weeks', instituteName: 'ABC Institute' };
  const date = 'January 5, 2024';

  return (
    <div>
      <CustomizedCertificate studentDetails={studentDetails} courseDetails={courseDetails} date={date} />
    </div>
  );
};

export default App;
