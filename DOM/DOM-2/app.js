let btns=document.querySelectorAll("button");
// console.dir(btn);
// btn.    onclick=function(){
//     alert("button was clicked")
// }

// let btns=document.querySelectorAll("button");
// for(btn of btns){
//     btn.onclick=sayhello;
// }
// function sayhello(){
//     alert("hello");
// }

for(btn  of btns){
    btn.addEventListener("click",sayhello);
    btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",saysurname);

}

function sayhello(){
    alert("hello");
}
function sayName(){
    alert("kishan");
}

function saysurname(){
    alert("gupta");
}