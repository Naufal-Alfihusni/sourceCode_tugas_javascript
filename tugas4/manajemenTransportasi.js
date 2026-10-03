class pelanggan {
  constructor(nama, nomorTelepon, kendaraanDisewa) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = kendaraanDisewa;

    this.riwayatTransaksi = [];
  }

  catatTransaksi(kendaraanDisewa) {
    this.riwayatTransaksi.push({
      nama: this.nama,
      kendaraan: kendaraanDisewa,
    });
  }

  getPelanggan() {
    return `Nama: ${this.nama}, Nomor Telepon: ${this.nomorTelepon}, Kendaraan Disewa: ${this.kendaraanDisewa}`;
  }

  getRiwayatTransaksi() {
    for (let i = 0; i < this.riwayatTransaksi.length; i++) {
      console.log(
        `Transaksi ke-${i + 1}: ${this.riwayatTransaksi[i].nama} menyewa ${this.riwayatTransaksi[i].kendaraan}`,
      );
    }
  }
}

let daftarPenyewa = [
  new pelanggan("John Doe", "08123456789", "Mobil"),
  new pelanggan("John Doe", "08123456789", "Motor"),
  new pelanggan("Jane Smith", "08987654321", "Motor"),
];

function tampilkanPenyewa() {
  for (let i = 0; i < daftarPenyewa.length; i++) {
    console.log(daftarPenyewa[i].getPelanggan());
  }
}
tampilkanPenyewa();

daftarPenyewa[0].catatTransaksi("Mobil");
daftarPenyewa[0].catatTransaksi("Motor");
daftarPenyewa[2].catatTransaksi("Motor");

daftarPenyewa[0].getRiwayatTransaksi();
daftarPenyewa[2].getRiwayatTransaksi();
