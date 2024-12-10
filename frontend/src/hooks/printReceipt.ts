export const printReceipt = (receiptHtml: string) => {
  const printWindow = window.open("", "_blank", "width=100%,height=400");
  if (printWindow) {
    printWindow.document.write(`
        <html>
          <head><title>Print Receipt</title></head>
          <body>${receiptHtml}</body>
        </html>
      `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
    // setTimeout(() => {
    //   // setTimeout(() => {
    //   // }, 500); // Allow some time for the print command to execute
    // }, 500);
  } else {
    console.error("Failed to open print window");
  }
};
