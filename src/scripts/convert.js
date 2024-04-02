import { readFileSync, writeFileSync } from 'node:fs';
import { compress } from 'wawoff2';

const inputFile = 'src/assets/fonts/ttf/OpenSans-VariableFont_wdth,wght.ttf';
const outputFile = 'src/assets/fonts/OpenSans-VariableFont.woff2';

const input = readFileSync(inputFile);
const output = outputFile;

async function convert() {
  const startTime = new Date();

  const out = await compress(input);
  writeFileSync(output, out);

  const endTime = new Date();
  const elapsedTime = (endTime - startTime) / 1000;
  console.log(`Completed in ${elapsedTime} sec.`);
}

convert();
