class LinkedList {
  constructor() {
    this.head = null;
    this.posisi = null;
    this.pendahulu = null;
  }

  isiData(nim, nama, nilai) {
    const ptrBaru = new Simpul(nim, nama, nilai);
    ptrBaru.berikutnya = this.head;
    this.head = ptrBaru;
  }

  tampilkan() {
    console.log("Isi Linked List");
    let penunjuk = this.head;
    while (penunjuk !== null) {
      penunjuk.infoData();
      penunjuk = penunjuk.berikutnya;
    }
  }

  findData(x) {
    this.posisi = this.head;
    this.pendahulu = null;
    let ditemukan = false;

    while (this.posisi !== null) {
      const nama = this.posisi.nama;
      if (nama.localeCompare(x) === 0) {
        ditemukan = true;
        break;
      }
      this.pendahulu = this.posisi;
      this.posisi = this.posisi.berikutnya;
    }

    return ditemukan;
  }

  hapusData(x) {
    this.pendahulu = null;
    this.posisi = this.head;
    const ditemukan = this.findData(x);

    if (!ditemukan) {
      console.log("Data yang akan dihapus tidak ditemukan");
      return false;
    }

    if (this.pendahulu === null) {
      this.head = this.head.berikutnya;
    } else if (this.posisi.berikutnya === null) {
      this.pendahulu.berikutnya = null;
    } else {
      this.pendahulu.berikutnya = this.posisi.berikutnya;
    }

    return true;
  }
}

class Simpul {
  constructor(nim, nama, nilai) {
    this.nim = nim;
    this.nama = nama;
    this.nilai = nilai;
    this.berikutnya = null;
  }

  infoData() {
    console.log(`NIM: ${this.nim}, Nama: ${this.nama}, Nilai: ${this.nilai}`);
  }
}

const mahasiswa = new LinkedList();

mahasiswa.isiData("20220040012", "Fajar", 90);
mahasiswa.isiData("20220040013", "Bahjatul", 85);
mahasiswa.isiData("20220040014", "Asrori", 100);
mahasiswa.hapusData("Hyuna");
mahasiswa.tampilkan();
