var tanya = true;
while (tanya) {
    //menbangkap pilihan pemain
    var p = prompt('pilih : gajah, semut, orang')

    //menangkap pilihan komputer
    //membangkitkann pilihan random
    var kom = Math.random();

    if (kom < 0.34) {
        kom = 'gajah';
    } else if (kom >= 0.34 && kom < 0.67) {
        kom = 'orang';
    } else {
        kom ='semut';
    }
    
    var hasil = '';
    //menentukan aturan
    if (p == kom) {
        hasil = 'SERI!';
    } else if (p == 'gajah') {
        hasil = (kom == 'orang' )? 'MENANG!' : 'KALAH!';
    } else if (p == 'orang') {
        hasil = (kom == 'gajah' )? 'KALAH!' : 'MENANG!';
    } else if (p == 'semut') {
        hasil = (kom == 'orang' )? 'KALAH!' : 'MENANG!';
    }
     else {
        hasil = 'memasukan pilihan yang salah!';
    }

    //tampilkan hasilnya
    alert('kamu memilih : ' + p + ' dan komputer memilih ' + kom + '\nMaka hasilnya : kamu ' + hasil);

    tanya = confirm('lagi?');
    
}

alert('terimaksih cuy udah main');