function generateQRCode() {
    const text = document.getElementById('text').value.trim();
    const canvas = document.getElementById('qrcode');
    const qrSection = document.getElementById('qr-section');

    if (!text) {
      alert('Please enter text or a URL to generate QR code.');
      return;
    }

    QRCode.toCanvas(canvas, text, { width: 400 }, function (error) {
      if (error) {
        console.error(error);
        alert('Error generating QR code.');
      } else {
        qrSection.style.display = 'block';
        console.log('QR code generated!');
      }
    });
  }

  function downloadQRCode() {
    const canvas = document.getElementById('qrcode');
    const link = document.createElement('a');
    link.download = 'qr-code.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }