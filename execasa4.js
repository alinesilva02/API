
let palavra = 'rayka';
let i = 0;
let j = palavra.length - 1;
let pali = true;
while (i < palavra.length && j >= 0) {
  console.log(j);
  console.log(palavra[i]);
  console.log(palavra[j]);
  if (palavra[i] === palavra[j]) {
    i++;
    j--;
  } else {
    console.log('A palavra ' + palavra + ' não é palindrono');
    break;
  }
}
console.log('A palavra' + palavra + ' é palindrono');