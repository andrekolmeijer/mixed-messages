const { readFileSync, writeFileSync } = require('fs');
const { compress } = require('wawoff2');

const inputFile = 'src/assets/fonts/ttf/OpenSans-VariableFont_wdth,wght.ttf';
const outputFile = 'src/assets/fonts/OpenSans-VariableFont-Test.woff2';

const input = readFileSync(inputFile);
const output = outputFile;

async function compressAndWrite() {
  const startTime = new Date();

  const out = await compress(input);
  writeFileSync(output, out);

  const endTime = new Date();
  const elapsedTime = (endTime - startTime) / 1000;
  console.log(`Completed in ${elapsedTime} sec.`);
}

compressAndWrite();
