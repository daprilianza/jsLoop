
//Exericise-1
let user = 1;
for (user; user<=100; user++){
    console.log('User ke-'+user);
}

//Exercise-2
for (let hitung = 0; hitung <= 20; hitung += 2) {
    console.log(hitung)
}

//Exercise-3
for (let a = 0; a <= 20; a++) {
    if((a%2) === 0) {  
        console.log (a, 'Genap')
    } 
    else {console.log (a, 'Ganjil')
    } 
}  
//Exercise-4
let data1 = true
while(data1) {
    data1 = confirm ("Apakah anda mau mengulang?")
} alert ("Terima kasih, selamat datang kembali")

//Exercise-5
let y = 'Impact Byte'
while (prompt('Sebutkan kepanjangan dari IB!') !== y) {
    alert('Jawaban anda salah')
}
alert('Jawaban anda benar')




