// Works with the ttf2woff2 NPM package, NOT with the currently installed wawoff2 package!

// The ttf2woff2 is by far the most used package with Emscripten build fallback (works with
// JS), but was really slow. Took a minimum of 18 sec. to compress. Found the less used but
// much faster wawoff2 package instead which uses Web Assembly.

import { readFileSync, writeFileSync } from 'node:fs';
import convert from 'ttf2woff2';

const args = process.argv.slice(2); // Remove first two arguments (node and script name)

let inputFile = 'src/assets/fonts/ttf/OpenSans-VariableFont_wdth,wght.ttf';
let outputFile = 'src/assets/fonts/OpenSans-VariableFont-Test.woff2';

args.forEach((arg, index) => {
    if (arg === '-i' || arg === '--input') {
        inputFile = args[index + 1];
    } else if (arg === '-o' || arg === '--output') {
        outputFile = args[index + 1];
    }
});

const input = readFileSync(inputFile);
const output = outputFile;

console.log('Compressing... hang tight!');

const startTime = new Date();
writeFileSync(output, convert(input));
const endTime = new Date();

const elapsedTime = (endTime - startTime) / 1000;

console.log(`Completed in ${elapsedTime} sec.`);
console.log('Done.');
