module.exports = function convertImageToUrl(filePath) {
  let url = ("http://localhost:3000/" + filePath).replace(/[\\]/g, "/");
  return url;
};
