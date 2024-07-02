let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
   let fact=  await getFacts();
   console.log(fact);   
   let p=document.querySelector("#result");
   
})


let url="https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res=await axios.get(url);
        
        return res.data.fact;

    }
    catch(e){
        console.log("erroe -",e);
        return "No Fact Found";
    }
    console.log("bye");
}




// fetch(url)
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data)=>{
//         console.log("data1 =",data.fact);

//         return fetch(url);
//     })
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data)=>{
//         console.log("data2 =",data.fact);
//     })
//     .catch((err)=>{
//         console.log("error =",err);
//     });
