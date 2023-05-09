// module biodata.js

const nama = "Nama: Maman Budiman";
const tempatLahir = "Tempat Lahir: Cianjur";
const tanggalLahir = "Tanggal Lahir: 8 Agustus 2000";
const alamat = "Alamat: Jl. Neptunus No. 90.";

function tampilBiodata() {
    console.log(nama);
    console.log(tempatLahir);
    console.log(tanggalLahir);
    console.log(alamat);
}

module.exports = {
    tampilBiodata,
};
