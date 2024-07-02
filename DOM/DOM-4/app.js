let h1=document.querySelector("h1");


function changecolor(color,delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color=color;
        if(nextColorChange) nextColorChange();
    },delay);
}
changecolor("red",1000, () =>{
    changecolor("orange",1000, ()=>{
        changecolor("blue",1000,()=>{
            changecolor("pink",1000);
        });
    });
});


//callback nesting-callback hell





// setTimeout(()=>{
//     h1.style.color='red';
// },1000);
// setTimeout(()=>{
//     h1.style.color='orange';
// },2000);
// setTimeout(()=>{
//     h1.style.color='purple';
// },3000);