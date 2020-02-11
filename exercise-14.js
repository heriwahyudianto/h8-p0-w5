function changeVocals (str) {
  //code di sini
  if (str.length < 5) {
    return '';
  }
  let hashKecil = '';
  const KAMUS_KECIL = 'abefijopuv', 
  KAMUS_BESAR = 'ABEFIJOPUV';
  let isBesar = false;
  for (j = 0; j < str.length; j++) {
    isBesar = false;
    for (i = 0; i < KAMUS_KECIL.length - 1; i++) {
      if (str[j] === KAMUS_KECIL[i]) {
        hashKecil += KAMUS_KECIL[i + 1];
        isBesar = true; 
        break;
      }
    }
    if (!isBesar || str[j] === ' ') {   
      hashKecil += str[j];
    }
  }
  let hashBesar = '';
  let isKecil = false
  for (j = 0; j < hashKecil.length; j++) {
    isKecil = false;
    for (i = 0; i < KAMUS_BESAR.length - 1; i++) {
      if (hashKecil[j] === KAMUS_BESAR[i]) {
        hashBesar += KAMUS_BESAR[i + 1];
        isKecil = true; 
        break;
      }
    }
    if (!isKecil || hashKecil[j] === ' ') {      
      hashBesar += hashKecil[j];
    }
  }  
  //console.log(hashBesar);
  return hashBesar;   
}

function reverseWord (str) {
  //code di sini
  if (str === '') {
    return '';
  }
  let terbalik = '';
  for (i = str.length - 1; i >= 0; i--) {
    terbalik += str[i];
  }
  //console.log(terbalik);
  return terbalik;
}

function setLowerUpperCase (str) {
  //code di sini
  if (str === '') {
    return '';
  }
  let encript = '';
  const KAMUS_KECIL = 'abcdefghijklmnopqrstuvwxyz', 
  KAMUS_BESAR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (i = 0; i < str.length; i++) {
    for(j = 0; j < KAMUS_KECIL.length; j++ ) {
      if (str[i] === KAMUS_KECIL[j]) {       
        encript += KAMUS_BESAR[j];
      }
      if (str[i] === KAMUS_BESAR[j]) {
        encript += KAMUS_KECIL[j];
      }
    }
    if (str[i] === ' ') {
      encript += ' ';
    } 
  }
  return encript;
}

function removeSpaces (str) {
  //code di sini
  if (str === '') {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }
  let noSpace = '';
  for (i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      noSpace += str[i];
    }
  }
  return noSpace;
}

function passwordGenerator (name) {
  //code di sini
  let changeVocal = changeVocals(name);
  let reverseWords = reverseWord(changeVocal);
  let setLowerUpperCases = setLowerUpperCase(reverseWords);
  let removeSpace = removeSpaces(setLowerUpperCases);
  return removeSpace;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'