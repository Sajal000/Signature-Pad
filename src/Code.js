function doGet() {
  return HtmlService.createTemplateFromFile("index").evaluate();
}

function recieveSignature(encodedImage){
  const data = encodedImage.split(",")[1];
  const dataDecoded = Utilities.base64Decode(data);
  const signatureAsPictureBlob = Utilities.newBlob(dataDecoded).setName("signedPage.png");
  DriveApp.getFolderById(GoogleDriveFile).createFile(signatureAsPictureBlob);
  return "Signature sent successfully!";
}

