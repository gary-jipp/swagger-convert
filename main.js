
const fs = require('fs');
const Converter = require('api-spec-converter');

const convert = function (filename) {
  Converter.convert({
    from: 'swagger_1',
    to: 'swagger_2',
    source: filename,
  })
    .then(converted => {
      const newFile = filename.replace(/\.[^/.]+$/, "") + "-v2.json";
      console.log("converting", filename, "->", newFile);
      fs.writeFileSync(newFile, converted.stringify());
    })
    .catch(err => console.log(err)
    );
};

const args = process.argv.slice(2);

// Convert all files specified in args (could also traverse directories and convert all files)
for (filename of args) {
  console.log(filename);
  convert(filename);

}