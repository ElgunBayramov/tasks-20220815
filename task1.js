let listItems=document.querySelectorAll(".mytabs");
let tabs=document.querySelectorAll(".tab-content");

listItems.forEach(item => {
    item.addEventListener("click",function(){
    document.querySelector(".mytabs.active").classList.remove("active");
    item.classList.add("active");
    let targetTab=(item.getAttribute("data-target"));

    tabs.forEach(tab => {
        if(tab.getAttribute("data-content")==targetTab){
            tab.classList.remove("d-none");
        }
        else{
            tab.classList.add("d-none");
        }
    });
    });
});

