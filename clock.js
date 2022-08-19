function showTime(){

let hour=document.getElementById("hour");
let minute=document.getElementById("minute")
let second=document.getElementById("second");


let h=new Date().getHours();
let m=new Date().getMinutes();
let s=new Date().getSeconds();
if(h<10){
    h="0"+h;
}
else{
    h=h;
}
if(m<10){
    m=":"+"0"+m;
}
else{
    m=":"+m;
}
if(s<10){
    s=":"+"0"+s;
}
else{
    s=":"+s;
}
hour.innerHTML=h;
minute.innerHTML=m;
second.innerHTML=s;
}
let interval=setInterval(showTime,1000);
