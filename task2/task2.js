let calculate=document.querySelector(".button1");
let cleanUp=document.querySelector(".button2");
let wrapper=document.querySelector(".wrapper");



calculate.addEventListener("click", function(){
wrapper.innerHTML="";
let price=document.querySelector("#price");
let month=document.querySelector("#month");
let percent=document.querySelector("#percent");
let total=+price.value+(price.value*percent.value/100)*month.value;
if(price.value==0 || month.value==0 || percent.value==0){
    alert("Xanalar boş buraxıla bilməz!");
}
let newDate=new Date();
for (let index = 1; index <= month.value; index++) {
    let div=document.createElement("div");
    div.style.display="block";
    div.style.width="235px";
    div.style.border="1px solid gray"
    div.style.marginRight="15px";
    div.style.marginBottom="15px";
    div.style.padding="5px 0"
    let p=document.createElement("p");
    let newCalc=total/month.value;
    newCalc=Math.floor(newCalc);
    if(index==month.value){
        newCalc=total-((month.value-1)*newCalc);
    }
    p.innerHTML=`${newCalc}₼`;
    p.style.textAlign="center";
    div.append(p);
    let p2=document.createElement("p");
    p2.style.textAlign="center";
    newDate.setDate(newDate.getDate()+30);
    let nYear=newDate.getFullYear();
    let nMonth=newDate.getMonth()+1;
    let nDay=newDate.getDay();
    if(nMonth<10){
        nMonth="0"+nMonth;
    }
    if(nDay<10){
        nDay="0"+nDay;
    }
    let date=`${nDay}-${nMonth}-${nYear}`;
    p2.innerHTML=date;
    div.append(p2);
    wrapper.append(div);
}
let h3=document.createElement("h3");
h3.style.display="block";
h3.style.marginRight="1000px"
h3.innerHTML=`Toplam:${total}₼`;
wrapper.append(h3);
})

cleanUp.addEventListener("click", function(){
    wrapper.innerHTML="";   
})