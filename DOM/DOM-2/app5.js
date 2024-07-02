let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
   
    let text= document.querySelector("#text");
    let pass= document.querySelector("#pass");
    //console.dir(inp);
    console.log(text.value);
    console.log(pass.value);

    alert(`Hi ${text.value} your passward is set to ${pass.value}`);
});