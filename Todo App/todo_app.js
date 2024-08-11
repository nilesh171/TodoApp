let add = document.querySelector("button");
let work = document.querySelector("input");
let ul =document.querySelector("ul");


add.addEventListener("click",function(){
    let item =document.createElement("li");
    item.innerText = work.value ;
    

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete")
  
    item.appendChild(delbtn);
    ul.appendChild(item);
    work.value ="";
}
)
ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let delbtns = event.target.parentElement;
        delbtns.remove();
       }
   
  
})
