function kaliTerusRekursif(angka) {
  // you can only write your code here!
  if (angka < 10) {
    return angka;
  } else {
    let strAngka = angka.toString();
    let kali = 1;
    for(i = 0; i < strAngka.length; i++) {
      kali *= parseInt(strAngka[i]);
    }
    return kaliTerusRekursif(kali);
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6