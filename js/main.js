var DOLLOR= "9433.34"
console.log("Dollor kursi: "+DOLLOR+"so'm")
var YEVRO="10354.03" 
console.log("Yevro kursi: "+YEVRO+"so'm");

var summa=Number(500*DOLLOR)+Number(250*DOLLOR)+Number(120*YEVRO)
console.log(summa);
a=prompt("Akasi qancha pulingiz bor:")
if (a>=summa) {
    alert("Oq yo'l akasi");
}else{
alert("Akasi, ozgina sabr qilish kerak bo'lar ekan.");
}