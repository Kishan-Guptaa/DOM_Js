//ASYNC Function

//async and await keyboard
async function greet(){
    //throw ("some random error");
    return ("hello");
}
greet()
    .then((result)=>{
        console.log("promise was resolved");
        console.log("  resuly was :",result);
    })
    .catch((err)=>{
        console.log("promise was rejected:",err);
    })

let demo=async()=>{
    return 5;
}
demo();


//await
function getnum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
}

async function demo1(){
    await getnum();
    await getnum();
    await getnum();
    await getnum();
    await getnum();
    getnum();
}