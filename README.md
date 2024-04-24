|  | Pemrograman Berbasis Framework 2024 |
|--|--|
| NIM |  2341728027|
| Nama |  Andi Fadhil Akbar Syahbana |
| Kelas | TI - 3A |

Praktikum 1

Setelah code dijalankan, tombol button akan keluar seperti berikut :
![week4](image,vid/week%204,%201.png)
begitu di klik tombol, pop up pesan akan keluar :
![week4](image,vid/week%204,%201,1.png)
berikut penggunaan alternatif :
![week4](image,vid/week%204,%201,1,2.png)

Praktikum 2
Selanjutnya ialah penggunaan tombol " Pesan " dengan penggunaan parameter baru pada page.tsx seperti berikut :
![week4](image,vid/week%204,%202.png)

Praktikum 3
modifikasi button.tsx dan page.tsx dengan penggunaan dua tombol dengan parameter child dan parent Element :

![week4](image,vid/week%204,%203.png)

![week4](image,vid/week%204,%203,1.png)

![week4](image,vid/week%204,%203,1,1.png)

![week4](image,vid/week%204,%203,1,1,2.png)

selanjutnya penambahan e.stopPropagation untuk menghentikan propagation :
![week4](image,vid/week%204,%203,1,1,3.png)

Praktikum 4 
Penggunaan button baru yaitu artikel selanjut nya, dengan menekan tombol " Artikel selanjutnya " page akan berganti 1-5
![week4](image,vid/week%204,%204.png)
![week4](image,vid/week%204,%204,1.png)
![week4](image,vid/week%204,%204,2.png)
![week4](image,vid/week%204,%204,3.png)
![week4](image,vid/week%204,%204,4.png)

Berikut penyelesaian masalah pada saat klik ke-6 dengan memodifikasi setIndex pada gallery.tsx 

Dan penambahan Button " Artikel Sebelumnya "
![week4](image,vid/week%204,%204,5.png)

Praktikum 5
Pada bagian ini kita diminta memasukan isi pesan pada form dan jika pesan yang dimasukan sesuai maka akan keluar text
![week4](image,vid/week%204,%204,6.png)
Jika submit benar :

![week4](image,vid/week%204,%204,7.png)

Lalu pada bagian form2 dengan pengisiian nama depan dan belakang sehingga menampilkan hasil yang benar dan tepat
![week4](image,vid/week%204,%204,8.png)
Apa perbedaan dari fungsi Form_2 yang pertama dengan yang kedua?
Perbedaan dari fungsi nya yaitu menggunakan useState untuk mengatur state dari firstName, lastName, dan fullName, lalu pada Form_2 yang kedua kita menghapus useState pada fullName karena menyebabkan state redundan dan bisa membuat kesalahan/bug pada aplikasi react/nextjs yang kita buat.

Kenapa perlu menghapus state fullName? Apa keuntungannya?
Karena fullName adalah state dari firstName dan lastName, maka kita tidak perlu menyimpan nya didalam state sehinngga dapat secara langsung.
Lalu keuntungannya untuk memastikan bahwa fullName selalu sinkron dengan firstName dan lastName

Praktikum 6

Pada halaman ini terdapat panel aktif yang dapat diperluas dengan meng-klik tampilkan sehingga seluruh text dapat ditampilkan

![week4](image,vid/week%204,%204,9.png)
![week4](image,vid/week%204,%204,10.png)

Lalu pada list kontak yang dibuat sebagai komponen baru seperti berikut :
![week4](image,vid/week%204,%204,11.png)

Tujuan dari penulisan key={to.email} pada <Chat key={to.email} contact={to} /> seperti yang diminta adalah untuk memberikan React cara yang lebih efisien untuk mengidentifikasi setiap komponen dalam daftar yang diberikan.

Lalu Props key digunakan untuk membantu dalam proses reconcillation saat merender daftar komponen dansetiap komponen yang ada dalam daftar tersebut harus memiliki key yang unik dan berbeda