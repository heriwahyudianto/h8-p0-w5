function totalDigitRekursif(angka) {
  // you can only write your code here!
  let strAngka = angka.toString();
  if (strAngka.length === 1 ){
    return angka;
  } else {
    let angkaBaru = '';
    for (i = 0; i < strAngka.length - 1; i++) {
      angkaBaru += strAngka[i];
    }
    return parseInt(strAngka[strAngka.length - 1]) + totalDigitRekursif(parseInt(angkaBaru));
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5