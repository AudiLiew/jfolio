const fs = require('fs');
const path = require('path');
const glob = require("glob")
const sharp = require('sharp');

const SHOW_LOG = true;
const uncompressedFolder = "assets/img_uncompressed/"
const compressedPath = "assets/img/";
const OPTIONS = {
    MaxWidth: 1920,
    DontEnlarge: true
}
let createdFolder = []

fs.mkdirSync(compressedPath, { recursive: true });
createdFolder.push(compressedPath);

glob(uncompressedFolder+"**/*.*", {}, function (err, files) {
  if (files.length == 0) {console.log(`We aint found shite in ${uncompressedFolder}`); return;}
  if (err != null) { throw err; }
  
  files.forEach(function(inputFile) {
    const outputFilename = path.join(compressedPath, inputFile.replace(uncompressedFolder, ""));
    const outputFolder = path.dirname(outputFilename);

    if (!createdFolder.includes(outputFolder)) {
      fs.mkdirSync(outputFolder, { recursive: true });
      createdFolder.push(outputFolder);
    }

    sharp(inputFile)
      .resize({
        width: OPTIONS.MaxWidth,
        withoutEnlargement: OPTIONS.DontEnlarge
        })
      .toFile(outputFilename, (err) => {
        if (err !== null) {console.log(err);}
      });
    
    if (SHOW_LOG) {
      console.log(`Output to: ${outputFilename}`);
    }
  });

  console.log(`Total ${files.length} files compressed.`);
});