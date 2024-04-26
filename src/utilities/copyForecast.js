import { useCopyToClipboard } from "../wrappers/index.js";

const copyToClipboard = useCopyToClipboard();

export function copyForecast() {
  const output1 = document.getElementById('output1').innerText;
  const output2 = document.getElementById('output2').innerText;

  copyToClipboard(output1 + output2);
}
