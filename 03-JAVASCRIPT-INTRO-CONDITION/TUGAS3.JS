/* Soal 1 Latihan Membuat Variabel dan Valuenya */
let namaLengkap = "Syaeful Annas";
console.log(namaLengkap);

/*Soal 2 Latihan Penggabungan Variabel */
let word = "Javascript";
let second = "is";
let third = "awesome";

let outputGabunganVariable =  word + " " + second+ " " + third;
console.log(outputGabunganVariable)

/* Soal 3 Latihan Penggabungan Variabel Menggunakan Template Literals */

let hello = "Hello ";
let world = "World!!";

let output = `${hello} ${world}`;
console.log(output);

/* Soal 4 Latihan Mengubah Tipe Data*/
let panjangPersegiPanjang = parseInt("8");
let lebarPersegiPanjang = parseInt("5");


let kelilingPersegiPanjang = 2 *  ( panjangPersegiPanjang + lebarPersegiPanjang);
console.log(kelilingPersegiPanjang);

/* Soal 5 Latihan Mengurai Kalimat*/
let senteces = "wah javascript itu keren sekali";

let firstWords = senteces.substring(0, 3)
let secondWords = senteces.substring(3, 14)
let thirdWords = senteces.substring(14, 18)
let fourthWords = senteces.substring(18, 25)
let fifthWords = senteces.substring(25, 32)



console.log("Kata Pertama : " + firstWords)
console.log("Kata Kedua : " + secondWords)
console.log("Kata Ketiga : " + thirdWords)
console.log("Kata Kempat : " + fourthWords)
console.log("Kata Kelima : " + fifthWords)

/* Soal 6 Akses karakter dalam string*/
var sentence = "I am going to be React JS Developer";

var exampleFirstWord = sentence[0];
var exampleSecondWord = sentence[2] + sentence[3];
var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9]; 
var fourthWord = sentence[11]  + sentence[12] ;
var fifthWord = sentence[14] + sentence[15];
var sixthWord = sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21]; 
var seventhWord = sentence[23] + sentence[24];
var eighthWord = sentence[26] + sentence[27] + sentence[28] + sentence[29] + sentence[30] + sentence[31] + sentence[32] + sentence[33] + sentence[34];

console.log("First Word: " + exampleFirstWord);
console.log("Second Word: " + exampleSecondWord);
console.log("Third Word: " + thirdWord);
console.log("Fourth Word: " + fourthWord);
console.log("Fifth Word: " + fifthWord);
console.log("Sixth Word: " + sixthWord);
console.log("Seventh Word: " + seventhWord);
console.log("Eighth Word: " + eighthWord);

/* Soal 7 Latihan Mengambil Sebuah Kalimat */
let txt = "I can eat bananas all day";
let hasil = txt.slice(10, -8);

console.log(hasil);

/* Soal 8 Membuat Kondisi Sederhana*/
var nilaiDoe = 50;
if (nilaiDoe > 80) {
  console.log("A");
} else if (nilaiDoe > 70 && nilaiDoe < 80) {
  console.log("B");
} else if (nilaiDoe > 60 && nilaiDoe < 70) {
  console.log("C");
} else if (nilaiDoe > 50 && nilaiDoe < 60) {
  console.log("D");
}else {
     console.log("E");
}

/* Soal 10 Conditional Tipe Ternary Operator */
let angka = 2;
angka === 2 ? console.log("Angka nya 2") : console.log("Bukan Angka 2");

/* Soal 10 Conditional Tipe Switch Case*/
var traffic_lights = "red";

switch(traffic_lights){
     case "red" : 
     console.log("Berhenti");
     break
     case "yellow" :
     console.log("Hati-hati");
     break
     case "green":
     console.log("Berjalan");
     break
     default :
     console.log("Default")
}