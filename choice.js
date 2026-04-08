document.getElementById('tampilkanBTN').onclick=function(){

var nama=document.getElementById('nama').value.trim();
if(nama===""){
nama="(nama harus di isi)";
}

var kelas=document.getElementById('kelas').value.trim();
if(kelas===""){
kelas="(kelas harus di isi)";
}

var umur="";
var u=document.getElementsByName('umur');
for(var i=0;i<u.length;i++){
if(u[i].checked){
umur=u[i].value;
break;
}
}
if(umur===""){
umur="(pilih umur)";
}

var gender="";
var radios=document.getElementsByName('gender');
for(var i=0;i<radios.length;i++){
if(radios[i].checked){
gender=radios[i].value;
break;
}
}
if(gender===""){
gender="(mohon masukan jenis kelamin)";
}

var tingkat="";
var t=document.getElementsByName('tingkat');
for(var i=0;i<t.length;i++){
if(t[i].checked){
tingkat=t[i].value;
break;
}
}
if(tingkat===""){
tingkat="(pilih tingkatan)";
}

var setuju=document.getElementById('setuju').checked ? "ya":"tidak";

var hasilText="nama: " + nama +
"\nkelas: " + kelas +
"\numur: " + umur +
"\njenis kelamin: " + gender +
"\ntingkatan: " + tingkat +
"\nsetuju: " + setuju;

document.getElementById('hasil').innerText=hasilText;

}