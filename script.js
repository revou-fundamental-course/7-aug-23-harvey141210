function luasSegitiga()
{
    let tinggi = document.getElementById("tinggi-input").value;
    let alas = document.getElementById("alas-input").value;
    let hasil = tinggi*alas*0.5;
    document.getElementById("result").innerHTML=hasil
}

