const submit = document.getElementById("submit");
submit.addEventListener("click", hitung);

function hitung() {
  const kode = document.getElementById("kode").value;
  const banyakBarang = parseInt(document.getElementById("banyak").value);

  let harga = 0;
  switch (kode) {
    case "001":
      harga = 10000;
      break;
    case "002":
      harga = 20000;
      break;
    case "003":
      harga = 30000;
      break;
    default:
      window.alert("Kode barang tidak Tersedia!");
      return;
  }

  const totalHarga = harga * banyakBarang;
  window.alert("Total pembayaran anda : " + totalHarga);

  const uangDibayarkan = parseFloat(window.prompt("masukkan uang user:"));
  const kembalian = uangDibayarkan - totalHarga;

  if (kembalian >= 0) {
    window.alert("kembalian anda adalah: " + kembalian);
  } else if (uangDibayarkan < totalHarga) {
    window.alert("Uang yang dibayarkan kurang!");
  } else {
    window.alert("user Membatalkan Pesanan!");
  }
}
