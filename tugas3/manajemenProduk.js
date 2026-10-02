//array data awal produk toko
let produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },

  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },

  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 },
];

//fungsi untuk menambahkan produk baru
function tambahProduk(nama, harga, stok) {
  for (let i = 0; i < produkToko.length; i++) {
    if (produkToko[i].nama === nama) {
      console.log("Produk ini sudah tersedia di toko.");
      return;
    }
  }

  let newProduk = {
    id: produkToko.length + 1,
    nama: nama,
    harga: harga,
    stok: stok,
  };
  produkToko.push(newProduk);
}

//fungsi untuk  menghapus produk
function hapusProduk(id) {
  for (let i = 0; i < produkToko.length; i++) {
    if (produkToko[i].id === id) {
      produkToko.splice(i, 1);
      console.log("Produk berhasil dihapus.");
      return;
    }
  }
}

//fungsi untuk menampilkan daftar produk
function tampilanProduk() {
  for (let i = 0; i < produkToko.length; i++) {
    console.log(
      `ID: ${produkToko[i].id}, Nama: ${produkToko[i].nama}, Harga: ${produkToko[i].harga}, Stok: ${produkToko[i].stok}`,
    );
  }
}

//menjalankan fungsi
console.log("Daftar Produk Toko:");
tampilanProduk();

console.log("\nMenambahkan produk baru");

tambahProduk("Headset", 500000, 8);

console.log("Daftar Produk Toko:");

tampilanProduk();

console.log("\nMenghapus produk dengan ID");

hapusProduk(3);

tampilanProduk();
