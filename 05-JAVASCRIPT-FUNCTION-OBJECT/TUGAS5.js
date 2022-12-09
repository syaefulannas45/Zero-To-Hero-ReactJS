/* Soal 1 ( Membuat Function dengan return String ) */
function cetakFunction() {
  return "Hallo nama saya Syaeful Annas";
}
console.log(cetakFunction());
/* Soal 2 ( Membuat Function dengan rumus penjumlahan didalamnya) */
function myFunction(angka1, angka2){
  return angka1 + angka2;
}
console.log(myFunction(20, 7));
/* Soal 3 ( Mengubah dalam bentuk arrow function ) */
const hello = () => {
  return "Hello";
}
console.log(hello());
/* soal 4 ( Memanggil key dalam sebuah object ) */
let obj = {
  nama: "John",
  umur: 22,
  bahasa: "Indonesia",
};
console.log(obj.bahasa);
/* soal 5 ( mengubah array menjadi object ) */
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992];
let objDaftarPeserta = {
  nama: arrayDaftarPeserta[0],
  Gender: arrayDaftarPeserta[1],
  hobi: arrayDaftarPeserta[2],
  TahunLahir: arrayDaftarPeserta[3],
};
console.log(objDaftarPeserta);
/* soal 6( Membuat sebuah array of object dan melakukan filter ) */
let data = [
  {
    nama: "Nanas",
    warna: "Kuning",
    adaBijinya: false,
    harga: 9000,
  },
  {
    nama: "Jeruk",
    warna: "Oranye",
    adaBijinya: true,
    harga: 8000,
  },
  {
    nama: "Semangka",
    warna: "Hijau & Merah",
    adaBijinya: true,
    harga: 1000,
  },
  {
    nama: "Pisang",
    warna: "Kuning",
    adaBijinya: false,
    harga: 5000,
  },
];
const filterData = data.filter(function (item) {
  return item.warna === "Kuning";
});
console.log(filterData);
/* Soal 7 ( Destructuring pada Object ) */
let phone = {
  name: "Galaxy Note 20",
  brand: "Samsung",
  year: 2020,
};
const { name, brand, year } = phone;
console.log(name, brand, year);

/* soal 8 ( Spred Operator pada Object ) */
let dataBukuTambahan = {
  penulis: "john doe",
  tahunTerbit: 2020,
};

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
};

let objOutput = { ...dataBukuTambahan, ...buku };
console.log(objOutput); 

/* soal 9 ( Penggunaan Function dan Object ) */
let mobil = {
  merk: "bmw",

  color: "red",

  year: 2002,
};

const functionObject = (param) => {
  return param;
};
console.log(functionObject(mobil));