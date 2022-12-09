/* Soal 1 (Membuat Looping Sederhana) */
for (let i = 1; i < 10; i++) {
  console.log();
}
/* Soal 2 (Membuat Looping Dengan Conditional Angka Ganjil) */
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

/* Soal 3 (Membuat Looping Dengan Conditional Angka Genap) */
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
/* Soal 4 (Mengakses Element Array) */
let array1 = [1, 2, 3, 4, 5, 6];
console.log(array1[5]);

/* Soal 5 (Mengurutkan Element Array) */
let array2 = [5, 2, 4, 1, 3, 5];
array2.sort(function (a, b) {
  return a - b;
});
console.log(array2);

/* Soal 6 (Mengeluarkan Element Array) */
let array3 = ["Selamat","Anda","Melakukan","Perulangan","Array","Dengan","For"]
for(let i = 0 ; i < array3.length ; i++){
  console.log(array3[i]);
}

/* Soal 7 (Mengeluarkan Element Array dan Dengan Kondisi) */
let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array4.length; i++) {
  if (i % 2 === 0) {
    console.log(array1[i]);
  }
}
/* Soal 8 (Menggabungkan Element Menjadi String) */
let kalimat = ["saya", "sangat", "senang", "belajar", "javascript"];
let kalimat2 = kalimat.join(" ");
console.log(kalimat2);

/* soal 9 ( Menambahkan Element Array ) */
var sayuran = [];
sayuran.push("Kangkung", "Bayam", "Bancis", "Kubis", "Timun", "Seledri", "Tauge");
console.log(sayuran);