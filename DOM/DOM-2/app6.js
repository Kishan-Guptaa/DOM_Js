//change event  - the change event occurs when the value  of an element
// has been changed (only  works on <input>,<textarea> and <select>  element);


let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
   
});

let user=document.querySelector("#text");
user.addEventListener("change",function(){
    console.log("change event");
    console.log("final value= ",this.value);
})
// the input event fires when the value of an <input>, <select> or <textarea> element has been changed
user.addEventListener("input",function(){
    console.log("input event");
    console.log("final value= ",this.value);
})