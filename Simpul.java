
public class Simpul {
    String NIM;
    String NAMA;
    int NILAI;
    Simpul Berikutnya;
    
    public Simpul(String xNIM, String xNAMA, int xNILAI){
        NIM = xNIM;
        NAMA = xNAMA;
        NILAI = xNILAI;
        Berikutnya = null;
    }
    public void infoData(){
        System.out.println("NIM : " + NIM);
        System.out.println("NAMA : " + NAMA);
        System.out.println("NILAI : " + NILAI);
        System.out.println("Pointe Next " + Berikutnya);
        System.out.println("-------------------------");
    }
    public static void main(String[] args) {
        simpul data1 = new simpul("20220040012", "Fajar", 90);
        data1.infoData();

        simpul data2 = new simpul("20220040013", "Bahjatul", 85);
        data2.infoData();
    }
}
