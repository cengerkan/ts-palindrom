function palindromMu(sayi: number): boolean {
  const yazi = sayi.toString();
  return yazi === yazi.split('').reverse().join('');
}

function enBuyukPalindromuBul(): number {
  let enBuyukPalindrom = 0;

  for (let i = 999; i >= 100; i--) {
    for (let j = i; j >= 100; j--) {
      const carpim = i * j;
      if (palindromMu(carpim) && carpim > enBuyukPalindrom) {
        enBuyukPalindrom = carpim;
      }
    }
  }

  return enBuyukPalindrom;
}

const sonuc = enBuyukPalindromuBul();
console.log("En büyük palindrom sayı:", sonuc);
